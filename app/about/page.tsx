'use client'

import { useRef, useEffect, useState, KeyboardEvent } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const sectionOffsetsRef = useRef<number[]>([])
  const currentIndexRef = useRef(0)
  const [isHorizontal, setIsHorizontal] = useState(false)

  const handleWheel = (event: WheelEvent) => {
    if (!isHorizontal || (typeof window !== 'undefined' && window.innerWidth < 1024)) {
      return
    }

    const container = scrollRef.current
    const offsets = sectionOffsetsRef.current
    if (!container || offsets.length === 0) return

    const deltaY = event.deltaY
    if (deltaY === 0) return

    const lastIndex = offsets.length - 1
    let nextIndex = currentIndexRef.current

    if (deltaY > 0) {
      // Move forward one section
      if (currentIndexRef.current >= lastIndex) {
        // At last section: allow native vertical scrolling to reach footer
        return
      }
      nextIndex = Math.min(currentIndexRef.current + 1, lastIndex)
    } else if (deltaY < 0) {
      // Move backward one section
      if (currentIndexRef.current <= 0) {
        // At first section: allow native vertical scrolling (e.g., to go back up)
        return
      }
      nextIndex = Math.max(currentIndexRef.current - 1, 0)
    }

    if (nextIndex === currentIndexRef.current) {
      return
    }

    // Lock vertical scrolling while moving between horizontal sections
    event.preventDefault()

    currentIndexRef.current = nextIndex
    const targetLeft = offsets[nextIndex]

    container.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    })
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isHorizontal || (typeof window !== 'undefined' && window.innerWidth < 1024)) {
      return
    }

    const container = scrollRef.current
    if (!container) return

    const step = container.clientWidth * 0.9

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      container.scrollBy({ left: step, behavior: 'smooth' })
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      container.scrollBy({ left: -step, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const updateMode = () => {
      setIsHorizontal(mediaQuery.matches)
    }

    updateMode()
    mediaQuery.addEventListener('change', updateMode)

    return () => {
      mediaQuery.removeEventListener('change', updateMode)
    }
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container || !isHorizontal) {
      sectionOffsetsRef.current = []
      return
    }

    const track = container.firstElementChild as HTMLElement | null
    if (!track) {
      sectionOffsetsRef.current = []
      return
    }

    const sections = Array.from(track.children) as HTMLElement[]

    const offsets = sections.map((section) => {
      const sectionLeft = section.offsetLeft
      const sectionWidth = section.clientWidth
      const viewportWidth = container.clientWidth
      const centeredLeft = sectionLeft - (viewportWidth - sectionWidth) / 2

      const maxScrollable = container.scrollWidth - viewportWidth
      return Math.min(Math.max(centeredLeft, 0), Math.max(maxScrollable, 0))
    })

    sectionOffsetsRef.current = offsets

    // Ensure we start at the first section
    currentIndexRef.current = 0
    if (offsets.length > 0) {
      container.scrollTo({ left: offsets[0], behavior: 'auto' })
    }
  }, [isHorizontal])

  useEffect(() => {
    const container = scrollRef.current
    if (!container || !isHorizontal) return

    const listener = (event: WheelEvent) => handleWheel(event)

    container.addEventListener('wheel', listener, { passive: false })

    return () => {
      container.removeEventListener('wheel', listener)
    }
  }, [isHorizontal])

  return (
    <div className="min-h-screen">
      <div
        ref={scrollRef}
        className="h-auto lg:h-screen overflow-visible lg:overflow-x-auto lg:overflow-y-hidden scroll-smooth lg:pt-24"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="flex flex-col lg:flex-row h-full items-center px-6 sm:px-10 lg:px-16 gap-12 sm:gap-14 lg:gap-16 lg:snap-x lg:snap-mandatory lg:[scroll-padding-inline:4rem]">
          {/* Intro Section */}
          <section id="about-intro" className="flex-shrink-0 w-[85vw] max-w-5xl snap-start mt-32 lg:mt-0" aria-labelledby="about-intro-heading">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 px-4 sm:px-6 lg:px-8 py-16 lg:py-12 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <h1 id="about-intro-heading" className="mb-6 text-slate-deep font-medium text-left">About the Academy</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-12">
              <div className="flex-1">
                <p className="text-lg text-neutral-muted leading-relaxed mb-6">
                  Ugenix Academy closes the gap between technology education and real work needs.
                </p>
                <p className="text-lg text-neutral-muted leading-relaxed">
                  We emphasize thinking and problem‑solving approaches that make tools useful in practice, not just the tools themselves.
                </p>
                <p className="mt-6 text-sm text-neutral-muted opacity-60">
                  <span className="inline-block animate-slide-hint">Scroll →</span>
                </p>
              </div>
              <div className="flex justify-center md:justify-end flex-none">
                <img
                  src="/illustrations/about1.svg"
                  aria-hidden="true"
                  className="w-full max-w-[85%] sm:max-w-xs md:max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
          </section>

          {/* Vision */}
          <section id="about-vision" className="flex-shrink-0 w-[85vw] max-w-5xl snap-start" aria-labelledby="about-vision-heading">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 px-4 sm:px-6 lg:px-8 py-16 lg:py-12 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="mx-auto max-w-4xl">
              <h2 id="about-vision-heading" className="mb-6 text-slate-deep font-medium text-left">Vision</h2>
              <div className="border-l-2 border-brand pl-8 py-2">
                <p className="text-xl md:text-2xl text-slate-deep leading-relaxed font-medium italic">
                  To create a learning environment where practical skills meet thoughtful understanding, 
                  enabling learners to build meaningful work and solve real problems.
                </p>
              </div>
            </div>
          </div>
          </section>

          {/* Mission */}
          <section id="about-mission" className="flex-shrink-0 w-[85vw] max-w-5xl snap-start" aria-labelledby="about-mission-heading">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 px-4 sm:px-6 lg:px-8 py-16 lg:py-12 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="mx-auto max-w-4xl">
              <h2 id="about-mission-heading" className="mb-8 text-slate-deep font-medium text-center">Mission</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-slate-deep mb-3">Teach What Matters</h3>
                  <p className="text-neutral-muted leading-relaxed">
                    We focus on skills and approaches that translate directly to real work, designing every course around what you will actually do.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-deep mb-3">Learn from Practitioners</h3>
                  <p className="text-neutral-muted leading-relaxed">
                    Our instructors are active professionals who work with these technologies daily and bring current, real‑world context to each topic.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-deep mb-3">Practice Over Theory</h3>
                  <p className="text-neutral-muted leading-relaxed">
                    You spend your time applying ideas through practical work, so concepts are understood in action rather than as abstract theory.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </section>

          {/* Motto / Philosophy */}
          <section id="about-philosophy" className="flex-shrink-0 w-[85vw] max-w-5xl snap-start">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 px-4 sm:px-6 lg:px-8 py-16 lg:py-12 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="mx-auto max-w-4xl">
              <div className="border-t border-neutral-border pt-8 lg:pt-6">
                <p className="text-2xl md:text-3xl text-slate-deep font-medium mb-6 leading-relaxed text-center">
                  Learn skills that matter, from people who build them.
                </p>
                <div className="space-y-6 text-neutral-muted leading-relaxed">
                  <p>
                  The best teachers actively work with the technologies they teach. They understand nuances, trade-offs, and real-world constraints. This perspective makes learning here different from generic online courses or academic programs disconnected from industry practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </section>

          {/* How We Approach Learning */}
          <section id="about-approach" className="flex-shrink-0 w-[85vw] max-w-5xl snap-start" aria-labelledby="about-approach-heading">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 px-4 sm:px-6 lg:px-8 py-16 lg:py-12 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="mx-auto max-w-4xl">
              <h2 id="about-approach-heading" className="mb-8 text-slate-deep font-medium text-center">How We Approach Learning</h2>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-12">
                <div className="order-0 md:order-1 flex-1 max-w-prose space-y-5 text-neutral-muted leading-relaxed">
                  <p>
                    We design learning around real work so what you study connects directly to the kinds of problems you are likely to solve.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-base font-medium text-slate-deep">
                        Applied, not abstract
                      </h3>
                      <p>
                        Concepts are introduced through concrete problems and real scenarios, so ideas are always tied to practical use.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-slate-deep">
                        Start with why
                      </h3>
                      <p>
                        Each topic starts with why it exists, what it solves, and how it fits into the bigger picture of building and maintaining systems.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-slate-deep">
                        Learn by doing
                      </h3>
                      <p>
                        You work on projects that mirror real environments so you gain confidence through relevant, hands‑on practice.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-0 flex justify-center md:justify-start flex-none">
                  <img
                    src="/illustrations/howweapproach.svg"
                    aria-hidden="true"
                    className="w-full max-w-[85%] sm:max-w-sm h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          </section>

          {/* Who This Academy Is For */}
          <section id="about-audience" className="flex-shrink-0 w-[85vw] max-w-5xl snap-start" aria-labelledby="about-audience-heading">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 px-4 sm:px-6 lg:px-8 py-16 lg:py-12 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="mx-auto max-w-4xl">
              <h2 id="about-audience-heading" className="mb-8 text-slate-deep font-medium text-center">Who This Academy Is For</h2>
              <div className="space-y-6 text-neutral-muted leading-relaxed">
                
                <p>
                  You might be a student bridging academic learning and industry needs, a working professional staying current with new approaches, someone starting from scratch, or a tech enthusiast deepening your understanding.
                </p>
                <p>
                  This academy is for people curious about how things work and who want to build real things. It's for those who value understanding over memorization and prefer learning from practitioners over theory alone.
                </p>
                <p>
                  What matters most isn't your current role but your mindset—if you're growth‑focused, builder‑oriented, and willing to understand deeply, this academy is for you. Explore our <Link href="/#courses" className="text-brand hover:text-brand-dark transition-colors">courses</Link> or <Link href="/contact" className="text-brand hover:text-brand-dark transition-colors">contact us</Link> to learn more.
                </p>

              </div>
            </div>
          </div>
          </section>

          {/* Relationship with Ugenix Technologies LLP */}
          <section id="about-relationship" className="flex-shrink-0 w-[85vw] max-w-5xl snap-start" aria-labelledby="about-relationship-heading">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 px-4 sm:px-6 lg:px-8 py-16 lg:py-12 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="mx-auto max-w-4xl">
              <div className="border-t border-neutral-border pt-8 lg:pt-6">
                <h2 id="about-relationship-heading" className="mb-6 text-slate-deep font-medium text-center">Relationship with Ugenix Technologies LLP</h2>
                <div className="space-y-5 text-neutral-muted leading-relaxed text-sm">
                  <p>
                    Ugenix Academy is an initiative by Ugenix Technologies LLP, a technology company 
                    that builds real products and solves real problems. This connection isn't just 
                    organizational; it shapes how we think about training.
                  </p>
                  <p>
                    The same standards and practices we use in our own product work inform how we 
                    design and deliver courses. When we teach a skill or approach, it's because we've 
                    seen it work in practice and believe it helps learners do meaningful work.
                  </p>
                  <div className="mt-8 pt-6 border-t border-neutral-border">
                    <div className="flex items-center gap-5">
                      <p className="text-lg text-neutral-muted">An initiative by</p>
                      <a
                        href="https://ugenix.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity duration-200 ease-in-out hover:opacity-80"
                      >
                        <img
                          src="/illustrations/Ugenix Logo Long.svg"
                          alt="Ugenix Technologies LLP"
                          className="h-12 w-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>

          {/* Closing Note */}
          <section id="about-closing" className="flex-shrink-0 w-[85vw] max-w-5xl snap-start relative">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 px-4 sm:px-6 lg:px-8 py-16 lg:py-12 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="mx-auto max-w-4xl">
              <div className="border-t border-neutral-border pt-8 lg:pt-6">
                <p className="text-lg text-neutral-muted leading-relaxed italic">
                  "Our commitment is to meaningful learning that builds real understanding, develops practical skills, and helps you do work that matters. We provide structure, guidance, and expertise so you can apply what you've learned to real problems and see your skills translate into impact."
                </p>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-xs text-neutral-muted opacity-40 hidden lg:block">
              End of story
            </div>
          </div>
          </section>

          {/* Trailing spacer for proper centering of last panels */}
          <div className="hidden lg:block flex-shrink-0 w-16" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
