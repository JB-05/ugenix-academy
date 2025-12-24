import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-6 lg:space-y-8">
        {/* 1️⃣ Top Card — Brand Context */}
        <div className="relative rounded-2xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-md border border-white/50 shadow-lg shadow-black/5 p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <h3 className="text-xl lg:text-2xl font-medium text-slate-deep">Ugenix Academy</h3>
            <p className="text-neutral-muted text-sm lg:text-base md:text-right">
              Professional training for the modern workforce.
            </p>
          </div>
        </div>

        {/* 2️⃣ Contact Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-md border border-white/50 shadow-lg shadow-black/5 p-6 lg:p-8">
          <h4 className="text-xl font-medium text-slate-deep text-center">Contact</h4>
          <p className="text-neutral-muted text-sm mb-6 text-center">
            For course-related queries and support.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6 mb-6 text-sm text-neutral-muted">
            <div>
              <span className="font-medium text-slate-deep">Email:</span>{' '}
              <a href="mailto:academy@ugenix.com" className="hover:text-slate-deep transition-colors duration-200">
                academy@ugenix.in
              </a>
            </div>
            <div>
              <span className="font-medium text-slate-deep">Phone:</span>{' '}
              <a href="tel:+919876543210" className="hover:text-slate-deep transition-colors duration-200">
                +91 97785 68601
              </a>
            </div>
            <div>
              <span className="font-medium text-slate-deep">Location:</span>{' '}
              <span>Pathanamthitta, Kerala, India</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/contact">
              <HoverBorderGradient
                as="button"
                containerClassName="rounded-full"
                className="bg-white text-slate-900 px-6 py-2.5 font-medium text-sm"
              >
                Contact Us
              </HoverBorderGradient>
            </Link>
          </div>
        </div>

        {/* 3️⃣ Navigation Grid Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-md border border-white/50 shadow-lg shadow-black/5 p-6 lg:p-8">
          {/* Main Container Title */}
          <h3 className="text-base lg:text-lg font-semibold text-slate-deep mb-6 lg:mb-8 text-center">
            Site Navigation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Explore Column */}
            <div>
              <h4 className="text-sm font-medium text-slate-deep mb-4">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#courses" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    About Academy
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Resources Column */}
            <div>
              <h4 className="text-sm font-medium text-slate-deep mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/faq" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div>
              <h4 className="text-sm font-medium text-slate-deep mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/code-of-conduct" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200">
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4️⃣ Bottom Bar */}
        <div className="relative rounded-xl bg-gradient-to-br from-white/70 via-white/60 to-white/50 backdrop-blur-sm border border-white/40 shadow-md shadow-black/5 px-6 py-4 lg:px-8 lg:py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-neutral-muted">
              <p>An initiative by</p>
              <a
                href="https://ugenix.in"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 ease-in-out hover:opacity-80"
              >
                <img
                  src="/illustrations/Ugenix Logo Long.svg"
                  alt="Ugenix"
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="text-center md:text-right text-sm text-neutral-muted">
            <p>&copy; {new Date().getFullYear()} Ugenix Academy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

