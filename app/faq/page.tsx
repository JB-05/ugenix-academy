'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/faq-data'

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string>('')

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? '' : id)
  }

  return (
    <div className="min-h-screen pt-32 md:pt-36 pb-16 md:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Glass Container */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
          <h1 className="mb-12 text-slate-deep font-medium">Frequently Asked Questions</h1>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openItem === item.id
              return (
                <div
                  key={item.id}
                  className={`border rounded-lg transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'bg-white/70 border-neutral-border shadow-md border-l-2 border-l-brand'
                      : 'bg-white/70 border-neutral-border'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-lg"
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${item.id}`}
                  >
                    <h2 className="text-lg font-medium text-slate-deep pr-4">
                      {item.question}
                    </h2>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 text-neutral-muted transition-transform duration-300 ease-in-out ${
                          isOpen ? 'rotate-180' : ''
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
                      <p className="text-base text-neutral-muted leading-relaxed">
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
  )
}

