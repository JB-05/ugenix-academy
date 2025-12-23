export default function HowItWorksSection() {
  return (
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
  )
}


