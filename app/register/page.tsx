'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    learningMode: 'online',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for future API integration
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white">
        <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 text-brand mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-semibold mb-4 text-slate-deep">Registration Successful</h1>
            <p className="text-lg text-slate-medium mb-8 leading-relaxed">
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
    )
  }

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="mb-4 text-slate-deep">Course Registration</h1>
          <p className="text-lg text-slate-medium leading-relaxed">
            Complete the form below to register for your chosen course. 
            We'll contact you with enrollment details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-deep mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-medium bg-white text-slate-deep focus:outline-none focus:border-brand transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-deep mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-medium bg-white text-slate-deep focus:outline-none focus:border-brand transition-colors"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-deep mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-medium bg-white text-slate-deep focus:outline-none focus:border-brand transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="learningMode" className="block text-sm font-medium text-slate-deep mb-2">
              Learning Mode
            </label>
            <select
              id="learningMode"
              name="learningMode"
              required
              value={formData.learningMode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-medium bg-white text-slate-deep focus:outline-none focus:border-brand transition-colors"
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-8 py-4 bg-brand text-white font-medium hover:bg-brand-dark hover:text-white transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}




