import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const StoryCard = ({ story }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Card className="flex flex-col h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="flex-grow pt-6">
          <h2 className="text-lg font-semibold mb-2 line-clamp-2">{story.title}</h2>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <ArrowUpCircle className="w-4 h-4 mr-1 text-orange-500" />
            <span>{story.points} points</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full hover:bg-red-600 hover:text-white transition-colors duration-300"
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