import Image from 'next/image'
import Link from 'next/link'
import {
  Target,
  Compass,
  BookOpen,
  Users,
  Code2,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Wrench,
  Handshake,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ACCENT = '#FF6B00'
const CARD_BG = '#0B0F14'
const MUTED = '#A3A9B7'

const NEUMORPHIC = cn(
  'relative overflow-hidden rounded-[20px] border border-white/[0.03]',
  'shadow-[-6px_-6px_16px_rgba(255,255,255,0.04),10px_12px_28px_rgba(0,0,0,0.7),inset_1px_1px_1px_rgba(255,255,255,0.06)]'
)

const MISSION = [
  {
    icon: BookOpen,
    title: 'Teach What Matters',
    description:
      'Every course is designed around skills and approaches that translate directly to real work.',
  },
  {
    icon: Code2,
    title: 'Learn from Practitioners',
    description:
      'Instructors are active professionals who bring current, real-world context to each topic.',
  },
  {
    icon: Wrench,
    title: 'Practice Over Theory',
    description:
      'You apply ideas through hands-on work so concepts are understood in action, not abstraction.',
  },
]

const APPROACH = [
  {
    step: '01',
    icon: Sparkles,
    title: 'Applied, not abstract',
    description:
      'Concepts are introduced through concrete problems and real scenarios tied to practical use.',
  },
  {
    step: '02',
    icon: Lightbulb,
    title: 'Start with why',
    description:
      'Each topic begins with why it exists, what it solves, and how it fits the bigger picture.',
  },
  {
    step: '03',
    icon: Compass,
    title: 'Learn by doing',
    description:
      'Projects mirror real environments so you build confidence through relevant practice.',
  },
]

const AUDIENCE = [
  {
    icon: GraduationCap,
    title: 'Students & graduates',
    description: 'Bridging academic learning with what industry actually needs.',
  },
  {
    icon: Users,
    title: 'Working professionals',
    description: 'Staying current with new tools, approaches, and best practices.',
  },
  {
    icon: Target,
    title: 'Career switchers',
    description: 'Starting from scratch with structure, guidance, and real projects.',
  },
  {
    icon: Handshake,
    title: 'Builders & enthusiasts',
    description: 'Curious minds who value understanding over memorization.',
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
      {children}
    </p>
  )
}

function IconBadge({ icon: Icon }: { icon: typeof BookOpen }) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
      style={{ border: '1px solid rgba(255,107,0,0.28)', color: ACCENT }}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </div>
  )
}

