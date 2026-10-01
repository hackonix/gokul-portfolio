import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { skillCategories, maturityColors } from '../data/skills';

const CATEGORY_ICONS = {
  programming: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  embedded: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  robotics: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" />
      <path d="M12 7v4M8 15h1M15 15h1" />
    </svg>
  ),
  control: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  'ai-ml': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2a4 4 0 0 1 4 4v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4z" />
      <circle cx="12" cy="14" r="2" /><path d="M9 11v-1M15 11v-1" />
    </svg>
  ),
  tools: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const [ref, inView] = useInView({ threshold: 0.05 });

  const active = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Skills</p>
          <h2 className="section-heading text-[#f8fafc]">
            Engineering <span className="text-gradient-blue">Toolkit</span>
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl text-sm">
            Organized by domain. Skill maturity reflects honest self-assessment — not marketing.
          </p>
        </div>

        {/* Maturity legend */}
        <div
          className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          {Object.entries({
            'Exploring': '#475569',
            'Learning': '#3b82f6',
            'Building Projects': '#f97316',
            'Strong Foundation': '#34d399',
          }).map(([label, color]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span className="text-xs text-[#94a3b8]">{label}</span>
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-150 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'text-[#f8fafc]'
                  : 'text-[#94a3b8] hover:text-[#f8fafc] bg-transparent border border-[#1e2d45]/60 hover:border-[#1e2d45]'
              }`}
              style={
                activeCategory === cat.id
                  ? { background: `${cat.color}20`, border: `1px solid ${cat.color}50`, color: cat.color }
                  : {}
              }
            >
              <span style={{ color: activeCategory === cat.id ? cat.color : 'inherit' }}>
                {CATEGORY_ICONS[cat.id]}
              </span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active category */}
        {active && (
          <div
            className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {/* Category description */}
            <div className="mb-6 p-4 rounded-xl bg-[#0d1526]/60 border border-[#1e2d45]/60">
              <p className="text-[#94a3b8] text-sm">{active.description}</p>
            </div>

            {/* Skills grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {active.skills.map((skill, i) => {
                const m = maturityColors[skill.maturity];
                return (
                  <div
                    key={skill.name}
                    className="group p-4 rounded-xl card-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-[#f8fafc] font-semibold text-sm">{skill.name}</span>
                      </div>
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: m.bg, color: m.text, border: `1px solid ${m.border}` }}
                      >
                        {skill.maturity}
                      </span>
                    </div>

                    {/* Maturity bar */}
                    <div className="w-full h-0.5 bg-[#1e2d45] rounded-full mb-3 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: {
                            'Exploring': '20%',
                            'Learning': '45%',
                            'Building Projects': '70%',
                            'Strong Foundation': '90%',
                          }[skill.maturity],
                          background: m.dot,
                        }}
                      />
                    </div>

                    <p className="text-[#94a3b8] text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
