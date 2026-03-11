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

          <div className="mt-4">
            <div className="w-full rounded-2xl border border-dashed border-neutral-border bg-white/60 p-5 sm:p-6 flex flex-col justify-center">
              <p className="text-sm sm:text-base text-neutral-muted">
                We regularly run programs with campus clubs and communities. New programs will appear here as they go
                live.
              </p>
            </div>
          </div>

          {/* Past Programs */}
          <div className="mt-10 md:mt-12">
            <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-deep">
              Past Programs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div className="flex flex-col justify-between rounded-2xl bg-white border border-neutral-border shadow-sm p-5 sm:p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-muted mb-1">
                    Completed
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-deep mb-1">
                    V.I.S.T.A. Idea Pitching Competition
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-100 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Registrations closed
                  </p>
                  <p className="mt-2 text-sm text-neutral-muted">
                    Visionary Initiative for Student-Led Transformation And Action &mdash; an idea pitching competition
                    hosted by E.D Club with Ugenix Academy &amp; IEDC CEK.
                  </p>
                </div>
                <p className="mt-4 text-xs text-neutral-muted">
                  Team-based, on-campus program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

