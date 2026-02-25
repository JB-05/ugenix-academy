import { NextRequest, NextResponse } from 'next/server'

const REQUEST_TIMEOUT = 30000 // 30 seconds

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const {
      teamName,
      teamLeadName,
      year,
      course,
      phone,
      email,
      numberOfMembers,
      members,
      problemStatement,
      proposedSolution,
      stage,
      progressSoFar,
    } = body || {}

    const missingFields: string[] = []
    if (!teamName || teamName.trim() === '') missingFields.push('teamName')
    if (!teamLeadName || teamLeadName.trim() === '') missingFields.push('teamLeadName')
    if (!year || year.trim() === '') missingFields.push('year')
    if (!course || course.trim() === '') missingFields.push('course')
    if (!phone || phone.trim() === '') missingFields.push('phone')
    if (!email || email.trim() === '') missingFields.push('email')
    const parsedNumberOfMembers = Number(numberOfMembers)

    if (
      numberOfMembers === undefined ||
      numberOfMembers === null ||
      Number.isNaN(parsedNumberOfMembers) ||
      parsedNumberOfMembers < 2 ||
      parsedNumberOfMembers > 5
    ) {
      missingFields.push('numberOfMembers')
    }
    if (!problemStatement || problemStatement.trim() === '') missingFields.push('problemStatement')
    if (!proposedSolution || proposedSolution.trim() === '') missingFields.push('proposedSolution')
    if (!stage || stage.trim() === '') missingFields.push('stage')
    if (!progressSoFar || progressSoFar.trim() === '') missingFields.push('progressSoFar')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(String(email))) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const additionalMembersCount = parsedNumberOfMembers - 1
    if (additionalMembersCount > 0) {
      if (!Array.isArray(members) || members.length !== additionalMembersCount) {
        missingFields.push('members')
      } else {
        const invalidMember = members.some((m: any) => {
          if (!m) return true
          if (!m.name || String(m.name).trim() === '') return true
          if (!m.courseYear || String(m.courseYear).trim() === '') return true
          if (!m.email || String(m.email).trim() === '') return true
          if (!m.phone || String(m.phone).trim() === '') return true
          if (!emailRegex.test(String(m.email))) return true
          return false
        })

        if (invalidMember) {
          missingFields.push('members')
        }
      }
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing or invalid required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    const submissionId = `VISTA-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`

    const scriptUrl = process.env.GOOGLE_VISTA_SCRIPT_URL
    if (!scriptUrl) {
      throw new Error('SUBMIT_NOT_CONFIGURED')
    }

    try {
      new URL(scriptUrl)
    } catch {
      throw new Error('Invalid Google Apps Script URL format')
    }

    const secretToken = process.env.GOOGLE_VISTA_SCRIPT_SECRET_TOKEN
    if (!secretToken) {
      throw new Error('SUBMIT_NOT_CONFIGURED')
    }

    const rowData = {
      secretToken,
      timestamp,
      submissionId,
      teamName: String(teamName).trim(),
      teamLeadName: String(teamLeadName).trim(),
      year: String(year).trim(),
      course: String(course).trim(),
      phone: String(phone).trim(),
      email: String(email).trim().toLowerCase(),
      numberOfMembers: parsedNumberOfMembers,
      members: Array.isArray(members)
        ? members.map((m: any, index: number) => ({
            index: index + 2, // Member 2,3,...
            name: String(m.name || '').trim(),
            courseYear: String(m.courseYear || '').trim(),
            email: String(m.email || '').trim().toLowerCase(),
            phone: String(m.phone || '').trim(),
          }))
        : [],
      problemStatement: String(problemStatement).trim(),
      proposedSolution: String(proposedSolution).trim(),
      stage: String(stage).trim(),
      progressSoFar: String(progressSoFar).trim(),
    }

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

      let result: any
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
        message: 'Idea submission received successfully',
      })
    } catch (error: any) {
      clearTimeout(timeoutId)

      if (error.name === 'AbortError') {
        throw new Error('Request timeout: Google Apps Script took too long to respond')
      }
      throw error
    }
  } catch (error: any) {
    console.error('V.I.S.T.A. submission error:', error)

    const isConfigError = error.message === 'SUBMIT_NOT_CONFIGURED'
    const errorMessage = isConfigError
      ? 'Idea submissions are temporarily unavailable. Please try again later.'
      : (error.message || 'Failed to submit idea')

    return NextResponse.json(
      { error: errorMessage },
      { status: isConfigError ? 503 : 500 }
    )
  }
}

