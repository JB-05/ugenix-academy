import { NextRequest, NextResponse } from 'next/server'

// Request timeout: 30 seconds
const REQUEST_TIMEOUT = 30000

export async function POST(request: NextRequest) {
  try {
    // Parse request body with error handling
    let body
    try {
      body = await request.json()
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const {
      name,
      courseYear,
      branch,
      phone,
      email,
      paymentScreenshotUrl,
    } = body

    // Validate required fields with specific messages
    const missingFields = []
    if (!name || name.trim() === '') missingFields.push('name')
    if (!courseYear || courseYear.trim() === '') missingFields.push('courseYear')
    if (!branch || branch.trim() === '') missingFields.push('branch')
    if (!phone || phone.trim() === '') missingFields.push('phone')
    if (!email || email.trim() === '') missingFields.push('email')
    if (!paymentScreenshotUrl || paymentScreenshotUrl.trim() === '') missingFields.push('paymentScreenshotUrl')

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Generate submission ID (timestamp + random string)
    const timestamp = new Date().toISOString()
    const submissionId = `SUB-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`

    // Get Google Apps Script Web App URL from environment
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL

    if (!scriptUrl) {
      throw new Error('SUBMIT_NOT_CONFIGURED')
    }

    // Validate URL format
    try {
      new URL(scriptUrl)
    } catch {
      throw new Error('Invalid Google Apps Script URL format')
    }

    // Get secret token from environment
    const secretToken = process.env.GOOGLE_SCRIPT_SECRET_TOKEN

    if (!secretToken) {
      throw new Error('SUBMIT_NOT_CONFIGURED')
    }

    // Prepare the row data according to the headers
    const rowData = {
      secretToken, // Secret token for authentication
      timestamp, // Timestamp
      name: name.trim(), // Full Name
      courseYear: courseYear.trim(), // Course Year
      branch: branch.trim(), // Branch
      phone: phone.trim(), // Phone Number
      email: email.trim().toLowerCase(), // Email Address (normalized)
      paymentScreenshotUrl: paymentScreenshotUrl.trim(), // Payment Screenshot URL
      submissionId, // Submission ID
    }

    // Send data to Google Apps Script with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      } catch (error) {
        throw new Error('Invalid JSON response from Google Apps Script')
      }

      // Validate response structure
      if (result && result.success === false) {
        throw new Error(result.error || 'Google Sheets returned an error')
      }

      return NextResponse.json({
        success: true,
        submissionId,
        message: 'Registration submitted successfully',
      })
    } catch (error: any) {
      clearTimeout(timeoutId)

      if (error.name === 'AbortError') {
        throw new Error('Request timeout: Google Apps Script took too long to respond')
      }
      throw error
    }
  } catch (error: any) {
    console.error('Google Sheets submission error:', error)

    // Don't expose internal config details in production
    const isConfigError = error.message === 'SUBMIT_NOT_CONFIGURED'
    const errorMessage = isConfigError
      ? 'Registration is temporarily unavailable. Please try again later.'
      : (error.message || 'Failed to submit registration')

    return NextResponse.json(
      { error: errorMessage },
      { status: isConfigError ? 503 : 500 }
    )
  }
}
