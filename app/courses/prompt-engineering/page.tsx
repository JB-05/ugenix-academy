import Link from 'next/link'

export default function PromptEngineeringCourse() {
  return (
    <div className="bg-white">
      {/* Course Overview */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
                <h3 className="text-xl font-semibold mb-3 text-slate-deep">Hybrid Learning</h3>
                <p className="text-slate-medium leading-relaxed">
                  This course combines online self-paced learning with in-person workshops. 
                  Access course materials and video content through our online platform, 
                  then attend scheduled offline sessions for hands-on practice, group 
                  discussions, and direct instructor feedback. This hybrid approach ensures 
                  both flexibility and practical application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instructor Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-slate-deep">Instructor Experience</h2>
          <div className="bg-neutral-light p-8">
            <p className="text-slate-medium leading-relaxed mb-4">
              Our instructors are seasoned professionals with extensive experience in AI 
              development, natural language processing, and practical AI implementation. 
              They bring real-world insights from working with cutting-edge AI systems 
              and have trained teams across various industries.
            </p>
            <p className="text-slate-medium leading-relaxed">
              With backgrounds in both technical development and education, our instructors 
              are skilled at breaking down complex concepts into digestible, actionable 
              lessons. They stay current with the latest developments in AI technology 
              and continuously update course content to reflect industry best practices.
            </p>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="border-t border-neutral-medium pt-12">
          <div className="text-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-10 py-4 bg-brand text-white font-medium hover:bg-brand-dark hover:text-white transition-colors duration-200 ease-in-out rounded-lg text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Register for This Course
            </Link>
          </div>
        </section>
      </section>
    </div>
  )
}




