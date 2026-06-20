import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll detection for transparent -> blurred bg transition
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection observer to track active section
    const sections = navItems.map(item => document.getElementById(item.id));
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 flex items-center justify-between px-8 md:px-16 ${
          scrolled 
            ? 'bg-studio-bg/75 backdrop-blur-md border-b border-white/5 h-16' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="font-display font-bold text-sm tracking-[0.25em] text-studio-accent uppercase"
        >
          Mubarak
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 nav-underline-btn ${
                activeSection === item.id 
                  ? 'text-studio-accent font-medium' 
                  : 'text-studio-muted hover:text-studio-accent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-studio-accent p-1 hover:text-studio-muted transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-studio-bg z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-display text-3xl font-semibold tracking-wide uppercase transition-colors ${
                    activeSection === item.id 
                      ? 'text-studio-accent' 
                      : 'text-studio-muted hover:text-studio-accent'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
