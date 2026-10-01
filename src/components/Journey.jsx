import { useInView } from '../hooks/useInView';
import { journeyStages } from '../data/journey';

const STATUS_STYLE = {
  completed: { label: 'Completed', color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  active: { label: 'Active', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
  planned: { label: 'Planned', color: '#94a3b8', bg: 'rgba(148,163,184,0.08)' },
};

export default function Journey() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="journey" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Timeline</p>
          <h2 className="section-heading text-[#f8fafc]">
            My <span className="text-gradient-blue">Robotics Journey</span>
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl">
            A systematic progression from electronics fundamentals to autonomous robotics systems.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-12">
          {Object.entries(STATUS_STYLE).map(([key, { label, color }]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span className="text-xs text-[#94a3b8]">{label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line — hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3b82f6]/40 via-[#1e2d45] to-[#1e2d45]" />

          <div className="space-y-8">
            {journeyStages.map((stage, i) => {
              const isLeft = i % 2 === 0;
              const st = STATUS_STYLE[stage.status];

              return (
                <div
                  key={stage.id}
                  className={`relative flex flex-col lg:flex-row items-start gap-4 transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Left card (even indices on desktop) */}
                  <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-8 lg:text-right' : 'lg:order-3 lg:pl-8'}`}>
                    {isLeft && <JourneyCard stage={stage} st={st} align="right" />}
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-2 text-xs font-bold font-mono"
                      style={{
                        borderColor: stage.color,
                        background: `${stage.color}15`,
                        color: stage.color,
                      }}
                    >
                      {stage.phase}
                    </div>
                  </div>

                  {/* Right card (odd indices on desktop) */}
                  <div className={`lg:w-1/2 ${!isLeft ? 'lg:pr-8' : 'lg:order-3 lg:pl-8'}`}>
                    {!isLeft && <JourneyCard stage={stage} st={st} align="left" />}
                  </div>

                  {/* Mobile card */}
                  <div className="lg:hidden w-full pl-4 border-l-2" style={{ borderColor: stage.color }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold font-mono px-2 py-0.5 rounded"
                        style={{ color: stage.color, background: `${stage.color}15` }}
                      >
                        {stage.phase}
                      </span>
                      <span className="text-xs font-bold text-[#f8fafc]">{stage.title}</span>
                    </div>
                    <div className="text-xs text-[#94a3b8] mb-1">{stage.period}</div>
                    <p className="text-sm text-[#94a3b8] mb-3">{stage.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.technologies.map((t) => (
                        <span key={t} className="tech-chip text-[10px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyCard({ stage, st, align }) {
  return (
    <div
      className={`hidden lg:block p-5 rounded-xl card-surface hover:border-[#3b82f6]/30 transition-all duration-300 cursor-default ${
        align === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      <div className={`flex items-center gap-2 mb-2 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{ background: st.bg, color: st.color }}
        >
          {st.label}
        </span>
        <span className="text-xs text-[#94a3b8]">{stage.period}</span>
      </div>

      <h3 className="text-[#f8fafc] font-bold text-base mb-2">{stage.title}</h3>
      <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{stage.description}</p>

      {/* Milestone */}
      <div
        className={`flex items-center gap-2 mb-3 ${align === 'right' ? 'justify-end' : 'justify-start'}`}
      >
        <span className="text-[10px] font-mono text-[#3b82f6] tracking-wider">⚑ {stage.milestone}</span>
      </div>

      {/* Tech chips */}
      <div className={`flex flex-wrap gap-1.5 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        {stage.technologies.map((t) => (
          <span key={t} className="tech-chip text-[10px]">{t}</span>
        ))}
      </div>
    </div>
  );
}
