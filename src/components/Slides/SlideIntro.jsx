import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/contentData';

const SlideIntro = () => {
  const words = content.introText.split(" ");
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-6 relative overflow-hidden">
        {/* Background Gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-spotify-black z-0" />
       
       {/* Animated Orb */}
       <motion.div 
         animate={{ x: [-50, 50, -50], rotate: [0, 180, 360] }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         className="absolute top-1/4 right-[-20%] w-96 h-96 bg-neon-blue rounded-full blur-[120px] opacity-20 z-0"
       />

      <div className="z-10 flex flex-wrap justify-center content-center h-full gap-x-3 gap-y-1">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 50, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={{ 
                  delay: 0.3 + (i * 0.15), 
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.5
              }}
              className={`text-5xl font-black-wrapped text-tracking-tighter uppercase leading-none mix-blend-screen
                ${i % 2 === 0 ? 'text-white' : 'text-neon-green text-glow'}
                ${i === words.length - 1 ? 'text-neon-pink !text-6xl block w-full text-center mt-4' : ''}
              `}
            >
              {word}
            </motion.span>
          ))}
      </div>
    </div>
  );
};

export default SlideIntro;
