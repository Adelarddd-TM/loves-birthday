
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeGate({ onStart }) {
  return (
    <motion.div 
      className="fixed inset-0 z-[60] bg-stone-950 flex flex-col items-center justify-center text-center p-6"
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-3xl md:text-5xl text-stone-200 mb-2">For [Nama Pasangan]</h1>
        <p className="text-stone-400 font-sans mb-8">Sebuah perjalanan cerita kita...</p>
        
        <button 
          onClick={onStart}
          className="px-8 py-3 bg-stone-100 text-stone-900 rounded-full font-serif text-lg tracking-wide hover:scale-105 transition-transform duration-300"
        >
          Tap to Open
        </button>
      </motion.div>
    </motion.div>
  );
}
