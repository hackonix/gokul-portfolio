import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { achievements, certifications, experience } from '../data/achievements';

const TABS = [
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
  { id: 'certifications', label: 'Certifications', icon: '🎓' },
  { id: 'experience', label: 'Experience', icon: '💼' },
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('achievements');
  const [ref, inView] = useInView({ threshold: 0.05 });

  const activeItems = {
    achievements,
    certifications,
    experience,
  }[activeTab] || achievements;

  const hasReal = activeItems.some((item) => {
    const text = item.title || item.role || '';
    return !text.includes('[ADD');
  });

  return (
    <section id="achievements" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Milestones</p>
          <h2 className="section-heading text-[#f8fafc]">
            Experience & <span className="text-gradient-orange">Achievements</span>
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl text-sm">
            Verified technical milestones, certifications, and hands-on engineering activities.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#f97316]/20 border border-[#f97316]/50 text-[#fdba74]'
                  : 'border border-[#1e2d45]/60 text-[#94a3b8] hover:text-[#f8fafc] hover:border-[#1e2d45]'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Placeholder notice if no real items yet */}
        {!hasReal && (
          <div className="mb-8 p-4 rounded-xl border border-dashed border-[#1e2d45] bg-[#0d1526]/40">
            <p className="text-xs text-[#94a3b8] font-mono">
              // {activeTab} section — add verified entries in{' '}
              <span className="text-[#3b82f6]">src/data/achievements.js</span>
            </p>
          </div>
        )}

        {/* Timeline */}
        <div className="relative pl-8 border-l border-[#1e2d45] space-y-6">
          {activeTab === 'achievements' &&
            achievements.map((item, i) => (
              <TimelineCard
                key={item.id}
                title={item.title}
                subtitle={item.organization}
                date={item.date}
                type={item.type}
                description={item.description}
                evidence={item.evidence}
                color={item.color || '#f97316'}
                inView={inView}
                delay={i * 80}
              />
            ))}

          {activeTab === 'certifications' &&
            certifications.map((item, i) => (
              <TimelineCard
                key={item.id}
                title={item.title}
                subtitle={item.organization}
                date={item.date}
                type="Certification"
                description={null}
                evidence={item.verification}
                color={item.color || '#34d399'}
                inView={inView}
                delay={i * 80}
              />
            ))}

          {activeTab === 'experience' &&
            experience.map((item, i) => (
              <TimelineCard
                key={item.id}
                title={item.role}
                subtitle={item.organization}
                date={item.duration}
                type="Role"
                description={item.responsibilities?.join(', ')}
                evidence={null}
                color={item.color || '#a78bfa'}
                inView={inView}
                delay={i * 80}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ title, subtitle, date, type, description, evidence, color, inView, delay }) {
  const isPlaceholder = (title || '').includes('[ADD');

  return (
    <div
      className={`relative transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Timeline node */}
      <div
        className="absolute -left-[2.25rem] w-8 h-8 rounded-full flex items-center justify-center text-xs"
        style={{
          background: isPlaceholder ? 'rgba(30,45,69,0.6)' : `${color}15`,
          border: `1px solid ${isPlaceholder ? '#1e2d45' : color + '40'}`,
        }}
      >
        {isPlaceholder ? '·' : '★'}
      </div>

      {/* Card */}
      <div
        className={`ml-4 p-5 rounded-xl card-surface ${
          isPlaceholder ? 'opacity-50 border-dashed' : 'hover:border-[#3b82f6]/20 transition-all'
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold font-mono"
                style={{
                  background: isPlaceholder ? 'rgba(30,45,69,0.6)' : `${color}15`,
                  color: isPlaceholder ? '#64748b' : color,
                }}
              >
                {type}
              </span>
              <span className="text-xs text-[#94a3b8]">{date}</span>
            </div>
            <h3 className="text-sm font-bold text-[#f8fafc]">{title}</h3>
            <p className="text-xs text-[#94a3b8] mt-0.5">{subtitle}</p>
            {description && !isPlaceholder && (
              <p className="text-xs text-[#cbd5e1] mt-2 leading-relaxed">{description}</p>
            )}
          </div>
          {evidence && !isPlaceholder && (
            <a
              href={evidence}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-3 py-1.5 rounded-md border border-[#1e2d45] text-xs text-[#94a3b8] hover:text-white hover:border-[#3b82f6]/40 transition-colors"
            >
              Verify ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
