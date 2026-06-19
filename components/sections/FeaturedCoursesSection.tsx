import Link from 'next/link'

export default function FeaturedCoursesSection() {
  return (
    <section id="courses" className="scroll-mt-24 overflow-hidden bg-bg-950 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="dark-card relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl md:h-96 md:w-96" />

          <div className="mb-10 md:mb-12">
            <h2 className="mb-6 text-2xl font-bold text-text-primary sm:text-3xl md:mb-8 md:text-4xl">
              Featured Courses
            </h2>
            <div className="rounded-card border border-dashed border-border-primary bg-bg-900/50 p-8 text-center sm:p-12 md:p-16">
              <p className="text-lg font-medium text-text-secondary sm:text-xl">
                More sessions coming soon…
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-text-primary sm:text-3xl md:mb-8 md:text-4xl">
              Past Courses
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/courses/prompt-engineering"
                className="group flex items-center gap-4 rounded-card border border-border-primary bg-bg-900/80 p-4 text-left transition-all duration-200 hover:border-orange-500/30 hover:shadow-md sm:p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500/15 sm:h-14 sm:w-14">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-orange-500 sm:text-xl">
                    Prompt Engineering
                  </h3>
                  <p className="mt-0.5 text-sm text-text-secondary">
                    Learn to communicate effectively with AI systems and craft prompts that produce reliable, useful results.
                  </p>
                </div>
                <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-orange-500 transition-all group-hover:gap-2 sm:text-base">
                  View Course
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
