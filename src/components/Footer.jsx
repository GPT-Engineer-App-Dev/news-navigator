import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm">© 2024 Hacker News Reader. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-300">
              Official Hacker News
            </a>
            <a href="https://github.com/HackerNews/API" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-300 flex items-center">
              <Github className="w-4 h-4 mr-1" />
              API
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;