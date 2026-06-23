'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PROMPT_ENGINEERING_ENDED, ACADEMY_REGISTRATION_URL } from '@/lib/constants'

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-1 flex-shrink-0">
        <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="leading-relaxed text-text-secondary">{children}</p>
    </li>
  )
}

function InfoCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`dark-card p-6 sm:p-8 ${className}`}>{children}</div>
  )
}

export default function PromptEngineeringCourse() {
  const router = useRouter()

  return (
    <div className="dark-page">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <button onClick={() => router.back()} className="dark-back-link">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Past Program
          </p>
          <h1 className="mb-6 text-text-primary">Prompt Engineering</h1>
          <p className="mb-8 text-xl leading-relaxed text-text-secondary">
            Master the art and science of communicating effectively with AI systems.
            This comprehensive course teaches you to craft precise prompts, understand
            AI behavior, and leverage artificial intelligence tools to solve complex
            problems across various domains.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-text-primary">What You&apos;ll Learn</h2>
          <ul className="space-y-4">
            <CheckItem>Fundamentals of AI communication and prompt design principles</CheckItem>
            <CheckItem>Advanced techniques for context management and output optimization</CheckItem>
            <CheckItem>Practical applications across content creation, coding, data analysis, and research</CheckItem>
            <CheckItem>Best practices for prompt iteration and troubleshooting</CheckItem>
            <CheckItem>Ethical considerations and responsible AI interaction</CheckItem>
            <CheckItem>Real-world project implementation and portfolio development</CheckItem>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-semibold text-text-primary">Learning Mode</h2>
          <InfoCard>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-text-primary">Structured Learning</h3>
                <p className="leading-relaxed text-text-secondary">
                  This course offers a structured approach to learning with guided instruction
                  and practical application. Participate in live sessions at specified times
                  for hands-on practice, group discussions, and direct instructor feedback.
                  This approach ensures focused learning and practical application through
                  real-time interaction with instructors and peers.
                </p>
              </div>
            </div>
          </InfoCard>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold text-text-primary">Session Details</h2>
          <InfoCard className="border-dashed border-orange-500/30">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">Date</p>
                <p className="text-base font-medium text-text-primary sm:text-lg">1 February 2026</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">Time</p>
                <p className="text-base font-medium text-text-primary sm:text-lg">8:00 PM IST</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">Mode</p>
                <p className="text-base font-medium text-text-primary sm:text-lg">Online · Google Meet</p>
              </div>
            </div>

            <div className="mt-6 border-t border-border-primary pt-4">
              <p className="text-sm leading-relaxed text-text-secondary">
                A nominal registration fee of <span className="font-semibold text-text-primary">₹50</span> was charged to confirm seats.
                This cohort has now concluded.
              </p>
            </div>
          </InfoCard>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-text-primary">Meet the Instructor</h2>
          <InfoCard className="overflow-hidden p-0">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-rows-2 gap-6 sm:gap-8">
                <div className="grid grid-cols-[120px_1fr] items-center gap-4 sm:grid-cols-[150px_1fr] md:grid-cols-[180px_1fr] sm:gap-6">
                  <div className="flex justify-start">
                    <div className="relative aspect-square w-full">
                      <Image
                        src="/instructors/promptEngg_Instructor_Sreeram.jpeg"
                        alt="S Sreeram - AI Practitioner & Educator"
                        fill
                        className="rounded-xl border-2 border-border-primary object-cover sm:rounded-2xl"
                        sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
                      />
                      <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-orange-500/20 blur-xl sm:-bottom-2 sm:-right-2 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold text-text-primary sm:text-xl md:text-2xl lg:text-3xl">S Sreeram</h3>
                      <p className="text-xs font-medium text-text-secondary sm:text-sm md:text-base">AI Practitioner & Educator</p>
                    </div>

                    <div className="flex-shrink-0">
                      <a
                        href="https://linkedin.com/in/sreeram-s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border-primary bg-bg-900 px-3 py-2 text-orange-500 transition-all duration-200 ease-in-out hover:border-orange-500/50 hover:bg-orange-500 hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 sm:gap-2 sm:px-4 sm:py-2.5"
                      >
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="hidden text-xs font-medium sm:inline sm:text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border-primary pt-6 sm:pt-8">
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-sm leading-relaxed text-text-secondary sm:text-base md:text-lg">
                      Sreeram is a B.Tech graduate, developer, and designer who blends clean code, intuitive UX,
                      and real-world product thinking to make AI genuinely useful. He turns vague ideas into
                      precise, structured prompts and focuses on practical, real-world workflows, so you learn
                      how to craft prompts that work in actual products—not just demos.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                      {[
                        'B.Tech graduate building real-world AI-powered applications',
                        'Specializes in clean UX, frontend systems, and prompt design',
                        'Leads student communities and mentoring initiatives in AI & web',
                      ].map((text) => (
                        <div key={text} className="flex items-start gap-2 sm:gap-3">
                          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs text-text-secondary sm:text-sm">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InfoCard>
        </section>

        <section className="mb-8 mt-16 text-center">
          {PROMPT_ENGINEERING_ENDED ? (
            <button
              disabled
              className="cursor-not-allowed rounded-btn border border-border-primary bg-bg-850 px-8 py-4 text-base font-semibold uppercase tracking-wider text-text-muted opacity-80 md:px-12 md:py-5 md:text-lg"
              title="Registration has ended"
            >
              Registration ended
            </button>
          ) : (
            <a
              href={ACADEMY_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-orange px-8 py-4 text-base uppercase tracking-wider md:px-12 md:py-5 md:text-lg"
            >
              Register for This Course
            </a>
          )}
        </section>
      </section>
    </div>
  )
}
