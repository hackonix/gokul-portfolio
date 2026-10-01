// ============================================================
// DATA: journey.js — Robotics Learning Timeline
// ============================================================

export const journeyStages = [
  {
    id: 'foundation',
    phase: '01',
    title: 'Foundation',
    period: '2022–2023',
    status: 'completed',
    color: '#94a3b8',
    description:
      'Built the mathematical and electronics foundation. Started programming with C. Explored basic circuit design and microcontroller concepts.',
    technologies: ['C Programming', 'Basic Electronics', 'Digital Logic', 'Math & Physics'],
    milestone: 'First blinking LED → first sensor read',
  },
  {
    id: 'embedded',
    phase: '02',
    title: 'Embedded Systems',
    period: '2023',
    status: 'completed',
    color: '#f97316',
    description:
      'Moved from single boards to real microcontroller programming. Built the line-following robot as a concrete embedded systems project combining sensor reading, real-time control, and motor driving.',
    technologies: ['Arduino', 'C/C++', 'IR Sensors', 'PWM', 'Motor Control', 'H-Bridge'],
    milestone: 'Line Following Robot — first autonomous machine',
  },
  {
    id: 'control',
    phase: '03',
    title: 'Control & Sensing',
    period: '2023–2024',
    status: 'completed',
    color: '#a78bfa',
    description:
      'Applied control theory from academics to real hardware. Implemented PID controllers, explored sensor integration, and started working with the ESP32 ecosystem for wireless capabilities.',
    technologies: ['PID Control', 'ESP32', 'Temperature Sensors', 'I²C/SPI/UART', 'MATLAB'],
    milestone: 'Neonatal Warmer — closed-loop embedded control',
  },
  {
    id: 'iot-networks',
    phase: '04',
    title: 'IoT & Sensor Networks',
    period: '2024–2025',
    status: 'active',
    color: '#3b82f6',
    description:
      'Scaled from single-node embedded systems to distributed wireless sensor networks. Applied signal processing and ML to multi-sensor data streams.',
    technologies: ['ESP32-S3', 'Wireless Comms', 'Kalman Filter', 'Signal Processing', 'Random Forest', 'Python'],
    milestone: 'TREMORA — distributed WSN + ML risk analysis',
  },
  {
    id: 'linux-ros',
    phase: '05',
    title: 'Linux & ROS2',
    period: '2025',
    status: 'active',
    color: '#22d3ee',
    description:
      'Transitioning to professional robotics development toolchains. Learning Linux as an embedded OS, exploring ROS2 architecture, and studying the robot software stack.',
    technologies: ['Ubuntu', 'Linux CLI', 'ROS2', 'Bash', 'Git', 'CMake'],
    milestone: 'First ROS2 node → robot simulation in Gazebo',
  },
  {
    id: 'computer-vision',
    phase: '06',
    title: 'Computer Vision',
    period: '2025–2026',
    status: 'planned',
    color: '#34d399',
    description:
      'Integrating vision into robot perception. Learning camera calibration, image processing, and object detection for robotic applications.',
    technologies: ['OpenCV', 'Python', 'Image Processing', 'Camera Systems', 'CNNs'],
    milestone: 'Vision-guided robot interaction',
  },
  {
    id: 'ai-robotics',
    phase: '07',
    title: 'AI for Robotics',
    period: '2026–2027',
    status: 'planned',
    color: '#f472b6',
    description:
      'Combining deep learning, reinforcement learning, and autonomous navigation to create intelligent robotic systems that can perceive, plan, and act.',
    technologies: ['Deep Learning', 'Reinforcement Learning', 'SLAM', 'Navigation', 'Edge AI'],
    milestone: 'Autonomous robot — sense, reason, act',
  },
];
