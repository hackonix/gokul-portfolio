import { useInView } from '../hooks/useInView';

const PIPELINE = [
  { label: 'Sensor', sublabel: 'IMU · Temperature · IR · Distance', color: '#3b82f6', icon: '○' },
  { label: 'Embedded System', sublabel: 'ESP32 · Arduino · MCU', color: '#f97316', icon: '⬡' },
  { label: 'Communication', sublabel: 'UART · I²C · SPI · Wireless', color: '#a78bfa', icon: '↔' },
  { label: 'Control / Processing', sublabel: 'PID · Kalman · Signal DSP', color: '#22d3ee', icon: '◈' },
  { label: 'AI / ML', sublabel: 'Classification · Detection', color: '#34d399', icon: '✦' },
  { label: 'Robot', sublabel: 'Autonomous System', color: '#f472b6', icon: '◎' },
];

const TRAITS = [
  'Works across the hardware–software boundary',
  'Systems thinker — from sensor to action',
  'Enjoys debugging real hardware problems',
  'Believes in: Build → Test → Measure → Improve',
  'Focused on practical, reproducible engineering',
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">About</p>
          <h2 className="section-heading text-[#f8fafc]">
            Who is <span className="text-gradient-blue">Gokul?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-[#cbd5e1] text-lg leading-relaxed mb-6">
              I'm an <span className="text-[#f8fafc] font-semibold">Electronics, Instrumentation and Control Engineering</span> student
              at Sri Sairam Engineering College, currently in my 3rd year. My core interest is in
              building robotic and autonomous systems — machines that can sense their environment,
              process information, and act intelligently.
            </p>

            <p className="text-[#94a3b8] leading-relaxed mb-8">
              What draws me to robotics is the intersection of disciplines. A robot is not just
              a software problem or a hardware problem — it's a systems challenge that demands
              embedded programming, control theory, sensor understanding, signal processing,
              and increasingly, AI. I enjoy working at all these layers simultaneously.
            </p>

            {/* Traits */}
            <div className="space-y-3">
              {TRAITS.map((trait, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                  <span className="text-[#94a3b8] text-sm">{trait}</span>
                </div>
              ))}
            </div>

            {/* Approach card */}
            <div className="mt-10 p-5 rounded-xl card-surface">
              <p className="text-xs text-[#3b82f6] font-mono tracking-widest mb-3">// engineering_philosophy</p>
              <p className="text-[#f8fafc] font-medium mb-1">Build → Test → Measure → Understand → Improve</p>
              <p className="text-[#94a3b8] text-sm">
                Every project is a learning loop. I build prototypes to expose unknowns, measure to understand
                what's actually happening, then iterate systematically.
              </p>
            </div>
          </div>

          {/* Right — Engineering pipeline */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-xs text-[#94a3b8] font-mono tracking-widest mb-6 uppercase">
              Robotic System Pipeline
            </p>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-[1.5rem] top-6 bottom-6 w-px bg-gradient-to-b from-[#3b82f6]/40 via-[#3b82f6]/20 to-[#f472b6]/40" />

              <div className="space-y-3">
                {PIPELINE.map((step, i) => (
                  <div
                    key={step.label}
                    className={`flex items-center gap-4 transition-all duration-500 ${
                      inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    {/* Node */}
                    <div
                      className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 cursor-default"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}40`,
                      }}
                    >
                      <span className="text-lg" style={{ color: step.color }}>{step.icon}</span>
                    </div>

                    {/* Label */}
                    <div className="flex-1 min-w-0 p-3 rounded-lg bg-[#0d1526]/60 border border-[#1e2d45]/60 hover:border-[#1e2d45] transition-colors cursor-default">
                      <div className="flex items-center justify-between">
                        <span className="text-[#f8fafc] font-semibold text-sm">{step.label}</span>
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded-full"
                          style={{ background: `${step.color}15`, color: step.color }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="text-[#94a3b8] text-xs mt-0.5">{step.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
