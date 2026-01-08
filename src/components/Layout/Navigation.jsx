import React from 'react';

const Navigation = ({ onNext, onPrev }) => {
  return (
    <>
      {/* Left Tap Area - Previous */}
      <div 
        className="absolute top-0 left-0 w-1/3 h-[85%] z-40"
        onClick={onPrev}
      />
      
      {/* Right Tap Area - Next */}
      <div 
        className="absolute top-0 right-0 w-2/3 h-[85%] z-40"
        onClick={onNext}
      />
    </>
  );
};

export default Navigation;
