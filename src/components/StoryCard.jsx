import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const StoryCard = ({ story }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 1 }} 
      transition={{ duration: 0.2 }}
    >
      <Card className="flex flex-col h-full bg-white bg-opacity-20 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-red-300">
        <CardContent className="flex-grow pt-6">
          <h2 className="text-lg font-semibold mb-3 line-clamp-2 text-white">{story.title}</h2>
          <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
            <div className="flex items-center">
              <ArrowUpCircle className="w-4 h-4 mr-1 text-yellow-300" />
              <span>{story.points} points</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 text-yellow-300" />
              <span>{new Date(story.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full bg-red-600 text-white hover:bg-yellow-500 hover:text-red-800 transition-all duration-300 transform hover:-translate-y-1"
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