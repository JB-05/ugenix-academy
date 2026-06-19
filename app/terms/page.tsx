'use client'

import { useRouter } from 'next/navigation'

export default function TermsPage() {
  const router = useRouter()

  return (
    <div className="dark-page">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="dark-card p-8 md:p-10 lg:p-12">
          <button
            onClick={() => router.back()}
            className="dark-back-link"
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
          <h1 className="mb-8 text-text-primary font-medium">Terms & Conditions</h1>
          
          <div className="dark-prose">
            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.1 Acceptance of Terms</h2>
              <p className="mb-4">
                These Terms & Conditions constitute a legally binding agreement between you (the "Learner" or
                "User") and Ugenix Academy. By accessing our website, enrolling in any course, or attending live
                classes conducted by Ugenix Academy, you acknowledge that you have read, understood, and agreed
                to be bound by these Terms & Conditions, along with any policies referenced herein.
              </p>
              <p>
                If you do not agree with any part of these Terms, you must refrain from enrolling in or using our
                Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.2 Nature of Services</h2>
              <p>
                Ugenix Academy provides paid, instructor-led live educational classes delivered through online
                platforms. The scope, duration, syllabus, schedule, instructors, and delivery format of courses may
                vary and are subject to change at the discretion of Ugenix Academy. Any updates or modifications
                will be communicated through official channels.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.3 Eligibility and Enrollment</h2>
              <p>
                Enrollment is open primarily to learners residing in India. By enrolling, you confirm that the
                information provided during registration is accurate and complete. Ugenix Academy reserves the
                right to deny or cancel enrollment if false, misleading, or incomplete information is provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.4 User Responsibilities</h2>
              <p>
                Learners are expected to conduct themselves responsibly and professionally. Users are responsible
                for maintaining the confidentiality of class access links, credentials, and any shared materials. Sharing
                of access details, impersonation, or unauthorized participation is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.5 Intellectual Property Rights</h2>
              <p className="mb-4">
                All course materials, including but not limited to live lectures, recordings, slides, notes, assignments,
                logos, and branding, are the exclusive intellectual property of Ugenix Academy. Access to such
                materials is granted solely for personal, non-commercial educational use.
              </p>
              <p>
                Any reproduction, recording, distribution, resale, or public sharing of course content without prior
                written permission from Ugenix Academy is strictly prohibited and may result in legal action.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.6 Class Recordings</h2>
              <p>
                Live classes may be recorded for academic continuity, quality assurance, or internal review. By
                participating in live sessions, learners consent to such recordings. Recordings, if shared, are for
                personal academic use only and remain the property of Ugenix Academy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.7 Fees and Payments</h2>
              <p>
                All courses offered by Ugenix Academy are paid unless explicitly stated otherwise. Course access is
                granted only after successful verification of payment. Ugenix Academy reserves the right to revise
                course fees at any time for future enrollments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.8 Suspension and Termination</h2>
              <p>
                Ugenix Academy reserves the right to suspend or permanently terminate a learner's access to
                courses or services, without refund, if the learner violates these Terms, the Refund Policy, or the
                Code of Conduct, or engages in behavior deemed disruptive or harmful to the learning environment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.9 Disclaimer of Guarantees</h2>
              <p>
                All courses are provided for educational purposes only. Ugenix Academy does not guarantee
                academic success, examination results, certifications, employment, internships, or income outcomes
                as a result of course participation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.10 Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Ugenix Academy shall not be liable for any indirect,
                incidental, special, or consequential damages arising out of or related to the use of our Services,
                including but not limited to loss of data, loss of opportunity, or interruption of services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-text-primary mb-4">2.11 Governing Law and Jurisdiction</h2>
              <p>
                These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.
                The courts located in Kerala shall have exclusive jurisdiction over any disputes arising under these
                Terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
