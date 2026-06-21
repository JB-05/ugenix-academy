'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import WorkSimShowcaseSection from '@/components/sections/WorkSimShowcaseSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import ProgramsSection from '@/components/sections/ProgramsSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000) // Splash screen stays for 3 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Splash screen shutter animation */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[70] bg-bg-950 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-3xl px-8 py-6">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src="/illustrations/UAlogo_short_DM.svg"
                    alt="Ugenix Academy"
                    width={120}
                    height={86}
                    priority
                  />
                  <span className="font-heading text-xl font-semibold">
                    <span className="text-text-primary">Ugenix </span>
                    <span className="text-orange-500">Academy</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main page content (always rendered beneath the shutter) */}
      <div className="relative">
        <HeroSection />
        <WorkSimShowcaseSection />
        <FeaturesSection />
        <WhyChooseSection />
        <ProgramsSection />
        <CTASection />
      </div>
    </div>
  )
}

