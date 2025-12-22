'use client'

import Link from 'next/link'
import WhyChooseSection from '@/components/WhyChooseSection'

export default function Home() {
  const scrollToNext = () => {
    const nextSection = document.querySelector('section.bg-white')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-neutral-offwhite">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center pt-28 pb-12 sm:pt-32 md:pt-36 lg:pt-40 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full flex-1">
          <div>
            <h1 className="text-balance mb-6 md:mb-8 text-slate-deep font-medium">
              Learn skills that matter, from people who build them
            </h1>
            <p className="text-lg md:text-xl text-neutral-muted mb-8 md:mb-10 leading-relaxed max-w-2xl">
              UgeniX Academy offers practical training for students, professionals, and 
              anyone ready to work with modern technology. Our courses are designed by 
              industry practitioners who understand what skills actually translate to 
              real work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses/prompt-engineering"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white font-medium hover:bg-brand-dark hover:text-white transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Explore Courses
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border border-brand text-brand font-medium hover:bg-brand/5 transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
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
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-24 text-slate-deep font-medium">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-4 text-slate-deep">Students</h3>
              <p className="text-neutral-muted leading-relaxed">
                Complement your studies with practical skills that bridge the gap between 
                academic learning and industry needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-slate-deep">Working Professionals</h3>
              <p className="text-neutral-muted leading-relaxed">
                Stay relevant in a changing field by learning new approaches and tools 
                that enhance your current work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-slate-deep">Beginners</h3>
              <p className="text-neutral-muted leading-relaxed">
                Start from the ground up with clear guidance and structured learning paths 
                designed for those new to the field.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-slate-deep">Tech Enthusiasts</h3>
              <p className="text-neutral-muted leading-relaxed">
                Deepen your understanding and explore advanced concepts with courses 
                built for dedicated learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Academy Section */}
      <WhyChooseSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-20 text-slate-deep font-medium">How It Works</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              <div className="relative">
                <div className="absolute -left-8 top-0 text-neutral-muted text-sm font-medium hidden lg:block">01</div>
                <h3 className="text-xl font-medium mb-4 text-slate-deep">Explore the Course</h3>
                <p className="text-neutral-muted leading-relaxed">
                  Review course details, learning outcomes, and structure to ensure it 
                  aligns with your goals.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 text-neutral-muted text-sm font-medium hidden lg:block">02</div>
                <div className="absolute -left-4 top-0 w-px h-full bg-neutral-border hidden lg:block"></div>
                <h3 className="text-xl font-medium mb-4 text-slate-deep">Learn Online</h3>
                <p className="text-neutral-muted leading-relaxed">
                  Access structured content, videos, and resources through our online 
                  platform at your own pace.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 text-neutral-muted text-sm font-medium hidden lg:block">03</div>
                <div className="absolute -left-4 top-0 w-px h-full bg-neutral-border hidden lg:block"></div>
                <h3 className="text-xl font-medium mb-4 text-slate-deep">Participate Offline</h3>
                <p className="text-neutral-muted leading-relaxed">
                  Join optional in-person sessions for hands-on practice, group work, 
                  and direct instructor guidance.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 text-neutral-muted text-sm font-medium hidden lg:block">04</div>
                <div className="absolute -left-4 top-0 w-px h-full bg-neutral-border hidden lg:block"></div>
                <h3 className="text-xl font-medium mb-4 text-slate-deep">Apply Skills</h3>
                <p className="text-neutral-muted leading-relaxed">
                  Complete real-world projects and scenarios that demonstrate your 
                  mastery and build your portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-neutral-offwhite py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-slate-deep font-medium">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Card */}
            <div className="border border-neutral-border rounded-lg bg-white p-6 flex flex-col h-full">
              <h3 className="text-2xl font-medium mb-3 text-slate-deep">Prompt Engineering</h3>
              <p className="text-neutral-muted mb-6 leading-relaxed flex-grow">
                Learn to communicate effectively with AI systems and craft prompts that produce reliable, useful results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-brand text-white font-medium hover:bg-brand-dark hover:text-white transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 text-sm"
                >
                  Register
                </Link>
                <Link
                  href="/courses/prompt-engineering"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-brand text-brand font-medium hover:bg-brand/5 transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 text-sm"
                >
                  View Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Hidden for Now */}
      {/* TODO: Activate testimonials section when social proof is available */}
      {false && (
        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-20 text-slate-deep font-medium">What Learners Say</h2>
            {/* Testimonials content will go here */}
          </div>
        </section>
      )}

      {/* Call To Action Section */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Text Content - Left on Desktop, First on Mobile */}
              <div className="text-center md:text-left order-1 md:order-1">
                <h2 className="mb-6 text-slate-deep font-medium">Start building skills that actually matter</h2>
                <p className="text-lg text-neutral-muted mb-8 md:mb-12 leading-relaxed">
                  Join a learning experience designed for clarity and practical application.
                </p>
                <Link
                  href="#courses"
                  className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white font-medium hover:bg-brand-dark hover:text-white transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Start Your Learning Journey
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
      </section>
    </div>
  )
}

