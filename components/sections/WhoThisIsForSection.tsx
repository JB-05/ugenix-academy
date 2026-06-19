'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const items = [
  {
    id: 'starting-out',
    title: 'Just starting out?',
    description: 'Begin with clear guidance and structured learning paths designed for those new to the field.',
  },
  {
    id: 'still-studying',
    title: 'Still studying?',
    description: 'Complement your studies with practical skills that bridge the gap between academic learning and real-world industry needs.',
  },
  {
    id: 'already-working',
    title: 'Already working?',
    description: 'Stay relevant in a changing field by learning modern approaches and tools that strengthen your current role.',
  },
  {
    id: 'always-curious',
    title: 'Always curious?',
    description: 'Deepen your understanding and explore advanced concepts through courses built for dedicated learners.',
  },
]

export default function WhoThisIsForSection() {
  const [openItem, setOpenItem] = useState<string>('starting-out')

  return (
    <section className="overflow-hidden bg-bg-950 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="dark-card p-8 md:p-10 lg:p-12">
          <h2 className="mb-14 text-3xl font-medium text-text-primary md:mb-16 md:text-4xl">Who This Is For</h2>

          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
            <div className="order-2 flex items-center justify-center md:order-1">
              <img
                src="/illustrations/wh-choose.svg"
                alt=""
                aria-hidden="true"
                className="w-full max-w-sm opacity-90 md:max-w-md"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="space-y-8">
                {items.map((item) => {
                  const isOpen = openItem === item.id
                  return (
                    <div key={item.id} className="group">
                      <div className="flex gap-6 md:gap-8">
                        <div
                          className={cn(
                            'w-1 flex-shrink-0 rounded-full transition-colors duration-300',
                            isOpen ? 'bg-orange-500' : 'bg-border-primary group-hover:bg-orange-500/30'
                          )}
                        />

                        <div className="flex-1 pb-2">
                          <button
                            type="button"
                            onClick={() => setOpenItem(isOpen ? '' : item.id)}
                            className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
                            aria-expanded={isOpen}
                          >
                            <h3
                              className={cn(
                                'text-2xl font-medium transition-colors duration-300',
                                isOpen ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                              )}
                            >
                              {item.title}
                            </h3>
                            <span className="flex-shrink-0 text-orange-500">
                              {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
                              ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                              )}
                            </span>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
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
