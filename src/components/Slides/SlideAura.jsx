import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/contentData';

const SlideAura = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-noise opacity-30 z-20 pointer-events-none mix-blend-overlay"></div>
      
      <h2 className="z-10 text-xl font-bold mb-12 uppercase tracking-[0.3em] text-center text-white/80 border-y border-white/20 py-2 w-full backdrop-blur-sm">Your Aura slm setahun ini</h2>
      
      {/* Animated Blobs - Maximized Blur */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div 
          className="absolute w-80 h-80 rounded-full blur-[100px] opacity-70 mix-blend-screen"
          style={{ backgroundColor: content.audioAura.colors[0] }}
          animate={{ x: [-30, 40, -30], y: [-40, 30, -40], scale: [1, 1.4, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full blur-[100px] opacity-70 mix-blend-screen"
          style={{ backgroundColor: content.audioAura.colors[1] }}
          animate={{ x: [40, -30, 40], y: [30, -40, 30], scale: [1.3, 0.9, 1.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="z-10 flex flex-col items-center space-y-6">
        {content.audioAura.adjectives.map((adj, i) => (
          <motion.h3
            key={i}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.5 + (i * 0.5), duration: 1 }}
            className="text-6xl font-black-wrapped text-tracking-tighter uppercase text-white drop-shadow-md text-center leading-none"
          >
            {adj}
          </motion.h3>
        ))}
      </div>
    </div>
  );
};

export default SlideAura;
