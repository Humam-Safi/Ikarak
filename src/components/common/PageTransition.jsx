import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isExiting, setIsExiting] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(children);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (children !== currentChildren) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setCurrentChildren(children);
        setIsExiting(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [location, children]);

  return (
    <div
      className={`
        will-change-transform
        ${isExiting 
          ? 'animate-page-exit' 
          : 'animate-page-enter'
        }
      `}
      style={{ 
        minHeight: '50vh',
        opacity: isExiting ? 0.5 : 1
      }}
    >
      {currentChildren}
    </div>
  );
};

export default PageTransition; 