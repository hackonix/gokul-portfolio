// ============================================================
// DATA: projects.js
// Sourced strictly from PORTFOLIO PROFILE — GOKULAKRISHNAN R
// ============================================================

export const projects = [
  {
    id: 'tremora',
    name: 'TREMORA',
    title: 'TREMORA',
    fullName: 'Low-Cost Wireless Sensor Network for Land Subsidence Monitoring and Prediction',
    subtitle: 'Low-Cost Wireless Sensor Network for Land Subsidence Monitoring and Prediction',
    tagline: 'Distributed wireless sensor network + ML for underground mining safety',
    category: ['Robotics', 'Embedded', 'IoT', 'AI/ML'],
    status: 'Prototype', // Prototype / Simulation / Ongoing
    year: '2024–2025',
    coverImage: null, // [ADD PROJECT IMAGE PATH]
    accentColor: '#3b82f6',

    problem:
      'Monitoring and analyzing surface deformation associated with underground mining operations.',

    coreIdea:
      'Distributed sensor nodes collect physical measurements and communicate them to higher-level nodes for processing, analysis and visualization.',

    solution:
      'Distributed sensor nodes collect physical measurements and transmit them to master nodes for Kalman noise filtering, time-window feature extraction, and Random Forest risk classification, visualized via real-time telemetry and 3D mine dashboards.',

    systemPipeline: [
      'Sensors (IMU, distance, crack)',
      'ESP32 / ESP32-S3 Node Firmware',
      'Wireless Communication Network',
      'Master / Head Aggregator Node',
      'Filtering & Noise Reduction (Kalman)',
      'Feature Extraction (Time-window)',
      'Machine Learning Risk Assessment (Random Forest)',
      'Dashboard & 3D Mine Visualization',
    ],

    architecture: [
      'Sensors → ESP32 → Wireless Communication → Master Node',
      'Filtering → Feature Extraction → Machine Learning → Risk Assessment → Dashboard',
    ],

    hardware: [
      'ESP32 microcontroller',
      'ESP32-S3',
      'IMU / accelerometer',
      'Distance sensor',
      'Piezo / crack sensor',
      'Wireless communication modules',
    ],

    software: [
      'C/C++ (ESP32 firmware)',
      'Python (data pipeline & ML)',
      'MATLAB (signal processing & simulation)',
      'Machine Learning',
      'Signal Processing',
      'Dashboard & visualization',
    ],

    ml: [
      'Kalman filtering for noise reduction',
      'Time-window feature extraction',
      'Random Forest model',
      'Risk classification',
    ],

    visualization: [
      'Real-time telemetry dashboard',
      '3D mine deformation visualization',
      'Sensor node topology map',
    ],

    myContribution:
      'Designed system architecture, developed ESP32 sensor acquisition firmware, implemented signal filtering routines, designed feature extraction pipeline, and integrated ML risk classification model.',

    results:
      'Demonstrated multi-node wireless data aggregation with validated sensor filtering in prototype testing. Real-world validation remains in ongoing development.',

    currentState: {
      implemented: [
        'Multi-node ESP32 sensor acquisition and wireless transmission',
        'Kalman filtering for IMU and accelerometer data streams',
        'Time-window feature extraction pipeline',
        'Random Forest risk classifier trained on simulation datasets',
        'MATLAB-based signal analysis and visualization scripts',
      ],
      planned: [
        'Custom PCB fabrication for compact node enclosures',
        'Long-range LoRa mesh networking for deep-mine deployment',
        'Integrated 3D mine surface deformation dashboard',
        'Edge AI inference directly on ESP32-S3',
      ],
    },

    technologies: ['ESP32', 'ESP32-S3', 'C/C++', 'Python', 'MATLAB', 'Kalman Filter', 'Random Forest', 'Wireless IoT'],
    github: '[ADD GITHUB URL]',
    demo: '[ADD DEMO LINK]',
    documentation: null,
    featured: true,
  },

  {
    id: 'neonatal-warmer',
    name: 'Intelligent Neonatal Warmer',
    title: 'Intelligent Neonatal Warmer',
    fullName: 'Intelligent Neonatal Warmer Control System',
    subtitle: 'Embedded Closed-Loop Thermal Regulation System',
    tagline: 'Sensor-driven closed-loop temperature control for neonatal care',
    category: ['Embedded', 'Control', 'IoT'],
    status: 'In Development',
    year: '2024',
    coverImage: null, // [ADD PROJECT IMAGE PATH]
    accentColor: '#f97316',

    problem:
      'Premature neonates are vulnerable to rapid hypothermia and thermal instability, requiring automated, closed-loop thermal regulation with safety alarms.',

    coreIdea:
      'Microcontroller-based closed-loop temperature control system that regulates heating elements and circulation fans based on multi-point sensor feedback.',

    solution:
      'Sensors continuously monitor temperature and feed readings into a microcontroller executing a PID control loop to drive heating elements and fans, with local OLED telemetry and planned anomaly detection.',

    architecture: [
      'Multi-point temperature sensing (skin & ambient air probes)',
      'Microcontroller embedded control core',
      'PID control algorithm for PWM heater regulation',
      'Fan & actuator control for thermal distribution',
      'Safety alarm and fail-safe cutoff logic',
      'Local telemetry display dashboard',
    ],

    hardware: [
      'Microcontroller (Arduino / ESP32)',
      'Precision temperature sensors (probe / digital)',
      'Heating element driver (MOSFET / relay switching)',
      'DC circulation fan with PWM control',
      'OLED display & audio buzzer alarm',
    ],

    software: [
      'C/C++ embedded firmware',
      'PID closed-loop control algorithm',
      'Sensor calibration routines',
      'Display driver & safety threshold logic',
    ],

    myContribution:
      'Embedded firmware development, PID temperature control implementation, sensor calibration, and threshold safety alarm logic.',

    results:
      'Stable temperature regulation achieved in benchtop prototype chamber within setpoint limits. Clinical validation is not claimed.',

    currentState: {
      implemented: [
        'Precision temperature sensing and calibration',
        'Closed-loop PID heater regulation',
        'PWM-driven fan speed control',
        'Local OLED status and alarm monitoring',
        'Over-temperature emergency cutoff',
      ],
      planned: [
        'Intelligent ML-based thermal pattern anomaly detection',
        'Wireless telemetry and remote nurse-station dashboard',
        'Comprehensive clinical trial protocols',
      ],
    },

    technologies: ['ESP32', 'Arduino', 'C/C++', 'PID Control', 'Sensors', 'Embedded Systems'],
    github: '[ADD GITHUB URL]',
    demo: '[ADD DEMO LINK]',
    documentation: null,
    featured: true,
  },

  {
    id: 'line-follower',
    name: 'Line Following Robot',
    title: 'Line Following Robot',
    fullName: 'Autonomous Sensor-Driven Line Following Mobile Robot',
    subtitle: 'Sensor-Driven Autonomous Mobile Robot',
    tagline: 'Real-time sensor feedback with embedded PID control logic',
    category: ['Robotics', 'Embedded', 'Control'],
    status: 'Completed',
    year: '2023',
    coverImage: null, // [ADD PROJECT IMAGE PATH]
    accentColor: '#22d3ee',

    problem:
      'Autonomous path following along high-contrast tracks using onboard optical sensors without human intervention.',

    coreIdea:
      'IR reflectance sensor array feeds real-time line deviation into an onboard MCU which computes motor speed adjustments via PID control.',

    solution:
      'Optical reflectance sensors continuously detect track boundaries, feeding position error to a PID algorithm running on an Arduino, dynamically modulating differential motor drive speeds.',

    architecture: [
      'Sensors (IR reflectance array)',
      'Microcontroller (real-time error calculation)',
      'Control algorithm (PID line-centering)',
      'Motor driver (H-bridge PWM)',
      'Actuators (DC gear motors & differential drive)',
    ],

    hardware: [
      'Microcontroller (Arduino Uno)',
      'IR reflectance sensor array (multi-sensor bar)',
      'L298N / H-bridge motor driver',
      'Dual DC gear motors + wheels',
      'Chassis and dedicated battery power source',
    ],

    software: [
      'C/C++ embedded firmware',
      'Weighted sensor position calculation algorithm',
      'PID control loop',
      'Differential motor PWM mapping',
    ],

    myContribution:
      'Mechanical chassis assembly, electrical wiring, sensor calibration, C/C++ firmware development, and empirical PID tuning on physical test tracks.',

    results:
      'Successfully tracks straight lines and sharp turns with stable damping and minimal overshoot.',

    currentState: {
      implemented: [
        'Multi-sensor IR reflectance array interfacing',
        'Real-time PID control loop execution',
        'Differential drive PWM motor control',
        'Weighted sensor position error algorithm',
        'Autonomous navigation on custom test track',
      ],
      planned: [
        'Camera-based computer vision navigation upgrade',
        'ROS2 navigation node integration',
        'Ultrasonic obstacle detection and avoidance',
      ],
    },

    technologies: ['Arduino', 'C/C++', 'PID Control', 'IR Sensors', 'Motor Control', 'Embedded Systems'],
    github: '[ADD GITHUB URL]',
    demo: '[ADD DEMO LINK]',
    documentation: null,
    featured: true,
  },
];

// Project Category Filters
export const projectCategories = ['All', 'Robotics', 'Embedded', 'AI/ML', 'Computer Vision', 'Control', 'IoT'];

// Template for adding future projects
export const PROJECT_TEMPLATE = {
  name: '[Project Name]',
  category: ['Robotics', 'Embedded'],
  status: 'Prototype', // Prototype | In Development | Completed | Planned
  problem: '[WRITE PROBLEM]',
  approach: '[WRITE APPROACH]',
  hardware: ['[WRITE COMPONENTS]'],
  software: ['[WRITE SOFTWARE]'],
  algorithms: ['[WRITE ALGORITHMS]'],
  myContribution: '[WRITE CONTRIBUTION]',
  results: '[ADD ONLY REAL RESULTS]',
  whatILearned: '[WRITE KEY LEARNINGS]',
  github: '[LINK]',
  demo: '[LINK]',
  images: ['[IMAGE PATHS]'],
};
