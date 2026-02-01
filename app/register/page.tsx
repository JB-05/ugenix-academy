'use client'

import { useState, useCallback, useMemo, useEffect, useRef, memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { REGISTRATION_ENDED } from '@/lib/constants'

// Static data - moved outside component to prevent recreation on every render
const PAYMENT_INFO = {
  phoneNumber: '+91 88487 36987',
  upiId: 'emmanuelvinod2121@oksbi',
  paymentScreenshot: '/placeholder-payment.png',
} as const

// Constants for validation - prevents recreation
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'] as const
const REQUEST_TIMEOUT = 30000 // 30 seconds

// Memoized geometric shapes component
const GeometricShapes = memo(() => (
  <>
    {/* Mobile/Tablet - Smaller semi-transparent shapes */}
    <div 
      className="absolute left-0 top-32 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-brand/25 opacity-40 sm:opacity-50" 
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
    />
    <div className="absolute right-0 top-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-coral/20 opacity-35 sm:opacity-45 rotate-45" />
    
    {/* Desktop - Larger, solid colored shapes */}
    <div 
      className="hidden lg:block absolute left-0 top-20 w-80 h-80 bg-brand" 
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
    />
    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-coral rotate-45" />
    <div 
      className="hidden lg:block absolute right-0 top-32 w-72 h-72 bg-violet-soft" 
      style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} 
    />
    <div 
      className="hidden lg:block absolute right-0 bottom-20 w-96 h-96 bg-brand-light" 
      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} 
    />
  </>
))
GeometricShapes.displayName = 'GeometricShapes'

// Memoized success screen component
const SuccessScreen = memo(() => (
  <div className="min-h-screen bg-neutral-offwhite pt-24 sm:pt-28 md:pt-32">
    <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      <div className="relative rounded-2xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-md border border-white/50 shadow-lg shadow-black/5 p-8 lg:p-12 text-center">
        <div className="mb-6">
          <svg className="w-16 h-16 text-brand mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-semibold mb-4 text-slate-deep">Registration Successful</h1>
        <p className="text-lg text-neutral-muted mb-8 leading-relaxed">
          Thank you for registering. We'll be in touch shortly with further details 
          about your course enrollment.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white font-medium hover:bg-brand-dark hover:text-white transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Return to Home
        </Link>
      </div>
    </section>
  </div>
))
SuccessScreen.displayName = 'SuccessScreen'

