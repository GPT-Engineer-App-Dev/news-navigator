import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex flex-col">
      <main className="flex-grow p-8">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl p-8">
          <motion.h1 
            className="text-4xl font-bold mb-6 text-center text-white flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Newspaper className="mr-2" /> About Hacker News Reader
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white mb-4">
              Welcome to the Hacker News Reader, a modern and user-friendly interface for browsing the top stories from Hacker News.
            </p>
            <p className="text-white mb-4">
              Our app fetches the latest 100 top stories from Hacker News using the Algolia API, providing you with a curated list of the most interesting and popular content in the tech world.
            </p>
            <p className="text-white mb-4">
              Key features of our app include:
            </p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Real-time updates of top stories</li>
              <li>Search functionality to find specific stories</li>
              <li>Clean and intuitive user interface</li>
              <li>Quick access to original story links</li>
              <li>Responsive design for all devices</li>
            </ul>
            <p className="text-white">
              We hope you enjoy using our Hacker News Reader. Happy reading!
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;