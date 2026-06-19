'use client'

import { useState } from 'react'

type ContactMode = 'courses' | 'partnerships'

const INPUT_CLASS = 'dark-input'
const LABEL_CLASS = 'dark-label'

export default function ContactPage() {
  const [mode, setMode] = useState<ContactMode>('courses')

  const [courseFormData, setCourseFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

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
    console.log('Course query submitted:', courseFormData)
  }

  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Partnership query submitted:', partnershipFormData)
  }

  return (
    <div className="dark-page">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl">
          <div className="dark-card p-8 text-center md:p-10 lg:p-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Get in Touch
            </p>
            <h1 className="mb-6 font-medium text-text-primary">Contact Us</h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary">
              Have questions about courses, learning paths, or partnerships?
              We&apos;re here to help. Reach out through the form below.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl">
          <div className="mb-8 flex justify-center">
            <div className="relative inline-flex rounded-lg border border-border-primary bg-bg-900/60 p-1">
              <div
                className="absolute bottom-1 top-1 rounded-md bg-bg-850 shadow-inner transition-all duration-200 ease-out"
                style={{
                  width: 'calc(50% - 0.5rem)',
                  left: mode === 'courses' ? '0.25rem' : 'calc(50% + 0.25rem)',
                }}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setMode('courses')}
                className={`relative z-10 rounded-md px-6 py-2 text-sm font-medium transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-950 ${
                  mode === 'courses'
                    ? 'text-orange-500'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                aria-pressed={mode === 'courses'}
              >
                Course Queries
              </button>
              <button
                type="button"
                onClick={() => setMode('partnerships')}
                className={`relative z-10 rounded-md px-6 py-2 text-sm font-medium transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-950 ${
                  mode === 'partnerships'
                    ? 'text-orange-500'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                aria-pressed={mode === 'partnerships'}
              >
                Partnerships
              </button>
            </div>
          </div>

          <div className="dark-card relative min-h-[600px] p-8 md:p-10 lg:p-12">
            <div className="relative w-full">
              <div
                className={`grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-12 ${
                  mode === 'courses'
                    ? 'relative translate-y-0 opacity-100'
                    : 'pointer-events-none absolute inset-0 translate-y-1.5 opacity-0'
                }`}
                style={{ transition: 'opacity 240ms cubic-bezier(0.22, 1, 0.36, 1), transform 240ms cubic-bezier(0.22, 1, 0.36, 1)' }}
              >
                <div className="order-1 flex h-full min-h-[400px] items-center justify-center md:min-h-0">
                  <img
                    src="/illustrations/wh-choose.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full max-w-sm opacity-90"
                  />
                </div>

                <div className="order-2">
                  <form onSubmit={handleCourseSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="course-name" className={LABEL_CLASS}>
                        Full Name <span className="text-text-muted">*</span>
                      </label>
                      <input
                        type="text"
                        id="course-name"
                        name="name"
                        required
                        value={courseFormData.name}
                        onChange={handleCourseChange}
                        className={INPUT_CLASS}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="course-email" className={LABEL_CLASS}>
                        Email <span className="text-text-muted">*</span>
                      </label>
                      <input
                        type="email"
                        id="course-email"
                        name="email"
                        required
                        value={courseFormData.email}
                        onChange={handleCourseChange}
                        className={INPUT_CLASS}
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="course-phone" className={LABEL_CLASS}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="course-phone"
                        name="phone"
                        value={courseFormData.phone}
                        onChange={handleCourseChange}
                        className={INPUT_CLASS}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="course-message" className={LABEL_CLASS}>
                        Message
                      </label>
                      <textarea
                        id="course-message"
                        name="message"
                        rows={4}
                        value={courseFormData.message}
                        onChange={handleCourseChange}
                        className={`${INPUT_CLASS} resize-none`}
                        placeholder="Tell us about your learning goals or questions"
                      />
                    </div>

                    <div className="pt-2">
                      <button type="submit" className="btn-primary-orange w-full">
                        Submit Query
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div
                className={`grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-12 ${
                  mode === 'partnerships'
                    ? 'relative translate-y-0 opacity-100'
                    : 'pointer-events-none absolute inset-0 translate-y-1.5 opacity-0'
                }`}
                style={{ transition: 'opacity 240ms cubic-bezier(0.22, 1, 0.36, 1), transform 240ms cubic-bezier(0.22, 1, 0.36, 1)' }}
              >
                <div className="order-2 md:order-1">
                  <form onSubmit={handlePartnershipSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="partnership-name" className={LABEL_CLASS}>
                        Full Name <span className="text-text-muted">*</span>
                      </label>
                      <input
                        type="text"
                        id="partnership-name"
                        name="name"
                        required
                        value={partnershipFormData.name}
                        onChange={handlePartnershipChange}
                        className={INPUT_CLASS}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnership-email" className={LABEL_CLASS}>
                        Work Email <span className="text-text-muted">*</span>
                      </label>
                      <input
                        type="email"
                        id="partnership-email"
                        name="workEmail"
                        required
                        value={partnershipFormData.workEmail}
                        onChange={handlePartnershipChange}
                        className={INPUT_CLASS}
                        placeholder="Enter your work email"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className={LABEL_CLASS}>
                        Organization <span className="text-text-muted">*</span>
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        value={partnershipFormData.organization}
                        onChange={handlePartnershipChange}
                        className={INPUT_CLASS}
                        placeholder="Enter your organization name"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className={LABEL_CLASS}>
                        Role / Designation <span className="text-text-muted">*</span>
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        value={partnershipFormData.role}
                        onChange={handlePartnershipChange}
                        className={INPUT_CLASS}
                        placeholder="Enter your role or designation"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnership-type" className={LABEL_CLASS}>
                        Partnership Type <span className="text-text-muted">*</span>
                      </label>
                      <select
                        id="partnership-type"
                        name="partnershipType"
                        required
                        value={partnershipFormData.partnershipType}
                        onChange={handlePartnershipChange}
                        className={INPUT_CLASS}
                      >
                        <option value="">Select partnership type</option>
                        <option value="individual">Individual</option>
                        <option value="organization">Organization</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="website" className={LABEL_CLASS}>
                        Website or LinkedIn <span className="text-text-muted">*</span>
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        required
                        value={partnershipFormData.website}
                        onChange={handlePartnershipChange}
                        className={INPUT_CLASS}
                        placeholder="Enter website or LinkedIn URL"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnership-description" className={LABEL_CLASS}>
                        Brief Description <span className="text-text-muted">*</span>
                      </label>
                      <textarea
                        id="partnership-description"
                        name="description"
                        required
                        rows={4}
                        value={partnershipFormData.description}
                        onChange={handlePartnershipChange}
                        className={`${INPUT_CLASS} resize-none`}
                        placeholder="Tell us about your partnership interest"
                      />
                    </div>

                    <div className="pt-2">
                      <button type="submit" className="btn-primary-orange w-full">
                        Submit Partnership Inquiry
                      </button>
                    </div>
                  </form>
                </div>

                <div className="order-1 flex h-full min-h-[400px] items-center justify-center md:order-2 md:min-h-0">
                  <img
                    src="/illustrations/about1.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full max-w-sm opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
