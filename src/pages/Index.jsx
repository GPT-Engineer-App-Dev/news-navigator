import React, { useState } from 'react';
import HackerNewsList from '../components/HackerNewsList';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-red-600 flex flex-col">
      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-5xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hacker News Top Stories
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
              className="pl-10 pr-4 py-2 rounded-full shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </motion.div>
          <HackerNewsList searchTerm={searchTerm} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;