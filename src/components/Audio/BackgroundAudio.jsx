import React, { useRef, useEffect, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { content } from '../../data/contentData';

const BackgroundAudio = ({ isPlaying, currentSlide }) => {
  const bgmRef = useRef(null);
  const anthemRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [currentBgmIndex, setCurrentBgmIndex] = useState(0);

  useEffect(() => {
    // Volume management
    if (bgmRef.current) bgmRef.current.muted = isMuted;
    if (anthemRef.current) anthemRef.current.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    // Attempt play when valid
    const bgm = bgmRef.current;
    if (isPlaying && bgm && currentSlide !== 4) {
        bgm.play().catch(e => console.log("BGM Play error:", e));
    }
  }, [currentBgmIndex, isPlaying, currentSlide]);

  useEffect(() => {
    if (!isPlaying) return;

    const bgm = bgmRef.current;
    const anthem = anthemRef.current;

    // Slide 4 is the Anthem slide
    if (currentSlide === 4) {
      if (bgm) bgm.pause();
      if (anthem) {
        anthem.currentTime = 0;
        anthem.play().catch(e => console.log("Anthem play failed:", e));
      }
    } else {
      if (anthem) {
        anthem.pause();
        anthem.currentTime = 0;
      }
      if (bgm && bgm.paused) {
        bgm.play().catch(e => console.log("BGM play failed:", e));
      }
    }
  }, [currentSlide, isPlaying]);

  const handleBgmEnded = () => {
    // Switch to next track in array (Looping)
    if (Array.isArray(content.bgMusic)) {
       setCurrentBgmIndex((prev) => (prev + 1) % content.bgMusic.length);
    }
  };

  const bgmSource = Array.isArray(content.bgMusic) 
    ? content.bgMusic[currentBgmIndex] 
    : content.bgMusic;

  const toggleMute = (e) => {
    e.stopPropagation(); 
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio 
        ref={bgmRef} 
        src={bgmSource} 
        loop={!Array.isArray(content.bgMusic)} // Only loop single if not array (array loops manually via onEnded)
        onEnded={handleBgmEnded}
      />
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
