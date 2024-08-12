import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Code, Zap, Search, Layout, Smartphone } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Zap className="w-6 h-6 text-yellow-300" />, text: "Real-time updates of top stories" },
    { icon: <Search className="w-6 h-6 text-yellow-300" />, text: "Search functionality to find specific stories" },
    { icon: <Layout className="w-6 h-6 text-yellow-300" />, text: "Clean and intuitive user interface" },
    { icon: <Code className="w-6 h-6 text-yellow-300" />, text: "Quick access to original story links" },
    { icon: <Smartphone className="w-6 h-6 text-yellow-300" />, text: "Responsive design for all devices" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex flex-col">
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl p-8">
          <motion.h1 
            className="text-5xl font-bold mb-8 text-center text-white flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Newspaper className="mr-4 text-yellow-300" size={48} />
            </motion.div>
            About Hacker News Reader
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white mb-6 text-lg leading-relaxed">
              Welcome to the Hacker News Reader, a cutting-edge interface designed to bring you the top stories from the tech world. Our app leverages the Algolia API to fetch the latest 100 top stories from Hacker News, ensuring you're always up-to-date with the most engaging and popular content in the tech community.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-3 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.p 
              className="text-white text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              We're committed to providing you with the best possible experience for exploring Hacker News. Dive into the world of tech, discover groundbreaking ideas, and stay informed with our Hacker News Reader. Happy reading!
            </motion.p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;