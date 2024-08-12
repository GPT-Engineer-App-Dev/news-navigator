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
            className="text-5xl font-bold mb-12 text-center text-white flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Newspaper className="mr-2" /> Hacker News Top Stories
          </motion.h1>
          <motion.div 
            className="mb-8 max-w-md mx-auto relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              type="text"
              placeholder="Search stories..."
              className="pl-10 pr-4 py-2 rounded-full shadow-lg bg-white bg-opacity-20 backdrop-blur-lg text-white placeholder-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
          </motion.div>
          <HackerNewsList searchTerm={searchTerm} />
        </div>
      </main>
    </div>
  );
};

export default Index;