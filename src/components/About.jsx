import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const statement = [
    "I BUILD MODERN INTERFACES,",
    "AUTOMATE TESTING WORKFLOWS,",
    "AND CREATE RELIABLE DIGITAL EXPERIENCES."
  ];

  const textVariants = {
    hidden: { opacity: 0.15, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-24 relative bg-studio-bg"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col justify-between h-full relative z-10">
        
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-studio-muted block mb-2">
            01 / ABOUT STATEMENT
          </span>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </div>

        {/* Large Editorial Statement */}
        <div className="my-auto flex flex-col gap-6 md:gap-8 select-none">
          {statement.map((line, idx) => (
            <motion.p
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              variants={textVariants}
              className="font-display text-[4.5vw] md:text-[3.5vw] font-bold tracking-tight leading-[1.1] uppercase text-studio-accent"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Studio Bio / QA focus details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 pt-12">
          <div className="md:col-span-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-studio-muted mb-4">
              PHILOSOPHY
            </h3>
            <p className="font-sans text-sm font-light leading-relaxed text-studio-muted">
              Quality is not an afterthought; it is woven into the very fabric of code. By combining advanced frontend frameworks with rigorous test automation, digital products achieve both stunning fidelity and absolute stability.
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-studio-muted mb-4">
              METHODOLOGY
            </h3>
            <p className="font-sans text-sm font-light leading-relaxed text-studio-muted">
              Developing with React &amp; Tailwind CSS while implementing end-to-end automation test suites using Playwright. This ensures that visual polish remains flawless through subsequent deployments.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end md:items-end">
            <a 
              href="#projects" 
              className="font-sans text-xs uppercase tracking-[0.2em] text-studio-accent border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              EXPLORE CASE STUDIES &rarr;
            </a>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Layout Details */}
      <div className="absolute top-10 right-10 text-[18vw] font-display font-extrabold text-white/[0.01] pointer-events-none uppercase select-none">
        STUDIO
      </div>
    </section>
  );
};

export default About;
