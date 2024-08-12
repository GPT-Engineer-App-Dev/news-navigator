import React, { useState } from 'react';
import HackerNewsList from '../components/HackerNewsList';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Search, Newspaper } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex flex-col">
      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-6xl font-bold mb-12 text-center text-white flex items-center justify-center"
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
            Hacker News Top Stories
          </motion.h1>
          <motion.div 
            className="mb-12 max-w-md mx-auto relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              type="text"
              placeholder="Search stories..."
              className="pl-12 pr-4 py-3 rounded-full shadow-xl bg-white bg-opacity-20 backdrop-blur-lg text-white placeholder-gray-300 border-2 border-red-300 focus:border-yellow-300 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-300" size={24} />
          </motion.div>
          <HackerNewsList searchTerm={searchTerm} />
        </div>
      </main>
    </div>
  );
};

export default Index;