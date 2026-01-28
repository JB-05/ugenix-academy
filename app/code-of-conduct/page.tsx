'use client'

import { useRouter } from 'next/navigation'

export default function CodeOfConductPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen pt-32 md:pt-36 pb-16 md:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 text-neutral-muted hover:text-slate-deep transition-colors duration-200 text-sm font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h1 className="mb-8 text-slate-deep font-medium">Code of Conduct</h1>
          
          <div className="space-y-8 text-neutral-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">4.1 Purpose and Scope</h2>
              <p className="mb-4">
                This Code of Conduct outlines the standards of behavior expected from all learners participating in
                Ugenix Academy's courses and live classes. Its purpose is to ensure a respectful, inclusive, safe, and
                effective learning environment for all participants, instructors, and staff.
              </p>
              <p>
                Compliance with this Code of Conduct is mandatory and applies to all interactions during live classes,
                discussions, communications, and any academy-related activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">4.2 Expected Standards of Behavior</h2>
              <p>
                Learners are expected to behave in a professional and respectful manner at all times. This includes
                engaging courteously with instructors and fellow learners, following class guidelines, and
                contributing positively to the learning experience. Differences in opinions should be expressed
                respectfully and constructively.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">4.3 Prohibited Conduct</h2>
              <p className="mb-4">
                Ugenix Academy strictly prohibits behavior that disrupts learning or compromises the safety and
                dignity of others. Prohibited conduct includes, but is not limited to, harassment, bullying,
                intimidation, discriminatory remarks, abusive language, disruptive behavior during live sessions, and
                any form of academic dishonesty.
              </p>
              <p>
                Learners must not record, distribute, or share live classes or course materials without explicit
                authorization. Misrepresentation of identity or misuse of another learner's credentials is also
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">4.4 Platform Integrity and Security</h2>
              <p>
                Users must not attempt to interfere with the technical operation of live classes or the academy's
                systems. Any attempt to hack, misuse access links, introduce malicious software, or disrupt sessions
                is strictly forbidden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">4.5 Enforcement and Disciplinary Action</h2>
              <p>
                Violations of this Code of Conduct may result in disciplinary actions, including warnings, removal
                from live sessions, temporary suspension, or permanent termination of access without refund,
                depending on the severity of the violation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">4.6 Reporting Violations</h2>
              <p className="mb-2">
                Learners who witness or experience violations of this Code of Conduct are encouraged to report such
                incidents promptly by contacting:
              </p>
              <div className="ml-4">
                <p>
                  Email:{' '}
                  <a
                    href="mailto:academy.ugenix@gmail.com"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    academy.ugenix@gmail.com
                  </a>
                </p>
              </div>
              <p className="mt-4">
                By enrolling in any course or attending live classes, you confirm that you have read, understood,
                and agreed to abide by this Code of Conduct.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
