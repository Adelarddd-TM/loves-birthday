
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeGate from './components/WelcomeGate';
import AudioPlayer from './components/AudioPlayer';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Message from './components/Message';

function App() {
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setIsPlaying(true);
  };

  return (
    <div className="bg-stone-900 min-h-screen text-stone-100 selection:bg-pink-500 selection:text-white">
      <AnimatePresence>
        {!started && <WelcomeGate onStart={handleStart} />}
      </AnimatePresence>

      {started && (
        <main className="animate-in fade-in duration-1000">
          <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          <Hero />
          <Timeline />
          <Message />
          
          <footer className="py-8 text-center text-stone-600 text-sm font-sans">
            Created with ❤️ for You
          </footer>
        </main>
      )}
    </div>
  );
}

export default App;
