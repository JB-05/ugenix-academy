import { NextRequest, NextResponse } from 'next/server'
import { verifyRazorpaySignature } from '@/lib/razorpay'

const REQUEST_TIMEOUT = 30000

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 })
    }

    const {
      name,
      courseYear,
      branch,
      phone,
      email,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = body

    const missingFields: string[] = []
    if (!name?.trim()) missingFields.push('name')
    if (!courseYear?.trim()) missingFields.push('courseYear')
    if (!branch?.trim()) missingFields.push('branch')
    if (!phone?.trim()) missingFields.push('phone')
    if (!email?.trim()) missingFields.push('email')
    if (!razorpayOrderId?.trim()) missingFields.push('razorpayOrderId')
    if (!razorpayPaymentId?.trim()) missingFields.push('razorpayPaymentId')
    if (!razorpaySignature?.trim()) missingFields.push('razorpaySignature')

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const isValidPayment = verifyRazorpaySignature(
      razorpayOrderId.trim(),
      razorpayPaymentId.trim(),
      razorpaySignature.trim()
    )

    if (!isValidPayment) {
      return NextResponse.json({ error: 'Payment verification failed' }, { status: 400 })
    }

    const scriptUrl = process.env.GOOGLE_WORKSIM_SCRIPT_URL || process.env.GOOGLE_SCRIPT_URL
    const secretToken =
      process.env.GOOGLE_WORKSIM_SCRIPT_SECRET_TOKEN || process.env.GOOGLE_SCRIPT_SECRET_TOKEN

    if (!scriptUrl || !secretToken) {
      throw new Error('SUBMIT_NOT_CONFIGURED')
    }

    try {
      new URL(scriptUrl)
    } catch {
      throw new Error('Invalid Google Apps Script URL format')
    }

    const timestamp = new Date().toISOString()
    const submissionId = `WS-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`

    const rowData = {
      secretToken,
      timestamp,
      program: 'Ugenix WorkSim',
      name: name.trim(),
      courseYear: courseYear.trim(),
      branch: branch.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      paymentMethod: 'Razorpay',
      razorpayOrderId: razorpayOrderId.trim(),
      razorpayPaymentId: razorpayPaymentId.trim(),
      submissionId,
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rowData),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        let errorText = 'Unknown error'
        try {
          errorText = await response.text()
        } catch {
          errorText = `HTTP ${response.status}: ${response.statusText}`
        }
        throw new Error(`Google Sheets error: ${errorText}`)
      }

      let result
      try {
        result = await response.json()
      } catch {
        throw new Error('Invalid JSON response from Google Apps Script')
      }

      if (result && result.success === false) {
        throw new Error(result.error || 'Google Sheets returned an error')
      }

      return NextResponse.json({
        success: true,
        submissionId,
        message: 'WorkSim registration submitted successfully',
      })
    } catch (error: unknown) {
      clearTimeout(timeoutId)
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout: Google Apps Script took too long to respond')
      }
      throw error
    }
  } catch (error: unknown) {
    console.error('WorkSim submission error:', error)

    const isConfigError = error instanceof Error && error.message === 'SUBMIT_NOT_CONFIGURED'
    const errorMessage = isConfigError
      ? 'Registration is temporarily unavailable. Please try again later.'
      : error instanceof Error
        ? error.message
        : 'Failed to submit registration'

    return NextResponse.json({ error: errorMessage }, { status: isConfigError ? 503 : 500 })
  }
}
