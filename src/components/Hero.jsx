import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
};

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-20"
        src="https://framerusercontent.com/assets/yLuVmQngCSXfd0UdaLuBOt4SabU.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/55 -z-10" />

      {/* Main hero layout */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 lg:px-28 py-32 gap-16 md:gap-20 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Left side – subtitle, role badge, buttons */}
        <div className="flex flex-col items-start justify-center flex-1 space-y-8 md:space-y-10">
          {/* Main Title */}
          <motion.h2
            variants={fadeUp}
            className="font-sans text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed tracking-wide text-studio-accent"
          >
            Frontend Developer
            <br />
            <span className="text-studio-muted">&amp;</span>{' '}
            <span className="font-light">QA Automation Tester</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-base md:text-lg font-light leading-[1.7] tracking-wide text-studio-muted/90 max-w-lg"
          >
            Frontend Developer & QA Automation Tester focused on creating fast, accessible, and reliable digital experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group relative px-7 py-3 bg-studio-accent text-studio-bg rounded-full font-sans text-sm uppercase tracking-[0.15em] hover:bg-studio-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-7 py-3 border border-white/20 text-studio-accent rounded-full font-sans text-sm uppercase tracking-[0.15em] hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right side – profile image as main visual focus */}
        <motion.div
          variants={fadeIn}
          className="relative flex-shrink-0"
        >
          <motion.div
            animate={float.animate}
            className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[360px] md:h-[480px] lg:w-[420px] lg:h-[560px]"
          >
            {/* Outer glow */}
            <div className="absolute inset-[-10%] rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-3xl" />

            {/* Secondary ambient glow */}
            <div className="absolute inset-[-5%] rounded-2xl bg-gradient-to-tr from-studio-accent/10 via-transparent to-white/5 blur-2xl" />

            {/* Glassmorphism frame with a professional aspect ratio */}
            <div className="relative w-full h-full rounded-2xl bg-[#111111]/60 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden group">
              <img
                src={profileImg}
                alt="Mubarak – Frontend Developer & QA Automation Tester"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle inner overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
            </div>

            {/* Decorative minimalist border */}
            <div className="absolute inset-[-4%] rounded-2xl border border-white/10 pointer-events-none opacity-50" />
          </motion.div>
        </motion.div>
      </motion.div>



      {/* Subtle vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 gap-0 opacity-[0.04]">
        <div className="border-r border-white h-full" />
        <div className="border-r border-white h-full" />
        <div className="border-r border-white h-full" />
        <div className="h-full" />
      </div>
    </section>
  );
};

export default Hero;
