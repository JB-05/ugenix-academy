'use client'

import { useState } from 'react'

interface AccordionItem {
  id: string
  title: string
  description: string | React.ReactNode
}

const accordionItems: AccordionItem[] = [
  {
    id: 'instructors',
    title: 'Industry-Experienced Instructors',
    description: 'Our instructors are active practitioners who work with these technologies daily. They bring real-world context and current best practices, not just theoretical knowledge from outdated materials.',
  },
  {
    id: 'practical',
    title: 'Practical, Outcome-Oriented Learning',
    description: 'Every course is designed around what you\'ll actually do with these skills. We focus on application over theory, ensuring you can use what you learn immediately in your work or projects.',
  },
  {
    id: 'hybrid',
    title: 'Hybrid Approach',
    description: 'Learn at your own pace online with structured content, then participate in optional offline sessions for hands-on practice and direct feedback. This flexibility accommodates different learning styles and schedules.',
  },
  {
    id: 'company',
    title: 'Built by a Real Technology Company',
    description: (
      <>
        This academy is an initiative by <a href="https://ugenix.in" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">ugenix.in</a>, a technology company that builds real products and solves real problems. Our training reflects the same standards and practices we use in our own work.
      </>
    ),
  },
]

export default function WhyChooseSection() {
  const [openItem, setOpenItem] = useState<string>('')

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? '' : id)
  }

  return (
    <section id="why-choose" className="py-20 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
          <h2 className="mb-14 md:mb-16 text-slate-deep font-medium">Why Choose This Academy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Illustration - Left Column */}
            <div className="flex items-center justify-center">
              <img
                src="/illustrations/wh-choose.svg"
                alt=""
                aria-hidden="true"
                className="w-full max-w-sm md:max-w-md"
              />
            </div>

            {/* Accordion - Right Column */}
            <div>
              <div className="space-y-8">
                {accordionItems.map((item) => {
                  const isOpen = openItem === item.id
                  return (
                    <div key={item.id}>
                      <div className="flex gap-8">
                        <div className="flex-shrink-0 w-1 bg-brand"></div>
                        <div className="flex-1">
                          <button
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            className="w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                            aria-expanded={isOpen}
                            aria-controls={`accordion-content-${item.id}`}
                          >
                            <h3 className="text-2xl font-medium text-slate-deep">{item.title}</h3>
                            <div className="flex-shrink-0">
                              {isOpen ? (
                                <svg
                                  className="w-4 h-4 text-neutral-muted transition-transform duration-250 ease-in-out"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                              ) : (
                                <svg
                                  className="w-4 h-4 text-neutral-muted transition-transform duration-250 ease-in-out"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                              )}
                            </div>
                          </button>
                          <div
                            id={`accordion-content-${item.id}`}
                            className={`overflow-hidden transition-all duration-250 ease-in-out ${
                              isOpen ? 'max-h-[500px] opacity-100 mt-5' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="text-lg text-neutral-muted leading-relaxed">
                              {item.description}
                            </div>
                          </div>
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

