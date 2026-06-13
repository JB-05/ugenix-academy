'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PAST_PROGRAMS } from '@/lib/programs-data'
import { ArrowIcon } from './HeroTrustLogos'

function PastProgramCard({
  program,
  index,
}: {
  program: (typeof PAST_PROGRAMS)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Link
        href={program.href}
        className="group flex h-full flex-col rounded-card border border-border-primary bg-bg-850/50 p-5 transition-all duration-300 hover:border-border-hover hover:-translate-y-1 sm:p-6"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
          {program.status}
        </p>
        <h3 className="mt-2 font-heading text-lg font-semibold text-text-primary group-hover:text-orange-500 transition-colors">
          {program.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{program.description}</p>
        {program.meta && (
          <p className="mt-4 text-xs text-text-muted">{program.meta}</p>
        )}
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange-500">
          View details
          <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </motion.div>
  )
}

export default function ProgramsSection() {
  return (
    <section id="programs" className="relative bg-bg-950 py-16 md:py-24 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 hero-dark-grid opacity-25"/>
      <div className="relative mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Our Programs
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-[2.75rem]">
              Choose your path. Build your{' '}
              <span className="text-orange-500">future.</span>
            </h2>
          </div>
          <Link
            href="/#past-programs"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            View all programs
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center rounded-card border border-dashed border-border-primary bg-bg-850/40 px-6 py-16 md:py-20"
        >
          <p className="font-heading text-xl font-semibold text-text-muted md:text-2xl">
            Coming Soon
          </p>
        </motion.div>

        {/* Past Programs */}
        <div id="past-programs" className="mt-16 md:mt-20 scroll-mt-24">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Archive
            </p>
            <h3 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
              Past Programs
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-text-muted">
              Programs and cohorts we&apos;ve already run. Explore details and outcomes from completed initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PAST_PROGRAMS.map((program, i) => (
              <PastProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
