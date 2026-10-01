# Gokulakrishnan R — Personal Engineering & Robotics Portfolio

A modern, highly interactive, engineering-grade personal portfolio website built for **Gokulakrishnan R (Gokul)**, an aspiring robotics engineer studying Electronics, Instrumentation and Control Engineering (EICE) at Sri Sairam Engineering College, Chennai.

Designed with a **modern robotics laboratory** aesthetic: technical, clean, and data-driven — with deep focus on the hardware–software boundary, embedded systems, control theory, and AI/ML.

---

## ⚡ Tech Stack & Architecture

### Frontend
- **React 19** + **Vite 8**: Ultra-fast build toolchain and modern declarative UI component model
- **Tailwind CSS v4** (`@tailwindcss/vite`): Modern utility-first styling with high performance CSS variables
- **Framer Motion**: Smooth spring physics, scroll-triggered reveals, and modal transitions
- **Canvas-based Circuit Background**: High-performance animated node-and-edge telemetry network with real-time traveling data packets
- **Lucide React**: Clean technical iconography

### Backend
- **Node.js** + **Express.js**: REST API server for contact form submission and future research / blog APIs
- **In-Memory Rate Limiting**: Built-in protection against spam on the contact endpoint
- **CORS & Environment Configurations**: Secure separation of development and production environments

---

## 📁 Project Structure

```
gokul-portfolio/
├── index.html                  # Semantic HTML5, Open Graph tags, SEO metadata, fonts
├── vite.config.js              # Vite configuration with Tailwind CSS & API proxy
├── package.json                # Dependencies, build & run scripts
│
├── src/
│   ├── main.jsx                # React root mount
│   ├── App.jsx                 # Master layout & modal state management
│   ├── index.css               # Design system tokens, custom animations, typography
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Dynamic sticky navbar with active section detection & mobile menu
│   │   ├── ScrollProgress.jsx  # Top reading progress indicator
│   │   ├── Background.jsx      # Canvas-rendered circuit graph & data packet simulation
│   │   ├── Hero.jsx            # Live typewriter roles, status badges, CTAs & quick telemetry
│   │   ├── About.jsx           # Engineering identity & interactive 6-stage robotics pipeline
│   │   ├── Journey.jsx         # 7-phase alternating milestone timeline (hardware to autonomous)
│   │   ├── Education.jsx       # Sri Sairam Engineering College EICE degree card & curriculum breakdown
│   │   ├── Skills.jsx          # 6 engineering domains with honest maturity indicators & hover reveals
│   │   ├── Projects.jsx        # Filterable project cards with custom SVG schematics
│   │   ├── ProjectModal.jsx    # Deep-dive engineering case study view (architecture, hardware, software, status)
│   │   ├── Research.jsx        # Engineering experiment logs (Question → Method → Result → Learning)
│   │   ├── TechStack.jsx       # Interactive technology ecosystem with contextual inspection
│   │   ├── Achievements.jsx    # Modular achievement & milestone timeline
│   │   ├── LearningRoadmap.jsx # "Currently Building" progression roadmap with status meters
│   │   ├── FutureDirection.jsx # 5-pillar aspirational roadmap for physical intelligence
│   │   ├── Contact.jsx         # Validated contact form + social connectors
│   │   └── Footer.jsx          # Engineering creed, navigation links, and back-to-top shortcut
│   │
│   ├── data/
│   │   ├── projects.js         # TREMORA, Intelligent Neonatal Warmer, Line Follower Robot
│   │   ├── skills.js           # Categorized skills with maturity levels & tool descriptions
│   │   ├── education.js        # Degree, coursework, and robotics learning applications
│   │   ├── journey.js          # Sequential journey stages & milestone milestones
│   │   └── achievements.js     # Research experiments & achievement placeholders
│   │
│   └── hooks/
│       └── useInView.js        # IntersectionObserver hooks for scroll reveals, active nav, typewriter
│
└── server/
    ├── server.js               # Express application with CORS, rate limiter, and health checks
    ├── routes/
    │   └── contact.js          # Contact POST route
    ├── controllers/
    │   └── contact.js          # Contact validation & notification handler
    ├── .env                    # Local environment variables
    └── .env.example            # Template for email/service credentials
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd gokul-portfolio
npm install
```

### 2. Run the Development Environment

You can run both the frontend and backend together with a single command:
```bash
npm run start:all
```

Or run them individually in separate terminal tabs:

**Frontend only (Vite dev server on port 5173):**
```bash
npm run dev
```

**Backend only (Express API on port 3001):**
```bash
npm run server
```

Open your browser at **`http://localhost:5173`**.

---

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized, minified production bundle in the `dist/` directory ready for deployment on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

To test the production build locally:
```bash
npm run preview
```

---

## 📝 Customization Guide

### Adding Real Links & Images
All dynamic content is organized in `src/data/`:
1. **Projects**: Edit `src/data/projects.js` to update GitHub repository URLs, live demo links, or custom project photos in `public/assets/projects/`.
2. **Contact Links**: Search for `[ADD_GITHUB]`, `[ADD_LINKEDIN]`, and `[ADD_EMAIL]` across the codebase or update them in `src/components/Navbar.jsx`, `src/components/Hero.jsx`, `src/components/Contact.jsx`, and `src/components/Footer.jsx`.
3. **Achievements & Certifications**: Add verified competition results or certifications in `src/data/achievements.js`.
4. **Email Forwarding**: To send real emails when the contact form is submitted, uncomment the `nodemailer` block in `server/controllers/contact.js` and provide credentials in `server/.env`.
