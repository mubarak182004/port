import React from 'react';
import Navbar from './Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-studio-bg text-studio-accent font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
        <Footer />
    </div>
  );
}

export default App;
