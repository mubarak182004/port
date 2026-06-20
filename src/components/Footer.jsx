import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer
    className="bg-studio-bg/75 backdrop-blur-md border-t border-white/10 py-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="container mx-auto px-4 text-center text-sm text-studio-muted">
      © {new Date().getFullYear()} Mubarak. All rights reserved.
    </div>
  </motion.footer>
);

export default Footer;
