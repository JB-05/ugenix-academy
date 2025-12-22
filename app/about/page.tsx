export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <h1 className="mb-8 text-slate-deep font-medium">About the Academy</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-12">
          <div className="flex-1">
            <p className="text-lg text-neutral-muted leading-relaxed mb-6">
              UgeniX Academy was created to address a gap we've observed in modern technology education: 
              the disconnect between what's taught and what's actually needed in real work environments.
            </p>
            <p className="text-lg text-neutral-muted leading-relaxed">
              Too often, training programs focus on tools and frameworks without teaching the thinking 
              and problem-solving approaches that make those tools useful. We believe learning should 
              be practical, relevant, and immediately applicable—not theoretical exercises that feel 
              disconnected from real challenges.
            </p>
          </div>
          <div className="flex justify-center md:justify-end flex-none">
            <img
              src="/illustrations/about1.svg"
              aria-hidden="true"
              className="w-full max-w-xs md:max-w-sm h-auto"
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-neutral-offwhite py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-slate-deep font-medium">Vision</h2>
          <div className="border-l-2 border-brand pl-8 py-2">
            <p className="text-xl md:text-2xl text-slate-deep leading-relaxed font-medium">
              To create a learning environment where practical skills meet thoughtful understanding, 
              enabling learners to build meaningful work and solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-slate-deep font-medium">Mission</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-slate-deep mb-3">Teach What Matters</h3>
              <p className="text-neutral-muted leading-relaxed">
                We focus on skills and approaches that translate directly to real work. Every course 
                is designed around what you'll actually do, not what looks impressive in a curriculum.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-deep mb-3">Learn from Practitioners</h3>
              <p className="text-neutral-muted leading-relaxed">
                Our instructors are active professionals who work with these technologies daily. 
                They bring current context and real-world insights, not outdated materials or 
                theoretical knowledge alone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-deep mb-3">Respect Different Paces</h3>
              <p className="text-neutral-muted leading-relaxed">
                Learning happens at different speeds and through different methods. We provide 
                structured online content with optional in-person sessions, allowing you to learn 
                in a way that fits your schedule and learning style.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-deep mb-3">Build Real Understanding</h3>
              <p className="text-neutral-muted leading-relaxed">
                We aim for depth over breadth. Rather than covering every possible topic, we focus 
                on building genuine understanding that enables you to adapt and learn independently 
                as technologies evolve.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-deep mb-3">Maintain High Standards</h3>
              <p className="text-neutral-muted leading-relaxed">
                As an initiative by a technology company that builds real products, we hold ourselves 
                to the same standards we use in our own work. Quality and clarity matter here, 
                because they matter in real work too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motto / Philosophy */}
      <section className="bg-neutral-offwhite py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-neutral-border pt-12">
            <p className="text-2xl md:text-3xl text-slate-deep font-medium mb-8 leading-relaxed">
              Learn skills that matter, from people who build them.
            </p>
            <div className="space-y-6 text-neutral-muted leading-relaxed">
              <p>
                This motto captures our core belief: effective learning comes from people who 
                understand not just how to use tools, but why and when to use them. It's the 
                difference between following a tutorial and solving a problem.
              </p>
              <p>
                We believe that the best teachers are those who are actively working with the 
                technologies they teach. They understand the nuances, the trade-offs, and the 
                real-world constraints that shape how things actually get built. This perspective 
                is what makes learning here different from generic online courses or academic 
                programs disconnected from industry practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Approach Learning */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-slate-deep font-medium">How We Approach Learning</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-12">
            <div className="order-0 md:order-1 flex-1 max-w-prose space-y-6 text-neutral-muted leading-relaxed">
              <p>
                We design learning around real work, so what you study connects directly to the problems you’ll
                solve in practice.
              </p>
              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-medium text-slate-deep">
                    Applied, not abstract
                  </h3>
                  <p>
                    Concepts are taught in the context of concrete problems and real scenarios, not as isolated theory.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-deep">
                    Start with why
                  </h3>
                  <p>
                    Every topic begins with the purpose behind it—what it solves, when it’s useful, and how it fits into the bigger picture.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-deep">
                    Practice that feels real
                  </h3>
                  <p>
                    You work on projects that mirror real environments, building confidence through relevant, hands-on practice.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-deep">
                    Thoughtful pacing
                  </h3>
                  <p>
                    Courses are designed to give room for reflection, questions, and repetition, so understanding has time to take root.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-0 flex justify-center md:justify-start flex-none">
              <img
                src="/illustrations/howweapproach.svg"
                aria-hidden="true"
                className="w-full max-w-sm h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who This Academy Is For */}
      <section className="bg-neutral-offwhite py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-slate-deep font-medium">Who This Academy Is For</h2>
          <div className="space-y-8 text-neutral-muted leading-relaxed">
            <p>
              This academy is for people who are curious about how things work and want to build 
              real things. It's for those who value understanding over memorization, and who prefer 
              learning from practitioners over learning from theory alone.
            </p>
            <p>
              You might be a student looking to bridge the gap between academic learning and 
              industry needs. You might be a working professional wanting to stay current with 
              new approaches and tools. You might be someone starting from scratch, ready to 
              learn systematically and thoughtfully. Or you might be a tech enthusiast who wants 
              to deepen your understanding and explore advanced concepts.
            </p>
            <p>
              What matters isn't your background or current role—it's your mindset. If you're 
              growth-focused, builder-oriented, and committed to learning skills that translate 
              to real work, this academy is for you.
            </p>
            <p>
              We welcome learners who are willing to put in the effort to understand deeply, 
              who ask questions, and who are motivated by the satisfaction of solving real problems 
              rather than just completing courses.
            </p>
          </div>
        </div>
      </section>

      {/* Relationship with Ugenix Technologies LLP */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-neutral-border pt-12">
            <h2 className="mb-8 text-slate-deep font-medium">Relationship with Ugenix Technologies LLP</h2>
            <div className="space-y-6 text-neutral-muted leading-relaxed text-sm">
              <p>
                UgeniX Academy is an initiative by Ugenix Technologies LLP, a technology company 
                that builds real products and solves real problems. This connection isn't just 
                organizational—it's foundational to how we approach training.
              </p>
              <p>
                The same standards and practices we use in our own product work inform how we 
                design and deliver courses. When we teach a skill or approach, it's because we've 
                seen it work in practice, not just because it's trending or sounds impressive. 
                Our instructors are practitioners who understand the realities of building 
                technology products because they do it every day.
              </p>
              <p>
                This relationship means our training reflects current industry practices and 
                real-world constraints. It also means we're committed to quality and clarity, 
                because those values matter in our own work and they should matter in education too.
              </p>
              <div className="mt-8 pt-6 border-t border-neutral-border">
                <div className="flex items-center gap-3">
                  <p className="text-sm text-neutral-muted">An initiative by</p>
                  <a
                    href="https://ugenix.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity duration-200 ease-in-out hover:opacity-80"
                  >
                    <img
                      src="/illustrations/Ugenix Logo Long.svg"
                      alt="Ugenix Technologies LLP"
                      className="h-6 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="bg-neutral-offwhite py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-neutral-border pt-12">
            <p className="text-lg text-neutral-muted leading-relaxed">
              Our commitment is to meaningful learning—learning that builds real understanding, 
              develops practical skills, and enables you to do work that matters. We're here to 
              provide structure, guidance, and expertise, but the most important part of learning 
              happens when you apply what you've learned to real problems. That's where skills 
              become meaningful, and that's what we're here to support.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
