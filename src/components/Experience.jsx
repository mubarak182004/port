import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="experience" className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-studio-bg overflow-hidden border-t border-white/[0.02]">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="text-center md:text-left mb-16 md:mb-20">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-studio-accent">
            Education & Experience
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* CARD 1 — Education */}
          <motion.div
            variants={cardVariants}
            className="group relative flex flex-col p-8 md:p-12 rounded-3xl bg-studio-card/30 border border-studio-border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.08] hover:bg-studio-card/50 hover:shadow-[0_12px_40px_rgba(255,255,255,0.03)] overflow-hidden h-full"
          >
            {/* Top Border Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            {/* Radial Highlight Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 mb-6">
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-studio-accent/70 bg-white/[0.03] border border-white/[0.05] rounded-full">
                Education
              </span>
              <h3 className="font-sans text-2xl md:text-3xl font-semibold text-studio-accent tracking-tight mb-3">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="font-sans text-lg text-studio-muted font-medium mb-4">
                C. Abdul Hakeem College, Melvisharam
              </p>
              <p className="font-sans text-[15px] md:text-base text-studio-muted/70 font-light leading-relaxed">
                Completed Bachelor of Computer Applications (BCA), building a strong academic foundation in computer science, software development, databases, and web technologies. Developed problem-solving, analytical, and technical skills through academic projects and practical learning experiences.
              </p>
            </div>

            <ul className="relative z-10 space-y-4">
              {[
                "Acquired a comprehensive foundation in computer science, focusing on modern software development practices.",
                "Mastered core concepts in programming, relational databases, and web technologies.",
                "Developed academic projects applying problem-solving and software development methodologies.",
                "Gained practical knowledge of HTML, CSS, JavaScript, database management, and application development.",
                "Strengthened analytical thinking, logical reasoning, and debugging skills through hands-on coursework.",
                "Collaborated on academic assignments and team projects, improving communication and teamwork abilities.",
                "Built a strong understanding of software engineering principles, system design, and technology-driven solutions.",
                "Developed a passion for web development, software testing, and continuous learning in modern technologies.",
                "Enhanced technical expertise through continuous learning, practical assignments, and project-based development.",
                "Prepared for a career in software development and quality assurance by building strong technical and analytical skills."
              ].map((item, index) => (
                <li key={index} className="flex items-start group/item">
                  <span className="mt-[0.6rem] mr-4 w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-studio-accent/80 transition-colors duration-300 shrink-0" />
                  <span className="font-sans text-[15px] md:text-base text-studio-muted/80 font-light leading-relaxed group-hover/item:text-studio-muted transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CARD 2 — Internship Experience */}
          <motion.div
            variants={cardVariants}
            className="group relative flex flex-col p-8 md:p-12 rounded-3xl bg-studio-card/30 border border-studio-border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.08] hover:bg-studio-card/50 hover:shadow-[0_12px_40px_rgba(255,255,255,0.03)] overflow-hidden h-full"
          >
            {/* Top Border Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            {/* Radial Highlight Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 mb-6">
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-studio-accent/70 bg-white/[0.03] border border-white/[0.05] rounded-full">
                Internship Experience
              </span>
              <h3 className="font-sans text-2xl md:text-3xl font-semibold text-studio-accent tracking-tight mb-3">
                Software Testing & Web Development Intern
              </h3>
              <p className="font-sans text-lg text-studio-muted font-medium mb-4">
                AspiraSys
              </p>
              <p className="font-sans text-[15px] md:text-base text-studio-muted/70 font-light leading-relaxed">
                At AspiraSys, I gained hands-on experience in Software Testing and Web Development, working on real-world applications through Manual Testing and Playwright Automation Testing. This internship strengthened my understanding of quality assurance processes, test automation frameworks, defect management, and modern web technologies.
              </p>
            </div>

            <ul className="relative z-10 space-y-4 mb-6">
              {[
                "Performed Manual Testing and Automation Testing for web applications.",
                "Created, executed, and maintained test cases and test scenarios.",
                "Identified, documented, and reported defects to improve software quality.",
                "Developed automation test scripts using Playwright with JavaScript.",
                "Executed functional, UI, and regression testing across multiple applications.",
                "Collaborated with developers to validate bug fixes and ensure application reliability.",
                "Worked with HTML, CSS, and responsive web design principles.",
                "Followed industry-standard QA processes, testing workflows, and documentation practices.",
                "Gained hands-on experience in Manual Testing, Playwright Automation Testing, and web application quality assurance through real-world projects.",
                "Worked with test cases, bug reporting, automation scripts, and frontend technologies to deliver reliable software solutions.",
                "Improved debugging, analytical thinking, and problem-solving skills while working on software testing activities.",
                "Strengthened understanding of software quality assurance, test automation frameworks, and industry best practices."
              ].map((item, index) => (
                <li key={index} className="flex items-start group/item">
                  <span className="mt-[0.6rem] mr-4 w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-studio-accent/80 transition-colors duration-300 shrink-0" />
                  <span className="font-sans text-[15px] md:text-base text-studio-muted/80 font-light leading-relaxed group-hover/item:text-studio-muted transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
