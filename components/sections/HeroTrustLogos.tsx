'use client'

import { motion } from 'framer-motion'

const COMPANIES = [
  { name: 'Google', label: 'Google' },
  { name: 'Microsoft', label: 'Microsoft' },
  { name: 'Amazon', label: 'Amazon' },
  { name: 'Accenture', label: 'Accenture' },
  { name: 'TCS', label: 'TCS' },
]

export default function HeroTrustLogos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="mt-12 lg:mt-16"
    >
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
        Trusted by learners from
      </p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        {COMPANIES.map((company) => (
          <span
            key={company.name}
            className="text-lg font-semibold tracking-tight text-text-secondary/60 transition-colors duration-200 hover:text-text-secondary"
            aria-label={company.label}
          >
            {company.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { ArrowIcon }
