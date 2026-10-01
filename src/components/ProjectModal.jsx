import { useEffect } from 'react';

const STATUS_BADGE = {
  'Prototype': { color: '#f97316', bg: 'rgba(249,115,22,0.1)' },
  'In Development': { color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
  'Completed': { color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  'Planned': { color: '#94a3b8', bg: 'rgba(148,163,184,0.08)' },
};

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const badge = STATUS_BADGE[project.status] || STATUS_BADGE['Prototype'];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0a0f1e]/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d1526] border border-[#1e2d45] shadow-2xl mt-8">
        {/* Header */}
        <div
          className="sticky top-0 z-10 p-6 border-b border-[#1e2d45] flex items-start justify-between"
          style={{ background: '#0d1526' }}
        >
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: badge.bg, color: badge.color }}
              >
                {project.status}
              </span>
              <span className="text-xs text-[#94a3b8]">{project.year}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#f8fafc]">{project.title}</h2>
            <p className="text-[#94a3b8] text-sm mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#1e2d45] transition-colors text-[#94a3b8] hover:text-white flex-shrink-0"
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Problem */}
          <Section title="Problem Statement" icon="⚠" color={project.accentColor}>
            <p className="text-[#cbd5e1] text-sm leading-relaxed">{project.problem}</p>
          </Section>

          {/* Solution */}
          <Section title="Solution Approach" icon="💡" color={project.accentColor}>
            <p className="text-[#cbd5e1] text-sm leading-relaxed">{project.solution}</p>
          </Section>

          {/* Architecture */}
          <Section title="System Architecture" icon="🏗" color={project.accentColor}>
            <div className="space-y-2">
              {project.architecture.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold font-mono"
                    style={{ background: `${project.accentColor}15`, color: project.accentColor }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm text-[#cbd5e1]">{step}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Hardware & Software */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Section title="Hardware" icon="🔧" color="#f97316">
              <ul className="space-y-1.5">
                {project.hardware.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[#cbd5e1]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#f97316] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Software" icon="💻" color="#3b82f6">
              <ul className="space-y-1.5">
                {project.software.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-[#cbd5e1]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#3b82f6] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* ML & Signal Processing Details if present */}
          {project.ml && (
            <Section title="Machine Learning & Signal Processing" icon="🧠" color={project.accentColor}>
              <ul className="space-y-1.5">
                {project.ml.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-[#cbd5e1]">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                    {m}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Visualization Details if present */}
          {project.visualization && (
            <Section title="Visualization & Telemetry" icon="📊" color={project.accentColor}>
              <ul className="space-y-1.5">
                {project.visualization.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-sm text-[#cbd5e1]">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                    {v}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Results */}
          {project.results && (
            <Section title="Results & Verification" icon="🎯" color="#34d399">
              <p className="text-[#cbd5e1] text-sm leading-relaxed">{project.results}</p>
            </Section>
          )}

          {/* My Contribution */}
          <Section title="My Contribution" icon="👤" color={project.accentColor}>
            <p className="text-[#cbd5e1] text-sm leading-relaxed">{project.myContribution}</p>
          </Section>

          {/* Current State */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Section title="Implemented" icon="✅" color="#34d399">
              <ul className="space-y-1.5">
                {project.currentState.implemented.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#cbd5e1]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#34d399] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Planned / Future" icon="🔭" color="#94a3b8">
              <ul className="space-y-1.5">
                {project.currentState.planned.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#94a3b8] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Tech stack */}
          <Section title="Technologies" icon="⚙" color={project.accentColor}>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </div>
          </Section>

          {/* Links */}
          {(project.github || project.demo || project.documentation) && (
            <div className="flex flex-wrap gap-3 pt-4 border-t border-[#1e2d45]">
              {project.github && !project.github.includes('[ADD') && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e2d45] hover:bg-[#243452] text-[#f8fafc] text-sm font-medium transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, color, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span>{icon}</span>
        <h3
          className="text-sm font-bold uppercase tracking-wider"
          style={{ color }}
        >
          {title}
        </h3>
      </div>
      <div className="pl-6">{children}</div>
    </div>
  );
}
