'use client'

import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import WhyChooseSection from '@/components/WhyChooseSection'

export default function Home() {
  const scrollToNext = () => {
    const nextSection = document.querySelector('section.bg-white')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 sm:pt-32 md:pt-34 lg:pt-34 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Glassmorphic Main Container */}
          <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-xl shadow-black/10 p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              <div>
                <h1 className="text-balance mb-6 md:mb-8 text-slate-deep font-medium">
                  Master practical skills from industry practitioners
                </h1>
                <p className="text-lg md:text-xl text-neutral-muted mb-8 md:mb-10 leading-relaxed max-w-2xl">
                  Learn technologies and approaches that matter in real work environments. 
                  Our courses are designed by active practitioners who bridge the gap between 
                  theory and practical application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/courses/prompt-engineering">
                    <HoverBorderGradient
                      as="button"
                      containerClassName="rounded-full"
                      className="bg-white text-slate-900 px-6 py-3 font-medium"
                    >
                      Explore Courses
                    </HoverBorderGradient>
                  </Link>
                  <Link
                    href="/about"
                    className="btn-secondary-baseline"
                  >
                    Learn About the Academy
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                <img
                  src="/illustrations/heor.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full max-w-sm md:max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Down Button */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-neutral-muted hover:text-slate-deep transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-full p-2"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
            
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
            <h2 className="text-center mb-16 md:mb-20 text-slate-deep font-medium">Who This Is For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14 max-w-6xl mx-auto">
              <div className="space-y-3 rounded-2xl border border-gray-300/40 bg-white/[0.04] p-6 transition duration-200 md:hover:border-emerald-400/60 motion-safe:md:hover:-translate-y-0.5 md:hover:shadow-[0_0_25px_0_rgba(52,211,153,0.18)]">
                <h3 className="text-2xl font-semibold text-slate-deep">Just starting out?</h3>
                <p className="text-xs uppercase tracking-[0.08em] text-neutral-muted">Beginners</p>
                <p className="text-neutral-muted leading-relaxed">
                  Begin with clear guidance and structured learning paths designed for those new to the field.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-gray-300/40 bg-white/[0.04] p-6 transition duration-200 md:hover:border-violet-400/60 motion-safe:md:hover:-translate-y-0.5 md:hover:shadow-[0_0_25px_0_rgba(103,88,224,0.18)]">
                <h3 className="text-2xl font-semibold text-slate-deep">Still studying?</h3>
                <p className="text-xs uppercase tracking-[0.08em] text-neutral-muted">Students</p>
                <p className="text-neutral-muted leading-relaxed">
                  Complement your studies with practical skills that bridge the gap between academic learning and real-world industry needs.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-gray-300/40 bg-white/[0.04] p-6 transition duration-200 md:hover:border-sky-400/60 motion-safe:md:hover:-translate-y-0.5 md:hover:shadow-[0_0_25px_0_rgba(56,189,248,0.18)]">
                <h3 className="text-2xl font-semibold text-slate-deep">Already working?</h3>
                <p className="text-xs uppercase tracking-[0.08em] text-neutral-muted">Working Professionals</p>
                <p className="text-neutral-muted leading-relaxed">
                  Stay relevant in a changing field by learning modern approaches and tools that strengthen your current role.
                </p>
              </div>
      
              <div className="space-y-3 rounded-2xl border border-gray-300/40 bg-white/[0.04] p-6 transition duration-200 md:hover:border-amber-400/60 motion-safe:md:hover:-translate-y-0.5 md:hover:shadow-[0_0_25px_0_rgba(251,191,36,0.18)]">
                <h3 className="text-2xl font-semibold text-slate-deep">Always curious?</h3>
                <p className="text-xs uppercase tracking-[0.08em] text-neutral-muted">Tech Enthusiasts</p>
                <p className="text-neutral-muted leading-relaxed">
                  Deepen your understanding and explore advanced concepts through courses built for dedicated learners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Academy Section */}
      <WhyChooseSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
            <h2 className="mb-14 md:mb-16 text-slate-deep font-medium text-center">How It Works</h2>
            <div className="relative">
              <div className="absolute left-0 right-0 top-4 h-px bg-gradient-to-r from-black/5 via-black/7 to-black/10 opacity-[0.06]" aria-hidden="true" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14">
                <div className="space-y-3 md:pl-0">
                  <p className="text-sm font-medium text-neutral-muted">01</p>
                  <h3 className="text-xl font-normal text-slate-deep">Explore the Course</h3>
                  <p className="text-neutral-muted/80 leading-relaxed">
                    Review course details, learning outcomes, and structure to ensure it 
                    aligns with your goals.
                  </p>
                </div>
                <div className="space-y-3 md:pl-1">
                  <p className="text-sm font-medium text-neutral-muted">02</p>
                  <h3 className="text-xl font-medium text-slate-deep">Learn Online</h3>
                  <p className="text-neutral-muted/90 leading-relaxed">
                    Access structured content, videos, and resources through our online 
                    platform at your own pace.
                  </p>
                </div>
                <div className="space-y-3 md:pl-2">
                  <p className="text-sm font-medium text-neutral-muted">03</p>
                  <h3 className="text-xl font-medium text-slate-deep">Participate Offline</h3>
                  <p className="text-neutral-muted leading-snug">
                    Join optional in-person sessions for hands-on practice, group work, 
                    and direct instructor guidance.
                  </p>
                </div>
                <div className="space-y-3 md:pl-3">
                  <p className="text-sm font-semibold text-neutral-muted">04</p>
                  <h3 className="text-xl font-semibold text-slate-deep">Apply Skills</h3>
                  <p className="text-neutral-muted leading-relaxed">
                    Complete real-world projects and scenarios that demonstrate your 
                    mastery and build your portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
            <h2 className="mb-12 text-slate-deep font-medium">Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Course Card */}
              <div className="border border-neutral-border rounded-lg bg-white p-6 flex flex-col h-full">
                <h3 className="text-2xl font-medium mb-3 text-slate-deep">Prompt Engineering</h3>
                <p className="text-neutral-muted mb-6 leading-relaxed flex-grow">
                  Learn to communicate effectively with AI systems and craft prompts that produce reliable, useful results.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/register">
                    <HoverBorderGradient
                      as="button"
                      containerClassName="rounded-full"
                      className="bg-white text-slate-900 px-6 py-3 font-medium"
                    >
                      Register
                    </HoverBorderGradient>
                  </Link>
                  <Link
                    href="/courses/prompt-engineering"
                    className="btn-secondary-baseline text-sm"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Hidden for Now */}
      {/* TODO: Activate testimonials section when social proof is available */}
      {false && (
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
              <h2 className="text-center mb-20 text-slate-deep font-medium">What Learners Say</h2>
              {/* Testimonials content will go here */}
            </div>
          </div>
        </section>
      )}

      {/* Call To Action Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Text Content - Left on Desktop, First on Mobile */}
                <div className="text-center md:text-left order-1 md:order-1">
                  <h2 className="mb-6 text-slate-deep font-medium">Start building skills that actually matter</h2>
                  <p className="text-lg text-neutral-muted mb-8 md:mb-12 leading-relaxed">
                    Join a learning experience designed for clarity and practical application.
                  </p>
                  <Link href="#courses">
                    <HoverBorderGradient
                      as="button"
                      containerClassName="rounded-full"
                      className="bg-white text-slate-900 px-6 py-3 font-medium"
                    >
                      Start Your Learning Journey
                    </HoverBorderGradient>
                  </Link>
                </div>
                {/* Illustration - Right on Desktop, Below on Mobile */}
                <div className="flex justify-center md:justify-end order-2 md:order-2">
                  <img
                    src="/illustrations/cta.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

