import React, { useState } from 'react';
import MobileContainer from './components/Layout/MobileContainer';
import StoryProgress from './components/Layout/StoryProgress';
import Navigation from './components/Layout/Navigation';
import BackgroundAudio from './components/Audio/BackgroundAudio';
import { AnimatePresence, motion } from 'framer-motion';

import SlideStart from './components/Slides/SlideStart';
import SlideIntro from './components/Slides/SlideIntro';
import SlideMinutes from './components/Slides/SlideMinutes';
import SlidePeakHours from './components/Slides/SlidePeakHours';
import SlideAnthem from './components/Slides/SlideAnthem';
import SlideOnRepeat from './components/Slides/SlideOnRepeat';
import SlideHabits from './components/Slides/SlideHabits';
import SlideAura from './components/Slides/SlideAura';
import SlideUpNext from './components/Slides/SlideUpNext';
import SlideReveal from './components/Slides/SlideReveal';
import SlideOutro from './components/Slides/SlideOutro';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const totalSlides = 11; 

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleStart = () => {
    setIsPlaying(true);
    nextSlide();
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <SlideStart onStart={handleStart} />;
      case 1: return <SlideIntro />;
      case 2: return <SlideMinutes />;
      case 3: return <SlidePeakHours />;
      case 4: return <SlideAnthem />;
      case 5: return <SlideOnRepeat />;
      case 6: return <SlideHabits />;
      case 7: return <SlideAura />;
      case 8: return <SlideUpNext />;
      case 9: return <SlideReveal />;
      case 10: return <SlideOutro />;
      default: return null;
    }
  };

  return (
    <MobileContainer>
      <BackgroundAudio isPlaying={isPlaying} currentSlide={currentSlide} />
      
      {currentSlide > 0 && (
        <StoryProgress totalSlides={totalSlides - 1} currentSlide={currentSlide - 1} />
      )}

      {currentSlide > 0 && <Navigation onNext={nextSlide} onPrev={prevSlide} />}

      <AnimatePresence mode='wait'>
        <motion.div
           key={currentSlide}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.4 }}
           className="w-full h-full"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>
    </MobileContainer>
  );
}

export default App;
