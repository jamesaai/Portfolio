import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import AnimatedText from './AnimatedText';
import { CloudDownload } from './CloudDownload';
import { LayoutGrid } from './LayoutGrid';
import { FileChartColumn } from './FileChartColumn';
import { Github, Linkedin, X } from 'lucide-react';

const Hero = () => {
  // Replace 'YOUR_FILE_ID' with your actual Google Drive file ID
  // To get the file ID: Upload your PDF to Google Drive, make it public, 
  // then copy the ID from the URL: https://drive.google.com/file/d/FILE_ID_HERE/view
  const GOOGLE_DRIVE_FILE_ID = '1Fxnc7k-CRwQoemZkfddQ_CRnVcrpBL3T9xjiPwwnF1l'; // Replace with your actual file ID

  const handleResumeView = () => {
    window.open(`https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`, '_blank');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/BlakeResume.pdf';
    link.download = 'BlakeResume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discord bots and Roblox management, refined for communities
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Built to help communities operate with precision, reliability, and confidence as they grow — without added complexity.
            </motion.p>
          
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-sm"
            >
              View Projects →
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-200 text-sm"
            >
              Get in Touch
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="https://github.com/jamesaai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/jamesaai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/atlanta_public_schools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
