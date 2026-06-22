'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Clock, Mail, MessageCircle } from 'lucide-react'
import { InnerPageHero } from '@/components/pages/InnerPageHero'
import { programViewport } from '@/components/programs/ProgramCards'
import { cn } from '@/lib/utils'

type ContactMode = 'courses' | 'partnerships'

const EASE = [0.22, 1, 0.36, 1] as const

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: 'Email us',
    description: 'academy.ugenix@gmail.com',
    href: 'mailto:academy.ugenix@gmail.com',
  },
  {
    icon: Clock,
    title: 'Response time',
    description: 'We usually reply within 1–2 business days.',
  },
  {
    icon: MessageCircle,
    title: 'What to include',
    description: 'Your goals, program interest, or partnership idea.',
  },
] as const

const INPUT_CLASS = cn(
  'w-full rounded-xl border border-white/[0.08] bg-[#111111] px-4 py-3 text-sm text-white',
  'placeholder:text-zinc-500 transition-colors',
  'focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20'
)

const LABEL_CLASS = 'mb-2 block text-sm font-medium text-zinc-200'

function ContactChannelCard({
  channel,
  index,
}: {
  channel: (typeof CONTACT_CHANNELS)[number]
  index: number
}) {
  const Icon = channel.icon
  const content = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#111111] text-orange-500">
        <Icon size={18} strokeWidth={2} />
      </div>
      <h3 className="mt-4 font-heading text-base font-semibold text-white">{channel.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{channel.description}</p>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={programViewport}
      transition={{ duration: 0.85, delay: 0.08 + index * 0.08, ease: EASE }}
      className="rounded-[18px] border border-white/[0.08] bg-[#0a0a0a] p-5 sm:p-6"
    >
      {'href' in channel && channel.href ? (
        <a href={channel.href} className="block transition-colors hover:text-orange-400">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  )
}

function IllustrationPanel({ mode }: { mode: ContactMode }) {
  const isCourses = mode === 'courses'
  const src = isCourses
    ? '/illustrations/contact-courses.png'
    : '/illustrations/contact-partnerships.png'
  const title = isCourses ? 'Course guidance' : 'Partnership opportunities'
  const alt = isCourses
    ? 'Student exploring courses on a laptop with a support message on phone'
    : 'Two professionals shaking hands to start a partnership'

  return (
    <div className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0a0a0a] p-4 sm:min-h-[360px] sm:p-5">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 50% 40%, rgba(228,87,46,0.16) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="relative z-10 flex w-full flex-col items-center"
        >
          <div className="relative w-full overflow-hidden rounded-[14px] border border-white/[0.06] bg-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <Image
              src={src}
              alt={alt}
              width={640}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-5 text-center text-sm font-medium text-zinc-400">{title}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

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

  const handleCourseChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setCourseFormData({
      ...courseFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePartnershipChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    <div className="bg-[#050505]">
      <InnerPageHero
        label="Get in Touch"
        title="We're here to help you move forward."
        highlight="forward"
        description="Questions about courses, learning paths, or partnerships? Send us a message and our team will get back to you."
      />

      <section className="pb-8 sm:pb-10">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CONTACT_CHANNELS.map((channel, index) => (
              <ContactChannelCard key={channel.title} channel={channel} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] pb-10 sm:pb-14 lg:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex rounded-full border border-white/[0.08] bg-[#0a0a0a] p-1">
              {(
                [
                  { id: 'courses' as const, label: 'Course Queries' },
                  { id: 'partnerships' as const, label: 'Partnerships' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMode(tab.id)}
                  className={cn(
                    'rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200',
                    mode === tab.id
                      ? 'bg-orange-500/15 text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]'
                      : 'text-zinc-400 hover:text-white'
                  )}
                  aria-pressed={mode === tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="rounded-[18px] border border-white/[0.08] bg-[#0a0a0a] p-5 sm:p-6 lg:p-8">
            <AnimatePresence mode="wait">
              {mode === 'courses' ? (
                <motion.div
                  key="courses"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8"
                >
                  <IllustrationPanel mode="courses" />

                  <div className="rounded-[18px] border border-white/[0.06] bg-[#050505] p-5 sm:p-6 lg:p-7">
                    <h2 className="font-heading text-lg font-semibold text-white sm:text-xl">
                      Send a course inquiry
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      Tell us what you want to learn and we&apos;ll guide you to the right program.
                    </p>

                    <form onSubmit={handleCourseSubmit} className="mt-6 space-y-5">
                      <div>
                        <label htmlFor="course-name" className={LABEL_CLASS}>
                          Full Name <span className="text-zinc-500">*</span>
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

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="course-email" className={LABEL_CLASS}>
                            Email <span className="text-zinc-500">*</span>
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
                          className={cn(INPUT_CLASS, 'resize-none')}
                          placeholder="Tell us about your learning goals or questions"
                        />
                      </div>

                      <button type="submit" className="btn-primary-orange w-full sm:w-auto sm:min-w-[180px]">
                        Submit Query
                      </button>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="partnerships"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8"
                >
                  <div className="order-2 rounded-[18px] border border-white/[0.06] bg-[#050505] p-5 sm:p-6 lg:order-1 lg:p-7">
                    <h2 className="font-heading text-lg font-semibold text-white sm:text-xl">
                      Start a partnership conversation
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      Share a few details about your organization and how you&apos;d like to collaborate.
                    </p>

                    <form onSubmit={handlePartnershipSubmit} className="mt-6 space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="partnership-name" className={LABEL_CLASS}>
                            Full Name <span className="text-zinc-500">*</span>
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
                            Work Email <span className="text-zinc-500">*</span>
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
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="organization" className={LABEL_CLASS}>
                            Organization <span className="text-zinc-500">*</span>
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
                            Role / Designation <span className="text-zinc-500">*</span>
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
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="partnership-type" className={LABEL_CLASS}>
                            Partnership Type <span className="text-zinc-500">*</span>
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
                            Website or LinkedIn <span className="text-zinc-500">*</span>
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
                      </div>

                      <div>
                        <label htmlFor="partnership-description" className={LABEL_CLASS}>
                          Brief Description <span className="text-zinc-500">*</span>
                        </label>
                        <textarea
                          id="partnership-description"
                          name="description"
                          required
                          rows={4}
                          value={partnershipFormData.description}
                          onChange={handlePartnershipChange}
                          className={cn(INPUT_CLASS, 'resize-none')}
                          placeholder="Tell us about your partnership interest"
                        />
                      </div>

                      <button type="submit" className="btn-primary-orange w-full sm:w-auto sm:min-w-[220px]">
                        Submit Partnership Inquiry
                      </button>
                    </form>
                  </div>

                  <div className="order-1 lg:order-2">
                    <IllustrationPanel mode="partnerships" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}
