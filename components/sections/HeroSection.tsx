'use client'

import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.querySelector('section.bg-white')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
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
  )
}


