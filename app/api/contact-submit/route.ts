import { NextRequest, NextResponse } from 'next/server'
import { sendContactNotificationEmail } from '@/lib/send-contact-email'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactFormType = 'courses' | 'partnerships'

function isContactFormType(value: unknown): value is ContactFormType {
  return value === 'courses' || value === 'partnerships'
}

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 })
    }

    const formType = body.formType
    if (!isContactFormType(formType)) {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
    }

    const timestamp = new Date().toISOString()
    const submissionId = `CNT-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`

    if (formType === 'courses') {
      const name = String(body.name || '').trim()
      const email = String(body.email || '').trim()
      const phone = String(body.phone || '').trim()
      const message = String(body.message || '').trim()

      const missingFields: string[] = []
      if (!name) missingFields.push('name')
      if (!email) missingFields.push('email')

      if (missingFields.length > 0) {
        return NextResponse.json(
          { error: `Missing required fields: ${missingFields.join(', ')}` },
          { status: 400 }
        )
      }

      if (!EMAIL_REGEX.test(email)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
      }

      await sendContactNotificationEmail({
        formType: 'courses',
        submissionId,
        timestamp,
        name,
        email: email.toLowerCase(),
        phone,
        message,
      })
    } else {
      const name = String(body.name || '').trim()
      const workEmail = String(body.workEmail || '').trim()
      const organization = String(body.organization || '').trim()
      const role = String(body.role || '').trim()
      const partnershipType = String(body.partnershipType || '').trim()
      const website = String(body.website || '').trim()
      const description = String(body.description || '').trim()

      const missingFields: string[] = []
      if (!name) missingFields.push('name')
      if (!workEmail) missingFields.push('workEmail')
      if (!organization) missingFields.push('organization')
      if (!role) missingFields.push('role')
      if (!partnershipType) missingFields.push('partnershipType')
      if (!website) missingFields.push('website')
      if (!description) missingFields.push('description')

      if (missingFields.length > 0) {
        return NextResponse.json(
          { error: `Missing required fields: ${missingFields.join(', ')}` },
          { status: 400 }
        )
      }

      if (!EMAIL_REGEX.test(workEmail)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
      }

      await sendContactNotificationEmail({
        formType: 'partnerships',
        submissionId,
        timestamp,
        name,
        workEmail: workEmail.toLowerCase(),
        organization,
        role,
        partnershipType,
        website,
        description,
      })
    }

    return NextResponse.json({
      success: true,
      submissionId,
      message: 'Inquiry submitted successfully',
    })
  } catch (error: unknown) {
    console.error('Contact submission error:', error)

    const message = error instanceof Error ? error.message : 'Failed to submit inquiry'
    const isConfigError = message === 'EMAIL_NOT_CONFIGURED'

    return NextResponse.json(
      {
        error: isConfigError
          ? 'Contact form is temporarily unavailable. Please email academy.ugenix@gmail.com.'
          : 'Failed to send your inquiry. Please try again or email academy.ugenix@gmail.com.',
      },
      { status: isConfigError ? 503 : 500 }
    )
  }
}
