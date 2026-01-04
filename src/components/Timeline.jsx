
import React from 'react';
import { motion } from 'framer-motion';
import { memories } from '../data/memories';

const TimelineItem = ({ memory, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center justify-between mb-24 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-5/12 mb-8 md:mb-0">
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-800/50"
        >
          <img src={memory.image} alt={memory.title} className="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-700" />
        </motion.div>
      </div>

      <div className="w-full md:w-5/12 pl-4 md:pl-0 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className={`flex flex-col ${!isEven ? 'md:items-end md:text-right' : 'md:items-start'}`}>
                <span className="text-pink-400 font-serif italic text-xl mb-2">{memory.date}</span>
                <h3 className="text-3xl font-serif text-stone-100 mb-4">{memory.title}</h3>
                <p className="text-stone-300 font-sans leading-relaxed">{memory.description}</p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto relative">
      {/* Vertical line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-800 -translate-x-1/2" />
      
      {memories.map((memory, index) => (
        <TimelineItem key={memory.id} memory={memory} index={index} />
      ))}
    </section>
  );
}
