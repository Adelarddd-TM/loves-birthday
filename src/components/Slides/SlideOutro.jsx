import React from 'react';
import { motion } from 'framer-motion';

const SlideOutro = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-center p-8 relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-spotify-black z-0 pointer-events-none" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-pink rounded-full blur-[150px] opacity-20 z-0 pointer-events-none" />

      <div className="z-10 flex flex-col items-center justify-center h-full gap-8">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <span className="text-[100px] block drop-shadow-2xl">🎁</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-4xl font-black-wrapped text-tracking-tighter mb-4 text-white">Happy Birthday Ma Baby Honey Sweetie Angel 🤭!</h2>
          </motion.div>
      </div>
    </div>
  );
};

export default SlideOutro;
