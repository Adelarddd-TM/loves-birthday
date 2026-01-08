import React from 'react';

const MobileContainer = ({ children }) => {
  return (
    <div className="relative w-full h-full max-w-[480px] aspect-[9/16] bg-spotify-black overflow-hidden shadow-2xl flex flex-col bg-noise">
       {/* Global ambient glow could also go here if needed, but per-slide might be better for variety */}
      {children}
    </div>
  );
};

export default MobileContainer;
