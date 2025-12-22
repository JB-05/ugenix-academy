import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="mb-6 text-slate-deep font-medium">Page Not Found</h1>
          <p className="text-lg text-neutral-muted mb-8 leading-relaxed">
            This page is not available yet.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white font-medium hover:bg-brand-dark hover:text-white transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Return to Home
          </Link>
        </div>
      </section>
    </div>
  )
}



