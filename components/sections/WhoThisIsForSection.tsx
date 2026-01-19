'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const items = [
  {
    id: 'starting-out',
    title: 'Just starting out?',
    description: 'Begin with clear guidance and structured learning paths designed for those new to the field.'
  },
  {
    id: 'still-studying',
    title: 'Still studying?',
    description: 'Complement your studies with practical skills that bridge the gap between academic learning and real-world industry needs.'
  },
  {
    id: 'already-working',
    title: 'Already working?',
    description: 'Stay relevant in a changing field by learning modern approaches and tools that strengthen your current role.'
  },
  {
    id: 'always-curious',
    title: 'Always curious?',
    description: 'Deepen your understanding and explore advanced concepts through courses built for dedicated learners.'
  }
]

export default function WhoThisIsForSection() {
  const [openItem, setOpenItem] = useState<string>('starting-out')

  return (
    <section className="py-20 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
          <h2 className="mb-14 md:mb-16 text-slate-deep font-medium text-3xl md:text-4xl">Who This Is For</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Illustration - Left Column */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <img
                src="/illustrations/wh-choose.svg"
                alt=""
                aria-hidden="true"
                className="w-full max-w-sm md:max-w-md"
              />
            </div>

            {/* Accordion - Right Column */}
            <div className="order-1 md:order-2">
              <div className="space-y-8">
                {items.map((item) => {
                  const isOpen = openItem === item.id
                  return (
                    <div key={item.id} className="group">
                      <div className="flex gap-6 md:gap-8">
                        {/* Indicator Line */}
                        <div className={cn(
                          "flex-shrink-0 w-1 rounded-full transition-colors duration-300",
                          isOpen ? "bg-brand" : "bg-neutral-border group-hover:bg-brand/30"
                        )}></div>

                        <div className="flex-1 pb-2">
                          <button
                            type="button"
                            onClick={() => setOpenItem(isOpen ? '' : item.id)}
                            className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
                            aria-expanded={isOpen}
                          >
                            <h3 className={cn(
                              "text-2xl font-medium transition-colors duration-300",
                              isOpen ? "text-slate-deep" : "text-neutral-muted group-hover:text-slate-deep"
                            )}>
                              {item.title}
                            </h3>
                            {/* Icon */}
                            <span className="flex-shrink-0 text-brand">
                              {isOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
                              ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                              )}
                            </span>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <p className="text-lg text-neutral-muted leading-relaxed mt-4">
                                  {item.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


