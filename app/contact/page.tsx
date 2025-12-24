'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

type ContactMode = 'courses' | 'partnerships'

export default function ContactPage() {
  const [mode, setMode] = useState<ContactMode>('courses')
  
  // Course Queries Form State
  const [courseFormData, setCourseFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // Partnerships Form State
  const [partnershipFormData, setPartnershipFormData] = useState({
    name: '',
    workEmail: '',
    organization: '',
    role: '',
    partnershipType: '',
    website: '',
    description: '',
  })

  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCourseFormData({
      ...courseFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePartnershipChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setPartnershipFormData({
      ...partnershipFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for future API integration
    console.log('Course query submitted:', courseFormData)
  }

  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for future API integration
    console.log('Partnership query submitted:', partnershipFormData)
  }

  return (
    <div className="min-h-screen pt-32 md:pt-36 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Page Intro Section */}
        <section className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12 text-center">
            <h1 className="mb-6 text-slate-deep font-medium">Contact Us</h1>
            <p className="text-lg text-neutral-muted leading-relaxed max-w-2xl mx-auto">
              Have questions about courses, learning paths, or partnerships? 
              We're here to help. Reach out through the form below.
            </p>
          </div>
        </section>

        {/* 2. Contact Interaction Section */}
        <section className="mx-auto max-w-6xl">
          {/* Segmented Control */}
          <div className="flex justify-center mb-8">
            <div className="relative inline-flex rounded-lg bg-white/40 backdrop-blur-sm p-1">
              {/* Sliding Tab */}
              <div
                className="absolute top-1 bottom-1 rounded-md bg-white/70 backdrop-blur-md shadow-inner transition-all duration-200 ease-out"
                style={{
                  width: 'calc(50% - 0.5rem)',
                  left: mode === 'courses' ? '0.25rem' : 'calc(50% + 0.25rem)',
                }}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setMode('courses')}
                className={`relative px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 z-10 ${
                  mode === 'courses'
                    ? 'text-brand'
                    : 'text-neutral-muted hover:text-slate-deep'
                }`}
                aria-pressed={mode === 'courses'}
              >
                Course Queries
              </button>
              <button
                type="button"
                onClick={() => setMode('partnerships')}
                className={`relative px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 z-10 ${
                  mode === 'partnerships'
                    ? 'text-brand'
                    : 'text-neutral-muted hover:text-slate-deep'
                }`}
                aria-pressed={mode === 'partnerships'}
              >
                Partnerships
              </button>
            </div>
          </div>

          {/* Main Container */}
          <div className="rounded-xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12 relative min-h-[600px]">
            {/* Shared Container for Both Modes */}
            <div className="relative w-full">
              {/* Mode A: Course Queries */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start w-full ${mode === 'courses' ? 'opacity-100 relative translate-y-0' : 'opacity-0 absolute inset-0 translate-y-1.5 pointer-events-none'}`} style={{ transition: 'opacity 240ms cubic-bezier(0.22, 1, 0.36, 1), transform 240ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                {/* Illustration - Left Column (First on mobile) */}
                <div className="flex items-center justify-center order-1 h-full min-h-[400px] md:min-h-0">
                  <img
                    src="/illustrations/wh-choose.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full max-w-sm"
                  />
                </div>

              {/* Form - Right Column (Second on mobile) */}
              <div className="order-2">
                    <form onSubmit={handleCourseSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="course-name" className="block text-sm font-medium text-slate-deep mb-2">
                          Full Name <span className="text-neutral-muted">*</span>
                        </label>
                        <input
                          type="text"
                          id="course-name"
                          name="name"
                          required
                          value={courseFormData.name}
                          onChange={handleCourseChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="course-email" className="block text-sm font-medium text-slate-deep mb-2">
                          Email <span className="text-neutral-muted">*</span>
                        </label>
                        <input
                          type="email"
                          id="course-email"
                          name="email"
                          required
                          value={courseFormData.email}
                          onChange={handleCourseChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="course-phone" className="block text-sm font-medium text-slate-deep mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="course-phone"
                          name="phone"
                          value={courseFormData.phone}
                          onChange={handleCourseChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="course-message" className="block text-sm font-medium text-slate-deep mb-2">
                          Message
                        </label>
                        <textarea
                          id="course-message"
                          name="message"
                          rows={4}
                          value={courseFormData.message}
                          onChange={handleCourseChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors resize-none"
                          placeholder="Tell us about your learning goals or questions"
                        />
                      </div>

                      <div className="pt-2">
                        <HoverBorderGradient
                          as="button"
                          containerClassName="rounded-full w-full"
                          className="bg-white text-slate-900 px-6 py-3 font-medium w-full"
                        >
                          Submit Query
                        </HoverBorderGradient>
                      </div>
                    </form>
                  </div>
            </div>

              {/* Mode B: Partnerships */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start w-full ${mode === 'partnerships' ? 'opacity-100 relative translate-y-0' : 'opacity-0 absolute inset-0 translate-y-1.5 pointer-events-none'}`} style={{ transition: 'opacity 240ms cubic-bezier(0.22, 1, 0.36, 1), transform 240ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                {/* Form - Left Column (Second on mobile) */}
                <div className="order-2 md:order-1">
                    <form onSubmit={handlePartnershipSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="partnership-name" className="block text-sm font-medium text-slate-deep mb-2">
                          Full Name <span className="text-neutral-muted">*</span>
                        </label>
                        <input
                          type="text"
                          id="partnership-name"
                          name="name"
                          required
                          value={partnershipFormData.name}
                          onChange={handlePartnershipChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="partnership-email" className="block text-sm font-medium text-slate-deep mb-2">
                          Work Email <span className="text-neutral-muted">*</span>
                        </label>
                        <input
                          type="email"
                          id="partnership-email"
                          name="workEmail"
                          required
                          value={partnershipFormData.workEmail}
                          onChange={handlePartnershipChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors"
                          placeholder="Enter your work email"
                        />
                      </div>

                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-slate-deep mb-2">
                          Organization <span className="text-neutral-muted">*</span>
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          required
                          value={partnershipFormData.organization}
                          onChange={handlePartnershipChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors"
                          placeholder="Enter your organization name"
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-slate-deep mb-2">
                          Role / Designation <span className="text-neutral-muted">*</span>
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          required
                          value={partnershipFormData.role}
                          onChange={handlePartnershipChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors"
                          placeholder="Enter your role or designation"
                        />
                      </div>

                      <div>
                        <label htmlFor="partnership-type" className="block text-sm font-medium text-slate-deep mb-2">
                          Partnership Type <span className="text-neutral-muted">*</span>
                        </label>
                        <select
                          id="partnership-type"
                          name="partnershipType"
                          required
                          value={partnershipFormData.partnershipType}
                          onChange={handlePartnershipChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors"
                        >
                          <option value="">Select partnership type</option>
                          <option value="individual">Individual</option>
                          <option value="organization">Organization</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-slate-deep mb-2">
                          Website or LinkedIn <span className="text-neutral-muted">*</span>
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          required
                          value={partnershipFormData.website}
                          onChange={handlePartnershipChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors"
                          placeholder="Enter website or LinkedIn URL"
                        />
                      </div>

                      <div>
                        <label htmlFor="partnership-description" className="block text-sm font-medium text-slate-deep mb-2">
                          Brief Description <span className="text-neutral-muted">*</span>
                        </label>
                        <textarea
                          id="partnership-description"
                          name="description"
                          required
                          rows={4}
                          value={partnershipFormData.description}
                          onChange={handlePartnershipChange}
                          className="w-full px-4 py-3 border border-neutral-border bg-white text-slate-deep rounded-lg focus:outline-none focus:border-brand transition-colors resize-none"
                          placeholder="Tell us about your partnership interest"
                        />
                      </div>

                      <div className="pt-2">
                        <HoverBorderGradient
                          as="button"
                          containerClassName="rounded-full w-full"
                          className="bg-white text-slate-900 px-6 py-3 font-medium w-full"
                        >
                          Submit Partnership Inquiry
                        </HoverBorderGradient>
                      </div>
                    </form>
              </div>

                {/* Illustration - Right Column (First on mobile) */}
                <div className="flex items-center justify-center order-1 md:order-2 h-full min-h-[400px] md:min-h-0">
                  <img
                    src="/illustrations/about1.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full max-w-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Secondary Info Section */}
        <section className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
            <h2 className="mb-8 text-xl font-medium text-slate-deep">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <p className="text-sm font-medium text-slate-deep mb-2">Email</p>
                <a href="mailto:academy@ugenix.in" className="text-base text-neutral-muted hover:text-brand transition-colors">
                  academy@ugenix.in
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-deep mb-2">Phone</p>
                <a href="tel:+919778568601" className="text-base text-neutral-muted hover:text-brand transition-colors">
                  +91 97785 68601
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-deep mb-2">Location</p>
                <p className="text-base text-neutral-muted">
                  Pathanamthitta, Kerala, India
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

