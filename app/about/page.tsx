'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
import { InnerPageHero } from '@/components/pages/InnerPageHero'
import { programViewport } from '@/components/programs/ProgramCards'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const
const HOVER_TRANSITION = { duration: 0.75, ease: EASE }

const CARD_CLASS = 'relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0a0a0a]'

const hoverVariants = { rest: {}, hover: {} } as const

const ambientVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: HOVER_TRANSITION },
}

const contentFloatVariants = {
  rest: { y: 0 },
  hover: { y: -4, transition: HOVER_TRANSITION },
}

const descriptionVariants = {
  rest: { opacity: 0.85 },
  hover: { opacity: 1, transition: HOVER_TRANSITION },
}

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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
      {children}
    </p>
  )
}

function IconBadge({ icon: Icon }: { icon: typeof BookOpen }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[#111111] text-orange-500">
      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
    </div>
  )
}

function HoverCard({
  children,
  className,
  index = 0,
}: {
  children: React.ReactNode
  className?: string
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={programViewport}
      transition={{ duration: 0.85, delay: 0.08 + index * 0.08, ease: EASE }}
    >
      <motion.article
        initial="rest"
        whileHover="hover"
        variants={hoverVariants}
        className={cn(CARD_CLASS, className)}
      >
        <motion.div
          variants={ambientVariants}
          className="pointer-events-none absolute inset-0 rounded-[18px]"
          style={{
            background:
              'radial-gradient(ellipse 90% 80% at 20% 15%, rgba(228,87,46,0.1) 0%, transparent 58%)',
          }}
          aria-hidden="true"
        />
        <motion.div variants={contentFloatVariants} className="relative z-10">
          {children}
        </motion.div>
      </motion.article>
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="bg-[#050505]">
      <InnerPageHero
        label="About the Academy"
        title="Where education meets real work."
        highlight="real work"
        description="Ugenix Academy closes the gap between technology education and industry needs — emphasizing thinking and problem-solving that make tools useful in practice."
      />

      <section className="pb-10 sm:pb-14">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {['Practitioner-led', 'Project-first', 'Industry-aligned'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-[#0a0a0a] px-4 py-1.5 text-xs font-medium text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:py-14" aria-labelledby="about-mission">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <SectionEyebrow>Our Mission</SectionEyebrow>
              <h2 id="about-mission" className="font-heading text-xl font-semibold text-white sm:text-2xl">
                Built around what actually matters
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Three principles guide every program, project, and review we deliver.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {MISSION.map((item, index) => (
              <HoverCard key={item.title} index={index} className="p-6 sm:p-7">
                <IconBadge icon={item.icon} />
                <h3 className="mt-5 font-heading text-base font-semibold text-white sm:text-lg">
                  {item.title}
                </h3>
                <motion.p variants={descriptionVariants} className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </motion.p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:py-14" aria-labelledby="about-vision">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className={cn(CARD_CLASS, 'overflow-hidden p-8 sm:p-10 lg:p-12')}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 0% 0%, rgba(228,87,46,0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(198,167,94,0.08) 0%, transparent 50%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <SectionEyebrow>Vision</SectionEyebrow>
              <div className="mb-5 flex justify-center">
                <Target className="h-6 w-6 text-orange-500" strokeWidth={2} />
              </div>
              <h2 id="about-vision" className="sr-only">
                Our Vision
              </h2>
              <blockquote className="font-heading text-lg font-medium italic leading-relaxed text-white sm:text-xl lg:text-[1.65rem] lg:leading-[1.45]">
                &ldquo;To create a learning environment where practical skills meet thoughtful
                understanding, enabling learners to build meaningful work and solve real problems.&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:py-14">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={programViewport}
              transition={{ duration: 0.85, ease: EASE }}
              className={cn(CARD_CLASS, 'lg:col-span-5 p-6 sm:p-8')}
            >
              <SectionEyebrow>Philosophy</SectionEyebrow>
              <p className="mb-5 font-heading text-xl font-semibold leading-snug text-white sm:text-2xl">
                Learn skills that matter, from people who build them.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                The best teachers actively work with the technologies they teach. They understand
                nuances, trade-offs, and real-world constraints — making learning here different from
                generic online courses or academic programs disconnected from industry practice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={programViewport}
              transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
              className={cn(CARD_CLASS, 'lg:col-span-7 p-6 sm:p-8')}
              aria-labelledby="about-approach"
            >
              <SectionEyebrow>Our Approach</SectionEyebrow>
              <h2 id="about-approach" className="font-heading text-xl font-semibold text-white sm:text-2xl">
                How we approach learning
              </h2>
              <p className="mt-2 mb-8 text-sm leading-relaxed text-zinc-400 sm:text-base">
                We design learning around real work so what you study connects directly to the problems
                you are likely to solve.
              </p>

              <div className="space-y-6">
                {APPROACH.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 border-b border-white/[0.06] pb-6 last:border-0 last:pb-0"
                  >
                    <span className="shrink-0 font-heading text-xs font-bold tracking-widest text-orange-500">
                      {item.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <item.icon className="h-4 w-4 shrink-0 text-orange-500" strokeWidth={2} />
                        <h3 className="font-heading text-sm font-semibold text-white sm:text-base">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:py-14" aria-labelledby="about-audience">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-8 text-center sm:mb-10"
          >
            <SectionEyebrow>Who It&apos;s For</SectionEyebrow>
            <h2 id="about-audience" className="font-heading text-xl font-semibold text-white sm:text-2xl">
              Built for curious, growth-focused builders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              What matters most isn&apos;t your current role but your mindset. If you&apos;re willing to
              understand deeply and apply what you learn, this academy is for you.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {AUDIENCE.map((item, index) => (
              <HoverCard key={item.title} index={index} className="p-5 sm:p-6">
                <div className="flex gap-4">
                  <IconBadge icon={item.icon} />
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-semibold text-white">{item.title}</h3>
                    <motion.p
                      variants={descriptionVariants}
                      className="mt-2 text-sm leading-relaxed text-zinc-400"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/[0.06] py-10 sm:py-14"
        aria-labelledby="about-ugenix"
      >
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className={cn(CARD_CLASS, 'overflow-hidden')}
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-10">
                <SectionEyebrow>Our Parent Company</SectionEyebrow>
                <h2 id="about-ugenix" className="font-heading text-xl font-semibold text-white sm:text-2xl">
                  An initiative by Ugenix Technologies LLP
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
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

              <div className="flex flex-col items-center justify-center gap-5 border-t border-white/[0.06] bg-[#050505] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <p className="text-sm text-zinc-500">Powered by</p>
                <a
                  href="https://ugenix.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  <Image
                    src="/illustrations/Ugenix Logo Long DM.svg"
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
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 transition-colors hover:text-orange-400"
                >
                  Visit ugenix.in
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:pb-14 lg:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className={cn(CARD_CLASS, 'overflow-hidden p-8 sm:p-10 lg:p-12')}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(228,87,46,0.1) 0%, transparent 62%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <SectionEyebrow>Our Commitment</SectionEyebrow>
              <blockquote className="mb-10 font-heading text-base italic leading-relaxed text-zinc-300 sm:text-lg">
                &ldquo;Meaningful learning that builds real understanding, develops practical skills, and
                helps you do work that matters — with structure, guidance, and expertise so your skills
                translate into impact.&rdquo;
              </blockquote>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/programs" className="btn-hero-primary group w-full sm:w-auto">
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}
