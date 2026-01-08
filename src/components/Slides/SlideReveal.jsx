import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import { content } from '../../data/contentData';

const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
        const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return size;
};

const SlideReveal = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();
  
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative bg-gray-900 overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-30">
             <ReactConfetti 
                width={width > 480 ? 480 : width} 
                height={height} 
                recycle={false} 
                numberOfPieces={400} 
                gravity={0.15}
             />
        </div>
      )}
      
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={content.topArtist.image} 
          alt="Top Artist" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 z-20 pb-20">
         <motion.div
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="flex flex-col items-start"
         >
            <div className="bg-spotify-green text-black text-xs font-black px-3 py-1 rounded-full mb-4 uppercase tracking-widest shadow-[0_0_15px_rgba(29,185,84,0.6)]">
                #1 Person
            </div>
            
            <p className="text-white/80 font-bold tracking-widest uppercase text-sm mb-2">Top Artist</p>
            <h1 className="text-5xl font-black-wrapped text-tracking-tighter leading-[0.9] mb-4 text-white drop-shadow-2xl">
                {content.topArtist.caption}
            </h1>
         </motion.div>
      </div>
    </div>
  );
};

export default SlideReveal;
