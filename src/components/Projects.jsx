import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: '01',
    title: 'OrangeHRM Automation Testing',
    category: 'Playwright Automation Testing',
    website: '#',
    description: 'Developed automated end-to-end test scripts using Playwright and JavaScript to validate core HR workflows, improve testing efficiency, and ensure application reliability.',
    techStack: 'Playwright • JavaScript • Automation Testing',
    linkText: 'GitHub Repository ↗'
  },
  {
    id: '02',
    title: 'JP Stones Website Testing',
    category: 'Playwright Automation Testing',
    website: 'https://jp-stones.aspirasys.in/',
    description: 'Created and executed automation test scenarios for administrative workflows, validating functionality, user interactions, and application stability.',
    techStack: 'Playwright • JavaScript • Functional Testing',
    linkText: 'GitHub Repository ↗'
  },
  {
    id: '03',
    title: 'Abbass Threads Website Testing',
    category: 'Playwright Automation Testing',
    website: '#',
    description: 'Automated testing scenarios for user flows, navigation, and application functionality to improve software quality and testing coverage.',
    techStack: 'Playwright • JavaScript • QA Automation',
    linkText: 'GitHub Repository ↗'
  },
  {
    id: '04',
    title: 'Basha Application Testing',
    category: 'Manual Testing',
    website: 'https://basha.aspirasys.in/',
    description: 'Performed manual testing, created test cases, executed test scenarios, and reported defects to ensure a seamless user experience.',
    techStack: 'Manual Testing • Test Cases • Bug Reporting',
    linkText: 'Project Documentation ↗'
  },
  {
    id: '05',
    title: 'Tamil Nadu Hajj & Umrah Services',
    category: 'Manual Testing',
    website: 'https://tnhss.aspirasys.in/',
    description: 'Executed functional, UI, and regression testing while validating workflows and reporting issues to improve application quality.',
    techStack: 'Manual Testing • Functional Testing • QA',
    linkText: 'Project Documentation ↗'
  },
  {
    id: '06',
    title: 'Developer Portfolio',
    category: 'Frontend Development',
    website: 'https://devmubarak.netlify.app/',
    description: 'Designed and developed a personal portfolio website showcasing projects, technical skills, and professional experience.',
    techStack: 'HTML • CSS • JavaScript',
    linkText: 'Live Demo ↗'
  },
  {
    id: '07',
    title: 'MTech Official Website',
    category: 'Frontend Development',
    website: 'https://officialmtech.netlify.app/',
    description: 'Developed a responsive business website focused on modern design, performance, and user experience.',
    techStack: 'HTML • CSS • JavaScript',
    linkText: 'Live Demo ↗'
  },
  {
    id: '08',
    title: 'Currency Exchange Application',
    category: 'Frontend Development',
    website: 'https://api-cur.netlify.app/',
    description: 'Built a currency conversion application integrating APIs to provide real-time exchange rate calculations.',
    techStack: 'JavaScript • API Integration • CSS',
    linkText: 'Live Demo ↗'
  },
  {
    id: '09',
    title: 'Bootstrap Landing Page',
    category: 'Frontend Development',
    website: 'https://bootstrap-mubarak.netlify.app/',
    description: 'Created a responsive landing page using Bootstrap with modern UI components and mobile-first design principles.',
    techStack: 'Bootstrap • HTML • CSS',
    linkText: 'Live Demo ↗'
  },
  {
    id: '10',
    title: 'Calculator',
    category: 'Frontend Development',
    website: '#',
    description: 'A lightweight calculator built using HTML, CSS, and JavaScript, designed to perform basic arithmetic operations with a simple and intuitive user experience.',
    techStack: 'HTML • CSS • JavaScript',
    linkText: 'GitHub Repository ↗'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="w-full bg-[#000000] py-24 md:py-32 overflow-hidden text-white">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Projects
        </h2>
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          A collection of real-world projects showcasing my expertise in Frontend Development, Manual Testing, and Playwright Automation Testing.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="w-full border-t border-white/[0.15] flex flex-col">
        {projectsData.map((project, index) => (
          <motion.a
            href={project.website !== '#' ? project.website : undefined}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group w-full block border-b border-white/[0.15] hover:border-[#FF3B30]/50 hover:bg-[#FF3B30]/[0.02] hover:shadow-[0_0_20px_rgba(255,59,48,0.05)] transition-all duration-500 relative"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start cursor-pointer transition-transform duration-500 ease-out group-hover:-translate-y-1">
              
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-sans text-sm tracking-[0.2em] text-white/40 group-hover:text-[#FF3B30] transition-colors duration-500">
                  {project.id}
                </span>
              </div>

              {/* Title & Category */}
              <div className="md:col-span-4 flex flex-col">
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white group-hover:text-white transition-colors duration-500">
                  {project.title}
                </h3>
                <span className="font-sans text-sm text-white/50 uppercase tracking-widest transition-colors duration-500 group-hover:text-white/80">
                  {project.category}
                </span>
              </div>

              {/* Description & Tech Stack */}
              <div className="md:col-span-5 flex flex-col">
                <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-500">
                  {project.description}
                </p>
                <span className="font-sans text-xs text-white/40 uppercase tracking-[0.15em] font-medium transition-colors duration-500 group-hover:text-[#FF3B30]">
                  {project.techStack}
                </span>
              </div>

              {/* Link */}
              <div className="md:col-span-2 flex md:justify-end items-start mt-4 md:mt-0">
                <span className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-500">
                  {project.linkText.replace(' ↗', '')}
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 group-hover:text-[#FF3B30]">
                    ↗
                  </span>
                </span>
              </div>

            </div>
          </motion.a>
        ))}
      </div>

    </section>
  );
};

export default Projects;
