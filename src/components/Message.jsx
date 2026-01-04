
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift } from 'lucide-react';

export default function Message() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ec4899', '#f43f5e', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ec4899', '#f43f5e', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center py-20 bg-stone-900 border-t border-stone-800">
      <motion.div 
        className="text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl text-stone-200 mb-8">One Last Thing...</h2>
        
        {!isOpen ? (
          <button 
            onClick={handleOpen}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white font-serif text-xl rounded-full overflow-hidden transition-all hover:bg-pink-700 shadow-xl shadow-pink-900/20"
          >
            <Gift className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
            Open Gift
          </button>
        ) : (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-2xl border border-stone-700 max-w-lg mx-auto"
          >
            <p className="font-serif text-2xl text-pink-300 mb-4">You are the greatest gift.</p>
            <p className="text-stone-300 font-sans">
              "Teruslah bersinar dan menjadi dirimu sendiri. Aku akan selalu ada di sini, mendukung setiap langkahmu."
            </p>
            <div className="mt-6 text-sm text-stone-500 font-mono">
              *Cek laci mejamu sekarang ;)*
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
