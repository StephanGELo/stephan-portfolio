import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
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
      </div>
    </>
  );
}

export default App
