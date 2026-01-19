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
            <div className="w-12 h-12 shrink-0 flex items-center justify-center text-brand group-hover:scale-110 transition-transform duration-300">
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
    <section id="why-choose" className="py-16 md:py-20 scroll-mt-24 relative overflow-hidden bg-neutral-offwhite">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-deep mb-6" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>Why Choose This Academy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Item 1: Industry Instructors (Wide) */}
          <BentoCard
            className="md:col-span-2"
            title="Industry-Experienced Instructors"
            description="Our instructors are active practitioners who work with these technologies daily. They bring real-world context and current best practices, not just theoretical knowledge from outdated materials."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                <path d="M19.43 12.97c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.4-1.06-.73-1.69-.98l-.37-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
              </svg>
            }
            delay={0.1}
          />

          {/* Item 2: Practical Learning (Standard) */}
          <BentoCard
            className="md:col-span-1"
            title="Practical, Outcome-Oriented Learning"
            description="Every course is designed around what you'll actually do with these skills. We focus on application over theory, ensuring you can use what you learn immediately in your work or projects."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            }
            delay={0.2}
          />

          {/* Item 3: Structured Learning Path (Standard) */}
          <BentoCard
            className="md:col-span-1"
            title="Structured Learning Path"
            description="Each course follows a clear progression from fundamentals to advanced concepts. You'll build understanding step-by-step with guided instruction and practical exercises that reinforce what you learn."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
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
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            }
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

