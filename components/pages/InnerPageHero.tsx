'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function InnerPageHero({
  label,
  title,
  highlight,
  description,
}: {
  label: string
  title: string
  highlight?: string
  description: string
}) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
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
            {label}
          </p>
          <h1 className="max-w-[720px] font-heading text-[1.85rem] font-bold leading-[1.12] text-white sm:text-[2.15rem] lg:text-[2.5rem]">
            {highlight && titleParts.length > 1 ? (
              <>
                {titleParts[0]}
                <span className="text-orange-500">{highlight}</span>
                {titleParts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="mt-4 max-w-[640px] text-sm leading-relaxed text-zinc-400 sm:text-base">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
