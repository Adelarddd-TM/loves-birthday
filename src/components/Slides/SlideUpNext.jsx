import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/contentData';

const SlideUpNext = () => {
  return (
    <div className="w-full h-full flex flex-col bg-black p-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-gray-900 to-transparent z-10" />
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

       <div className="z-10 mt-8 mb-8">
           <h2 className="text-sm font-bold uppercase tracking-widest text-spotify-light border-b border-white/20 pb-2">Up Next: 2026</h2>
       </div>

       <div className="flex-1 space-y-4 overflow-y-auto z-10 no-scrollbar">
           {content.futureQueue.map((item, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: item.isPlaying ? 1 : 0.7, x: 0 }}
                 transition={{ delay: index * 0.2 }}
                 className={`flex items-center p-3 rounded-lg ${item.isPlaying ? 'bg-white/10 backdrop-blur-sm border border-neon-green/30' : 'hover:bg-white/5'}`}
               >
                   <div className="w-12 h-12 flex-shrink-0 bg-gray-800 rounded bg-cover bg-center mr-4 relative overflow-hidden">
                       {/* Placeholder album art style */}
                       <div className={`w-full h-full bg-gradient-to-br ${item.isPlaying ? 'from-neon-green to-black' : 'from-gray-700 to-black'}`}></div>
                       {item.isPlaying && (
                           <div className="absolute inset-0 flex items-center justify-center gap-[2px]">
                               {[1, 2, 3, 4].map(i => (
                                   <div key={i} className="w-1 bg-white animate-music-bar" style={{ animationDelay: `${i * 0.1}s`, height: '60%' }}></div>
                               ))}
                           </div>
                       )}
                   </div>
                   
                   <div className="flex-1 min-w-0">
                       <h3 className={`text-md font-bold truncate ${item.isPlaying ? 'text-neon-green' : 'text-white'}`}>
                           {item.title}
                       </h3>
                       <p className="text-xs text-spotify-light truncate">{item.artist}</p>
                   </div>

                   {item.isPlaying && (
                       <div className="text-neon-green text-xs font-bold uppercase tracking-wider animate-pulse">
                           Playing
                       </div>
                   )}
               </motion.div>
           ))}
       </div>
    </div>
  );
};

export default SlideUpNext;
