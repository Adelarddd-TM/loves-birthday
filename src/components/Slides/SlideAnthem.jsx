import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/contentData';
import { FaHeart } from 'react-icons/fa';

const SlideAnthem = () => {
  return (
    <div className="w-full h-full flex flex-col justify-end bg-black p-6 pb-20 relative overflow-hidden">
      {/* Dynamic Background based on cover (simulated with gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0" />
      <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[50%] bg-spotify-green blur-[120px] opacity-20 z-0" />

      <motion.div
        className="z-10 relative flex flex-col justify-end h-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", damping: 20 }}
      >
        <div className="flex-grow flex flex-col justify-end pb-8">
            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md w-max">
                <span className="uppercase text-[10px] font-bold tracking-[0.2em] text-white">LAGU ENGLISH FAVORITMU (YANG KUTAU YAAA)</span>
            </div>

            {/* Album Art with colored shadow glow - Flexible container */}
            <motion.div 
              className="relative w-full aspect-square mb-8 rounded-lg overflow-visible max-h-[45vh] self-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-spotify-green blur-2xl opacity-40 scale-95 translate-y-4"></div>
              <img 
                src={content.topSong.coverImg} 
                alt="Album Cover" 
                className="relative w-full h-full object-cover rounded-md shadow-2xl z-10"
              />
            </motion.div>

            {/* Text Details */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex-1 pr-4 min-w-0">
                <h2 className="text-2xl md:text-3xl font-black-wrapped text-white leading-tight mb-1 truncate">{content.topSong.title}</h2>
                <p className="text-spotify-light text-base md:text-lg font-medium truncate">{content.topSong.artist}</p>
              </div>
              <motion.div
                 whileTap={{ scale: 1.2 }}
                 className="text-spotify-green text-2xl md:text-3xl drop-shadow-[0_0_10px_rgba(29,185,84,0.5)] flex-shrink-0"
              >
                 <FaHeart />
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full mb-2 overflow-hidden backdrop-blur-sm">
              <motion.div 
                className="h-full bg-white rounded-full shadow-[0_0_10px_white]"
                initial={{ width: "0%" }}
                animate={{ width: "65%" }}
                transition={{ duration: 2, delay: 1, ease: "circOut" }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-spotify-light font-mono opacity-80">
              <span>2:14</span>
              <span>3:45</span>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SlideAnthem;
