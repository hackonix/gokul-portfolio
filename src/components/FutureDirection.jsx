import { useInView } from '../hooks/useInView';

const PILLARS = [
  { label: 'Embedded Systems', icon: '⬡', color: '#f97316', desc: 'Hardware programming, MCU firmware, real-time control' },
  { label: 'Robotics', icon: '◎', color: '#22d3ee', desc: 'Robot software, kinematics, autonomous behavior' },
  { label: 'Control Theory', icon: '◈', color: '#a78bfa', desc: 'Feedback loops, stability, intelligent actuation' },
  { label: 'Computer Vision', icon: '👁', color: '#34d399', desc: 'Perception, detection, robot sight' },
  { label: 'AI / ML', icon: '✦', color: '#3b82f6', desc: 'Learning from data, edge intelligence' },
];

export default function FutureDirection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="future" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Future Direction</p>
          <h2 className="section-heading text-[#f8fafc]">
            Where I'm <span className="text-gradient-blue">Going</span>
          </h2>
        </div>

        {/* Main statement */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="p-8 rounded-2xl card-surface relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative z-10">
              <p className="text-[#cbd5e1] text-lg leading-relaxed mb-4">
                My long-term goal is to work at the intersection of{' '}
                <span className="text-[#3b82f6] font-semibold">robotics</span>,{' '}
                <span className="text-[#f97316] font-semibold">embedded systems</span>,{' '}
                <span className="text-[#a78bfa] font-semibold">control theory</span> and{' '}
                <span className="text-[#34d399] font-semibold">AI</span> — developing intelligent machines
                that can sense, reason and act in the physical world.
              </p>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                I'm not there yet. But I'm building systematically — each project, each experiment,
                each study session closes the gap. The depth I'm building now in embedded systems and control
                will be the foundation for everything that follows.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.label}
              className="p-4 rounded-xl card-surface text-center hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-xl"
                style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}
              >
                <span>{pillar.icon}</span>
              </div>
              <div className="text-sm font-bold text-[#f8fafc] mb-1">{pillar.label}</div>
              <div className="text-[10px] text-[#94a3b8] leading-relaxed">{pillar.desc}</div>
            </div>
          ))}
        </div>

        {/* Final statement */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0d1526]/80 border border-[#1e2d45]">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse-dot" />
            <span className="text-sm text-[#94a3b8]">
              Currently a 3rd year student — systematically building toward this.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
