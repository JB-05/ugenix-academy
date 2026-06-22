'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { PastProgramCard, ProgramCatalogCard, programViewport } from '@/components/programs/ProgramCards'
import { CATALOG_PROGRAMS, PAST_PROGRAMS } from '@/lib/programs-data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ProgramsPage() {
  return (
    <div className="bg-[#050505]">
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} strokeWidth={2} />
              Back to home
            </Link>

            <p className="mb-3 font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
              Our Programs
            </p>
            <h1 className="max-w-[720px] font-heading text-[1.85rem] font-bold leading-[1.12] text-white sm:text-[2.15rem] lg:text-[2.5rem]">
              Choose your path. Build your{' '}
              <span className="text-orange-500">future.</span>
            </h1>
            <p className="mt-4 max-w-[640px] text-sm leading-relaxed text-zinc-400 sm:text-base">
              From foundational skills to real-world simulation and placement support — explore
              everything Ugenix Academy offers, including programs we&apos;ve already delivered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14 lg:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-6 font-heading text-xl font-semibold text-white sm:text-2xl"
          >
            Current Programs
          </motion.h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {CATALOG_PROGRAMS.map((program, index) => (
              <ProgramCatalogCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="past-programs" className="scroll-mt-28 border-t border-white/[0.06] py-10 sm:py-14 lg:py-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-8 max-w-2xl"
          >
            <p className="mb-2 font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              Archive
            </p>
            <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">
              Past Programs
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Programs and cohorts we&apos;ve already run. Explore details and outcomes from
              completed initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {PAST_PROGRAMS.map((program, index) => (
              <PastProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
