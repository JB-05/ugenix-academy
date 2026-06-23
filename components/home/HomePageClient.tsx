'use client'

import { useCallback, useState } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import HomeSplash from '@/components/home/HomeSplash'

const BelowFoldSections = dynamic(() => import('@/components/home/BelowFoldSections'))

export default function HomePageClient() {
  const [belowFoldReady, setBelowFoldReady] = useState(false)
  const handleSplashComplete = useCallback(() => setBelowFoldReady(true), [])

  return (
    <div className="relative overflow-hidden">
      <HomeSplash onComplete={handleSplashComplete} />
      <div className="relative">
        <HeroSection />
        {belowFoldReady && <BelowFoldSections />}
      </div>
    </div>
  )
}
