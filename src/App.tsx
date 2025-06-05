import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ activeSection, setActiveSection ] = useState('home');
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Add overflow-x-hidden and max-width constraints */}
      <div className="min-h-screen w-full max-w-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      {/* <div className="max-w-screen overflow-x-hidden px-4 sm:px-6 lg:px-8"> */}
        <Navbar 
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          setActiveSection={setActiveSection}
          setIsMenuOpen={setIsMenuOpen}
          onScrollTo={scrollToSection}
        />
        <Hero
          isLoaded={isLoaded}
          onScrollTo={scrollToSection}
        />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App
