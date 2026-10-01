// ============================================================
// DATA: achievements.js
// Sourced strictly from PORTFOLIO PROFILE — GOKULAKRISHNAN R
// Sections 6, 8, 9, 10, 11: Engineering Experiments, Achievements, Certifications, Experience, Socials
// ============================================================

// Section 11: Social Links
export const socialLinks = {
  fullName: 'Gokulakrishnan R',
  displayName: 'Gokul',
  professionalTitle: 'Aspiring Robotics Engineer',
  location: 'Chennai, Tamil Nadu, India',
  email: '[ADD EMAIL]',
  github: '[ADD GITHUB URL]',
  linkedin: '[ADD LINKEDIN URL]',
  portfolioUrl: '[ADD LATER]',
  resume: '[ADD RESUME FILE/LINK]',
  profilePhoto: '[ADD IMAGE PATH]',

  // Optional profiles (Section 11)
  youtube: null,
  researchGate: null,
  googleScholar: null,
  leetCode: null,
  kaggle: null,
};

// Section 6: Engineering Experiments (strictly not peer-reviewed papers)
export const experiments = [
  {
    id: 'kalman-imu',
    title: 'Kalman Filter for IMU Noise Reduction',
    category: 'Signal Processing',
    status: 'Completed',
    tools: ['MATLAB', 'Python', 'ESP32', 'MPU6050'],
    question: 'How effectively can a discrete Kalman filter reduce accelerometer/gyroscope noise in a resource-constrained MCU?',
    method: 'Implemented complementary and discrete Kalman filtering on ESP32 microcontroller firmware, comparing filtered output against raw IMU readings with MATLAB post-processing.',
    result: 'Significant high-frequency noise rejection with minimal phase delay during dynamic angular motion.',
    learned: 'Practical matrix state estimation, covariance tuning (Q and R matrices), and MCU execution cycle trade-offs in real-time loops.',
    color: '#3b82f6',
  },
  {
    id: 'pid-tuning',
    title: 'PID Controller Tuning & Step-Response Study',
    category: 'Control Systems',
    status: 'Completed',
    tools: ['Arduino', 'MATLAB', 'Simulink', 'C++'],
    question: 'How do proportional, integral, and derivative gains quantitatively impact rise time, overshoot, and steady-state error in physical plants?',
    method: 'Conducted step-response tests on mobile robot steering loops and thermal chamber heating elements; recorded trajectory error across gain sweeps.',
    result: 'Established an empirical tuning procedure for underdamped vs. critically damped response in sensor-guided robots.',
    learned: 'Practical windup prevention, derivative kick mitigation, and balancing response speed against actuator saturation.',
    color: '#f97316',
  },
  {
    id: 'wsn-topology',
    title: 'WSN Network Topology for Mining Environments',
    category: 'IoT / Networking',
    status: 'In Progress',
    tools: ['ESP32', 'ESP32-S3', 'Python', 'Simulation'],
    question: 'Which wireless communication topology maintains packet delivery reliability under physical RF attenuation in underground structures?',
    method: 'Benchmarked star vs. hierarchical cluster-head routing using multi-node ESP32 prototypes with simulated signal loss.',
    result: 'Hierarchical cluster-head aggregation with master nodes reduces total transmission overhead and prevents channel contention.',
    learned: 'Trade-offs between packet latency, transmission power, antenna placement, and multi-node synchronization.',
    color: '#22d3ee',
  },
  {
    id: 'random-forest-classify',
    title: 'Random Forest for Sensor Risk Classification',
    category: 'Machine Learning',
    status: 'Completed',
    tools: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    question: 'Can multi-axis time-series deformation features be classified into discrete geological risk states using an ensemble tree model?',
    method: 'Extracted sliding-window statistical features (mean, variance, peak-to-peak) from IMU time-series; trained and cross-validated Random Forest models.',
    result: 'Demonstrated high classification accuracy on simulated deformation datasets; ongoing evaluation on physical hardware benchmarks.',
    learned: 'Feature selection sensitivity, importance of domain-specific sensor feature engineering over raw signal feeding.',
    color: '#34d399',
  },
];

// Section 8: Verified Achievements
export const achievements = [
  {
    id: 'achieve-placeholder-1',
    type: 'Project / Technical Milestone',
    title: '[ADD ACHIEVEMENT TITLE]',
    organization: '[ADD ORGANIZATION]',
    date: '[ADD DATE]',
    description: '[ADD DESCRIPTION]',
    evidence: null, // [LINK]
    icon: 'Trophy',
    color: '#f97316',
  },
  {
    id: 'achieve-placeholder-2',
    type: 'Competition / Hackathon',
    title: '[ADD COMPETITION / HACKATHON]',
    organization: '[ADD ORGANIZATION]',
    date: '[ADD DATE]',
    description: '[ADD DESCRIPTION]',
    evidence: null,
    icon: 'Zap',
    color: '#3b82f6',
  },
  {
    id: 'achieve-placeholder-3',
    type: 'Technical Workshop / Event',
    title: '[ADD WORKSHOP / EVENT]',
    organization: '[ADD ORGANIZATION]',
    date: '[ADD DATE]',
    description: '[ADD DESCRIPTION]',
    evidence: null,
    icon: 'Award',
    color: '#22d3ee',
  },
];

// Section 9: Verified Certifications
export const certifications = [
  {
    id: 'cert-1',
    title: '[ADD CERTIFICATION]',
    organization: '[ADD ISSUING ORGANIZATION]',
    date: '[ADD DATE]',
    verification: '[ADD VERIFICATION LINK]',
    color: '#34d399',
  },
];

// Section 10: Verified Experience
export const experience = [
  {
    id: 'exp-1',
    role: '[ADD ROLE]',
    organization: '[ADD ORGANIZATION]',
    duration: '[ADD DURATION]',
    responsibilities: ['[ADD RESPONSIBILITIES]'],
    projects: ['[ADD PROJECTS]'],
    color: '#a78bfa',
  },
];
