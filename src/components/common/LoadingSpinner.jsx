import React from 'react';
import logo from '/images/8a58f04b-80c2-4a84-a838-98f456a64eb8_removalai_preview.png';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        {/* Logo with transparent background */}
        <div className="relative">
          <img 
            src={logo} 
            alt="Ikarak Logo" 
            className="w-24 h-24 object-contain"
            style={{
              filter: "brightness(0.9) sepia(1) hue-rotate(155deg) saturate(2) contrast(1.2)",
              mixBlendMode: "multiply",
              backgroundColor: "transparent"
            }}
          />
          {/* Removed gold accent effect */}
        </div>
        
        {/* Spinner */}
        <div className="absolute inset-0 border-8 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Inner circle */}
        <div className="absolute inset-0 border-8 border-secondary-500 border-b-transparent rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;