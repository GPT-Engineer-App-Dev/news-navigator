import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle, ExternalLink, Clock, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const StoryCard = ({ story }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 1 }} 
      transition={{ duration: 0.2 }}
    >
      <Card className="flex flex-col h-full bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
        <CardContent className="flex-grow pt-6 relative">
          <motion.div
            className="absolute top-0 right-0 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-bl-lg font-bold"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            #{story.num_comments}
          </motion.div>
          <h2 className="text-lg font-semibold mb-3 line-clamp-2 text-gray-800 dark:text-white">{story.title}</h2>
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <div className="flex items-center mr-4 mb-2">
              <ArrowUpCircle className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
              <span>{story.points} points</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Clock className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
              <span>{new Date(story.created_at).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center mb-2">
              <User className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
              <span>{story.author}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 font-bold"
            onClick={() => window.open(story.url, '_blank', 'noopener,noreferrer')}
          >
            Read More <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default StoryCard;