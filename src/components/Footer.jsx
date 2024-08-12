import React from 'react';
import { Github, ExternalLink, Heart, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-600 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div 
            className="text-2xl font-bold mb-4 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-300">
              Hacker News Reader
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-6 h-6 ml-2 text-yellow-300" />
            </motion.div>
          </motion.div>
          <motion.p 
            className="text-sm mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bringing you the latest in tech news and innovation.
          </motion.p>
          <div className="flex items-center space-x-6 mb-6">
            <SocialLink href="https://news.ycombinator.com/" icon={<ExternalLink />} label="Official HN" />
            <SocialLink href="https://github.com/HackerNews/API" icon={<Github />} label="API" />
            <SocialLink href="https://twitter.com" icon={<Twitter />} label="Twitter" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
          </div>
          <motion.p 
            className="text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            © 2024 Hacker News Reader. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <motion.a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-sm hover:text-yellow-300 transition-colors duration-300 flex flex-col items-center"
    whileHover={{ scale: 1.1 }}
  >
    {React.cloneElement(icon, { className: "w-6 h-6 mb-1" })}
    <span>{label}</span>
  </motion.a>
);

export default Footer;