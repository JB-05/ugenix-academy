'use client'

import { useRouter } from 'next/navigation'

export default function PrivacyPolicyPage() {
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
          <h1 className="mb-8 text-slate-deep font-medium">Privacy Policy</h1>
          
          <div className="space-y-8 text-neutral-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.1 Introduction</h2>
              <p className="mb-4">
                Ugenix Academy ("we", "our", "us") is a private educational academy headquartered in Kerala, India.
                We provide paid, instructor-led live classes to learners through our official website and associated
                online communication platforms (collectively referred to as the "Services").
              </p>
              <p className="mb-4">
                This Privacy Policy describes the manner in which Ugenix Academy collects, uses, stores, discloses,
                and safeguards personal information provided by learners, prospective learners, and website visitors
                ("Users"). We are committed to protecting the privacy of our users and handling personal
                information in a responsible and transparent manner.
              </p>
              <p>
                By accessing our website, enrolling in our courses, or otherwise using our Services, you acknowledge
                that you have read, understood, and agreed to the practices described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.2 Information We Collect</h2>
              <p className="mb-4">
                Ugenix Academy collects only such information as is reasonably necessary to operate and administer
                its educational services. The information collected may include the following:
              </p>
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-medium text-slate-deep mb-2">a. Personal and Academic Information</h3>
                  <p>
                    When you register for a course or communicate with us, we may collect personal details such as your
                    full name, email address, phone number, academic branch, and course year. This information helps
                    us verify your identity, manage enrollments, and provide academic support.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-deep mb-2">b. Payment Verification Information</h3>
                  <p>
                    For the purpose of confirming successful fee payments, we may collect transaction confirmation
                    details and, where applicable, photographic or screenshot-based proof of payment shared by the
                    learner. Ugenix Academy does not collect or store debit card, credit card, UPI credentials, or banking
                    passwords.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-deep mb-2">c. Usage and Communication Information</h3>
                  <p>
                    During the delivery of live classes, we may maintain records related to attendance, participation, and
                    academic communications. Any emails, messages, or support requests sent to us may also be
                    retained for administrative reference.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.3 Purpose of Information Collection</h2>
              <p className="mb-4">
                The personal information collected by Ugenix Academy is used strictly for legitimate academic and
                operational purposes. These purposes include, but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Processing course registrations and enrollments</li>
                <li>Verifying payments and maintaining financial records</li>
                <li>Providing access to live classes and academic resources</li>
                <li>Communicating important course-related updates and notices</li>
                <li>Responding to learner queries and providing support</li>
                <li>Internal record-keeping and service improvement</li>
              </ul>
              <p className="mt-4">
                We do not use personal information for advertising, data profiling, or commercial resale.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.4 Disclosure and Sharing of Information</h2>
              <p className="mb-4">
                Ugenix Academy does not sell, rent, or trade personal information to third parties. Information may
                be shared only in limited circumstances, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With instructors or internal staff solely for academic and administrative purposes</li>
                <li>With third-party payment service providers for transaction verification</li>
                <li>When disclosure is required by law, regulation, or lawful request from a competent authority</li>
              </ul>
              <p className="mt-4">
                Any third parties who receive access to personal information are expected to maintain appropriate
                confidentiality and data protection standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.5 Data Storage and Security Measures</h2>
              <p className="mb-4">
                We take reasonable administrative and technical measures to safeguard personal information against
                unauthorized access, misuse, loss, or alteration. Access to personal data is restricted to authorized
                personnel only.
              </p>
              <p>
                While we strive to protect user information using commercially reasonable means, users
                acknowledge that no method of data transmission or storage is entirely secure, and absolute security
                cannot be guaranteed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.6 Data Retention</h2>
              <p>
                Personal information is retained only for as long as necessary to fulfill the purposes for which it was
                collected, including academic administration, internal record-keeping, and compliance with
                applicable legal requirements. Once the information is no longer required, it is securely deleted or
                anonymized.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.7 Children and Minor Learners</h2>
              <p>
                Ugenix Academy's courses are generally intended for learners aged 16 years and above. Learners
                under the age of 18 are expected to obtain consent from a parent or legal guardian prior to
                enrollment. We do not knowingly collect personal information from minors without such consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.8 User Choices and Communication Preferences</h2>
              <p>
                Users may choose to limit or update the information they provide to us, subject to the requirement
                that certain information is necessary for enrollment and course participation. Users may also opt out
                of non-essential communications by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.9 Updates to This Privacy Policy</h2>
              <p>
                Ugenix Academy reserves the right to update or modify this Privacy Policy at any time. Any changes
                will be effective immediately upon posting on our website. Continued use of the Services after such
                changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">1.10 Contact Information</h2>
              <p className="mb-2">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your
                personal information, you may contact:
              </p>
              <div className="ml-4 space-y-1">
                <p>
                  <strong className="text-slate-deep">Ugenix Academy</strong>
                </p>
                <p>Kerala, India</p>
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
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
