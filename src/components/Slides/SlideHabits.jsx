import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/contentData';

const SlideHabits = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-black p-8 relative overflow-hidden">
        {/* Background Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-neon-blue rounded-full blur-[120px] opacity-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-neon-purple rounded-full blur-[120px] opacity-10" />

      <h2 className="text-4xl font-black-wrapped text-tracking-tighter mb-12 uppercase leading-none text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        Your Top<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">Activities</span>
      </h2>
      
      <div className="space-y-8 z-10">
        {content.topGenres.map((genre, index) => (
          <div key={index} className="flex flex-col relative">
            <motion.div 
              className="flex items-end justify-between mb-2 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <span className="text-lg font-bold font-black-wrapped tracking-tight uppercase">{genre.label}</span>
              <span className="text-sm font-mono text-spotify-green">{genre.val}%</span>
            </motion.div>
            
            <div className="w-full bg-white/5 rounded-full h-6 overflow-hidden backdrop-blur-sm border border-white/5">
              <motion.div
                className={`h-full ${genre.color} relative overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                initial={{ width: 0 }}
                animate={{ width: `${genre.val}%` }}
                transition={{ duration: 1.2, delay: 0.5 + (index * 0.2), type: "spring", bounce: 0.2 }}
              >
                 {/* Shiny shimmer effect on bar */}
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideHabits;
