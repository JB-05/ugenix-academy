import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="dark-page flex flex-col justify-center">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="dark-card p-8 md:p-10 lg:p-12">
          <div className="mb-8">
            <h1 className="mb-6 text-6xl font-light text-text-muted md:text-7xl">404</h1>
          </div>

          <h2 className="mb-4 text-2xl font-semibold text-text-primary md:text-3xl">
            Page not found
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-text-secondary">
            The page you&apos;re looking for doesn&apos;t exist or the link may be outdated.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/" className="btn-primary-orange">
              Go back home
            </Link>
            <Link href="/#programs" className="btn-ghost-orange">
              Browse programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
