export default function FeaturedProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-24 overflow-hidden bg-bg-950 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="dark-card relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="absolute -top-16 -right-10 -z-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl md:h-80 md:w-80" />

          <div className="mb-8 md:mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Beyond Courses
            </p>
            <h2 className="text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
              Featured Programs
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-text-secondary sm:text-base">
              Cohort-based experiences, events, and initiatives we run with partners and student communities.
            </p>
          </div>

          <div className="mt-4">
            <div className="flex w-full flex-col justify-center rounded-card border border-dashed border-border-primary bg-bg-900/50 p-5 sm:p-6">
              <p className="text-sm text-text-secondary sm:text-base">
                We regularly run programs with campus clubs and communities. New programs will appear here as they go
                live.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl md:mb-6 md:text-3xl">
              Past Programs
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
              <div className="flex flex-col justify-between rounded-card border border-border-primary bg-bg-900/80 p-5 sm:p-6">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                    Completed
                  </p>
                  <h3 className="mb-1 text-lg font-semibold text-text-primary sm:text-xl">
                    V.I.S.T.A. Idea Pitching Competition
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Registrations closed
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Visionary Initiative for Student-Led Transformation And Action — an idea pitching competition
                    hosted by E.D Club with Ugenix Academy &amp; IEDC CEK.
                  </p>
                </div>
                <p className="mt-4 text-xs text-text-muted">
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
