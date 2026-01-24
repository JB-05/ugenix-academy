import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function FeaturedCoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-24 scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl md:rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white/70 shadow-2xl shadow-brand/5 p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-brand-light/10 rounded-full blur-3xl -z-10" />

          <h2 className="mb-6 md:mb-8 lg:mb-12 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-deep">Featured Courses</h2>

          <div className="relative">
            {/* Spotlight Card */}
            <div className="border border-neutral-border rounded-2xl md:rounded-3xl bg-white overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">

                {/* Content Side (Left) */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-4 sm:mb-6 md:mb-8 rounded-xl md:rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-slate-deep">Prompt Engineering</h3>
                  <p className="text-neutral-muted mb-6 sm:mb-8 md:mb-10 leading-relaxed text-base sm:text-lg max-w-xl">
                    Learn to communicate effectively with AI systems and craft prompts that produce reliable, useful results.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link href="/register">
                      <HoverBorderGradient
                        as="button"
                        containerClassName="rounded-full"
                        className="bg-white text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 md:py-3.5 font-medium text-sm sm:text-base md:text-lg"
                      >
                        Register
                      </HoverBorderGradient>
                    </Link>
                    <Link
                      href="/courses/prompt-engineering"
                      className="btn-secondary-baseline text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 md:py-3.5 flex items-center justify-center font-medium"
                    >
                      View Course
                    </Link>
                  </div>
                </div>

                {/* Visual Anchor Side (Right) - CSS Chat Interface */}
                <div className="relative bg-neutral-offwhite/50 border-t lg:border-t-0 lg:border-l border-neutral-border min-h-[250px] sm:min-h-[300px] lg:min-h-full flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden group">
                  {/* Decorative Background Blobs */}
                  <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/10 transition-colors duration-500" />
                  <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-coral/5 rounded-full blur-3xl group-hover:bg-coral/10 transition-colors duration-500" />

                  {/* Chat Interface Mockup */}
                  <div className="relative w-full max-w-xs sm:max-w-sm bg-white rounded-xl sm:rounded-2xl shadow-xl border border-neutral-border p-3 sm:p-4 transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-6 border-b border-neutral-border pb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>

                    {/* Chat Bubbles */}
                    <div className="space-y-4">
                      {/* User Bubble */}
                      <div className="flex justify-end">
                        <div className="bg-brand text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm max-w-[85%] shadow-sm">
                          Write a function to Fibonacci sequence.
                        </div>
                      </div>

                      {/* AI Bubble */}
                      <div className="flex justify-start">
                        <div className="bg-neutral-offwhite text-slate-deep rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm max-w-[90%] shadow-sm border border-neutral-border">
                          <div className="flex gap-2 mb-1">
                            <span className="w-1.5 h-1.5 bg-neutral-muted/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-1.5 h-1.5 bg-neutral-muted/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-1.5 h-1.5 bg-neutral-muted/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                          <span className="opacity-50 text-xs">Generating response...</span>
                        </div>
                      </div>
                    </div>

                    {/* Input Bar */}
                    <div className="mt-6 pt-3 border-t border-neutral-border flex gap-2 items-center">
                      <div className="h-8 flex-1 bg-neutral-offwhite rounded-full" />
                      <div className="w-8 h-8 bg-brand rounded-full items-center justify-center flex">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Stack Effect Pseudo-cards */}
            <div className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 bottom-0 bg-white rounded-2xl sm:rounded-3xl border border-neutral-border -z-10 shadow-sm transform translate-y-2 scale-[0.98] opacity-50" />
            <div className="absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-8 bottom-0 bg-white rounded-2xl sm:rounded-3xl border border-neutral-border -z-20 shadow-sm transform translate-y-4 scale-[0.96] opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}


