import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="w-full px-6 py-5 border-b border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold tracking-tight text-[#0a0a0a] hover:opacity-70 transition-opacity duration-150">
            InagenAI
          </Link>
          <nav className="flex items-center gap-6 text-sm text-[#6b7280]">
            <a
              href="https://x.com/inagenai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="InagenAI on X (@inagenai)"
              className="inline-flex items-center gap-1.5 hover:text-[#0a0a0a] transition-colors duration-150"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-3.5 h-3.5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @inagenai
            </a>
            <Link href="/privacy" className="hover:text-[#0a0a0a] transition-colors duration-150">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#0a0a0a] transition-colors duration-150">
              Terms
            </Link>
            <Link href="/gdpr" className="hover:text-[#0a0a0a] transition-colors duration-150">
              GDPR
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <h1 className="text-[32px] font-semibold tracking-[-0.03em] text-[#0a0a0a] mb-2">
              {title}
            </h1>
            <p className="text-[14px] text-[#9ca3af]">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose-legal">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#9ca3af]">
          <span>&copy; {new Date().getFullYear()} InagenAI. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[#6b7280] transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#6b7280] transition-colors duration-150">
              Terms of Service
            </Link>
            <Link href="/gdpr" className="hover:text-[#6b7280] transition-colors duration-150">
              GDPR
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
