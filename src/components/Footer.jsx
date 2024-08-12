import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-sm mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            © 2024 Hacker News Reader. All rights reserved.
          </motion.p>
          <div className="flex items-center space-x-6">
            <motion.a 
              href="https://news.ycombinator.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm hover:text-gray-200 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Official Hacker News
            </motion.a>
            <motion.a 
              href="https://github.com/HackerNews/API" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm hover:text-gray-200 transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-4 h-4 mr-1" />
              API
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;