function GradientOrb({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute rounded-full bg-gradient-to-br from-orange-500/20 via-orange-500/8 to-gold/10 blur-3xl',
        className
      )}
    />
  )
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pb-20 pt-28 md:pt-32" style={{ background: '#05070A' }}>
      {/* Ambient background */}
      <div className="hero-dark-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <GradientOrb className="left-1/2 top-0 h-[32rem] w-[min(100%,50rem)] -translate-x-1/2" />
      <GradientOrb className="bottom-40 left-0 h-72 w-72 -translate-x-1/3 from-gold/15" />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
        {/* ── Hero ── */}
        <header className="mb-20 md:mb-28">
          <div className="max-w-3xl">
            <Eyebrow>About the Academy</Eyebrow>
            <h1 className="mb-6 font-sans text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.08] text-white">
              Where education meets{' '}
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#E4572E] to-[#C6A75E] bg-clip-text text-transparent">
                real work
              </span>
            </h1>
            <p className="mb-4 text-lg leading-relaxed" style={{ color: MUTED }}>
              Ugenix Academy closes the gap between technology education and real work needs.
            </p>
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              We emphasize thinking and problem-solving approaches that make tools useful in
              practice — not just the tools themselves.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Practitioner-led', 'Project-first', 'Industry-aligned'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ── Mission pillars ── */}
        <section className="relative mb-20 md:mb-28" aria-labelledby="about-mission">
          <GradientOrb className="left-1/2 top-0 h-48 w-96 -translate-x-1/2 opacity-70" />
          <div className="relative z-10 mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Our Mission</Eyebrow>
              <h2 id="about-mission" className="font-sans text-2xl font-bold text-white md:text-3xl">
                Built around what actually matters
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed" style={{ color: MUTED }}>
              Three principles guide every program, project, and review we deliver.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {MISSION.map((item) => (
              <article
                key={item.title}
                className={cn(NEUMORPHIC, 'p-7 transition-transform duration-300 hover:-translate-y-0.5')}
                style={{ background: CARD_BG }}
              >
                <IconBadge icon={item.icon} />
                <h3 className="mt-5 mb-2 font-sans text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Vision spotlight ── */}
        <section className="glass-card-warm relative mb-20 overflow-hidden p-8 md:mb-28 md:p-12 lg:p-14" aria-labelledby="about-vision">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 0% 0%, rgba(255,107,0,0.22), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(198,167,94,0.12), transparent 50%)',
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Eyebrow>Vision</Eyebrow>
            <div className="mb-6 flex justify-center">
              <Target className="h-6 w-6" style={{ color: ACCENT }} strokeWidth={1.75} />
            </div>
            <h2 id="about-vision" className="sr-only">Our Vision</h2>
            <blockquote className="font-sans text-xl font-medium italic leading-relaxed text-white md:text-2xl lg:text-[1.75rem] lg:leading-[1.45]">
              &ldquo;To create a learning environment where practical skills meet thoughtful
              understanding, enabling learners to build meaningful work and solve real problems.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* ── Philosophy + Approach ── */}
        <section className="mb-20 md:mb-28">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Philosophy */}
            <div className={cn(NEUMORPHIC, 'lg:col-span-5 p-8 md:p-10')} style={{ background: CARD_BG }}>
              <Eyebrow>Philosophy</Eyebrow>
              <p className="mb-6 font-sans text-2xl font-bold leading-snug text-white md:text-[1.65rem]">
                Learn skills that matter, from people who build them.
              </p>
              <p className="text-sm leading-relaxed md:text-base" style={{ color: MUTED }}>
                The best teachers actively work with the technologies they teach. They understand
                nuances, trade-offs, and real-world constraints — making learning here different from
                generic online courses or academic programs disconnected from industry practice.
              </p>
            </div>

            {/* Approach */}
            <div
              className={cn(NEUMORPHIC, 'lg:col-span-7 p-8 md:p-10')}
              style={{ background: CARD_BG }}
              aria-labelledby="about-approach"
            >
              <Eyebrow>Our Approach</Eyebrow>
              <h2 id="about-approach" className="mb-2 font-sans text-2xl font-bold text-white">
                How we approach learning
              </h2>
              <p className="mb-8 text-sm leading-relaxed md:text-base" style={{ color: MUTED }}>
                We design learning around real work so what you study connects directly to the problems
                you are likely to solve.
              </p>

              <div className="space-y-6">
                {APPROACH.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 border-b border-white/[0.06] pb-6 last:border-0 last:pb-0"
                  >
                    <span
                      className="shrink-0 font-sans text-xs font-bold tracking-widest"
                      style={{ color: ACCENT }}
                    >
                      {item.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <item.icon className="h-4 w-4 shrink-0" style={{ color: ACCENT }} strokeWidth={1.75} />
                        <h3 className="font-sans text-sm font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Who it's for ── */}
        <section className="relative mb-20 md:mb-28" aria-labelledby="about-audience">
          <GradientOrb className="left-1/2 top-0 h-40 w-[28rem] -translate-x-1/2 opacity-60" />
          <div className="relative z-10 mb-10 text-center">
            <Eyebrow>Who It&apos;s For</Eyebrow>
            <h2 id="about-audience" className="font-sans text-2xl font-bold text-white md:text-3xl">
              Built for curious, growth-focused builders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: MUTED }}>
              What matters most isn&apos;t your current role but your mindset. If you&apos;re willing to
              understand deeply and apply what you learn, this academy is for you.
            </p>
          </div>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            {AUDIENCE.map((item) => (
              <article
                key={item.title}
                className="glass-card-item group relative overflow-hidden p-6 transition-all duration-300 hover:border-white/[0.12]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#FF6B00] via-[#E4572E] to-transparent opacity-70 transition-opacity group-hover:opacity-100"
                />
                <div className="flex gap-4">
                  <IconBadge icon={item.icon} />
                  <div className="min-w-0">
                    <h3 className="mb-1.5 font-sans font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Ugenix Technologies ── */}
        <section
          className={cn(NEUMORPHIC, 'relative mb-20 overflow-hidden md:mb-28')}
          style={{ background: CARD_BG }}
          aria-labelledby="about-ugenix"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,107,0,0.06) 0%, transparent 45%, rgba(198,167,94,0.05) 100%)',
            }}
          />
          <div className="relative z-10 grid lg:grid-cols-2">
            <div className="p-8 md:p-10 lg:p-12">
              <Eyebrow>Our Parent Company</Eyebrow>
              <h2 id="about-ugenix" className="mb-6 font-sans text-2xl font-bold text-white">
                An initiative by Ugenix Technologies LLP
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base" style={{ color: MUTED }}>
                <p>
                  Ugenix Academy is backed by Ugenix Technologies LLP — a company that builds real
                  products and solves real problems. This connection shapes how we think about training.
                </p>
                <p>
                  The same standards and practices we use in our own product work inform how we design
                  and deliver courses. When we teach a skill, it&apos;s because we&apos;ve seen it work in
                  practice.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 border-t border-white/[0.06] bg-gradient-to-br from-orange-500/[0.06] via-white/[0.02] to-gold/[0.04] p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm" style={{ color: MUTED }}>
                Powered by
              </p>
              <a
                href="https://ugenix.in"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-80"
              >
                <Image
                  src="/illustrations/Ugenix Logo Long.svg"
                  alt="Ugenix Technologies LLP"
                  width={200}
                  height={44}
                  className="h-11 w-auto"
                />
              </a>
              <a
                href="https://ugenix.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white"
                style={{ color: ACCENT }}
              >
                Visit ugenix.in
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="glass-card-warm p-8 md:p-12 lg:p-14">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <Eyebrow>Our Commitment</Eyebrow>
            <blockquote className="mb-10 font-sans text-lg italic leading-relaxed text-white/80 md:text-xl">
              &ldquo;Meaningful learning that builds real understanding, develops practical skills, and
              helps you do work that matters — with structure, guidance, and expertise so your skills
              translate into impact.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/#programs" className="btn-hero-primary group w-full sm:w-auto">
                <span className="relative z-10 text-white">Explore Programs</span>
                <ArrowRight
                  className="relative z-10 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
              <Link href="/contact" className="btn-hero-secondary w-full sm:w-auto">
                Contact Us
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
