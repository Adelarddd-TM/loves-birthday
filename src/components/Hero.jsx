
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-stone-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 via-stone-900 to-black opacity-50" />
      
      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <h1 className="font-serif text-5xl md:text-7xl text-stone-100 mb-6 leading-tight">
              Happy Birthday <br/> <span className="text-pink-400">Sayang</span>
            </h1>
        </motion.div>

        <motion.p 
          className="text-stone-300 font-sans text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          There is no special gift I can give, only memories and prayers that I wrap in this simple page.
        </motion.p>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-stone-400" />
      </motion.div>
    </section>
  );
}
