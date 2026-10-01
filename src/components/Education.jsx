import { useInView } from '../hooks/useInView';
import { education } from '../data/education';

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Education</p>
          <h2 className="section-heading text-[#f8fafc]">
            Academic <span className="text-gradient-orange">Foundation</span>
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <EducationCard
              key={edu.id}
              edu={edu}
              inView={inView}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu, inView, delay }) {
  return (
    <div
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay + 100}ms` }}
    >
      <div className="relative rounded-2xl overflow-hidden card-surface hover:border-[#f97316]/30 transition-all duration-300">
        {/* Accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
        />

        <div className="p-6 lg:p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left — main info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-5">
                {/* Institution icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={edu.color} strokeWidth="1.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[#f8fafc] font-bold text-lg leading-tight">{edu.institution}</h3>
                  <p className="text-[#94a3b8] text-sm mt-0.5">{edu.location}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-[#f8fafc] font-semibold">{edu.degree}</div>
                <div style={{ color: edu.color }} className="font-medium text-sm">{edu.branch}</div>
              </div>

              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse-dot" />
                <span className="text-xs text-[#93c5fd] font-medium">{edu.currentStatus}</span>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {edu.highlights.map(({ label, value }) => (
                  <div
                    key={label}
                    className="p-3 rounded-lg bg-[#0d1526]/60 border border-[#1e2d45]/60 text-center"
                  >
                    <div className="text-[#f8fafc] font-bold text-sm">{value}</div>
                    <div className="text-[#94a3b8] text-[10px] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — relevant areas */}
            <div>
              <p className="text-xs text-[#94a3b8] font-mono tracking-widest mb-3 uppercase">
                Relevant Academic Areas
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {(edu.academicInterests || edu.relevantAreas).map((area) => (
                  <span
                    key={area}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#0d1526]/80 border border-[#1e2d45]/80 text-[#94a3b8] hover:border-[#f97316]/30 hover:text-[#fdba74] transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <p className="text-xs text-[#94a3b8] font-mono tracking-widest mb-3 uppercase">
                Robotics Application
              </p>
              <div className="space-y-2">
                {edu.roboticsLearning.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#f97316] flex-shrink-0" />
                    <span className="text-xs text-[#94a3b8]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
