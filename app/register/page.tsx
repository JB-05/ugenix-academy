'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  // Developer-preset payment information
  const paymentInfo = {
    phoneNumber: '+91 97785 68601', // Preset phone number for payment
    upiId: 'academy@ugenix.in', // Preset UPI ID
    paymentScreenshot: '/placeholder-payment.png', // Preset payment screenshot placeholder
  }

  const [formData, setFormData] = useState({
    name: '',
    courseYear: '',
    branch: '',
    phone: '',
    email: '',
    paymentScreenshot: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePaymentScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        paymentScreenshot: e.target.files[0],
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for future API integration
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-offwhite">
        <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative rounded-2xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-md border border-white/50 shadow-lg shadow-black/5 p-8 lg:p-12 text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 text-brand mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white font-medium hover:bg-brand-dark transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Return to Home
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-offwhite relative overflow-hidden pt-24 sm:pt-28 md:pt-32">
      {/* Geometric Shapes - Different from CTA section (Hexagons and Polygons) */}
      {/* Mobile/Tablet - Smaller semi-transparent shapes */}
      <div className="absolute left-0 top-32 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-brand/25 opacity-40 sm:opacity-50" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      <div className="absolute right-0 top-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-coral/20 opacity-35 sm:opacity-45 rotate-45" />
      
      {/* Desktop - Larger, solid colored shapes */}
      {/* Left side - Hexagon shape */}
      <div className="hidden lg:block absolute left-0 top-20 w-80 h-80 bg-brand" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      {/* Left side - Diamond shape */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-coral rotate-45" />
      
      {/* Right side - Pentagon shape */}
      <div className="hidden lg:block absolute right-0 top-32 w-72 h-72 bg-violet-soft" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
      {/* Right side - Octagon shape */}
      <div className="hidden lg:block absolute right-0 bottom-20 w-96 h-96 bg-brand-light" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
      
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="mb-12">
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
                className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                placeholder="Enter your full name"
              />
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
                className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Course Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Graduate">Graduate</option>
                <option value="Other">Other</option>
              </select>
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
                className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                placeholder="Enter your branch (e.g., Computer Science, Electronics, etc.)"
              />
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
                className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                placeholder="Enter your phone number"
              />
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
                className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                placeholder="Enter your email address"
              />
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
                    {paymentInfo.phoneNumber}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-deep mb-2">
                    UPI ID
                  </label>
                  <div className="w-full px-4 py-3 border border-neutral-border bg-neutral-offwhite text-slate-deep rounded-lg">
                    {paymentInfo.upiId}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-deep mb-2">
                    Payment Screenshot
                  </label>
                  <div className="mt-1 border-2 border-neutral-border rounded-lg overflow-hidden bg-neutral-offwhite">
                    <div className="flex justify-center items-center px-6 py-12 min-h-[200px]">
                      <div className="text-center">
                        <svg className="mx-auto h-16 w-16 text-neutral-muted mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm text-neutral-muted">Payment screenshot placeholder</p>
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
                  {formData.paymentScreenshot ? (
                    <div className="relative">
                      <img
                        src={URL.createObjectURL(formData.paymentScreenshot)}
                        alt="Payment screenshot"
                        className="w-full h-auto max-h-96 object-contain"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentScreenshot: null })}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                        aria-label="Remove image"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center px-6 py-12 min-h-[200px]">
                      <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-neutral-muted mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
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
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-brand text-white font-medium hover:bg-brand-dark transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Submit Registration
              </button>
            </div>
          </form>
      </section>
    </div>
  )
}




