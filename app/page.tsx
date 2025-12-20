import Link from 'next/link'
import HeroIllustration from '@/components/illustrations/HeroIllustration'
import TeamIllustration from '@/components/illustrations/TeamIllustration'
import GrowthIllustration from '@/components/illustrations/GrowthIllustration'

export default function Home() {
  return (
    <div className="bg-neutral-offwhite">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-balance mb-10 text-slate-deep font-medium">
              Learn skills that matter, from people who build them
            </h1>
            <p className="text-lg md:text-xl text-neutral-muted mb-14 leading-relaxed max-w-2xl">
              UgeniX Academy offers practical training for students, professionals, and 
              anyone ready to work with modern technology. Our courses are designed by 
              industry practitioners who understand what skills actually translate to 
              real work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses/prompt-engineering"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white font-medium hover:bg-brand-dark transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                href="#why-choose"
                className="inline-flex items-center justify-center px-8 py-3 text-brand font-medium hover:text-brand-dark transition-colors"
              >
                Learn About the Academy
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-md lg:max-w-lg">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-24 text-slate-deep font-medium">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-4 text-slate-deep">Students</h3>
              <p className="text-neutral-muted leading-relaxed">
                Complement your studies with practical skills that bridge the gap between 
                academic learning and industry needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-slate-deep">Working Professionals</h3>
              <p className="text-neutral-muted leading-relaxed">
                Stay relevant in a changing field by learning new approaches and tools 
                that enhance your current work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-slate-deep">Beginners</h3>
              <p className="text-neutral-muted leading-relaxed">
                Start from the ground up with clear guidance and structured learning paths 
                designed for those new to the field.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-slate-deep">Tech Enthusiasts</h3>
              <p className="text-neutral-muted leading-relaxed">
                Deepen your understanding and explore advanced concepts with courses 
                built for dedicated learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Academy Section */}
      <section id="why-choose" className="bg-neutral-offwhite py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-20 text-slate-deep font-medium">Why Choose This Academy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="hidden lg:block lg:col-span-1">
              <TeamIllustration />
            </div>
            <div className="lg:col-span-4 max-w-4xl">
              <div className="space-y-16">
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-1 bg-brand"></div>
                  <div>
                    <h3 className="text-2xl font-medium mb-5 text-slate-deep">Industry-Experienced Instructors</h3>
                    <p className="text-lg text-neutral-muted leading-relaxed">
                      Our instructors are active practitioners who work with these technologies daily. 
                      They bring real-world context and current best practices, not just theoretical 
                      knowledge from outdated materials.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-1 bg-brand"></div>
                  <div>
                    <h3 className="text-2xl font-medium mb-5 text-slate-deep">Practical, Outcome-Oriented Learning</h3>
                    <p className="text-lg text-neutral-muted leading-relaxed">
                      Every course is designed around what you'll actually do with these skills. 
                      We focus on application over theory, ensuring you can use what you learn 
                      immediately in your work or projects.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-1 bg-brand"></div>
                  <div>
                    <h3 className="text-2xl font-medium mb-5 text-slate-deep">Hybrid Approach</h3>
                    <p className="text-lg text-neutral-muted leading-relaxed">
                      Learn at your own pace online with structured content, then participate in 
                      optional offline sessions for hands-on practice and direct feedback. This 
                      flexibility accommodates different learning styles and schedules.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-1 bg-brand"></div>
                  <div>
                    <h3 className="text-2xl font-medium mb-5 text-slate-deep">Built by a Real Technology Company</h3>
                    <p className="text-lg text-neutral-muted leading-relaxed">
                      This academy is an initiative by <a href="https://ugenix.in" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">ugenix.in</a>, 
                      a technology company that builds real products and solves real problems. 
                      Our training reflects the same standards and practices we use in our own work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-20 text-slate-deep font-medium">How It Works</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              <div className="relative">
                <div className="absolute -left-8 top-0 text-neutral-muted text-sm font-medium hidden lg:block">01</div>
                <h3 className="text-xl font-medium mb-4 text-slate-deep">Explore the Course</h3>
                <p className="text-neutral-muted leading-relaxed">
                  Review course details, learning outcomes, and structure to ensure it 
                  aligns with your goals.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 text-neutral-muted text-sm font-medium hidden lg:block">02</div>
                <div className="absolute -left-4 top-0 w-px h-full bg-neutral-border hidden lg:block"></div>
                <h3 className="text-xl font-medium mb-4 text-slate-deep">Learn Online</h3>
                <p className="text-neutral-muted leading-relaxed">
                  Access structured content, videos, and resources through our online 
                  platform at your own pace.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 text-neutral-muted text-sm font-medium hidden lg:block">03</div>
                <div className="absolute -left-4 top-0 w-px h-full bg-neutral-border hidden lg:block"></div>
                <h3 className="text-xl font-medium mb-4 text-slate-deep">Participate Offline</h3>
                <p className="text-neutral-muted leading-relaxed">
                  Join optional in-person sessions for hands-on practice, group work, 
                  and direct instructor guidance.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 text-neutral-muted text-sm font-medium hidden lg:block">04</div>
                <div className="absolute -left-4 top-0 w-px h-full bg-neutral-border hidden lg:block"></div>
                <h3 className="text-xl font-medium mb-4 text-slate-deep">Apply Skills</h3>
                <p className="text-neutral-muted leading-relaxed">
                  Complete real-world projects and scenarios that demonstrate your 
                  mastery and build your portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      <section className="bg-neutral-offwhite py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="mb-8 text-slate-deep font-medium">Featured Course</h2>
            <div className="border-l-2 border-brand pl-8 pt-2">
              <h3 className="text-3xl font-medium mb-6 text-slate-deep">Prompt Engineering</h3>
              <p className="text-lg text-neutral-muted mb-10 leading-relaxed">
                Learn to communicate effectively with AI systems and craft prompts that 
                produce reliable, useful results. This beginner-friendly course covers 
                the fundamentals of prompt design, context management, and practical 
                applications across different domains.
              </p>
              <div className="space-y-3 mb-12">
                <div className="flex items-start gap-3">
                  <span className="text-neutral-muted mt-1.5">•</span>
                  <p className="text-neutral-muted">Beginner-friendly, no prior experience required</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-neutral-muted mt-1.5">•</span>
                  <p className="text-neutral-muted">Hybrid learning: online content with optional offline sessions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-neutral-muted mt-1.5">•</span>
                  <p className="text-neutral-muted">Initially free enrollment</p>
                </div>
              </div>
              <Link
                href="/courses/prompt-engineering"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white font-medium hover:bg-brand-dark transition-colors"
              >
                View Course Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Hidden for Now */}
      {/* TODO: Activate testimonials section when social proof is available */}
      {false && (
        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-20 text-slate-deep font-medium">What Learners Say</h2>
            {/* Testimonials content will go here */}
          </div>
        </section>
      )}

      {/* Call To Action Section */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center">
                <div className="mb-8 lg:hidden">
                  <div className="flex justify-center">
                    <div className="w-full max-w-xs">
                      <GrowthIllustration />
                    </div>
                  </div>
                </div>
                <h2 className="mb-6 text-slate-deep font-medium">Start building skills that actually matter</h2>
                <p className="text-lg text-neutral-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join a learning experience designed for clarity and practical application.
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white font-medium hover:bg-brand-dark transition-colors"
                >
                  Start Your Learning Journey
                </Link>
              </div>
              <div className="hidden lg:block flex-shrink-0 max-w-xs">
                <GrowthIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