export default function RegisterPage() {
  const router = useRouter()

  // When registration has ended, redirect to home
  useEffect(() => {
    if (REGISTRATION_ENDED) {
      router.replace('/')
    }
  }, [router])

  if (REGISTRATION_ENDED) {
    return (
      <div className="min-h-screen bg-neutral-offwhite flex items-center justify-center pt-24">
        <p className="text-neutral-muted">Redirecting...</p>
      </div>
    )
  }

  const [formData, setFormData] = useState({
    name: '',
    courseYear: '',
    branch: '',
    phone: '',
    email: '',
    paymentScreenshot: null as File | null,
    paymentScreenshotUrl: '' as string,
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const imagePreviewUrlRef = useRef<string | null>(null)

  // Validation functions
  const validateName = useCallback((name: string): string => {
    if (!name.trim()) return 'Full name is required'
    if (name.trim().length < 2) return 'Name must be at least 2 characters'
    if (name.trim().length > 100) return 'Name must be less than 100 characters'
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) return 'Name can only contain letters, spaces, hyphens, and apostrophes'
    return ''
  }, [])

  const validatePhone = useCallback((phone: string): string => {
    if (!phone.trim()) return 'Phone number is required'
    // Allow international format: +91 1234567890 or 1234567890
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
    if (!phoneRegex.test(phone.trim())) return 'Please enter a valid phone number'
    if (phone.trim().length < 10) return 'Phone number must be at least 10 digits'
    return ''
  }, [])

  const validateEmail = useCallback((email: string): string => {
    if (!email.trim()) return 'Email address is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email address'
    return ''
  }, [])

  const validateBranch = useCallback((branch: string): string => {
    if (!branch.trim()) return 'Branch is required'
    if (branch.trim().length < 2) return 'Branch must be at least 2 characters'
    if (branch.trim().length > 100) return 'Branch must be less than 100 characters'
    return ''
  }, [])

  const validateFile = useCallback((file: File | null): string => {
    if (!file) return 'Payment screenshot is required'
    
    if (!ALLOWED_FILE_TYPES.includes(file.type as typeof ALLOWED_FILE_TYPES[number])) {
      return 'Invalid file type. Please upload a JPEG, PNG, GIF, or WebP image'
    }
    if (file.size > MAX_FILE_SIZE) {
      return `File size exceeds 10MB limit. Current size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`
    }
    if (file.size === 0) return 'File is empty'
    return ''
  }, [])

  // Validate single field
  const validateField = useCallback((name: string, value: any): string => {
    switch (name) {
      case 'name':
        return validateName(value)
      case 'phone':
        return validatePhone(value)
      case 'email':
        return validateEmail(value)
      case 'branch':
        return validateBranch(value)
      case 'courseYear':
        return !value ? 'Course year is required' : ''
      case 'paymentScreenshot':
        return validateFile(value)
      default:
        return ''
    }
  }, [validateName, validatePhone, validateEmail, validateBranch, validateFile])

  // Validate entire form
  const validateForm = useCallback((): boolean => {
    const errors: Record<string, string> = {}
    
    errors.name = validateName(formData.name)
    errors.phone = validatePhone(formData.phone)
    errors.email = validateEmail(formData.email)
    errors.branch = validateBranch(formData.branch)
    errors.courseYear = !formData.courseYear ? 'Course year is required' : ''
    errors.paymentScreenshot = validateFile(formData.paymentScreenshot)

    setFormErrors(errors)
    return !Object.values(errors).some(error => error !== '')
  }, [formData, validateName, validatePhone, validateEmail, validateBranch, validateFile])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))

    // Validate on change if field has been touched - use functional update for better performance
    if (touchedFields.has(name)) {
      const error = validateField(name, value)
      setFormErrors(prev => {
        // Only update if error changed
        if (prev[name] === error) return prev
        return { ...prev, [name]: error }
      })
    }
  }, [touchedFields, validateField])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target
    
    // Only update touchedFields if not already touched
    setTouchedFields(prev => {
      if (prev.has(name)) return prev
      return new Set(prev).add(name)
    })
    
    let error = ''
    if (name === 'paymentScreenshot') {
      error = validateFile(formData.paymentScreenshot)
    } else {
      const value = (e.target as HTMLInputElement | HTMLSelectElement).value
      error = validateField(name, value)
    }
    
    // Only update if error changed
    setFormErrors(prev => {
      if (prev[name] === error) return prev
      return { ...prev, [name]: error }
    })
  }, [validateField, validateFile, formData.paymentScreenshot])

  const handlePaymentScreenshotChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      
      // Validate file
      const error = validateFile(file)
      if (error) {
        setFormErrors(prev => ({
          ...prev,
          paymentScreenshot: error,
        }))
        e.target.value = '' // Clear the input
        return
      }

      // Clean up previous object URL to prevent memory leaks
      if (imagePreviewUrlRef.current) {
        URL.revokeObjectURL(imagePreviewUrlRef.current)
      }

      // Create new object URL for preview
      const objectUrl = URL.createObjectURL(file)
      imagePreviewUrlRef.current = objectUrl

      setFormData(prev => ({
        ...prev,
        paymentScreenshot: file,
        paymentScreenshotUrl: '',
      }))
      setFormErrors(prev => ({
        ...prev,
        paymentScreenshot: '',
      }))
      setUploadError(null)
      setTouchedFields(prev => new Set(prev).add('paymentScreenshot'))
    }
  }, [validateFile])

  // Cleanup object URL on unmount
  useEffect(() => {
    return () => {
      if (imagePreviewUrlRef.current) {
        URL.revokeObjectURL(imagePreviewUrlRef.current)
      }
    }
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setUploadError(null)

    // Mark all fields as touched
    setTouchedFields(new Set(['name', 'courseYear', 'branch', 'phone', 'email', 'paymentScreenshot']))

    // Validate entire form
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors).find(key => formErrors[key])
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField) || document.querySelector(`[name="${firstErrorField}"]`)
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        element?.focus()
      }
      return
    }

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      // TypeScript: We know paymentScreenshot is not null because validateForm passed
      const file = formData.paymentScreenshot!
      const uploadFormData = new FormData()
      uploadFormData.append('file', file)

      // Upload to Cloudinary via API route
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      })

      if (!uploadResponse.ok) {
        let errorMessage = 'Failed to upload image'
        try {
          const errorData = await uploadResponse.json()
          errorMessage = errorData.error || errorMessage
        } catch {
          errorMessage = `Upload failed with status ${uploadResponse.status}`
        }
        throw new Error(errorMessage)
      }

      let uploadResult
      try {
        uploadResult = await uploadResponse.json()
        if (!uploadResult.url) {
          throw new Error('Invalid response from upload server')
        }
      } catch (error: any) {
        throw new Error('Failed to parse upload response. Please try again.')
      }

      // Update form data with Cloudinary URL
      const finalFormData = {
        ...formData,
        paymentScreenshotUrl: uploadResult.url,
      }

      // Submit form data to Google Sheets
      const submitResponse = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: finalFormData.name,
          courseYear: finalFormData.courseYear,
          branch: finalFormData.branch,
          phone: finalFormData.phone,
          email: finalFormData.email,
          paymentScreenshotUrl: finalFormData.paymentScreenshotUrl,
        }),
      })

      if (!submitResponse.ok) {
        let errorMessage = 'Failed to submit registration'
        try {
          const errorData = await submitResponse.json()
          errorMessage = errorData.error || errorMessage
        } catch {
          errorMessage = `Submission failed with status ${submitResponse.status}`
        }
        throw new Error(errorMessage)
      }

      let submitResult
      try {
        submitResult = await submitResponse.json()
      } catch (error: any) {
        throw new Error('Failed to parse submission response. Please check if your registration was successful.')
      }
      
      // Registration successful - data logged to Google Sheets

      setSubmitted(true)
    } catch (error: any) {
      console.error('Submission error:', error)
      
      // Handle different types of errors
      let errorMessage = 'An unexpected error occurred. Please try again.'
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        errorMessage = 'Network error: Please check your internet connection and try again.'
      } else if (error.message) {
        errorMessage = error.message
      }
      
      setUploadError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm, formErrors])

  // Memoize image preview URL
  const imagePreviewUrl = useMemo(() => {
    if (formData.paymentScreenshot && imagePreviewUrlRef.current) {
      return imagePreviewUrlRef.current
    }
    return null
  }, [formData.paymentScreenshot])

  // Early return for success screen - prevents unnecessary rendering
  if (submitted) {
    return <SuccessScreen />
  }

  return (
    <div className="min-h-screen bg-neutral-offwhite relative overflow-hidden pt-24 sm:pt-28 md:pt-32">
      <GeometricShapes />
      
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="mb-12">
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 text-neutral-muted hover:text-slate-deep transition-colors duration-200 text-sm font-medium"
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
          <h1 className="mb-4 text-slate-deep">Course Registration</h1>
          <p className="text-lg text-neutral-muted leading-relaxed">
            Complete the form below to register for your chosen course. 
            We'll contact you with enrollment details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-deep mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  formErrors.name && touchedFields.has('name')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-neutral-border focus:border-brand focus:ring-brand/20'
                } bg-white text-slate-deep`}
                placeholder="Enter your full name"
                aria-invalid={formErrors.name && touchedFields.has('name') ? 'true' : 'false'}
                aria-describedby={formErrors.name && touchedFields.has('name') ? 'name-error' : undefined}
              />
              {formErrors.name && touchedFields.has('name') && (
                <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="courseYear" className="block text-sm font-medium text-slate-deep mb-2">
                Course Year <span className="text-red-500">*</span>
              </label>
              <select
                id="courseYear"
                name="courseYear"
                required
                value={formData.courseYear}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                  formErrors.courseYear && touchedFields.has('courseYear')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-neutral-border focus:border-brand focus:ring-brand/20'
                } bg-white text-slate-deep`}
                aria-invalid={formErrors.courseYear && touchedFields.has('courseYear') ? 'true' : 'false'}
                aria-describedby={formErrors.courseYear && touchedFields.has('courseYear') ? 'courseYear-error' : undefined}
              >
                <option value="">Select Course Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Graduate">Graduate</option>
                <option value="Other">Other</option>
              </select>
              {formErrors.courseYear && touchedFields.has('courseYear') && (
                <p id="courseYear-error" className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.courseYear}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-slate-deep mb-2">
                Branch <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                required
                value={formData.branch}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  formErrors.branch && touchedFields.has('branch')
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-neutral-border focus:border-brand focus:ring-brand/20'
                } bg-white text-slate-deep`}
                placeholder="Enter your branch (e.g., Computer Science, Electronics, etc.)"
                aria-invalid={formErrors.branch && touchedFields.has('branch') ? 'true' : 'false'}
                aria-describedby={formErrors.branch && touchedFields.has('branch') ? 'branch-error' : undefined}
              />
              {formErrors.branch && touchedFields.has('branch') && (
                <p id="branch-error" className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.branch}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-deep mb-2">
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
                    : 'border-neutral-border focus:border-brand focus:ring-brand/20'
                } bg-white text-slate-deep`}
                placeholder="Enter your phone number"
                aria-invalid={formErrors.phone && touchedFields.has('phone') ? 'true' : 'false'}
                aria-describedby={formErrors.phone && touchedFields.has('phone') ? 'phone-error' : undefined}
              />
              {formErrors.phone && touchedFields.has('phone') && (
                <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-deep mb-2">
                Email Address <span className="text-red-500">*</span>
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
                    : 'border-neutral-border focus:border-brand focus:ring-brand/20'
                } bg-white text-slate-deep`}
                placeholder="Enter your email address"
                aria-invalid={formErrors.email && touchedFields.has('email') ? 'true' : 'false'}
                aria-describedby={formErrors.email && touchedFields.has('email') ? 'email-error' : undefined}
              />
              {formErrors.email && touchedFields.has('email') && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Payment Information Section - Developer Preset */}
            <div className="pt-6 border-t border-neutral-border">
              <h3 className="text-lg font-semibold text-slate-deep mb-4">Payment Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-deep mb-2">
                    Payment Number
                  </label>
                  <div className="w-full px-4 py-3 border border-neutral-border bg-neutral-offwhite text-slate-deep rounded-lg">
                    {PAYMENT_INFO.phoneNumber}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-deep mb-2">
                    UPI ID
                  </label>
                  <div className="w-full px-4 py-3 border border-neutral-border bg-neutral-offwhite text-slate-deep rounded-lg">
                    {PAYMENT_INFO.upiId}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-deep mb-2">
                    Payment QR
                  </label>
                  <div className="mt-1 border-2 border-neutral-border rounded-lg overflow-hidden bg-neutral-offwhite">
                    <div className="flex justify-center items-center px-6 py-6 sm:py-8 min-h-[200px]">
                      <div className="text-center">
                        <img
                          src="/paymentqr/academy%20payment%20qr%2028-01-26.jpeg"
                          alt="UgeniX Academy payment QR code"
                          className="mx-auto w-full max-w-xs h-auto object-contain rounded-lg bg-white"
                          loading="lazy"
                          decoding="async"
                        />
                        <p className="mt-3 text-sm text-neutral-muted">
                          Scan this QR to make the payment, then upload the payment screenshot below.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Screenshot Section */}
            <div className="pt-6 border-t border-neutral-border">
              <h3 className="text-lg font-semibold text-slate-deep mb-4">Payment Screenshot</h3>
              
              <div>
                <label htmlFor="paymentScreenshot" className="block text-sm font-medium text-slate-deep mb-2">
                  Upload Payment Screenshot <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 border-2 border-neutral-border rounded-lg overflow-hidden bg-neutral-offwhite">
                  {formData.paymentScreenshot && imagePreviewUrl ? (
                    <div className="relative">
                      <img
                        src={imagePreviewUrl}
                        alt="Payment screenshot preview"
                        className="w-full h-auto max-h-96 object-contain"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (imagePreviewUrlRef.current) {
                            URL.revokeObjectURL(imagePreviewUrlRef.current)
                            imagePreviewUrlRef.current = null
                          }
                          setFormData(prev => ({ ...prev, paymentScreenshot: null, paymentScreenshotUrl: '' }))
                          setFormErrors(prev => ({ ...prev, paymentScreenshot: '' }))
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                        aria-label="Remove image"
                        disabled={isSubmitting}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center px-6 py-12 min-h-[200px]">
                      <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-neutral-muted mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true" role="img">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-4h12m-6-6h.01M36 20h.01" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-neutral-muted justify-center">
                          <label htmlFor="paymentScreenshot" className="relative cursor-pointer rounded-md font-medium text-brand hover:text-brand-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2">
                            <span>Upload a file</span>
                            <input
                              id="paymentScreenshot"
                              name="paymentScreenshot"
                              type="file"
                              accept="image/*"
                              required
                              onChange={handlePaymentScreenshotChange}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-neutral-muted mt-2">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  )}
                  {formErrors.paymentScreenshot && touchedFields.has('paymentScreenshot') && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {formErrors.paymentScreenshot}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {uploadError && (
              <div className="pt-2">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <p className="text-sm">{uploadError}</p>
                </div>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-brand text-white font-medium hover:bg-brand-dark transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </span>
                ) : (
                  'Submit Registration'
                )}
              </button>
            </div>
          </form>
      </section>
    </div>
  )
}




