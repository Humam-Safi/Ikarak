import React, { useState } from 'react';

const PropertyCardEffect = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Calculate the 3D transform effect based on mouse position
  const calculateTransform = () => {
    if (!isHovering) return 'rotateX(0) rotateY(0)';

    const element = document.getElementById('card-container');
    if (!element) return 'rotateX(0) rotateY(0)';

    const rect = element.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate the rotation angle (reduced intensity for subtle effect)
    const rotateY = ((mousePosition.x - centerX) / centerX) * 2; // Max 2 degrees
    const rotateX = ((centerY - mousePosition.y) / centerY) * 2; // Max 2 degrees

    return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Calculate highlight effect based on mouse position
  const calculateHighlight = () => {
    if (!isHovering) return {};

    const element = document.getElementById('card-container');
    if (!element) return {};

    const rect = element.getBoundingClientRect();
    const x = (mousePosition.x / rect.width) * 100;
    const y = (mousePosition.y / rect.height) * 100;

    return {
      background: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)`,
    };
  };

  return (
    <div
      id="card-container"
      className="property-card-effect transform transition-transform duration-300 relative"
      style={{
        transformStyle: 'preserve-3d',
        transform: calculateTransform(),
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Highlight effect overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-xl"
        style={{
          ...calculateHighlight(),
          opacity: isHovering ? 1 : 0,
          zIndex: 2,
        }}
      />
      
      {/* Shadow effect */}
      <div
        className="absolute inset-0 rounded-xl transition-all duration-300"
        style={{
          boxShadow: isHovering 
            ? '0 20px 40px rgba(0,0,0,0.2), 0 15px 20px rgba(0,0,0,0.1)' 
            : '0 5px 15px rgba(0,0,0,0.1)',
          opacity: 0.8,
          transform: isHovering ? 'translateY(10px) scale(0.98)' : 'translateY(0) scale(0.98)',
          zIndex: 0,
        }}
      />
      
      {/* Card content */}
      <div 
        className="relative z-1"
        style={{ 
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PropertyCardEffect; 