import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const TECH_ECOSYSTEM = [
  {
    id: 'robotics',
    label: 'Robotics',
    color: '#22d3ee',
    children: [
      { id: 'ros2', label: 'ROS2', detail: 'Robot middleware and communication framework', used: 'Robot software architecture, message passing between nodes', where: 'Exploring in simulation' },
      { id: 'gazebo', label: 'Gazebo', detail: '3D robot simulator', used: 'Testing robot behaviors without real hardware', where: 'Exploration stage' },
      { id: 'kinematics', label: 'Kinematics', detail: 'Robot motion mathematics', used: 'Understanding robot arm reach and trajectory', where: 'Academic + self-study' },
    ],
  },
  {
    id: 'embedded',
    label: 'Embedded',
    color: '#f97316',
    children: [
      { id: 'esp32', label: 'ESP32', detail: 'Dual-core MCU with WiFi/BT', used: 'Primary MCU for wireless IoT projects and sensor networks', where: 'TREMORA, Neonatal Warmer' },
      { id: 'arduino', label: 'Arduino', detail: 'Beginner-friendly MCU platform', used: 'First embedded projects, line-follower, motor control', where: 'Line Follower Robot' },
      { id: 'sensors', label: 'Sensors', detail: 'Physical-world data acquisition', used: 'IMU, temperature, IR, accelerometer integration', where: 'All hardware projects' },
    ],
  },
  {
    id: 'control',
    label: 'Control',
    color: '#a78bfa',
    children: [
      { id: 'pid', label: 'PID', detail: 'Proportional-Integral-Derivative controller', used: 'Closed-loop control for motor speed and temperature', where: 'Line Follower, Neonatal Warmer' },
      { id: 'kalman', label: 'Kalman', detail: 'Optimal state estimation filter', used: 'Reducing IMU noise in sensor fusion pipeline', where: 'TREMORA' },
      { id: 'matlab', label: 'MATLAB', detail: 'Numerical computing and simulation', used: 'Signal analysis, filter design, data visualization', where: 'TREMORA research' },
    ],
  },
  {
    id: 'ai',
    label: 'AI/ML',
    color: '#34d399',
    children: [
      { id: 'python', label: 'Python', detail: 'High-level scripting and ML language', used: 'ML pipelines, data processing, automation', where: 'TREMORA ML pipeline' },
      { id: 'sklearn', label: 'Scikit-learn', detail: 'Python ML library', used: 'Random Forest training and evaluation', where: 'TREMORA classifier' },
      { id: 'opencv', label: 'OpenCV', detail: 'Computer vision library', used: 'Image processing fundamentals', where: 'Exploring stage' },
    ],
  },
];

export default function TechStack() {
  const [activeNode, setActiveNode] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const allChildren = TECH_ECOSYSTEM.flatMap((cat) =>
    cat.children.map((child) => ({ ...child, parentColor: cat.color }))
  );
  const selected = allChildren.find((c) => c.id === activeNode);

  return (
    <section id="tech-stack" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Stack</p>
          <h2 className="section-heading text-[#f8fafc]">
            Engineering <span className="text-gradient-orange">Ecosystem</span>
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl text-sm">
            Click any technology to see how and where I use it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Ecosystem tree */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-6">
              {TECH_ECOSYSTEM.map((category) => (
                <div key={category.id}>
                  {/* Category header */}
                  <div
                    className="flex items-center gap-3 mb-3"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: category.color }}
                    />
                    <span
                      className="text-xs font-mono font-bold tracking-widest uppercase"
                      style={{ color: category.color }}
                    >
                      {category.label}
                    </span>
                    <div className="flex-1 h-px" style={{ background: `${category.color}30` }} />
                  </div>

                  {/* Child nodes */}
                  <div className="flex flex-wrap gap-2 pl-5">
                    {category.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => setActiveNode(activeNode === child.id ? null : child.id)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeNode === child.id
                            ? 'text-[#f8fafc] scale-105'
                            : 'text-[#94a3b8] hover:text-[#f8fafc]'
                        }`}
                        style={
                          activeNode === child.id
                            ? { background: `${category.color}20`, border: `1px solid ${category.color}50`, color: category.color }
                            : { background: 'rgba(20,29,46,0.6)', border: '1px solid rgba(30,45,69,0.8)' }
                        }
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {selected ? (
              <div
                className="p-6 rounded-xl card-surface"
                style={{ borderColor: `${selected.parentColor}30` }}
              >
                <div
                  className="text-xs font-mono tracking-wider mb-4 uppercase"
                  style={{ color: selected.parentColor }}
                >
                  // selected_tool
                </div>

                <h3 className="text-xl font-bold text-[#f8fafc] mb-1">{selected.label}</h3>
                <p className="text-[#94a3b8] text-sm mb-6">{selected.detail}</p>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-[#94a3b8] mb-2 uppercase tracking-wider">
                      How I use it
                    </div>
                    <p className="text-sm text-[#cbd5e1] leading-relaxed">{selected.used}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-[#94a3b8] mb-2 uppercase tracking-wider">
                      Where
                    </div>
                    <p className="text-sm" style={{ color: selected.parentColor }}>{selected.where}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-xl border border-dashed border-[#1e2d45] text-center h-full flex flex-col items-center justify-center min-h-[220px]">
                <div className="text-4xl mb-3 opacity-30">⚙</div>
                <p className="text-[#94a3b8] text-sm">
                  Click a technology to explore how I use it
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
