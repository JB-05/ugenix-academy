'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { WORKSIM_REGISTRATION_ENDED, WORKSIM_REGISTRATION_FEE_INR } from '@/lib/constants'

type RazorpayHandlerResponse = {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}

type RazorpayOptions = {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id: string
  prefill?: { name?: string; email?: string; contact?: string }
  theme?: { color?: string }
  handler: (response: RazorpayHandlerResponse) => void
  modal?: { ondismiss?: () => void }
}

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => { open: () => void }
  }
}

const INPUT_CLASS =
  'w-full rounded-lg border border-border-primary bg-bg-900 px-4 py-3 text-text-primary transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20'
const INPUT_ERROR_CLASS =
  'w-full rounded-lg border border-red-500 bg-bg-900 px-4 py-3 text-text-primary focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20'

function fieldClass(hasError: boolean) {
  return hasError ? INPUT_ERROR_CLASS : INPUT_CLASS
}

export default function WorkSimRegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    courseYear: '',
    branch: '',
    phone: '',
    email: '',
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())
  const [submitted, setSubmitted] = useState(false)
  const [isPaying, setIsPaying] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [razorpayReady, setRazorpayReady] = useState(false)

  useEffect(() => {
    if (WORKSIM_REGISTRATION_ENDED) {
      router.replace('/courses/worksim')
    }
  }, [router])

  useEffect(() => {
    if (document.getElementById('razorpay-checkout-js')) {
      setRazorpayReady(true)
      return
    }

    const script = document.createElement('script')
    script.id = 'razorpay-checkout-js'
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => setRazorpayReady(true)
    script.onerror = () => setPaymentError('Failed to load payment gateway. Please refresh and try again.')
    document.body.appendChild(script)
  }, [])

  const validateName = useCallback((name: string) => {
    if (!name.trim()) return 'Full name is required'
    if (name.trim().length < 2) return 'Name must be at least 2 characters'
    return ''
  }, [])

  const validatePhone = useCallback((phone: string) => {
    if (!phone.trim()) return 'Phone number is required'
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
    if (!phoneRegex.test(phone.trim())) return 'Please enter a valid phone number'
    if (phone.trim().length < 10) return 'Phone number must be at least 10 digits'
    return ''
  }, [])

  const validateEmail = useCallback((email: string) => {
    if (!email.trim()) return 'Email address is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Please enter a valid email address'
    return ''
  }, [])

  const validateBranch = useCallback((branch: string) => {
    if (!branch.trim()) return 'Branch is required'
    if (branch.trim().length < 2) return 'Branch must be at least 2 characters'
    return ''
  }, [])

  const validateCourseYear = useCallback((courseYear: string) => {
    if (!courseYear.trim()) return 'Course year is required'
    return ''
  }, [])

  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {
      name: validateName(formData.name),
      courseYear: validateCourseYear(formData.courseYear),
      branch: validateBranch(formData.branch),
      phone: validatePhone(formData.phone),
      email: validateEmail(formData.email),
    }
    setFormErrors(errors)
    return Object.values(errors).every((error) => error === '')
  }, [formData, validateName, validateCourseYear, validateBranch, validatePhone, validateEmail])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (touchedFields.has(name)) {
      const validators: Record<string, (v: string) => string> = {
        name: validateName,
        courseYear: validateCourseYear,
        branch: validateBranch,
        phone: validatePhone,
        email: validateEmail,
      }
      setFormErrors((prev) => ({ ...prev, [name]: validators[name]?.(value) || '' }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouchedFields((prev) => new Set(prev).add(name))
    const validators: Record<string, (v: string) => string> = {
      name: validateName,
      courseYear: validateCourseYear,
      branch: validateBranch,
      phone: validatePhone,
      email: validateEmail,
    }
    setFormErrors((prev) => ({ ...prev, [name]: validators[name]?.(value) || '' }))
  }

  const submitRegistration = async (payment: RazorpayHandlerResponse) => {
    const response = await fetch('/api/worksim-submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        razorpayOrderId: payment.razorpay_order_id,
        razorpayPaymentId: payment.razorpay_payment_id,
        razorpaySignature: payment.razorpay_signature,
      }),
    })

    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      throw new Error(data.error || 'Failed to submit registration')
    }
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentError(null)
    setTouchedFields(new Set(['name', 'courseYear', 'branch', 'phone', 'email']))

    if (!validateForm()) return
    if (!razorpayReady || !window.Razorpay) {
      setPaymentError('Payment gateway is still loading. Please wait a moment and try again.')
      return
    }

    setIsPaying(true)

    try {
      const orderResponse = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ program: 'worksim' }),
      })

      if (!orderResponse.ok) {
        const data = await orderResponse.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to start payment')
      }

      const { orderId, amount, currency, keyId } = await orderResponse.json()

      await new Promise<void>((resolve, reject) => {
        const rzp = new window.Razorpay!({
          key: keyId,
          amount,
          currency,
          name: 'Ugenix Academy',
          description: 'Ugenix WorkSim Registration',
          order_id: orderId,
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
          theme: { color: '#FF6200' },
          handler: async (response) => {
            try {
              await submitRegistration(response)
              setSubmitted(true)
              resolve()
            } catch (error: unknown) {
              reject(error)
            }
          },
          modal: {
            ondismiss: () => {
              setIsPaying(false)
              resolve()
            },
          },
        })

        rzp.open()
      })
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Payment failed. Please try again.'
      setPaymentError(message)
    } finally {
      setIsPaying(false)
    }
  }

  if (WORKSIM_REGISTRATION_ENDED) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-950 pt-24">
        <p className="text-text-secondary">Redirecting...</p>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-bg-950 pt-24 sm:pt-28 md:pt-32">
        <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-8">
          <div className="dark-card relative p-8 text-center lg:p-12">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="mb-4 text-3xl font-semibold text-text-primary">Registration Successful</h1>
            <p className="mb-8 text-lg leading-relaxed text-text-secondary">
              Thank you for registering for Ugenix WorkSim. Your payment was received and we&apos;ll
              be in touch shortly with next steps.
            </p>
            <Link href="/" className="btn-hero-primary group inline-flex">
              <span className="relative z-10 text-white">Return to Home</span>
              <ArrowRight size={18} className="relative z-10 text-white" />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-950 pt-24 sm:pt-28 md:pt-32">
      <div className="hero-dark-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />

      <section className="relative z-10 mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
        <div className="mb-12">
          <button type="button" onClick={() => router.back()} className="dark-back-link">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Ugenix WorkSim
          </p>
          <h1 className="mb-4 text-text-primary">WorkSim Registration</h1>
          <p className="text-lg leading-relaxed text-text-secondary">
            Complete the form below and proceed to secure payment via Razorpay to confirm your seat.
          </p>
        </div>

        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
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
              className={fieldClass(!!(formErrors.name && touchedFields.has('name')))}
              placeholder="Enter your full name"
            />
            {formErrors.name && touchedFields.has('name') && (
              <p className="mt-1 text-sm text-red-600" role="alert">{formErrors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="courseYear" className="mb-2 block text-sm font-medium text-text-primary">
              Course Year <span className="text-red-500">*</span>
            </label>
            <select
              id="courseYear"
              name="courseYear"
              required
              value={formData.courseYear}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${fieldClass(!!(formErrors.courseYear && touchedFields.has('courseYear')))} cursor-pointer appearance-none`}
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
              <p className="mt-1 text-sm text-red-600" role="alert">{formErrors.courseYear}</p>
            )}
          </div>

          <div>
            <label htmlFor="branch" className="mb-2 block text-sm font-medium text-text-primary">
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
              className={fieldClass(!!(formErrors.branch && touchedFields.has('branch')))}
              placeholder="e.g. Computer Science, Electronics"
            />
            {formErrors.branch && touchedFields.has('branch') && (
              <p className="mt-1 text-sm text-red-600" role="alert">{formErrors.branch}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-primary">
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
              className={fieldClass(!!(formErrors.phone && touchedFields.has('phone')))}
              placeholder="Enter your phone number"
            />
            {formErrors.phone && touchedFields.has('phone') && (
              <p className="mt-1 text-sm text-red-600" role="alert">{formErrors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
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
              className={fieldClass(!!(formErrors.email && touchedFields.has('email')))}
              placeholder="Enter your email address"
            />
            {formErrors.email && touchedFields.has('email') && (
              <p className="mt-1 text-sm text-red-600" role="alert">{formErrors.email}</p>
            )}
          </div>

          <div className="border-t border-border-primary pt-6">
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Payment</h3>
            <div className="dark-card mb-4 p-5">
              <p className="text-sm text-text-secondary">Registration fee</p>
              <p className="mt-1 text-2xl font-bold text-text-primary">
                ₹{WORKSIM_REGISTRATION_FEE_INR.toLocaleString('en-IN')}
              </p>
              <p className="mt-2 text-sm text-text-muted">
                You&apos;ll be redirected to Razorpay to complete payment securely. Cards, UPI, and net
                banking are supported.
              </p>
            </div>
          </div>

          {paymentError && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
              <p className="text-sm">{paymentError}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isPaying || !razorpayReady}
            className="btn-hero-primary group w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="relative z-10 text-white">
              {isPaying ? 'Processing payment...' : 'Proceed to Payment'}
            </span>
            {!isPaying && (
              <ArrowRight
                size={18}
                className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </button>
        </form>
      </section>
    </div>
  )
}
