import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projectsData = [
  {
    id: '01',
    title: 'OrangeHRM Automation Testing',
    category: 'Playwright Automation Testing',
    website: '#',
    description: 'Developed automated end-to-end test scripts using Playwright and JavaScript to validate core HR workflows, improve testing efficiency, and ensure application reliability.',
    techStack: 'Playwright • JavaScript • Automation Testing',
    linkText: 'GitHub',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '02',
    title: 'JP Stones Website Testing',
    category: 'Playwright Automation Testing',
    website: 'https://jp-stones.aspirasys.in/',
    description: 'Created and executed automation test scenarios for administrative workflows, validating functionality, user interactions, and application stability.',
    techStack: 'Playwright • JavaScript • Functional Testing',
    linkText: 'GitHub',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '03',
    title: 'Abbass Threads Website Testing',
    category: 'Playwright Automation Testing',
    website: '#',
    description: 'Automated testing scenarios for user flows, navigation, and application functionality to improve software quality and testing coverage.',
    techStack: 'Playwright • JavaScript • QA Automation',
    linkText: 'GitHub',
    previewImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '04',
    title: 'Basha Application Testing',
    category: 'Manual Testing',
    website: 'https://basha.aspirasys.in/',
    description: 'Performed manual testing, created test cases, executed test scenarios, and reported defects to ensure a seamless user experience.',
    techStack: 'Manual Testing • Test Cases • Bug Reporting',
    linkText: 'Live Demo',
    previewImage: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '05',
    title: 'Tamil Nadu Hajj & Umrah Services',
    category: 'Manual Testing',
    website: 'https://tnhss.aspirasys.in/',
    description: 'Executed functional, UI, and regression testing while validating workflows and reporting issues to improve application quality.',
    techStack: 'Manual Testing • Functional Testing • QA',
    linkText: 'Live Demo',
    previewImage: 'https://images.unsplash.com/photo-1531297180775-80252814b7e8?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '06',
    title: 'Developer Portfolio',
    category: 'Frontend Development',
    website: 'https://devmubarak.netlify.app/',
    description: 'Designed and developed a personal portfolio website showcasing projects, technical skills, and professional experience.',
    techStack: 'HTML • CSS • JavaScript',
    linkText: 'Live Demo',
    previewImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '07',
    title: 'MTech Official Website',
    category: 'Frontend Development',
    website: 'https://officialmtech.netlify.app/',
    description: 'Developed a responsive business website focused on modern design, performance, and user experience.',
    techStack: 'HTML • CSS • JavaScript',
    linkText: 'Live Demo',
    previewImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '08',
    title: 'Currency Exchange Application',
    category: 'Frontend Development',
    website: 'https://api-cur.netlify.app/',
    description: 'Built a currency conversion application integrating APIs to provide real-time exchange rate calculations.',
    techStack: 'JavaScript • API Integration • CSS',
    linkText: 'Live Demo',
    previewImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '09',
    title: 'Bootstrap Landing Page',
    category: 'Frontend Development',
    website: 'https://bootstrap-mubarak.netlify.app/',
    description: 'Created a responsive landing page using Bootstrap with modern UI components and mobile-first design principles.',
    techStack: 'Bootstrap • HTML • CSS',
    linkText: 'Live Demo',
    previewImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '10',
    title: 'Calculator',
    category: 'Frontend Development',
    website: '#',
    description: 'A lightweight calculator built using HTML, CSS, and JavaScript, designed to perform basic arithmetic operations with a simple and intuitive user experience.',
    techStack: 'HTML • CSS • JavaScript',
    linkText: 'GitHub',
    previewImage: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=2000'
  }
];

const ProjectRow = ({ project, isActive, onMouseEnter, onMouseLeave }) => {
  const rowRef = useRef(null);
  
  // Mouse tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement (max 10px movement as requested)
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const xOffset = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const yOffset = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    // Calculate normalized mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  return (
    <motion.div
      ref={rowRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={(e) => {
        onMouseLeave();
        mouseX.set(0);
        mouseY.set(0);
      }}
      onMouseMove={handleMouseMove}
      initial={false}
      animate={{
        backgroundColor: isActive ? '#7163F1' : '#000000',
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative w-full border-b border-gray-800 overflow-hidden cursor-pointer group"
    >
      {/* Background Image (Spotlight) */}
      <motion.div
        animate={{
          opacity: isActive ? 0.15 : 0,
          scale: isActive ? 1 : 0.95,
          filter: isActive ? 'blur(0px)' : 'blur(10px)',
        }}
        style={{
          x: xOffset,
          y: yOffset,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <img 
          src={project.previewImage} 
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12">
        
        {/* Left Side: Number & Title */}
        <div className="flex flex-col md:flex-row md:gap-12 flex-1">
          <motion.span
            animate={{
              color: isActive ? '#111111' : '#666666',
            }}
            transition={{ duration: 0.45 }}
            className="text-lg md:text-xl font-medium tracking-widest mb-4 md:mb-0 md:mt-2"
          >
            {project.id}
          </motion.span>
          
          <div className="flex flex-col">
            <motion.h3
              animate={{
                color: isActive ? '#111111' : '#ffffff',
                scale: isActive ? 1.02 : 1,
                transformOrigin: 'left center'
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            >
              {project.title}
            </motion.h3>
            
            <motion.p
              animate={{
                color: isActive ? 'rgba(17,17,17,0.8)' : 'rgba(255,255,255,0.6)',
              }}
              transition={{ duration: 0.45 }}
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              {project.description}
            </motion.p>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center md:justify-end mt-4 md:mt-0">
          <motion.a
            href={project.website !== '#' ? project.website : undefined}
            target="_blank"
            rel="noopener noreferrer"
            animate={{
              color: isActive ? '#111111' : '#ffffff',
            }}
            transition={{ duration: 0.45 }}
            className="group/link flex items-center gap-3 text-lg md:text-xl font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            {project.linkText}
            <motion.span
              animate={{ color: isActive ? '#111111' : '#ffffff' }}
              transition={{ duration: 0.45 }}
              className="transform group-hover/link:translate-x-[8px] transition-transform duration-300 ease-out flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.span>
          </motion.a>
        </div>
        
      </div>
      
      {/* Active Divider Line (only visible when active, expanding from left) */}
      <motion.div
        initial={false}
        animate={{
          scaleX: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
          backgroundColor: '#111111'
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 w-full h-[2px] z-20"
      />
    </motion.div>
  );
};

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" className="w-full bg-[#000000] py-24 md:py-32">
      {/* Header */}
      <div className="mb-16 md:mb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
          Projects
        </h2>
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          A collection of real-world projects showcasing my expertise in Frontend Development, Manual Testing, and Playwright Automation Testing.
        </p>
      </div>

      {/* Projects List */}
      <div className="w-full flex flex-col border-t border-gray-800">
        {projectsData.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            isActive={activeIndex === index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
