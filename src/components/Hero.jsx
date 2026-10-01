import { useTypewriter } from '../hooks/useInView';
import Background from './Background';
import { socialLinks } from '../data/achievements';

const ROLES = [
  'Embedded Systems Engineer',
  'Robotics Developer',
  'Control Systems Learner',
  'Computer Vision Enthusiast',
  'AI/ML for Robotics',
  'Hardware–Software Integrator',
];

export default function Hero() {
  const typeText = useTypewriter(ROLES, 75, 2200);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <Background />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" aria-hidden="true" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(10,15,30,0.7) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#1a2540]/80 border border-[#1e2d45] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse-dot" />
            <span className="text-xs text-[#94a3b8] font-medium tracking-wide">
              3rd Year Engineering Student · Chennai, India
            </span>
          </div>

          {/* Main heading */}
          <h1 className="section-heading mb-4 leading-tight">
            <span className="block text-[#94a3b8] text-2xl font-medium mb-2">
              Hi, I'm
            </span>
            <span className="text-[#f8fafc]">Gokulakrishnan R</span>
          </h1>

          {/* Dynamic role text */}
          <div className="flex items-center gap-3 mb-6 h-10">
            <span className="text-[#22d3ee] font-mono text-sm tracking-wider">&gt;_</span>
            <span className="text-xl sm:text-2xl font-semibold text-gradient-blue font-mono">
              {typeText}
              <span className="inline-block w-0.5 h-6 bg-[#3b82f6] ml-0.5 animate-blink" />
            </span>
          </div>

          {/* Tagline */}
          <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
            I build and study intelligent robotic systems by combining{' '}
            <span className="text-[#f8fafc]">embedded hardware</span>,{' '}
            <span className="text-[#f8fafc]">software</span>,{' '}
            <span className="text-[#f8fafc]">control theory</span>,{' '}
            <span className="text-[#f8fafc]">sensing</span> and{' '}
            <span className="text-[#f8fafc]">AI</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="group px-6 py-3 rounded-lg bg-[#3b82f6] text-white font-semibold text-sm hover:bg-[#2563eb] transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                Explore My Work
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <a
              href={socialLinks.resume.includes('[ADD') ? '#' : socialLinks.resume}
              target={socialLinks.resume.startsWith('http') ? '_blank' : undefined}
              rel={socialLinks.resume.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="px-6 py-3 rounded-lg border border-[#1e2d45] text-[#f8fafc] font-semibold text-sm hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              Download Resume
            </a>

            {/* Secondary links */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href={socialLinks.github.includes('[ADD') ? '#' : socialLinks.github}
                target={socialLinks.github.startsWith('http') ? '_blank' : undefined}
                rel={socialLinks.github.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-1.5 text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon />
                <span className="hidden sm:block">GitHub</span>
              </a>
              <span className="text-[#1e2d45]">·</span>
              <a
                href={socialLinks.linkedin.includes('[ADD') ? '#' : socialLinks.linkedin}
                target={socialLinks.linkedin.startsWith('http') ? '_blank' : undefined}
                rel={socialLinks.linkedin.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-1.5 text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
                <span className="hidden sm:block">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-[#1e2d45]/60">
            {[
              { label: 'Engineering Branch', value: 'EICE' },
              { label: 'Focus Area', value: 'Robotics + Embedded' },
              { label: 'Projects', value: '3+ Active' },
              { label: 'Location', value: 'Chennai, TN' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-lg font-bold text-[#f8fafc]">{value}</div>
                <div className="text-xs text-[#94a3b8] mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] text-[#94a3b8] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#94a3b8] to-transparent" />
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
