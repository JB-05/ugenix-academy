import Link from 'next/link'

export default function FeaturedCoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-24 scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl md:rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white/70 shadow-2xl shadow-brand/5 p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-brand-light/10 rounded-full blur-3xl -z-10" />

          {/* Featured Courses - empty state */}
          <div className="mb-10 md:mb-12">
            <h2 className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-deep">
              Featured Courses
            </h2>
            <div className="rounded-2xl md:rounded-3xl bg-white/60 border border-neutral-border border-dashed p-8 sm:p-12 md:p-16 text-center">
              <p className="text-lg sm:text-xl text-neutral-muted font-medium">
                More sessions coming soon…
              </p>
            </div>
          </div>

          {/* Past Courses */}
          <div>
            <h2 className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-deep">
              Past Courses
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses/prompt-engineering"
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-neutral-border shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-200 text-left"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand/15 transition-colors">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-deep group-hover:text-brand transition-colors">
                    Prompt Engineering
                  </h3>
                  <p className="text-sm text-neutral-muted mt-0.5">
                    Learn to communicate effectively with AI systems and craft prompts that produce reliable, useful results.
                  </p>
                </div>
                <span className="text-brand font-medium text-sm sm:text-base shrink-0 flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Course
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
