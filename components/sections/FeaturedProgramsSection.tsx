import Link from 'next/link'

export default function FeaturedProgramsSection() {
  return (
    <section className="py-16 md:py-20 scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl md:rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white/70 shadow-2xl shadow-brand/5 p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute -top-16 -right-10 w-64 h-64 md:w-80 md:h-80 bg-violet-soft/20 rounded-full blur-3xl -z-10" />

          <div className="mb-8 md:mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brand mb-2">
              Beyond Courses
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-deep">
              Featured Programs
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-muted max-w-2xl">
              Cohort-based experiences, events, and initiatives we run with partners and student communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Link
              href="/vista"
              className="group flex flex-col justify-between rounded-2xl bg-white border border-neutral-border shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-200 p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand/15 transition-colors">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M9 18h6m-4 3h2M8 14a4 4 0 1 1 8 0c0 1.657-.895 2.657-1.664 3.337-.41.357-.674.963-.674 1.588V19h-3.324v-.075c0-.625-.264-1.231-.674-1.588C8.895 16.657 8 15.657 8 14Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 3v2M6 5l1.5 1.5M18 5 16.5 6.5M5 11H3m18 0h-2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-1">
                    Featured
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-deep group-hover:text-brand transition-colors">
                    V.I.S.T.A. Idea Pitching Competition
                  </h3>
                  <p className="mt-1 text-sm text-neutral-muted">
                    Visionary Initiative for Student-Led Transformation And Action &mdash; an idea pitching competition
                    hosted by E.D Club with Ugenix Academy &amp; IEDC CEK.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-neutral-muted">
                <p>Team-based, on-campus program</p>
                <span className="inline-flex items-center gap-1 text-brand font-medium group-hover:gap-2 transition-all">
                  View details
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M9 5l7 7-7 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>

            <div className="rounded-2xl border border-dashed border-neutral-border bg-white/60 p-5 sm:p-6 flex flex-col justify-center">
              <p className="text-sm sm:text-base text-neutral-muted">
                We regularly run programs with campus clubs and communities. New programs will appear here as they go
                live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

