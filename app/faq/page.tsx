'use client'

import { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 'what-is',
    question: 'What is Ugenix Academy?',
    answer: 'Ugenix Academy is a learning initiative focused on teaching practical technology skills through real-world thinking. We design courses around how things are actually built and used, not just how tools work in isolation.',
  },
  {
    id: 'who-for',
    question: 'Who are these courses meant for?',
    answer: 'Our courses are for anyone curious about building real systems. This includes students, working professionals, beginners starting from scratch, and experienced developers who want deeper understanding rather than surface-level knowledge.',
  },
  {
    id: 'prior-experience',
    question: 'Do I need prior experience to enroll?',
    answer: 'Not always. Some courses are beginner-friendly and start from first principles, while others assume basic familiarity. Each course clearly mentions its prerequisites so you know what to expect before enrolling.',
  },
  {
    id: 'different',
    question: 'How are these courses different from typical online tutorials?',
    answer: 'Most tutorials focus on what to do. We focus on why things are done a certain way. Our courses emphasize decision-making, trade-offs, and real-world constraints so learners build understanding, not just follow steps.',
  },
  {
    id: 'theoretical-practical',
    question: 'Are the courses theoretical or practical?',
    answer: 'They are strongly practical. Concepts are introduced only when they are needed, and most learning happens through applied examples, projects, and problem-solving scenarios inspired by real work.',
  },
  {
    id: 'who-teaches',
    question: 'Who teaches the courses?',
    answer: 'Courses are designed and taught by practitioners who actively work with the technologies they teach. This ensures that the content reflects current industry practices, not outdated theory.',
  },
  {
    id: 'real-projects',
    question: 'Will I work on real projects?',
    answer: 'Yes. Many courses include hands-on projects that resemble real-world use cases. These projects help reinforce learning and can be used as part of your portfolio.',
  },
  {
    id: 'college-students',
    question: 'Is this suitable for college students?',
    answer: 'Absolutely. In fact, Ugenix Academy was created to help bridge the gap between academic learning and industry expectations. It complements formal education rather than replacing it.',
  },
  {
    id: 'certificates',
    question: 'Do you provide certificates?',
    answer: 'Some courses include completion certificates. While certificates are not the primary focus, they can serve as proof of participation and learning.',
  },
  {
    id: 'which-course',
    question: 'How do I know which course is right for me?',
    answer: "Each course page clearly explains who the course is for, what you'll learn, and what level it targets. If you're unsure, starting with foundational courses is usually the best path.",
  },
]

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

