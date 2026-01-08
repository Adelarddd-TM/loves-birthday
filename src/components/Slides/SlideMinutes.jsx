import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { content } from '../../data/contentData';

const SlideMinutes = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-pink rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="text-center z-10 w-full"
      >
        <p className="text-spotify-light text-xl font-medium tracking-widest uppercase mb-6 mix-blend-screen">We've spent</p>
        
        <div className="flex justify-center items-center w-full">
            <span className="text-[10vh] leading-none font-black-wrapped text-transparent bg-clip-text bg-gradient-to-tr from-white to-neon-green drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] tracking-tighter">
            <CountUp 
                end={content.minutes} 
                duration={3.5} 
                separator="."
                useEasing={true} 
            />
            </span>
        </div>
        
        <p className="text-3xl font-black-wrapped uppercase tracking-tight mt-2 text-white/90">Minutes</p>
        <p className="text-3xl font-black-wrapped uppercase tracking-tight text-white/90">Together</p>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 3 }}
            className="mt-12 text-sm text-spotify-light italic"
        >
            ...dari 19th august btw.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SlideMinutes;
