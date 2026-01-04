
import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import bgm from '../assets/audio/bgm.mp3';

export default function AudioPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggle = () => setIsPlaying(!isPlaying);

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src={bgm} loop />
      <button 
        onClick={toggle}
        className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all text-stone-100"
      >
        {isPlaying ? <Volume2 className="w-6 h-6 animate-pulse" /> : <VolumeX className="w-6 h-6" />}
      </button>
    </div>
  );
}
