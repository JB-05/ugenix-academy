'use client'

import { useRouter } from 'next/navigation'

export default function RefundPolicyPage() {
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
          <h1 className="mb-8 text-slate-deep font-medium">Refund Policy</h1>
          
          <div className="space-y-8 text-neutral-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">3.1 General Policy</h2>
              <p>
                All fees paid to Ugenix Academy for course enrollment are strictly non-refundable unless explicitly
                stated otherwise on the respective course enrollment or payment page. By completing the payment
                process, learners acknowledge and accept this non-refund policy and understand that enrollment
                constitutes a commitment to the course.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">3.2 Limited Exceptions</h2>
              <p>
                Refunds may be considered only in exceptional circumstances and solely at the discretion of Ugenix
                Academy. Such circumstances are limited to situations where a course is cancelled by Ugenix
                Academy prior to its official commencement, or where a learner has made a clearly verifiable
                duplicate payment for the same course. In cases where a refund is approved, the amount will be
                processed within a reasonable timeframe using the original payment method, subject to applicable
                payment gateway timelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-slate-deep mb-4">3.3 Non-Eligibility for Refunds</h2>
              <p className="mb-4">
                Refunds will not be issued under any circumstances arising from missed or unattended classes,
                partial participation, dissatisfaction with course content, teaching style, or learning outcomes, or due
                to technical issues originating from the learner's device, internet connectivity, or software
                environment. Learners are advised to review course details carefully before enrollment.
              </p>
              <p>
                This Refund Policy forms an integral part of the Terms & Conditions of Ugenix Academy, and
                enrollment in any course signifies full acceptance of the terms stated herein.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
