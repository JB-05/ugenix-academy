'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import WhoThisIsForSection from '@/components/sections/WhoThisIsForSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import FeaturedCoursesSection from '@/components/sections/FeaturedCoursesSection'
import FeaturedProgramsSection from '@/components/sections/FeaturedProgramsSection'
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
            className="fixed inset-0 z-40 bg-gradient-to-br from-neutral-offwhite via-white to-neutral-offwhite flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-3xl px-8 py-6">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src="/illustrations/academy_logo_lightmode.svg"
                    alt="Ugenix Academy"
                    width={300}
                    height={80}
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main page content (always rendered beneath the shutter) */}
      <div className="relative">
        <HeroSection />
        <WhoThisIsForSection />
        <WhyChooseSection />
        <FeaturedCoursesSection />
        <FeaturedProgramsSection />
        <CTASection />
      </div>
    </div>
  )
}

