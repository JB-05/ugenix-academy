import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 md:pt-36 pb-16 md:pb-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Glass Container */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/10 p-8 md:p-10 lg:p-12">
          {/* Error Code */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-light text-neutral-muted mb-6">404</h1>
          </div>

          {/* Primary Message */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-deep">
            Page not found
          </h2>

          {/* Supporting Copy */}
          <p className="text-lg text-neutral-muted mb-8 leading-relaxed">
            The page you're looking for doesn't exist or the link may be outdated.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/">
              <HoverBorderGradient
                as="button"
                containerClassName="rounded-full"
                className="bg-white text-slate-900 px-6 py-3 font-medium"
              >
                Go back home
              </HoverBorderGradient>
            </Link>
            <Link
              href="/#courses"
              className="btn-secondary-baseline"
            >
              Browse courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}



