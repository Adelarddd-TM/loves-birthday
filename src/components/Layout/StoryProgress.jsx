import React from 'react';
import { motion } from 'framer-motion';

const StoryProgress = ({ totalSlides, currentSlide }) => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 p-2 flex gap-1.5 pt-4 px-4">
      {[...Array(totalSlides)].map((_, index) => (
        <div 
          key={index} 
          className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
        >
          <motion.div
            className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            initial={{ width: "0%" }}
            animate={{ 
              width: index < currentSlide ? "100%" : index === currentSlide ? "100%" : "0%" 
            }}
            transition={index === currentSlide ? { duration: 5, ease: "linear" } : { duration: 0 }}
          />
        </div>
      ))}
    </div>
  );
};

export default StoryProgress;
