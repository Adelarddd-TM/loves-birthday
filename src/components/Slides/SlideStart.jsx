import React from 'react';
import { motion } from 'framer-motion';
import { BsSpotify } from 'react-icons/bs';

const SlideStart = ({ onStart }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-spotify-black via-black to-spotify-black text-white p-8 relative overflow-hidden">
      
      {/* Ambient Neon Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-20%] w-[120%] h-[60%] bg-neon-green rounded-full blur-[100px] opacity-20"
      />
       <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[50%] bg-neon-purple rounded-full blur-[100px] opacity-20"
      />

      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 flex flex-col items-center text-center space-y-8"
      >
        <BsSpotify className="text-7xl text-spotify-green mb-6 drop-shadow-[0_0_15px_rgba(29,185,84,0.6)]" />
        
        <div className="flex flex-col items-center">
            <h1 className="text-6xl font-black-wrapped text-tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-lg">
            Wrapped
            </h1>
            <h1 className="text-6xl font-black-wrapped text-tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white via-neon-pink to-neon-purple mt-2">
            In Love
            </h1>
        </div>
        
        <p className="font-semibold tracking-[0.3em] text-xs uppercase text-spotify-green/80 mt-4 border border-spotify-green/30 px-4 py-1 rounded-full backdrop-blur-sm">
          Birthday Edition
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="mt-16 bg-white text-black font-black-wrapped py-5 px-14 rounded-full text-xl tracking-tight shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all"
        >
          START
        </motion.button>
      </motion.div>

      <div className="absolute bottom-8 text-[10px] text-white/30 text-center w-full font-mono uppercase tracking-widest">
        Designed for You
      </div>
    </div>
  );
};

export default SlideStart;
