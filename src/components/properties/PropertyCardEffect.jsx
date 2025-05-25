import React from 'react';

const PropertyCardEffect = ({ children }) => {
  return (
    <div className="transform transition-all duration-500 hover:scale-[1.02]">
      {children}
    </div>
  );
};

export default PropertyCardEffect; 