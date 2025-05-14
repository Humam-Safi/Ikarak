import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "", small = false }) => {
  const baseSize = small ? "h-9" : "h-10";
  const baseClass = `${baseSize} ${className}`;

  return (
    <Link to="/" className="flex-shrink-0 group">
      <svg 
        className={baseClass}
        viewBox="0 0 400 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Building/House Icon */}
        <g className="transform group-hover:scale-105 transition-transform duration-300">
          {/* Base Building Shape */}
          <path 
            d="M60 20L20 50V90H100V50L60 20Z" 
            fill="url(#primary-gradient)" 
            className="drop-shadow-md"
          />
          
          {/* Roof Accent */}
          <path 
            d="M60 20L50 27.5V15H70V27.5L60 20Z" 
            fill="url(#secondary-gradient)" 
            className="drop-shadow-sm"
          />
          
          {/* Window */}
          <rect x="40" y="60" width="15" height="15" rx="2" fill="white" fillOpacity="0.9" />
          <rect x="65" y="60" width="15" height="15" rx="2" fill="white" fillOpacity="0.9" />
          
          {/* Door */}
          <rect x="55" y="60" width="10" height="30" rx="2" fill="url(#secondary-gradient)" />
        </g>
        
        {/* Text - عقارات حمصية */}
        <g transform="translate(120, 55)" className="drop-shadow-sm">
          <text 
            fontSize="36" 
            fontWeight="bold" 
            letterSpacing="0.5" 
            fill="url(#text-gradient)"
            className="font-arabic"
          >
            عقارات حمصية
          </text>
          
          {/* Tagline */}
          <text 
            y="25" 
            fontSize="14" 
            fontWeight="medium" 
            letterSpacing="1" 
            fill="#303b4a" 
            fillOpacity="0.9"
            className="font-arabic"
          >
            شريكك الموثوق في مجال العقارات
          </text>
        </g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="primary-gradient" x1="20" y1="20" x2="100" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00afaf" />
            <stop offset="1" stopColor="#006969" />
          </linearGradient>
          
          <linearGradient id="secondary-gradient" x1="50" y1="15" x2="70" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffc933" />
            <stop offset="1" stopColor="#cc9600" />
          </linearGradient>
          
          <linearGradient id="text-gradient" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00afaf" />
            <stop offset="1" stopColor="#006969" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
};

// Simpler variant for mobile/small spaces
export const LogoSymbol = ({ className = "" }) => {
  return (
    <Link to="/" className="flex-shrink-0">
      <svg 
        className={`h-10 ${className}`}
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Building/House Icon */}
        <g>
          {/* Base Building Shape */}
          <path 
            d="M60 20L20 50V90H100V50L60 20Z" 
            fill="url(#primary-gradient-small)" 
            className="drop-shadow-md"
          />
          
          {/* Roof Accent */}
          <path 
            d="M60 20L50 27.5V15H70V27.5L60 20Z" 
            fill="url(#secondary-gradient-small)" 
            className="drop-shadow-sm"
          />
          
          {/* Window */}
          <rect x="40" y="60" width="15" height="15" rx="2" fill="white" fillOpacity="0.9" />
          <rect x="65" y="60" width="15" height="15" rx="2" fill="white" fillOpacity="0.9" />
          
          {/* Door */}
          <rect x="55" y="60" width="10" height="30" rx="2" fill="url(#secondary-gradient-small)" />
        </g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="primary-gradient-small" x1="20" y1="20" x2="100" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00afaf" />
            <stop offset="1" stopColor="#006969" />
          </linearGradient>
          
          <linearGradient id="secondary-gradient-small" x1="50" y1="15" x2="70" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffc933" />
            <stop offset="1" stopColor="#cc9600" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
};

export default Logo; 