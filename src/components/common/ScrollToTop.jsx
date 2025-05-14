import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setShowLabel(true)}
          onMouseLeave={() => setShowLabel(false)}
          aria-label="العودة إلى الأعلى"
          className="fixed bottom-6 left-6 z-50 bg-primary-700 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 hover:scale-110 group"
        >
          <FaArrowUp className="text-lg" />
          
          {/* Optional: Show tooltip on hover */}
          <span 
            className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded-md shadow-md text-xs font-medium whitespace-nowrap text-primary-700 transition-opacity duration-300 ${
              showLabel ? 'opacity-100' : 'opacity-0'
            }`}
          >
            العودة للأعلى
          </span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 