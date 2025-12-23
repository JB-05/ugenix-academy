import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function FeaturedCoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
          <h2 className="mb-12 text-slate-deep font-medium">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Card */}
            <div className="border border-neutral-border rounded-lg bg-white p-6 flex flex-col h-full">
              <h3 className="text-2xl font-medium mb-3 text-slate-deep">Prompt Engineering</h3>
              <p className="text-neutral-muted mb-6 leading-relaxed flex-grow">
                Learn to communicate effectively with AI systems and craft prompts that produce reliable, useful results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/register">
                  <HoverBorderGradient
                    as="button"
                    containerClassName="rounded-full"
                    className="bg-white text-slate-900 px-6 py-3 font-medium"
                  >
                    Register
                  </HoverBorderGradient>
                </Link>
                <Link
                  href="/courses/prompt-engineering"
                  className="btn-secondary-baseline text-sm"
                >
                  View Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


