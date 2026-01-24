import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Geometric Shapes - Left Side */}
      {/* Top-left quarter circle */}
      <div className="absolute left-0 top-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-brand/25 rounded-br-full" />
      {/* Middle-left quarter circle */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-coral-light/30 rounded-tr-full" />
     
      {/* Geometric Shapes - Right Side */}
     {/* Middle-right quarter circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-brand/30 rounded-tl-full" />
      {/* Bottom-right quarter circle */}
      <div className="absolute right-0 bottom-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-violet-soft/20 rounded-tl-full" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 md:p-10 lg:p-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Text Content - Left on Desktop, First on Mobile */}
              <div className="text-center md:text-left order-1 md:order-1">
                <h2 className="mb-6 text-slate-deep font-medium">Start building skills that actually matter</h2>
                <p className="text-lg text-neutral-muted mb-8 md:mb-12 leading-relaxed">
                  Join a learning experience designed for clarity and practical application.
                </p>
                <Link href="#courses">
                  <HoverBorderGradient
                    as="button"
                    containerClassName="rounded-full"
                    className="bg-white text-slate-900 px-6 py-3 font-medium"
                  >
                    Start Your Learning Journey
                  </HoverBorderGradient>
                </Link>
              </div>
              {/* Illustration - Right on Desktop, Below on Mobile */}
              <div className="flex justify-center md:justify-end order-2 md:order-2">
                <img
                  src="/illustrations/cta.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


