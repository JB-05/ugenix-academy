export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-bg-950 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="dark-card p-8 md:p-10 lg:p-12">
          <h2 className="mb-14 text-center font-medium text-text-primary md:mb-16">How It Works</h2>
          <div className="relative">
            <div className="absolute left-0 right-0 top-4 h-px bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-60" aria-hidden="true" />
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-14 lg:grid-cols-4">
              {[
                { step: '01', title: 'Explore the Course', body: 'Review course details, learning outcomes, and structure to ensure it aligns with your goals.' },
                { step: '02', title: 'Learn Online', body: 'Access structured content, videos, and resources through our online platform at your own pace.' },
                { step: '03', title: 'Participate Offline', body: 'Join optional in-person sessions for hands-on practice, group work, and direct instructor guidance.' },
                { step: '04', title: 'Apply Skills', body: 'Complete real-world projects and scenarios that demonstrate your mastery and build your portfolio.' },
              ].map((item) => (
                <div key={item.step} className="space-y-3">
                  <p className="text-sm font-medium text-orange-500">{item.step}</p>
                  <h3 className="text-xl font-medium text-text-primary">{item.title}</h3>
                  <p className="leading-relaxed text-text-secondary">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
