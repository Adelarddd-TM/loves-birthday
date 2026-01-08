import React, { useRef, useEffect, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { content } from '../../data/contentData';

const BackgroundAudio = ({ isPlaying, currentSlide }) => {
  const bgmRef = useRef(null);
  const anthemRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Volume management
    if (bgmRef.current) bgmRef.current.muted = isMuted;
    if (anthemRef.current) anthemRef.current.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    if (!isPlaying) return;

    const bgm = bgmRef.current;
    const anthem = anthemRef.current;

    // Slide 4 is the Anthem slide (0:Start, 1:Intro, 2:Minutes, 3:Peak, 4:Anthem)
    // Actually, check App.jsx slide order.
    // 0: Start, 1: Intro, 2: Minutes, 3: Peak, 4: Anthem. Correct.
    
    if (currentSlide === 4) {
      // Play Anthem, Pause BGM
      if (bgm) bgm.pause();
      if (anthem) {
        anthem.currentTime = 0; // Restart song? or just play? Let's restart for impact.
        anthem.play().catch(e => console.log("Anthem play failed:", e));
      }
    } else {
      // Play BGM, Pause Anthem
      if (anthem) {
        anthem.pause();
        anthem.currentTime = 0; // Reset
      }
      if (bgm && bgm.paused) {
        bgm.play().catch(e => console.log("BGM play failed:", e));
      }
    }
  }, [currentSlide, isPlaying]);

  const toggleMute = (e) => {
    e.stopPropagation(); 
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={bgmRef} loop src={content.bgMusic} />
      <audio ref={anthemRef} src={content.topSong.audioUrl} />
      
      {isPlaying && (
        <div 
          onClick={toggleMute}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/70 transition-all"
        >
          {isMuted ? <FaVolumeMute className="text-white text-lg" /> : <FaVolumeUp className="text-spotify-green text-lg" />}
        </div>
      )}
    </>
  );
};

export default BackgroundAudio;
