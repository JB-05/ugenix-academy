'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ComingSoonPanel } from '@/components/pages/ComingSoonPanel'
import { InnerPageHero } from '@/components/pages/InnerPageHero'
import { programViewport } from '@/components/programs/ProgramCards'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

export default function MentorsPage() {
  return (
    <div className="bg-[#050505]">
      <InnerPageHero
        label="Our Mentors"
        title="Learn from people who ship every day."
        highlight="ship"
        description="Ugenix mentors are practicing designers, engineers, and career coaches. They review your work the way real teams do — with clarity, context, and high standards."
      />

      <section className="pb-10 sm:pb-14 lg:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <ComingSoonPanel
            title="Mentor profiles launching soon"
            description="We're assembling our mentor network of industry practitioners. Check back soon to meet the people guiding Ugenix programs."
          />
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:py-14 lg:py-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className={cn(
              'rounded-[18px] border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8',
              'flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between'
            )}
          >
            <div>
              <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">
                Want to mentor with us?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                We&apos;re always looking for experienced practitioners to guide students through
                real project work.
              </p>
            </div>
            <Link
              href="/careers"
              className="btn-hero-primary-sm inline-flex shrink-0 items-center justify-center gap-2"
            >
              <span className="relative z-10 text-white">View careers</span>
              <ArrowRight size={16} className="relative z-10 text-white" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
