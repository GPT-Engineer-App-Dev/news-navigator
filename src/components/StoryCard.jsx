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
      <Card className="flex flex-col h-full bg-gradient-to-br from-red-700 to-red-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-300 overflow-hidden">
        <CardContent className="flex-grow pt-6 relative">
          <motion.div
            className="absolute top-0 right-0 bg-yellow-300 text-red-800 px-3 py-1 rounded-bl-lg font-bold"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            #{story.num_comments}
          </motion.div>
          <h2 className="text-lg font-semibold mb-3 line-clamp-2 text-white">{story.title}</h2>
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-300 mb-2">
            <div className="flex items-center mr-4 mb-2">
              <ArrowUpCircle className="w-4 h-4 mr-1 text-yellow-300" />
              <span>{story.points} points</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Clock className="w-4 h-4 mr-1 text-yellow-300" />
              <span>{new Date(story.created_at).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center mb-2">
              <User className="w-4 h-4 mr-1 text-yellow-300" />
              <span>{story.author}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full bg-yellow-300 text-red-800 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 font-bold"
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