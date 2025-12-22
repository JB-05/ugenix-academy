import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-lg font-medium text-slate-deep mb-4">UgeniX Academy</h3>
            <p className="text-neutral-muted text-sm">
              Professional training for the modern workforce.
            </p>
          </div>
          
          {/* Column 2 - Explore */}
          <div>
            <h4 className="text-sm font-medium text-slate-deep mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#courses" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  About Academy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-slate-deep mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-sm font-medium text-slate-deep mb-4">Contact</h4>
            <p className="text-neutral-muted text-sm mb-3">
              For course-related queries and support.
            </p>
            <Link href="/contact" className="text-neutral-muted hover:text-slate-deep transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-border">
          <div className="flex items-center justify-center gap-3 mb-6">
            <p className="text-sm text-neutral-muted">An initiative by</p>
            <a
              href="https://ugenix.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 ease-in-out hover:opacity-80"
            >
              <img
                src="/illustrations/Ugenix Logo Long.svg"
                alt="UgeniX"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="text-center text-sm text-neutral-muted">
            <p>&copy; {new Date().getFullYear()} UgeniX Academy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

