import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import LearningRoadmap from './components/LearningRoadmap';
import FutureDirection from './components/FutureDirection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ProjectModal from './components/ProjectModal';

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Education />
        <Skills />
        <Projects onOpenProject={setActiveProject} />
        <Research />
        <TechStack />
        <Achievements />
        <LearningRoadmap />
        <FutureDirection />
        <Contact />
      </main>
      <Footer />
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}

export default App;
