import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function PromptEngineeringCourse() {
  return (
    <div className="bg-white">
      {/* Course Overview */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="mb-12">
          <h1 className="mb-6 text-slate-deep">Prompt Engineering</h1>
          <p className="text-xl text-neutral-muted leading-relaxed mb-8">
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
              <p className="text-neutral-muted leading-relaxed">
                Fundamentals of AI communication and prompt design principles
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-neutral-muted leading-relaxed">
                Advanced techniques for context management and output optimization
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-neutral-muted leading-relaxed">
                Practical applications across content creation, coding, data analysis, and research
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-neutral-muted leading-relaxed">
                Best practices for prompt iteration and troubleshooting
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-neutral-muted leading-relaxed">
                Ethical considerations and responsible AI interaction
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-neutral-muted leading-relaxed">
                Real-world project implementation and portfolio development
              </p>
            </li>
          </ul>
        </section>

        {/* Learning Mode */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-slate-deep">Learning Mode</h2>
          <div className="relative rounded-2xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-md border border-white/50 shadow-lg shadow-black/5 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-deep">Structured Learning</h3>
                <p className="text-neutral-muted leading-relaxed">
                  This course offers a structured approach to learning with guided instruction 
                  and practical application. Participate in live sessions at specified times 
                  for hands-on practice, group discussions, and direct instructor feedback. 
                  This approach ensures focused learning and practical application through 
                  real-time interaction with instructors and peers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Instructor */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-slate-deep">Meet the Instructor</h2>
          <div className="relative rounded-2xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-md border border-white/50 shadow-lg shadow-black/5 overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-rows-2 gap-6 sm:gap-8">
                {/* First Row: Image and Name/Title */}
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[150px_1fr] md:grid-cols-[180px_1fr] gap-4 sm:gap-6 items-center">
                  {/* Instructor Image */}
                  <div className="flex justify-start">
                    <div className="relative w-full aspect-square">
                      {/* Image Placeholder */}
                      <div className="w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand/10 via-coral-light/10 to-violet-soft/10 border-2 border-dashed border-neutral-border flex items-center justify-center overflow-hidden">
                        <div className="text-center p-2 sm:p-3">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-neutral-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      {/* Optional: Decorative accent */}
                      <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-brand/20 rounded-full blur-xl" />
                    </div>
                  </div>
                  
                  {/* Name and Job Description (Single Line) */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 min-w-0">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-deep truncate">Instructor Name</h3>
                      <p className="text-xs sm:text-sm md:text-base text-neutral-muted font-medium">Senior AI Practitioner & Educator</p>
                    </div>
                    
                    {/* Social Link - Moved to first row */}
                    <div className="flex-shrink-0">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-neutral-border rounded-lg text-brand hover:bg-brand hover:text-white transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-sm hover:shadow-md"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-xs sm:text-sm font-medium hidden sm:inline">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Second Row: Overview */}
                <div className="border-t border-neutral-border pt-6 sm:pt-8">
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base md:text-lg text-neutral-muted leading-relaxed">
                      With extensive experience in AI development and natural language processing, 
                      bringing real-world insights from working with cutting-edge AI systems. 
                      Passionate about making complex AI concepts accessible and practical for learners.
                    </p>
                    
                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs sm:text-sm text-neutral-muted">10+ years in AI/ML development</span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs sm:text-sm text-neutral-muted">Published researcher and educator</span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs sm:text-sm text-neutral-muted">Active contributor to open-source AI projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="mt-16 mb-8 text-center">
          <Link href="/register" className="inline-block">
            <button className="relative px-8 md:px-12 py-4 md:py-5 bg-[#FF4500] text-white font-black text-base md:text-lg uppercase tracking-wider rounded-xl md:rounded-2xl transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_8px_0_0_rgba(255,69,0,0.4),0_12px_20px_rgba(255,69,0,0.5)] hover:shadow-[0_6px_0_0_rgba(255,69,0,0.4),0_16px_24px_rgba(255,69,0,0.6)] active:shadow-[0_2px_0_0_rgba(255,69,0,0.4),0_4px_8px_rgba(255,69,0,0.4)] border-4 border-white/20 hover:border-white/30">
              <span className="relative z-10 drop-shadow-lg">Register for This Course</span>
              {/* Comic-style shine effect */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
              {/* 3D bottom edge */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#CC3700] rounded-b-xl md:rounded-b-2xl opacity-80" />
            </button>
          </Link>
        </section>
      </section>
    </div>
  )
}




