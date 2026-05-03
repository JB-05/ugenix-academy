export default function MaintenanceScreen() {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff8f3 0%, #fff1e7 50%, #ffe7d8 100%)' }}
    >
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl animate-pulse bg-[#f15b2a]/25" />
      <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full blur-3xl animate-pulse [animation-delay:600ms] bg-[#f68a1f]/25" />
      <div className="absolute top-1/3 right-1/4 h-24 w-24 rotate-45 rounded-2xl animate-bounce [animation-duration:3s] bg-[#f47424]/20" />

      <div className="mx-auto flex h-full max-w-3xl items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-full rounded-xl border border-[#f68a1f]/20 bg-white/85 p-7 text-center shadow-2xl backdrop-blur-xl sm:p-9">
          <div className="mb-5 flex justify-center">
            <img src="/illustrations/UAlogo_long_horizontal_LM.svg" alt="Ugenix Academy" className="h-12 w-auto sm:h-14" />
          </div>
          <p
            className="mb-4 text-sm sm:text-base text-[#3a3a3a]"
            style={{ fontFamily: 'Satoshi, var(--font-open-sans), system-ui, sans-serif' }}
          >
            Practical Skills. <span className="font-semibold text-[#f15b2a]">Real Impact.</span> Job Ready.
          </p>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f15b2a]">Under Maintenance</p>
          <h1 className="text-3xl font-bold text-[#131313] sm:text-4xl">We&apos;re building something better for you</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#3a3a3a] italic sm:text-lg">
            &quot;Every great upgrade starts behind the scenes. Thank you for your patience - we&apos;ll be back soon with a
            stronger experience.&quot;
          </p>
          <p className="mt-5 text-sm font-medium text-[#131313]">
            Keep learning, keep growing, and come back to see what&apos;s next.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full animate-bounce bg-[#f15b2a]" />
            <span className="h-2.5 w-2.5 rounded-full animate-bounce [animation-delay:150ms] bg-[#f47424]" />
            <span className="h-2.5 w-2.5 rounded-full animate-bounce [animation-delay:300ms] bg-[#f68a1f]" />
          </div>

          <div className="mt-8 rounded-lg border border-[#f68a1f]/25 bg-[#fffaf5] px-5 py-5 text-left sm:px-6">
            <p className="text-sm font-semibold text-[#131313]">Need help while we are away?</p>
            <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <a href="mailto:academy.ugenix@gmail.com" className="rounded-md bg-white px-3 py-2 text-[#b84b26] hover:bg-[#fff3e8] hover:text-[#9f3f1d] transition-colors">
                academy.ugenix@gmail.com
              </a>
              <a href="tel:+918848736987" className="rounded-md bg-white px-3 py-2 text-[#b84b26] hover:bg-[#fff3e8] hover:text-[#9f3f1d] transition-colors">
                +91 88487 36987
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
