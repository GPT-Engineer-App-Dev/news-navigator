import React, { useState } from 'react';
import HackerNewsList from '../components/HackerNewsList';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-red-600 flex flex-col">
      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Hacker News Top Stories</h1>
          <Input
            type="text"
            placeholder="Search stories..."
            className="mb-8 max-w-md mx-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <HackerNewsList searchTerm={searchTerm} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;