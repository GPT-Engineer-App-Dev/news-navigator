import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import StoryCard from './StoryCard';
import StoryCardSkeleton from './StoryCardSkeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const HackerNewsList = ({ searchTerm }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 9;

  if (error) return <div className="text-red-500 text-center text-xl font-bold">Error: {error.message}</div>;

  const filteredStories = data?.hits.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = filteredStories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div 
      className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnimatePresence mode="wait">
          {isLoading
            ? Array(9).fill().map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <StoryCardSkeleton />
                </motion.div>
              ))
            : currentStories.map((story, index) => (
                <motion.div
                  key={story.objectID}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <StoryCard story={story} />
                </motion.div>
              ))
          }
        </AnimatePresence>
      </div>
      {!isLoading && (
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 bg-red-700 text-white rounded-full disabled:opacity-50 transition-all duration-300 hover:bg-red-600"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-white font-bold">Page {currentPage}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastStory >= filteredStories.length}
            className="p-2 bg-red-700 text-white rounded-full disabled:opacity-50 transition-all duration-300 hover:bg-red-600"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default HackerNewsList;