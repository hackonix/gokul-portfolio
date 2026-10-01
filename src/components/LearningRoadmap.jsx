import { useInView } from '../hooks/useInView';

const ROADMAP = [
  {
    id: 'advanced-c',
    label: 'Advanced C',
    sublabel: 'Pointers, memory layout, register manipulation & embedded firmware',
    status: 'Building',
    color: '#f97316',
    note: 'Primary language for microcontroller firmware',
  },
  {
    id: 'dsa',
    label: 'Data Structures and Algorithms',
    sublabel: 'Algorithmic efficiency, graph traversal & memory management',
    status: 'Learning',
    color: '#3b82f6',
    note: 'Systematic study for robotics state graphs',
  },
  {
    id: 'embedded-systems',
    label: 'Embedded Systems',
    sublabel: 'Timers, interrupts, RTOS concepts & peripheral bus integration',
    status: 'Building',
    color: '#f97316',
    note: 'ESP32 & Arduino hardware prototyping',
  },
  {
    id: 'linux',
    label: 'Linux',
    sublabel: 'Shell environment, build tools, process management & device interfacing',
    status: 'Building',
    color: '#38bdf8',
    note: 'Ubuntu development environment',
  },
  {
    id: 'robotics',
    label: 'Robotics',
    sublabel: 'Coordinate frames, kinematics, sensor integration & actuation',
    status: 'Building',
    color: '#22d3ee',
    note: 'Mobile robot design & testing',
  },
  {
    id: 'ros2',
    label: 'ROS2',
    sublabel: 'Computational graph, publisher-subscriber model, services & URDF',
    status: 'Learning',
    color: '#22d3ee',
    note: 'Robotics middleware foundation',
  },
  {
    id: 'control-systems',
    label: 'Control Systems',
    sublabel: 'Closed-loop feedback, PID tuning, stability & transfer functions',
    status: 'Applying',
    color: '#a78bfa',
    note: 'Hardware loop tuning in projects',
  },
  {
    id: 'computer-vision',
    label: 'Computer Vision',
    sublabel: 'Image processing fundamentals, spatial filters & feature extraction',
    status: 'Learning',
    color: '#34d399',
    note: 'OpenCV exploration for robot perception',
  },
  {
    id: 'machine-learning',
    label: 'Machine Learning',
    sublabel: 'Time-series classification, Random Forest & feature engineering',
    status: 'Learning',
    color: '#34d399',
    note: 'Applied to sensor telemetry in TREMORA',
  },
  {
    id: 'deep-learning',
    label: 'Deep Learning',
    sublabel: 'Neural network architectures, backprop & visual representation models',
    status: 'Learning',
    color: '#a855f7',
    note: 'Foundations for edge intelligence',
  },
  {
    id: 'ai-for-robotics',
    label: 'AI for Robotics',
    sublabel: 'Perception-action loops, state estimation & autonomous navigation',
    status: 'Experimenting',
    color: '#f43f5e',
    note: 'Long-term engineering integration focus',
  },
];

const STATUS_PROPS = {
  'Learning': { color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.3)', indicator: '● Learning' },
  'Building': { color: '#f97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.3)', indicator: '● Building' },
  'Experimenting': { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.3)', indicator: '● Experimenting' },
  'Applying': { color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.3)', indicator: '● Applying' },
};

export default function LearningRoadmap() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="learning" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Currently Learning</p>
          <h2 className="section-heading text-[#f8fafc]">
            What I'm <span className="text-gradient-blue">Learning Now</span>
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl text-sm">
            Disciplined skill acquisition across hardware, software, control, and intelligence.
            Status indicators reflect active engineering engagement without fabricated completion percentages.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.entries(STATUS_PROPS).map(([key, { color, indicator }]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span className="text-xs text-[#94a3b8]">{indicator}</span>
            </div>
          ))}
        </div>

        {/* Roadmap Items */}
        <div className="space-y-3">
          {ROADMAP.map((item, i) => {
            const sp = STATUS_PROPS[item.status] || STATUS_PROPS['Learning'];
            return (
              <div
                key={item.id}
                className={`group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl card-surface hover:border-[#3b82f6]/30 transition-all duration-200">
                  <div className="flex items-start sm:items-center gap-3 min-w-0">
                    {/* Index */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 mt-0.5 sm:mt-0"
                      style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-[#f8fafc]">{item.label}</span>
                        <span className="hidden md:inline-block text-[11px] text-[#94a3b8] font-mono">
                          // {item.note}
                        </span>
                      </div>
                      <p className="text-xs text-[#94a3b8] mt-0.5 leading-relaxed truncate sm:whitespace-normal">
                        {item.sublabel}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0 pt-2 sm:pt-0 border-t border-[#1e2d45]/40 sm:border-0">
                    <span className="inline-block md:hidden text-[10px] text-[#94a3b8] font-mono">
                      // {item.note}
                    </span>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ background: sp.bg, color: sp.color, border: `1px solid ${sp.border}` }}
                    >
                      {sp.indicator}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
