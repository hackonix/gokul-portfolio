import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { projects, projectCategories } from '../data/projects';

const STATUS_BADGE = {
  'Prototype': { color: '#f97316', bg: 'rgba(249,115,22,0.1)' },
  'In Development': { color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
  'Completed': { color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  'Planned': { color: '#94a3b8', bg: 'rgba(148,163,184,0.08)' },
};

export default function Projects({ onOpenProject }) {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.05 });

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Projects</p>
          <h2 className="section-heading text-[#f8fafc]">
            Featured <span className="text-gradient-blue">Work</span>
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl text-sm">
            Technical projects combining hardware and software. Click any card for a full engineering case study.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}
          role="tablist"
          aria-label="Project filter"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-[#3b82f6]/20 border border-[#3b82f6]/50 text-[#93c5fd]'
                  : 'border border-[#1e2d45]/60 text-[#94a3b8] hover:text-[#f8fafc] hover:border-[#1e2d45]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              inView={inView}
              delay={i * 120}
              onClick={() => onOpenProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, inView, delay, onClick }) {
  const badge = STATUS_BADGE[project.status] || STATUS_BADGE['Prototype'];

  return (
    <div
      className={`group relative rounded-2xl card-surface overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-1.5 hover:shadow-2xl ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${delay + 150}ms`,
        boxShadow: `0 0 0 1px rgba(30,45,69,0.8)`,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Open case study: ${project.title}`}
    >
      {/* Accent bar on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
      />

      {/* Cover area */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `${project.accentColor}08` }}
      >
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <ProjectPlaceholder project={project} />
        )}

        {/* Status badge */}
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-medium"
          style={{ background: badge.bg, color: badge.color, border: `1px solid ${badge.color}40` }}
        >
          {project.status}
        </div>

        {/* Category chips */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {project.category.slice(0, 2).map((cat) => (
            <span key={cat} className="tech-chip text-[10px]">{cat}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-[#f8fafc] font-bold text-base leading-tight">{project.title}</h3>
            <p className="text-[#94a3b8] text-xs mt-0.5">{project.year}</p>
          </div>
          <svg
            className="w-4 h-4 text-[#1e2d45] group-hover:text-[#3b82f6] transition-colors mt-0.5 flex-shrink-0"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>

        <p className="text-[#94a3b8] text-xs mb-4 line-clamp-2">{project.subtitle}</p>

        {/* Tagline */}
        <p
          className="text-[11px] font-mono mb-4 italic"
          style={{ color: project.accentColor }}
        >
          {project.tagline}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-chip text-[9px]">{tech}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-chip text-[9px]">+{project.technologies.length - 5}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#1e2d45]/60">
          <span
            className="text-[10px] font-medium flex items-center gap-1"
            style={{ color: project.accentColor }}
          >
            <span className="w-1 h-1 rounded-full inline-block" style={{ background: project.accentColor }} />
            View Case Study
          </span>

          {project.github && !project.github.includes('[ADD') && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#94a3b8] hover:text-white transition-colors"
              aria-label="GitHub repository"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// SVG placeholder illustration per project type
function ProjectPlaceholder({ project }) {
  const icons = {
    tremora: (
      <g>
        {/* Node grid pattern */}
        {[0,1,2].map(row => [0,1,2].map(col => (
          <circle key={`${row}-${col}`}
            cx={60 + col * 60} cy={40 + row * 40}
            r="5" fill={project.accentColor} opacity={0.4 + (row + col) * 0.1}
          />
        )))}
        {/* Lines between nodes */}
        <line x1="65" y1="40" x2="115" y2="40" stroke={project.accentColor} strokeWidth="1" opacity="0.3"/>
        <line x1="115" y1="40" x2="175" y2="40" stroke={project.accentColor} strokeWidth="1" opacity="0.3"/>
        <line x1="60" y1="45" x2="60" y2="75" stroke={project.accentColor} strokeWidth="1" opacity="0.3"/>
        <line x1="120" y1="45" x2="120" y2="75" stroke={project.accentColor} strokeWidth="1" opacity="0.3"/>
        <line x1="180" y1="45" x2="180" y2="75" stroke={project.accentColor} strokeWidth="1" opacity="0.3"/>
        {/* Packet */}
        <circle cx="90" cy="40" r="3" fill="#22d3ee" opacity="0.8"/>
        {/* Waveform */}
        <path d="M40 120 Q50 105 60 120 Q70 135 80 120 Q90 105 100 120 Q110 135 120 120 Q130 105 140 120 Q150 135 160 120 Q170 105 180 120 Q190 135 200 120 Q210 105 220 120"
          stroke={project.accentColor} strokeWidth="1.5" fill="none" opacity="0.5"/>
      </g>
    ),
    'neonatal-warmer': (
      <g>
        {/* Temperature sensor arc */}
        <path d="M120 40 A60 60 0 0 1 180 100" stroke={project.accentColor} strokeWidth="2" fill="none" opacity="0.5"/>
        <path d="M120 40 A60 60 0 0 0 60 100" stroke={project.accentColor} strokeWidth="2" fill="none" opacity="0.3"/>
        {/* Thermometer */}
        <rect x="112" y="60" width="16" height="60" rx="8" fill="none" stroke={project.accentColor} strokeWidth="1.5" opacity="0.6"/>
        <rect x="114" y="90" width="12" height="28" rx="6" fill={project.accentColor} opacity="0.5"/>
        {/* PID arrow */}
        <path d="M90 130 L150 130" stroke="#f8fafc" strokeWidth="1" opacity="0.3"/>
        <path d="M150 125 L155 130 L150 135" stroke="#f8fafc" strokeWidth="1" fill="none" opacity="0.3"/>
        <text x="105" y="145" fill="#94a3b8" fontSize="9" fontFamily="monospace">PID LOOP</text>
        {/* Heater element */}
        <path d="M100 60 Q105 55 110 60 Q105 65 100 60" stroke={project.accentColor} strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M100 68 Q105 63 110 68 Q105 73 100 68" stroke={project.accentColor} strokeWidth="1" fill="none" opacity="0.5"/>
      </g>
    ),
    'line-follower': (
      <g>
        {/* Track */}
        <path d="M40 120 C70 120 80 80 120 80 C160 80 170 120 200 120 C230 120 240 80 280 80"
          stroke="#1e2d45" strokeWidth="30" fill="none"/>
        <path d="M40 120 C70 120 80 80 120 80 C160 80 170 120 200 120 C230 120 240 80 280 80"
          stroke={project.accentColor} strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="6 4"/>
        {/* Robot body */}
        <rect x="100" y="65" width="40" height="30" rx="4" fill={project.accentColor} opacity="0.3" stroke={project.accentColor} strokeWidth="1.5"/>
        {/* Wheels */}
        <rect x="96" y="72" width="8" height="16" rx="4" fill={project.accentColor} opacity="0.6"/>
        <rect x="136" y="72" width="8" height="16" rx="4" fill={project.accentColor} opacity="0.6"/>
        {/* IR sensors */}
        <circle cx="108" cy="97" r="3" fill="#22d3ee" opacity="0.8"/>
        <circle cx="120" cy="97" r="3" fill="#22d3ee" opacity="0.8"/>
        <circle cx="132" cy="97" r="3" fill="#22d3ee" opacity="0.8"/>
      </g>
    ),
  };

  return (
    <svg
      width="100%" height="100%"
      viewBox="0 0 300 160"
      className="absolute inset-0 group-hover:opacity-80 transition-opacity"
      aria-hidden="true"
    >
      <defs>
        <filter id={`glow-${project.id}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g filter={`url(#glow-${project.id})`}>
        {icons[project.id] || (
          <text x="150" y="90" textAnchor="middle" fill={project.accentColor} fontSize="12" fontFamily="monospace" opacity="0.5">
            {project.title}
          </text>
        )}
      </g>
    </svg>
  );
}
