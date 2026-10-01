import { useInView } from '../hooks/useInView';
import { experiments } from '../data/achievements';

export default function Research() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="research" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Research</p>
          <h2 className="section-heading text-[#f8fafc]">
            Engineering <span className="text-gradient-blue">Experiments</span>
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl text-sm">
            Experiments and investigations — structured explorations to answer specific engineering questions.
            Not publications, but evidence of engineering thinking.
          </p>
        </div>

        {/* Experiments grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {experiments.map((exp, i) => (
            <ExperimentCard
              key={exp.id}
              experiment={exp}
              inView={inView}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperimentCard({ experiment: exp, inView, delay }) {
  const statusColor = {
    'Completed': '#34d399',
    'In Progress': '#3b82f6',
    'Planned': '#94a3b8',
  }[exp.status] || '#94a3b8';

  return (
    <div
      className={`rounded-xl card-surface p-6 transition-all duration-700 hover:border-[#3b82f6]/30 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay + 150}ms` }}
    >
      {/* Top */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="text-[9px] px-2 py-0.5 rounded-full font-medium uppercase tracking-wider"
              style={{ background: `${statusColor}15`, color: statusColor, border: `1px solid ${statusColor}40` }}
            >
              {exp.status}
            </span>
            <span
              className="text-[9px] px-2 py-0.5 rounded-full"
              style={{ background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}30` }}
            >
              {exp.category}
            </span>
          </div>
          <h3 className="text-[#f8fafc] font-bold text-sm leading-tight">{exp.title}</h3>
        </div>
      </div>

      {/* Q&A format */}
      <div className="space-y-3 text-xs">
        <div>
          <div className="text-[#3b82f6] font-mono font-semibold mb-1">? Question</div>
          <p className="text-[#94a3b8] leading-relaxed">{exp.question}</p>
        </div>

        <div>
          <div className="text-[#f97316] font-mono font-semibold mb-1">⚙ Method</div>
          <p className="text-[#94a3b8] leading-relaxed">{exp.method}</p>
        </div>

        <div>
          <div style={{ color: statusColor }} className="font-mono font-semibold mb-1">✓ Result</div>
          <p className="text-[#94a3b8] leading-relaxed">{exp.result}</p>
        </div>

        <div>
          <div className="text-[#a78bfa] font-mono font-semibold mb-1">★ Learned</div>
          <p className="text-[#94a3b8] leading-relaxed">{exp.learned}</p>
        </div>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#1e2d45]/60">
        {exp.tools.map((tool) => (
          <span key={tool} className="tech-chip text-[9px]">{tool}</span>
        ))}
      </div>
    </div>
  );
}
