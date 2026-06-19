'use client'

import { useState, useCallback, useEffect, useMemo, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { VISTA_REGISTRATION_ENDED } from '@/lib/constants'
import IedcCekLogo from './src/iedc.cek-black (1).png'
import CollegeLogo from './src/college logo.png'

const REQUEST_TIMEOUT = 30000 // 30 seconds
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/BdxJMFRILaXGnJ8fJgjbc4?mode=gi_t'

const GeometricShapes = memo(() => (
  <>
    <div
      className="absolute left-0 top-32 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-orange-500/25 opacity-40 sm:opacity-50"
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
    />
    <div className="absolute right-0 top-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-orange-500/15 opacity-35 sm:opacity-45 rotate-45" />

    <div
      className="hidden lg:block absolute left-0 top-20 w-80 h-80 bg-orange-500/30"
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
    />
    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rotate-45" />
    <div
      className="hidden lg:block absolute right-0 top-32 w-72 h-72 bg-bg-850"
      style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
    />
    <div
      className="hidden lg:block absolute right-0 bottom-20 w-96 h-96 bg-bg-800"
      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
    />
  </>
))
GeometricShapes.displayName = 'VistaGeometricShapes'

const SuccessScreen = memo(() => (
  <div className="min-h-screen bg-bg-950 pt-24 sm:pt-28 md:pt-32">
    <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      <div className="dark-card relative p-8 text-center lg:p-12">
        <div className="mb-6">
          <svg className="w-16 h-16 text-orange-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-semibold mb-4 text-text-primary">Submission Received</h1>
        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
          Thank you for submitting your idea to V.I.S.T.A. We&apos;ll review your entry and share further updates with your team.
        </p>
        <p className="text-base text-text-secondary mb-8 leading-relaxed">
          To stay updated about event schedules and announcements, please join the official WhatsApp group.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-text-primary font-medium hover:bg-[#D45600] transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-950"
          >
            Join WhatsApp Group
          </Link>
          <Link
            href="/"
            className="btn-ghost-orange px-8 py-3"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  </div>
))
SuccessScreen.displayName = 'VistaSuccessScreen'

type TeamMember = {
  name: string
  courseYear: string
  email: string
  phone: string
}

type FormData = {
  teamName: string
  teamLeadName: string
  year: string
  course: string
  phone: string
  email: string
  numberOfMembers: string
  members: TeamMember[]
  problemStatement: string
  proposedSolution: string
  stage: string
  progressSoFar: string
}

export default function VistaPage() {
  const router = useRouter()

  useEffect(() => {
    if (VISTA_REGISTRATION_ENDED) {
      router.replace('/')
    }
  }, [router])

  if (VISTA_REGISTRATION_ENDED) {
    return (
      <div className="min-h-screen bg-bg-950 flex items-center justify-center pt-24">
        <p className="text-text-secondary">Redirecting...</p>
      </div>
    )
  }

  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    teamLeadName: '',
    year: '',
    course: '',
    phone: '',
    email: '',
    numberOfMembers: '',
    members: [],
    problemStatement: '',
    proposedSolution: '',
    stage: '',
    progressSoFar: '',
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateRequiredText = useCallback((value: string, fieldName: string): string => {
    if (!value.trim()) return `${fieldName} is required`
    if (value.trim().length < 2) return `${fieldName} must be at least 2 characters`
    if (value.trim().length > 500) return `${fieldName} must be less than 500 characters`
    return ''
  }, [])

  const validatePhone = useCallback((phone: string): string => {
    const value = phone.trim()
    if (!value) return 'Phone number is required'
    // Only 10–15 digits, no +91 or country code prefix
    const phoneRegex = /^[0-9]{10,15}$/
    if (!phoneRegex.test(value)) {
      return 'Please enter digits only (no +91 or country code)'
    }
    if (value.length < 10) return 'Phone number must be at least 10 digits'
    return ''
  }, [])

  const validateEmail = useCallback((email: string): string => {
    if (!email.trim()) return 'Email address is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email address'
    return ''
  }, [])

  const validateNumberOfMembers = useCallback((value: string): string => {
    if (!value.trim()) return 'Number of members is required'
    const n = Number(value)
    if (Number.isNaN(n)) return 'Please enter a valid number of members'
    if (n < 2) return 'Minimum team size is 2 (including team lead)'
    if (n > 5) return 'Maximum team size is 5 (4 members excluding the team lead)'
    return ''
  }, [])

  const validateForm = useCallback(
    (data: FormData = formData): boolean => {
      const errors: Record<string, string> = {}

      errors.teamName = validateRequiredText(data.teamName, 'Team name')
      errors.teamLeadName = validateRequiredText(data.teamLeadName, 'Team lead name')
      errors.year = data.year ? '' : 'Year is required'
      errors.course = validateRequiredText(data.course, 'Course')
      errors.phone = validatePhone(data.phone)
      errors.email = validateEmail(data.email)
      errors.numberOfMembers = validateNumberOfMembers(data.numberOfMembers)
      errors.problemStatement = validateRequiredText(data.problemStatement, 'Problem statement')
      errors.proposedSolution = validateRequiredText(data.proposedSolution, 'Proposed solution')
      errors.stage = data.stage ? '' : 'Stage of the idea / startup is required'
      errors.progressSoFar = validateRequiredText(data.progressSoFar, 'Progress so far')

      const totalMembers = Number(data.numberOfMembers || '0')
      const additionalMembers = totalMembers - 1
      if (!Number.isNaN(additionalMembers) && additionalMembers > 0) {
        if (!Array.isArray(data.members) || data.members.length !== additionalMembers) {
          errors.memberDetails = 'Please provide details for all additional team members'
        } else {
          const invalidMember = data.members.some((member) => {
            if (!member) return true
            if (!member.name?.trim()) return true
            if (!member.courseYear?.trim()) return true
            if (!member.email?.trim()) return true
            if (!member.phone?.trim()) return true
            if (validateEmail(member.email)) return true
            if (validatePhone(member.phone)) return true
            return false
          })
          if (invalidMember) {
            errors.memberDetails = 'Please provide valid details for all additional team members'
          }
        }
      }

      setFormErrors(errors)
      return !Object.values(errors).some((error) => error !== '')
    },
    [formData, validateRequiredText, validatePhone, validateEmail, validateNumberOfMembers]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target

      if (name === 'numberOfMembers') {
        const raw = Number(value)
        let n = Number.isNaN(raw) ? 0 : raw

        // Enforce bounds at the input level as well
        if (n > 5) n = 5
        if (n < 0) n = 0

        const additional = Math.max(0, n - 1)
        setFormData((prev) => ({
          ...prev,
          numberOfMembers: n ? String(n) : '',
          members: Array.from({ length: additional }, (_, index) => prev.members[index] || {
            name: '',
            courseYear: '',
            email: '',
            phone: '',
          }),
        }))
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }))
      }
    },
    []
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name } = e.target

      setTouchedFields((prev) => {
        if (prev.has(name)) return prev
        const next = new Set(prev)
        next.add(name)
        return next
      })

      const value = (e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value
      let error = ''

      if (name === 'teamName') error = validateRequiredText(value, 'Team name')
      else if (name === 'teamLeadName') error = validateRequiredText(value, 'Team lead name')
      else if (name === 'year') error = value ? '' : 'Year is required'
      else if (name === 'course') error = validateRequiredText(value, 'Course')
      else if (name === 'phone') error = validatePhone(value)
      else if (name === 'email') error = validateEmail(value)
      else if (name === 'numberOfMembers') error = validateNumberOfMembers(value)
      else if (name === 'problemStatement') error = validateRequiredText(value, 'Problem statement')
      else if (name === 'proposedSolution') error = validateRequiredText(value, 'Proposed solution')
      else if (name === 'stage') error = value ? '' : 'Stage of the idea / startup is required'
      else if (name === 'progressSoFar') error = validateRequiredText(value, 'Progress so far')

      setFormErrors((prev) => {
        if (prev[name] === error) return prev
        return { ...prev, [name]: error }
      })
    },
    [validateRequiredText, validatePhone, validateEmail, validateNumberOfMembers]
  )

  const handleMemberFieldChange = useCallback(
    (index: number, field: keyof TeamMember, value: string) => {
      setFormData((prev) => {
        const members = [...(prev.members || [])]
        const existing = members[index] || { name: '', courseYear: '', email: '', phone: '' }
        members[index] = { ...existing, [field]: value }
        return {
          ...prev,
          members,
        }
      })
    },
    []
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setSubmitError(null)

      setTouchedFields(
        new Set([
          'teamName',
          'teamLeadName',
          'year',
          'course',
          'phone',
          'email',
          'numberOfMembers',
          'problemStatement',
          'proposedSolution',
          'stage',
          'progressSoFar',
          'memberDetails',
        ])
      )

      const isValid = validateForm()
      if (!isValid) {
        const firstErrorField = Object.keys(formErrors).find((key) => formErrors[key])
        if (firstErrorField) {
          const element =
            document.getElementById(firstErrorField) || document.querySelector(`[name="${firstErrorField}"]`)
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          ;(element as HTMLElement | null)?.focus()
        }
        return
      }

      setIsSubmitting(true)

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)

      try {
        const response = await fetch('/api/vista-submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            teamName: formData.teamName,
            teamLeadName: formData.teamLeadName,
            year: formData.year,
            course: formData.course,
            phone: formData.phone,
            email: formData.email,
            numberOfMembers: Number(formData.numberOfMembers),
            members: formData.members,
            problemStatement: formData.problemStatement,
            proposedSolution: formData.proposedSolution,
            stage: formData.stage,
            progressSoFar: formData.progressSoFar,
          }),
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          let errorMessage = 'Failed to submit your idea'
          try {
            const errorData = await response.json()
            errorMessage = errorData.error || errorMessage
          } catch {
            errorMessage = `Submission failed with status ${response.status}`
          }
          throw new Error(errorMessage)
        }

        try {
          await response.json()
        } catch {
          // If response is not JSON, still treat as success
        }

        setSubmitted(true)
      } catch (error: any) {
        if (error.name === 'AbortError') {
          setSubmitError('Request timed out. Please check your connection and try again.')
        } else if (error?.message) {
          setSubmitError(error.message)
        } else {
          setSubmitError('An unexpected error occurred. Please try again.')
        }
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, formErrors, validateForm]
  )

  const memberInputs = useMemo(() => {
    const total = Number(formData.numberOfMembers || '0')
    const additionalCount = total - 1
    if (Number.isNaN(additionalCount) || additionalCount <= 0) return null

    return (
      <div className="space-y-4">
        {Array.from({ length: additionalCount }).map((_, index) => {
          const memberIndex = index
          const displayNumber = index + 2 // Member 2, 3, ...
          const member = formData.members[memberIndex] || { name: '', courseYear: '', email: '', phone: '' }

          return (
            <div key={memberIndex} className="space-y-4 rounded-card border border-border-primary bg-bg-900/80 p-4">
              <p className="text-sm font-semibold text-text-primary mb-1">
                Member {displayNumber} (excluding Team Lead)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`member-name-${memberIndex}`}
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`member-name-${memberIndex}`}
                    name={`member-name-${memberIndex}`}
                    value={member.name}
                    onChange={(e) => handleMemberFieldChange(memberIndex, 'name', e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all border-border-primary focus:border-orange-500 focus:ring-orange-500/20 bg-bg-900 text-text-primary"
                    placeholder={`Enter name of member ${displayNumber}`}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`member-courseYear-${memberIndex}`}
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Course &amp; Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`member-courseYear-${memberIndex}`}
                    name={`member-courseYear-${memberIndex}`}
                    value={member.courseYear}
                    onChange={(e) => handleMemberFieldChange(memberIndex, 'courseYear', e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all border-border-primary focus:border-orange-500 focus:ring-orange-500/20 bg-bg-900 text-text-primary"
                    placeholder="e.g., CS1, 2nd Year (choose CS1 if it is just CS)"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`member-email-${memberIndex}`}
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id={`member-email-${memberIndex}`}
                    name={`member-email-${memberIndex}`}
                    value={member.email}
                    onChange={(e) => handleMemberFieldChange(memberIndex, 'email', e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all border-border-primary focus:border-orange-500 focus:ring-orange-500/20 bg-bg-900 text-text-primary"
                    placeholder="Enter member email ID"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`member-phone-${memberIndex}`}
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id={`member-phone-${memberIndex}`}
                    name={`member-phone-${memberIndex}`}
                    value={member.phone}
                    onChange={(e) => handleMemberFieldChange(memberIndex, 'phone', e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all border-border-primary focus:border-orange-500 focus:ring-orange-500/20 bg-bg-900 text-text-primary"
                    placeholder="Enter 10-digit mobile number (without +91)"
                  />
                  <p className="mt-1 text-xs text-text-secondary">
                    Please enter only digits. Do not include +91 or any country code.
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }, [formData.numberOfMembers, formData.members, handleMemberFieldChange])

  if (submitted) {
    return <SuccessScreen />
  }

  return (
    <div className="min-h-screen bg-bg-950 relative overflow-hidden pt-24 sm:pt-28 md:pt-32">
      <GeometricShapes />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="mb-10">
          <button
            onClick={() => router.back()}
            className="dark-back-link"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {/* Partner logos */}
          <div className="mb-8 rounded-card border border-border-primary bg-bg-850/80 px-4 py-4 shadow-sm sm:px-6 sm:py-5">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <div className="h-14 sm:h-16 flex items-center">
                <Image
                  src={IedcCekLogo}
                  alt="IEDC CEK logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="h-14 sm:h-16 flex items-center">
                <p className="text-sm sm:text-base font-semibold tracking-[0.35em] uppercase text-text-primary">
                  V.I.S.T.A.
                </p>
              </div>
              <div className="h-14 sm:h-16 flex items-center">
                <Image
                  src={CollegeLogo}
                  alt="College logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500 mb-3">
            V.I.S.T.A. 2026
          </p>
          <h1 className="mb-4 text-text-primary">
            V.I.S.T.A. Idea Pitching Competition
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            <span className="font-semibold">V.I.S.T.A.</span> (Visionary Initiative for Student-Led Transformation And
            Action) is an idea pitching competition hosted by <span className="font-semibold">E.D Club</span>, conducted
            in collaboration with <span className="font-semibold">Ugenix Academy</span> &amp;{' '}
            <span className="font-semibold">IEDC CEKallooppara</span>.
          </p>
          <p className="text-base text-text-secondary leading-relaxed italic">
            &quot;Ideas aren&apos;t born, they are built.&quot;
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-text-primary mb-2">
              Team Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              required
              value={formData.teamName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                formErrors.teamName && touchedFields.has('teamName')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
              } bg-bg-900 text-text-primary`}
              placeholder="Enter your team name"
              aria-invalid={formErrors.teamName && touchedFields.has('teamName') ? 'true' : 'false'}
            />
            {formErrors.teamName && touchedFields.has('teamName') && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {formErrors.teamName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="teamLeadName" className="block text-sm font-medium text-text-primary mb-2">
              Name of the Team Lead <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="teamLeadName"
              name="teamLeadName"
              required
              value={formData.teamLeadName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                formErrors.teamLeadName && touchedFields.has('teamLeadName')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
              } bg-bg-900 text-text-primary`}
              placeholder="Enter the team lead's full name"
              aria-invalid={formErrors.teamLeadName && touchedFields.has('teamLeadName') ? 'true' : 'false'}
            />
            {formErrors.teamLeadName && touchedFields.has('teamLeadName') && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {formErrors.teamLeadName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-text-primary mb-2">
                Year <span className="text-red-500">*</span>
              </label>
              <select
                id="year"
                name="year"
                required
                value={formData.year}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                  formErrors.year && touchedFields.has('year')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
                } bg-bg-900 text-text-primary`}
                aria-invalid={formErrors.year && touchedFields.has('year') ? 'true' : 'false'}
              >
                <option value="">Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              {formErrors.year && touchedFields.has('year') && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.year}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-text-primary mb-2">
                Course <span className="text-red-500">*</span>
              </label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                  formErrors.course && touchedFields.has('course')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
                } bg-bg-900 text-text-primary`}
                aria-invalid={formErrors.course && touchedFields.has('course') ? 'true' : 'false'}
              >
                <option value="">Select Course</option>
                <option value="CS1">CS1</option>
                <option value="CS2">CS2</option>
                <option value="CC">CC</option>
                <option value="EC">EC</option>
                <option value="EEE">EEE</option>
              </select>
              {formErrors.course && touchedFields.has('course') && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.course}
                </p>
              )}
              <p className="mt-1 text-xs text-text-secondary">
                If your course is just CS, please choose <span className="font-semibold text-text-primary">CS1</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  formErrors.phone && touchedFields.has('phone')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
                } bg-bg-900 text-text-primary`}
                placeholder="Enter 10-digit mobile number (without +91)"
                aria-invalid={formErrors.phone && touchedFields.has('phone') ? 'true' : 'false'}
              />
              {formErrors.phone && touchedFields.has('phone') && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.phone}
                </p>
              )}
              <p className="mt-1 text-xs text-text-secondary">
                Please enter only digits. Do not include +91 or any country code.
              </p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Mail ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  formErrors.email && touchedFields.has('email')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
                } bg-bg-900 text-text-primary`}
                placeholder="Enter the team lead's email address"
                aria-invalid={formErrors.email && touchedFields.has('email') ? 'true' : 'false'}
              />
              {formErrors.email && touchedFields.has('email') && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.email}
                </p>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-border-primary">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Team Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 items-start">
              <div>
                <label htmlFor="numberOfMembers" className="block text-sm font-medium text-text-primary mb-2">
                  Number of Members (including Team Lead) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="numberOfMembers"
                  name="numberOfMembers"
                  min={2}
                  max={5}
                  required
                  value={formData.numberOfMembers}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    formErrors.numberOfMembers && touchedFields.has('numberOfMembers')
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
                  } bg-bg-900 text-text-primary`}
                  placeholder="e.g., 3"
                  aria-invalid={formErrors.numberOfMembers && touchedFields.has('numberOfMembers') ? 'true' : 'false'}
                />
                <p className="mt-1 text-xs text-text-secondary">
                  Minimum team size is 2 (including the team lead). You can have up to 4 additional members (maximum 5 people total).
                </p>
                {formErrors.numberOfMembers && touchedFields.has('numberOfMembers') && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {formErrors.numberOfMembers}
                  </p>
                )}
              </div>

              <div>
                {memberInputs}
                {formErrors.memberDetails && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {formErrors.memberDetails}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border-primary space-y-6">
            <div>
              <label htmlFor="problemStatement" className="block text-sm font-medium text-text-primary mb-2">
                Problem Statement <span className="text-red-500">*</span>
              </label>
              <textarea
                id="problemStatement"
                name="problemStatement"
                required
                value={formData.problemStatement}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                  formErrors.problemStatement && touchedFields.has('problemStatement')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
                } bg-bg-900 text-text-primary`}
                placeholder="Describe the problem your team is addressing."
                aria-invalid={formErrors.problemStatement && touchedFields.has('problemStatement') ? 'true' : 'false'}
              />
              {formErrors.problemStatement && touchedFields.has('problemStatement') && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.problemStatement}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="proposedSolution" className="block text-sm font-medium text-text-primary mb-2">
                Proposed Solution <span className="text-red-500">*</span>
              </label>
              <textarea
                id="proposedSolution"
                name="proposedSolution"
                required
                value={formData.proposedSolution}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                  formErrors.proposedSolution && touchedFields.has('proposedSolution')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
                } bg-bg-900 text-text-primary`}
                placeholder="Explain your solution and how it addresses the problem."
                aria-invalid={formErrors.proposedSolution && touchedFields.has('proposedSolution') ? 'true' : 'false'}
              />
              {formErrors.proposedSolution && touchedFields.has('proposedSolution') && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.proposedSolution}
                </p>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-border-primary space-y-6">
            <div>
              <label htmlFor="stage" className="block text-sm font-medium text-text-primary mb-2">
                Stage of the Idea / Startup <span className="text-red-500">*</span>
              </label>
              <select
                id="stage"
                name="stage"
                required
                value={formData.stage}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                  formErrors.stage && touchedFields.has('stage')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
                } bg-bg-900 text-text-primary`}
                aria-invalid={formErrors.stage && touchedFields.has('stage') ? 'true' : 'false'}
              >
                <option value="">Select Stage</option>
                <option value="Idea Stage">Idea Stage</option>
                <option value="Prototype Developed">Prototype Developed</option>
                <option value="Pilot tested">Pilot tested</option>
                <option value="Registered startup">Registered startup</option>
              </select>
              {formErrors.stage && touchedFields.has('stage') && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.stage}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="progressSoFar" className="block text-sm font-medium text-text-primary mb-2">
                Progress So Far <span className="text-red-500">*</span>
              </label>
              <textarea
                id="progressSoFar"
                name="progressSoFar"
                required
                value={formData.progressSoFar}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                  formErrors.progressSoFar && touchedFields.has('progressSoFar')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-border-primary focus:border-orange-500 focus:ring-orange-500/20'
                } bg-bg-900 text-text-primary`}
                placeholder="Share any work done so far (research, validation, prototypes, pilots, etc.)."
                aria-invalid={formErrors.progressSoFar && touchedFields.has('progressSoFar') ? 'true' : 'false'}
              />
              {formErrors.progressSoFar && touchedFields.has('progressSoFar') && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.progressSoFar}
                </p>
              )}
            </div>
          </div>

          {submitError && (
            <div className="pt-2">
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                <p className="text-sm">{submitError}</p>
              </div>
            </div>
          )}
          <div className="rounded-card border border-dashed border-orange-500/30 bg-bg-900/60 px-4 py-3 text-sm text-text-secondary">
              <p>
                Please join the{' '}
                <span className="font-medium text-text-primary">V.I.S.T.A. WhatsApp group</span> to receive updates and
                event announcements.
              </p>
              <div className="mt-2">
                <Link
                  href={WHATSAPP_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-500-dark font-medium"
                >
                  Join WhatsApp Group
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>  
          <div className="pt-4 space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary-orange w-full px-8 py-4 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center" aria-live="polite" aria-busy="true">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white will-change-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Submitting...</span>
                </span>
              ) : (
                'Submit Idea'
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

