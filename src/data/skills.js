// ============================================================
// DATA: skills.js
// Sourced strictly from PORTFOLIO PROFILE — GOKULAKRISHNAN R
// Status labels: 'Learning' | 'Building' | 'Experimenting' | 'Applying'
// ============================================================

export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    icon: 'Code2',
    color: '#3b82f6',
    description: 'Core programming languages and computational problem-solving.',
    skills: [
      { name: 'C', maturity: 'Building', icon: '⚙', description: 'Primary language for microcontroller firmware and low-level development.' },
      { name: 'C++', maturity: 'Learning', icon: '⚙', description: 'Object-oriented programming for robotics middleware and algorithms.' },
      { name: 'Python', maturity: 'Building', icon: '🐍', description: 'Signal processing, machine learning workflows, and automation.' },
      { name: 'JavaScript', maturity: 'Learning', icon: '🌐', description: 'Interface development for telemetry and data visualization.' },
      { name: 'Data Structures & Algorithms', maturity: 'Learning', icon: '🧩', description: 'Core data structures and algorithmic problem solving.' },
    ],
  },
  {
    id: 'embedded',
    label: 'Embedded Systems',
    icon: 'Cpu',
    color: '#f97316',
    description: 'Microcontroller architectures, peripheral communication, and hardware interfacing.',
    skills: [
      { name: 'ESP32', maturity: 'Building', icon: '📡', description: 'Dual-core MCU with wireless capabilities for sensor networks.' },
      { name: 'Arduino', maturity: 'Applying', icon: '🔌', description: 'Prototyping platform used across foundational robotics projects.' },
      { name: 'Microcontrollers', maturity: 'Building', icon: '🎛', description: 'Register-level concepts, timers, and interrupt management.' },
      { name: 'GPIO', maturity: 'Applying', icon: '⚡', description: 'General Purpose Input/Output configuration and digital I/O.' },
      { name: 'PWM', maturity: 'Applying', icon: '〰', description: 'Pulse-Width Modulation for motor speed and actuator regulation.' },
      { name: 'UART', maturity: 'Applying', icon: '🔗', description: 'Serial communication protocol for telemetry and debugging.' },
      { name: 'I2C', maturity: 'Building', icon: '🔗', description: 'Two-wire interface for bus-connected sensor integration.' },
      { name: 'SPI', maturity: 'Building', icon: '🔗', description: 'High-speed synchronous serial communication for sensors.' },
      { name: 'Sensors', maturity: 'Applying', icon: '🎯', description: 'Interfacing IMU, accelerometers, IR, distance, and temperature sensors.' },
      { name: 'Actuators', maturity: 'Building', icon: '⚙', description: 'Driving DC motors, servos, relays, and heating elements.' },
      { name: 'Embedded Debugging', maturity: 'Learning', icon: '🔍', description: 'Hardware-in-the-loop debugging, serial monitors, and logic diagnostics.' },
    ],
  },
  {
    id: 'robotics',
    label: 'Robotics',
    icon: 'Bot',
    color: '#22d3ee',
    description: 'Robot architectures, middleware frameworks, and simulation environments.',
    skills: [
      { name: 'ROS', maturity: 'Learning', icon: '🤖', description: 'Robot Operating System fundamentals and computational graph concepts.' },
      { name: 'ROS2', maturity: 'Learning', icon: '🤖', description: 'Modern robotics middleware — nodes, topics, publishers, and subscribers.' },
      { name: 'Gazebo', maturity: 'Experimenting', icon: '🌐', description: 'Physics simulation platform for mobile robots and sensors.' },
      { name: 'CoppeliaSim', maturity: 'Experimenting', icon: '🤖', description: 'Robot simulation and modeling environment (formerly V-REP).' },
      { name: 'Robot Simulation', maturity: 'Experimenting', icon: '💻', description: 'Testing robot kinematic behavior prior to hardware assembly.' },
      { name: 'Sensor Integration', maturity: 'Building', icon: '🔀', description: 'Acquiring and conditioning real-world physical sensor signals.' },
      { name: 'Robot Architectures', maturity: 'Learning', icon: '📐', description: 'Designing hierarchical pipelines: Sense → Process → Plan → Act.' },
    ],
  },
  {
    id: 'control',
    label: 'Control & Electronics',
    icon: 'Settings',
    color: '#a78bfa',
    description: 'Feedback control theory, instrumentation, and signal analysis.',
    skills: [
      { name: 'Control Systems', maturity: 'Learning', icon: '📊', description: 'Transfer functions, closed-loop feedback, and system stability analysis.' },
      { name: 'PID', maturity: 'Applying', icon: '🎛', description: 'Proportional-Integral-Derivative tuning in hardware control loops.' },
      { name: 'Instrumentation', maturity: 'Learning', icon: '🔬', description: 'Academic core — measurement theory, calibration, and transducers.' },
      { name: 'Signal Processing', maturity: 'Learning', icon: '〰', description: 'Time and frequency domain analysis, noise mitigation.' },
      { name: 'Sensors (Instrumentation)', maturity: 'Building', icon: '🎯', description: 'Transducer characteristics, sensitivity, and signal conditioning.' },
      { name: 'Actuators (Control)', maturity: 'Building', icon: '⚡', description: 'Control signal translation to mechanical motion and thermal output.' },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    icon: 'Brain',
    color: '#34d399',
    description: 'Machine learning, perception, and computer vision applied to physical systems.',
    skills: [
      { name: 'Machine Learning', maturity: 'Learning', icon: '🧠', description: 'Supervised learning models for time-series sensor data.' },
      { name: 'Deep Learning', maturity: 'Learning', icon: '🕸', description: 'Neural network architectures and deep representations for perception.' },
      { name: 'Computer Vision', maturity: 'Learning', icon: '👁', description: 'Visual processing and feature detection algorithms for robotics.' },
      { name: 'OpenCV', maturity: 'Learning', icon: '📷', description: 'Open Source Computer Vision library for real-time image operations.' },
      { name: 'TensorFlow', maturity: 'Learning', icon: '🔮', description: 'Machine learning framework for training and deploying neural networks.' },
      { name: 'PyTorch', maturity: 'Learning', icon: '🔥', description: 'Deep learning framework for robotics vision research.' },
      { name: 'Edge AI', maturity: 'Experimenting', icon: '⚡', description: 'Deploying lightweight inference models onto constrained microcontrollers.' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'Wrench',
    color: '#fb923c',
    description: 'Development systems, engineering suites, and version control.',
    skills: [
      { name: 'Linux', maturity: 'Building', icon: '🐧', description: 'Command-line environment, process management, and shell scripting.' },
      { name: 'Ubuntu', maturity: 'Building', icon: '🐧', description: 'Primary desktop and development OS for robotics toolchains.' },
      { name: 'Git', maturity: 'Building', icon: '🌿', description: 'Version control workflows and repository state tracking.' },
      { name: 'GitHub', maturity: 'Building', icon: '🐙', description: 'Code hosting, collaboration, and open-source portfolio tracking.' },
      { name: 'VS Code', maturity: 'Applying', icon: '📝', description: 'Primary IDE with C/C++, Python, and embedded extension toolchains.' },
      { name: 'MATLAB', maturity: 'Learning', icon: '📊', description: 'Numerical computing, matrix mathematics, and data plotting.' },
      { name: 'Simulink', maturity: 'Learning', icon: '📐', description: 'Block-diagram modeling for multi-domain dynamic systems.' },
      { name: 'Blender', maturity: 'Experimenting', icon: '🎨', description: '3D spatial modeling for robot chassis visualization.' },
    ],
  },
];

export const maturityColors = {
  'Learning': { bg: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.25)', text: '#93c5fd', dot: '#3b82f6' },
  'Building': { bg: 'rgba(249, 115, 22, 0.08)', border: 'rgba(249, 115, 22, 0.3)', text: '#fdba74', dot: '#f97316' },
  'Experimenting': { bg: 'rgba(34, 211, 238, 0.08)', border: 'rgba(34, 211, 238, 0.25)', text: '#67e8f9', dot: '#22d3ee' },
  'Applying': { bg: 'rgba(52, 211, 153, 0.08)', border: 'rgba(52, 211, 153, 0.3)', text: '#6ee7b7', dot: '#34d399' },
};
