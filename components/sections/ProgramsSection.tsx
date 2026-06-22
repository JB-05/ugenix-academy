'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ProgramCatalogCard, programViewport } from '@/components/programs/ProgramCards'
import { CATALOG_PROGRAMS } from '@/lib/programs-data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ProgramsSection() {
  return (
    <section id="programs" className="relative scroll-mt-24 overflow-hidden bg-[#050505] py-10 sm:py-14 lg:py-20">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 1, ease: EASE }}
          >
            <p className="mb-3 font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
              Our Programs
            </p>
            <h2 className="max-w-[640px] font-heading text-[1.65rem] font-bold leading-[1.15] text-white sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem]">
              Choose your path. Build your{' '}
              <span className="text-orange-500">future.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
          >
            <Link
              href="/programs"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              View all programs
              <ArrowRight size={16} className="text-orange-500" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 lg:grid lg:grid-cols-5 lg:gap-4">
            {CATALOG_PROGRAMS.map((program, index) => (
              <ProgramCatalogCard
                key={program.id}
                program={program}
                index={index}
                className="min-w-[240px] flex-1 sm:min-w-[260px] lg:min-w-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
