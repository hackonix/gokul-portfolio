import { socialLinks } from '../data/achievements';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#1e2d45]/60 bg-[#0a0f1e]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center">
                <span className="text-[#3b82f6] font-bold text-sm font-mono">G</span>
              </div>
              <span className="font-bold text-[#f8fafc]">{socialLinks.fullName}</span>
            </div>
            <p className="text-xs text-[#94a3b8] mb-1">{socialLinks.professionalTitle}</p>
            <p className="text-[10px] text-[#475569] italic">
              "Building at the intersection of hardware, software and intelligence."
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs text-[#94a3b8] font-mono tracking-widest uppercase mb-3">Navigation</p>
            <div className="grid grid-cols-2 gap-1.5">
              {['About', 'Education', 'Skills', 'Projects', 'Research', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-xs text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-[#94a3b8] font-mono tracking-widest uppercase mb-3">Connect</p>
            <div className="flex flex-col gap-2">
              <a
                href={socialLinks.github.includes('[ADD') ? '#' : socialLinks.github}
                target={socialLinks.github.startsWith('http') ? '_blank' : undefined}
                rel={socialLinks.github.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-xs text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href={socialLinks.linkedin.includes('[ADD') ? '#' : socialLinks.linkedin}
                target={socialLinks.linkedin.startsWith('http') ? '_blank' : undefined}
                rel={socialLinks.linkedin.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-xs text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={socialLinks.email.includes('[ADD') ? '#' : `mailto:${socialLinks.email}`}
                className="flex items-center gap-2 text-xs text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1e2d45]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#475569]">
            © {CURRENT_YEAR} Gokulakrishnan R. Built with React + Vite + Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[10px] text-[#475569] hover:text-[#94a3b8] transition-colors"
            aria-label="Scroll to top"
          >
            Back to top
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
