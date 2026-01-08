import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/contentData';
import { TiArrowRepeat } from 'react-icons/ti'; 

const SlideOnRepeat = () => {
  return (
    <div className="w-full h-full flex flex-col bg-black relative overflow-hidden p-6 text-white pb-20">
      {/* Blurred Background */}
      <div className="absolute inset-0 z-0">
          <img src={content.onRepeat.image} alt="Background" className="w-full h-full object-cover blur-md opacity-30 scale-110" />
          <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="z-10 relative flex flex-col items-center h-full justify-evenly">
         <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl font-bold uppercase tracking-widest text-center text-white/90"
         >
             Kalau hidup punya tombol replay...
         </motion.h2>

         {/* Card - flexible height but distinct aspect ratio looking */}
         <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full max-w-[80%] aspect-[4/5] bg-neutral-900 rounded-lg shadow-2xl overflow-hidden relative group flex-shrink-0"
         >
             <img src={content.onRepeat.image} alt="Best Moment" className="w-full h-full object-cover" />
             
             {/* Pulse Icon Overlay */}
             <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <motion.div
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="bg-neon-green/90 p-4 md:p-6 rounded-full shadow-[0_0_30px_rgba(29,185,84,0.6)] backdrop-blur-sm"
                >
                    <TiArrowRepeat className="text-3xl md:text-4xl text-black" />
                </motion.div>
             </div>
         </motion.div>

         <div className="text-center space-y-2">
             <h3 className="text-xl md:text-2xl font-black-wrapped text-tracking-tighter">On Repeat</h3>
             <p className="text-spotify-light text-xs md:text-sm italic">"{content.onRepeat.caption}"</p>
         </div>
      </div>
    </div>
  );
};

export default SlideOnRepeat;
