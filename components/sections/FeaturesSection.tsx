'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowIcon } from './HeroTrustLogos'

const FEATURES = [
  {
    title: 'Industry Projects',
    description: 'Work on real projects scoped by industry experts.',
    icon: IndustryProjectsIcon,
  },
  {
    title: 'Expert Code Reviews',
    description: 'Get feedback from practicing professionals, not just teachers.',
    icon: CodeReviewsIcon,
  },
  {
    title: 'Team Collaboration',
    description: 'Work in teams, just like real companies.',
    icon: TeamCollaborationIcon,
  },
  {
    title: 'Career Support',
    description: 'Resume, interview prep & placement guidance.',
    icon: CareerSupportIcon,
  },
]

function IndustryProjectsIcon() {
  return (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L4 7V12C4 16.5 7.5 20.5 12 21C16.5 20.5 20 16.5 20 12V7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 11H10M14 11H16M12 9V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CodeReviewsIcon() {
  return (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 9L10 11L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function TeamCollaborationIcon() {
  return (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="16" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6.5 18C7.2 15.8 8.8 14.5 11 14.5H13C15.2 14.5 16.8 15.8 17.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CareerSupportIcon() {
  return (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 19C6.5 15.5 8.8 13.5 12 13.5C15.2 13.5 17.5 15.5 18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 6L18 4M18 4L20 6M18 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PortfolioMockup() {
  const avatars = ['#E4572E', '#C6A75E', '#EB6844', '#BDBDBD', '#757575', '#E4572E']

  return (
    <div className="relative mt-auto flex items-end justify-center pt-6">
      {/* Tablet */}
      <div className="relative z-10 w-[78%] -mr-6 rounded-xl border border-border-primary bg-bg-850 p-1.5 shadow-2xl shadow-black/40">
        <div className="rounded-lg bg-bg-900 p-2">
          <div className="mb-2 flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-500/60"/>
            <div className="h-1 w-12 rounded bg-border-primary"/>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {avatars.map((color, i) => (
              <div key={i} className="aspect-square rounded bg-bg-800 p-1">
                <div className="h-full w-full rounded-sm" style={{ backgroundColor: `${color}40` }}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Phone */}
      <div className="relative z-20 w-[32%] rounded-[14px] border border-border-primary bg-bg-850 p-1 shadow-2xl shadow-black/50">
        <div className="rounded-[10px] bg-bg-900 p-1.5">
          <div className="mb-1.5 h-1 w-6 mx-auto rounded-full bg-border-hover"/>
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded bg-orange-500/30"/>
            <div className="h-1 w-3/4 rounded bg-border-primary"/>
            <div className="grid grid-cols-2 gap-0.5 pt-1">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-sm bg-bg-800"/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string
  description: string
  icon: () => JSX.Element
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group flex flex-col rounded-card border border-border-primary bg-bg-850/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:bg-bg-850"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-input border border-border-primary bg-bg-800/80">
          <Icon />
        </div>
      </div>
      <h3 className="font-heading text-base font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{description}</p>
      <div className="mt-4 text-orange-500 transition-transform duration-200 group-hover:translate-x-1">
        <ArrowIcon className="h-4 w-4" />
      </div>
    </motion.article>
  )
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-bg-950 py-16 md:py-24 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 hero-dark-grid opacity-30"/>
      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {/* Left — headline + cube */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-card border border-border-primary bg-bg-850/40 p-6 md:p-8 lg:col-span-3 lg:row-span-2"
          >
            <h2 className="font-heading text-2xl font-bold leading-snug text-text-primary md:text-3xl lg:text-[1.75rem] xl:text-3xl">
              Everything you need to become job-ready.
            </h2>
            <div className="mt-auto flex flex-1 items-end justify-center pt-8">
              <Image
                src="/assets/feature-cube.svg"
                alt=""
                width={240}
                height={240}
                className="w-full max-w-[220px] animate-glow-pulse opacity-90"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Middle — 2×2 feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:row-span-2 lg:grid-cols-2 lg:grid-rows-2">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>

          {/* Right — portfolio showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex flex-col overflow-hidden rounded-card border border-border-primary bg-bg-850/40 p-6 md:p-8 lg:col-span-3 lg:row-span-2"
          >
            <div className="pointer-events-none absolute -left-8 -top-8 h-48 w-48 rounded-full bg-orange-500/20 blur-[60px]"/>
            <div className="relative">
              <p className="font-heading text-2xl font-bold leading-tight text-text-primary md:text-3xl">
                Your work.
              </p>
              <p className="font-heading text-2xl font-bold leading-tight text-text-primary md:text-3xl">
                Your portfolio.
              </p>
              <p className="font-heading text-2xl font-bold leading-tight text-text-primary md:text-3xl">
                Your future.
              </p>
            </div>
            <PortfolioMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
