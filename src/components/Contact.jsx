import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col justify-between px-8 md:px-16 py-16 bg-studio-bg relative overflow-hidden border-t border-white/5"
    >
      {/* Editorial Spacer */}
      <div />

      {/* Large Final Statement */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="w-full flex flex-col items-start text-left select-none z-10"
      >
        <div className="overflow-hidden mb-1 md:mb-3">
          <motion.h2 
            variants={lineVariants}
            className="font-display text-[10vw] sm:text-[9vw] md:text-[7vw] font-black leading-[0.9] tracking-tight uppercase text-studio-accent"
          >
            LET'S BUILD
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-1 md:mb-3">
          <motion.h2 
            variants={lineVariants}
            className="font-display text-[10vw] sm:text-[9vw] md:text-[7vw] font-black leading-[0.9] tracking-tight uppercase text-studio-accent"
          >
            SOMETHING
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2 
            variants={lineVariants}
            className="font-display text-[10vw] sm:text-[9vw] md:text-[7vw] font-black leading-[0.9] tracking-tight uppercase text-studio-accent"
          >
            EXCEPTIONAL.
          </motion.h2>
        </div>
      </motion.div>

      {/* Contact Links Footer */}
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 z-10 w-full">
        {/* Core Direct Contacts */}
        <div className="flex flex-col gap-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-studio-muted">
            DIRECT COMMUNICATIONS
          </span>
          <a 
            href="mailto:hello@developer.io" 
            className="font-sans text-xl md:text-2xl font-light text-studio-accent hover:text-studio-muted transition-colors duration-300"
          >
            hello@developer.io
          </a>
        </div>

        {/* Professional Network Links */}
        <div className="flex gap-8 text-sm">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-sans text-xs uppercase tracking-widest text-studio-accent border-b border-white/10 hover:border-white pb-1 transition-editorial"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-sans text-xs uppercase tracking-widest text-studio-accent border-b border-white/10 hover:border-white pb-1 transition-editorial"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-studio-muted text-left md:text-right">
          <span>&copy; {new Date().getFullYear()} MUBARAK. ALL RIGHTS RESERVED.</span>
        </div>
      </div>

      {/* Decorative luxury coordinates */}
      <div className="absolute right-12 top-24 font-sans text-[10px] text-white/5 uppercase tracking-[0.3em] pointer-events-none select-none writing-mode-vertical text-right">
        LAT: 40.7128° N // LON: 74.0060° W
      </div>
    </section>
  );
};

export default Contact;
