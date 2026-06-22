'use client'

import { motion } from 'framer-motion'
import { FileText, FolderOpen, Upload } from 'lucide-react'
import { ComingSoonPanel } from '@/components/pages/ComingSoonPanel'
import { InnerPageHero } from '@/components/pages/InnerPageHero'
import { programViewport } from '@/components/programs/ProgramCards'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

const PLANNED_RESOURCE_TYPES = [
  {
    icon: FileText,
    title: 'Guides & notes',
    description: 'Structured write-ups, checklists, and reference material from mentors and peers.',
  },
  {
    icon: FolderOpen,
    title: 'Templates & assets',
    description: 'Project starters, design files, and reusable resources you can apply in real work.',
  },
  {
    icon: Upload,
    title: 'Shared uploads',
    description: 'Community-contributed files and resources, reviewed before they go live.',
  },
] as const

export default function CommunityPage() {
  return (
    <div className="bg-[#050505]">
      <InnerPageHero
        label="Community"
        title="Files and resources for builders."
        highlight="resources"
        description="A shared space for guides, templates, and learning materials — curated by the Ugenix community so you can learn faster and ship with confidence."
      />

      <section className="pb-10 sm:pb-14">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <ComingSoonPanel
            title="Resources are being curated carefully"
            description="We're gathering high-quality files, templates, and learning materials before opening uploads to the community. Check back soon — everything here will be reviewed and ready to use."
          />
        </div>
      </section>

      <section className="border-t border-white/[0.06] pb-10 sm:pb-14 lg:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-6 font-heading text-xl font-semibold text-white sm:text-2xl"
          >
            What&apos;s coming
          </motion.h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PLANNED_RESOURCE_TYPES.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={programViewport}
                transition={{ duration: 0.85, delay: 0.08 + index * 0.08, ease: EASE }}
                className={cn(
                  'rounded-[18px] border border-white/[0.08] bg-[#0a0a0a] p-5 sm:p-6',
                  'opacity-70'
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#111111] text-orange-500">
                  <item.icon size={18} strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
