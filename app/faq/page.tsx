'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/faq-data'

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string>('')

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? '' : id)
  }

  return (
    <div className="dark-page relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-28 h-[28rem] w-[min(100%,44rem)] -translate-x-1/2 rounded-full bg-gradient-to-br from-orange-500/25 via-orange-500/8 to-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tl from-gold/15 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card-warm p-8 md:p-10 lg:p-12">
          <div className="relative z-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-orange">
              Resources
            </p>
            <h1 className="mb-12 font-medium text-text-primary">
              Frequently Asked{' '}
              <span className="text-gradient-orange">Questions</span>
            </h1>

            <div className="space-y-4">
              {faqItems.map((item) => {
                const isOpen = openItem === item.id
                return (
                  <div
                    key={item.id}
                    className={isOpen ? 'glass-card-item glass-card-item-open' : 'glass-card-item'}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center justify-between gap-4 rounded-card p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-950"
                      aria-expanded={isOpen}
                      aria-controls={`faq-content-${item.id}`}
                    >
                      <h2 className="pr-4 text-lg font-medium text-text-primary">
                        {item.question}
                      </h2>
                      <div className="flex-shrink-0">
                        <svg
                          className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
                            isOpen ? 'rotate-180 text-orange-500' : 'text-text-muted'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div
                      id={`faq-content-${item.id}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-base leading-relaxed text-text-secondary">
                          {item.answer}
                        </p>
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
  )
}
