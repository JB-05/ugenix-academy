'use client'

import HeroSection from '@/components/sections/HeroSection'
import WhoThisIsForSection from '@/components/sections/WhoThisIsForSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import FeaturedCoursesSection from '@/components/sections/FeaturedCoursesSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <WhoThisIsForSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <FeaturedCoursesSection />
      <CTASection />
    </div>
  )
}

