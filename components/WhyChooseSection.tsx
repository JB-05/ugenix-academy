'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

interface BentoCardProps {
  title: string
  description: string | React.ReactNode
  icon?: React.ReactNode
  className?: string
  delay?: number
}

const BentoCard = ({ title, description, icon, className, delay = 0 }: BentoCardProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<"TOP" | "LEFT" | "BOTTOM" | "RIGHT">("TOP");

  const rotateDirection = (currentDirection: "TOP" | "LEFT" | "BOTTOM" | "RIGHT") => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"] as const;
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(245, 75%, 64%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(245, 75%, 64%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(245, 75%, 64%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, hsl(245, 75%, 64%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight = "radial-gradient(75% 181.16% at 50% 50%, #6758E0 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl p-[1px] transition-all duration-300",
        className
      )}
    >
      {/* Animated Border Background */}
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit]"
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: 1 }}
      />

      {/* Card Content with Solid Background */}
      <div className={cn(
        "relative z-10 flex flex-col justify-between h-full w-full rounded-[inherit] bg-white p-8",
        className?.includes("bg-neutral-offwhite") ? "bg-neutral-offwhite/50" : "bg-white"
        /* Note: effectively overriding the outer className bg if passed, but keeping it inside */
      )}>
        <div className="flex flex-col gap-4 h-full">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-neutral-offwhite flex items-center justify-center text-brand group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-deep">{title}</h3>
          </div>
          <div className="text-neutral-muted leading-relaxed">
            {description}
          </div>
        </div>

        {/* Decorative Gradient Blob (inside the content area now) */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-brand-light/10 to-coral-light/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 md:py-32 scroll-mt-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-violet-light/10 via-transparent to-coral-soft/20 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-deep mb-6">Why Choose This Academy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Item 1: Industry Instructors (Wide) */}
          <BentoCard
            className="md:col-span-2"
            title="Industry-Experienced Instructors"
            description="Our instructors are active practitioners who work with these technologies daily. They bring real-world context and current best practices, not just theoretical knowledge from outdated materials."
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            }
            delay={0.1}
          />

          {/* Item 2: Practical Learning (Standard) */}
          <BentoCard
            className="md:col-span-1"
            title="Practical, Outcome-Oriented Learning"
            description="Every course is designed around what you'll actually do with these skills. We focus on application over theory, ensuring you can use what you learn immediately in your work or projects."
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            }
            delay={0.2}
          />

          {/* Item 3: Hybrid Approach (Standard) */}
          <BentoCard
            className="md:col-span-1"
            title="Hybrid Approach"
            description="Learn at your own pace online with structured content, then participate in optional offline sessions for hands-on practice and direct feedback. This flexibility accommodates different learning styles and schedules."
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            }
            delay={0.3}
          />

          {/* Item 4: Built by Company (Wide) */}
          <BentoCard
            className="md:col-span-2 bg-white"
            title="Built by a Real Technology Company"
            description={
              <>
                This academy is an initiative by <a href="https://ugenix.in" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark font-medium underline decoration-brand/30 underline-offset-2">ugenix.in</a>, a technology company that builds real products and solves real problems. Our training reflects the same standards and practices we use in our own work.
              </>
            }
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            }
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

