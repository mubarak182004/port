import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    num: "01",
    title: "Playwright Automation",
    desc: "Building reliable end-to-end testing solutions using Playwright and JavaScript to ensure application quality, stability, and performance.",
  },
  {
    num: "02",
    title: "JavaScript",
    desc: "Creating dynamic, interactive, and scalable web applications with modern JavaScript development practices.",
  },
  {
    num: "03",
    title: "Frontend Development",
    desc: "Crafting responsive, accessible, and user-focused interfaces with clean architecture and modern design principles.",
  },
  {
    num: "04",
    title: "React.js",
    desc: "Developing fast, component-driven applications using React.js, reusable components, and modern frontend workflows.",
  },
  {
    num: "05",
    title: "Manual Testing",
    desc: "Executing functional, UI, regression, and exploratory testing to deliver reliable and bug-free user experiences.",
  },
  {
    num: "06",
    title: "Tools & Workflow",
    desc: "Bootstrap • Jira • Git • GitHub • VS Code • Chrome DevTools\n\nLeveraging industry-standard tools to streamline development, collaboration, testing, and project delivery.",
  }
];

const SkillSection = ({ skill }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
      animate={{
        backgroundColor: isActive ? "#FFFFFF" : "#000000",
        color: isActive ? "#111827" : "#FFFFFF",
      }}
      className="group w-full flex flex-col md:flex-row justify-between py-12 md:py-20 px-6 md:px-12 lg:px-20 cursor-pointer border-b border-white/10 last:border-b-0"
      style={{
        transition: 'background-color 0.5s ease, color 0.3s ease, transform 0.3s ease, opacity 0.3s ease',
      }}
    >
      {/* Left Side: Number & Headline */}
      <div className="w-full md:w-1/2 flex flex-col mb-8 md:mb-0">
        <span 
          className="font-sans text-sm tracking-[0.2em] mb-4"
          style={{ 
            opacity: isActive ? 0.7 : 0.5,
            transition: 'opacity 0.3s ease'
          }}
        >
          {skill.num}
        </span>
        <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {skill.title}
        </h3>
      </div>

      {/* Right Side: Divider & Description */}
      <div className="w-full md:w-[45%] flex flex-col justify-start pt-2">
        <div 
          className="w-full h-[1px] mb-6"
          style={{ 
            backgroundColor: isActive ? "#D1D5DB" : "#333333",
            transition: 'background-color 0.4s ease'
          }}
        />
        <p 
          className="font-sans text-base md:text-xl lg:text-2xl leading-relaxed max-w-2xl"
          style={{ 
            opacity: isActive ? 0.9 : 0.7,
            transition: 'opacity 0.3s ease'
          }}
        >
          {skill.desc}
        </p>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#000000] py-24 md:py-32 overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 md:mb-24 px-6 md:px-12 lg:px-20"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Skills
        </h2>
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          Technical expertise across frontend development, software testing, automation, and modern development tools.
        </p>
      </motion.div>

      {/* Skills List - Full Width */}
      <div className="flex flex-col w-full">
        {skillsData.map((skill, index) => (
          <SkillSection 
            key={index} 
            skill={skill} 
          />
        ))}
      </div>
      
    </section>
  );
};

export default Skills;
