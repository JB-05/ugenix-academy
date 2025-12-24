import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function PromptEngineeringCourse() {
  return (
    <div className="bg-white">
      {/* Course Overview */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="mb-12">
          <h1 className="mb-6 text-slate-deep">Prompt Engineering</h1>
          <p className="text-xl text-slate-medium leading-relaxed mb-8">
            Master the art and science of communicating effectively with AI systems. 
            This comprehensive course teaches you to craft precise prompts, understand 
            AI behavior, and leverage artificial intelligence tools to solve complex 
            problems across various domains.
          </p>
        </div>

        {/* What You'll Learn */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-slate-deep">What You'll Learn</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-medium leading-relaxed">
                Fundamentals of AI communication and prompt design principles
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-medium leading-relaxed">
                Advanced techniques for context management and output optimization
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-medium leading-relaxed">
                Practical applications across content creation, coding, data analysis, and research
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-medium leading-relaxed">
                Best practices for prompt iteration and troubleshooting
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-medium leading-relaxed">
                Ethical considerations and responsible AI interaction
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-medium leading-relaxed">
                Real-world project implementation and portfolio development
              </p>
            </li>
          </ul>
        </section>

        {/* Learning Mode */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-slate-deep">Learning Mode</h2>
          <div className="bg-neutral-light p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-deep">Structured Learning</h3>
                <p className="text-slate-medium leading-relaxed">
                  This course offers a structured approach to learning with guided instruction 
                  and practical application. Access course materials and video content through 
                  our online platform, then participate in scheduled sessions for hands-on practice, 
                  group discussions, and direct instructor feedback. This approach ensures 
                  both flexibility and practical application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Instructor */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-slate-deep">Meet the Instructor</h2>
          <div className="bg-neutral-light p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Instructor Image */}
              <div className="flex justify-center md:justify-start">
                <img
                  src="/illustrations/about1.svg"
                  alt="Course instructor"
                  className="rounded-lg max-w-xs w-full h-auto"
                />
              </div>
              {/* Instructor Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-slate-deep">Instructor Name</h3>
                <p className="text-neutral-muted mb-4 text-sm">Senior AI Practitioner & Educator</p>
                <p className="text-slate-medium leading-relaxed mb-4">
                  With extensive experience in AI development and natural language processing, 
                  bringing real-world insights from working with cutting-edge AI systems.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="border-t border-neutral-medium pt-12">
          <div className="text-center">
            <Link href="/register">
              <HoverBorderGradient
                as="button"
                containerClassName="rounded-full"
                className="bg-white text-slate-900 px-10 py-4 font-medium text-lg"
              >
                Register for This Course
              </HoverBorderGradient>
            </Link>
          </div>
        </section>
      </section>
    </div>
  )
}




