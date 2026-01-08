import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/contentData';

const SlidePeakHours = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-black p-6 py-20 relative overflow-hidden text-white">
       {/* Background */}
       <div className="absolute top-10 right-10 w-40 h-40 bg-neon-purple rounded-full blur-[80px] opacity-20" />
       
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="text-center flex-shrink-0"
       >
         <h2 className="text-2xl md:text-3xl font-black-wrapped text-tracking-tighter mb-4 leading-tight">
           Jam-jam kita<br/>saling kangen, nich.
         </h2>
         <p className="text-spotify-light text-xs md:text-sm uppercase tracking-widest border-b border-white/20 pb-2 inline-block">
           Aktivitas kita memuncak di jam:
         </p>
       </motion.div>

       {/* Bar Chart - Flexible height */}
       <div className="flex-grow flex items-end justify-center space-x-4 md:space-x-6 px-2 py-8 min-h-0">
          {content.peakHours.hours.map((hour, i) => {
            const isPeak = content.peakHours.series[i] === 100;
            return (
                <div key={i} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${content.peakHours.series[i]}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "backOut" }}
                        className={`w-full rounded-t-lg relative max-w-[40px] ${isPeak ? 'bg-neon-green shadow-[0_0_20px_rgba(29,185,84,0.6)]' : 'bg-white/10'}`}
                        style={{ minHeight: '10%' }}
                    >
                        {isPeak && (
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-bounce whitespace-nowrap">
                                TOP
                            </div>
                        )}
                    </motion.div>
                    <span className={`text-[10px] md:text-xs font-mono transform -rotate-45 md:rotate-0 origin-top-left md:origin-center mt-2 ${isPeak ? 'text-white font-bold' : 'text-white/40'}`}>
                        {hour}
                    </span>
                </div>
            )
          })}
       </div>

       <div className="text-center px-4 flex-shrink-0">
           <p className="text-spotify-light text-[10px] md:text-xs italic opacity-70">"Waktu-waktu rawan and kangen dadakan, awwww."</p>
       </div>
    </div>
  );
};

export default SlidePeakHours;
