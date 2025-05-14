import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const AnimatedTitle = ({
  text,
  animation = 'fade', // Options: fade, reveal, glow, shimmer, wave, shadow, gradient-shift, char-by-char
  tag = 'h1',
  className = '',
  delay = 0,
  duration = 1,
  color,
  underline = false,
  staggering = 0.03,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true); // Initialize as visible by default
  const [letters, setLetters] = useState([]);
  const titleRef = useRef(null);

  // Animation styles mapping
  const animationStyles = {
    reveal: 'title-revealed',
    glow: 'title-glowing',
    shimmer: 'title-shimmer',
    wave: 'title-wave', 
    shadow: 'title-shadow',
    'gradient-shift': 'title-gradient-shift',
    'char-by-char': '',  // Special case handled differently
  };

  // Split text into individual characters on component mount
  useEffect(() => {
    if (animation === 'char-by-char' || animation === 'wave') {
      setLetters(text.split(''));
    }
  }, [text, animation]);

  // Observe element visibility
  useEffect(() => {
    // Set up intersection observer to trigger animation when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // For the character-by-character animation
  const renderCharByChar = () => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className={`title-revealed char-delay-${Math.min(index + 1, 10)}`}
        style={{
          animationDelay: `${delay + (index * staggering)}s`,
          opacity: '1', // Ensure characters are visible by default
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  // Create dynamic style
  const dynamicStyle = {
    ...(duration && { animationDuration: `${duration}s` }),
    ...(delay && { animationDelay: `${delay}s` }),
    ...(color && { color }),
  };

  // Generate base classes
  const baseClasses = `${animation === 'char-by-char' ? 'title-chars' : 'title-animated'} ${
    underline ? 'title-underline' : ''
  } ${className}`;

  // Generate animation class if not char-by-char
  const animationClass = animation !== 'char-by-char' ? animationStyles[animation] || '' : '';

  // Dynamically create the component based on the tag prop
  const Tag = tag;

  return (
    <Tag 
      ref={titleRef} 
      className={`${baseClasses} ${isVisible ? animationClass : ''}`}
      style={dynamicStyle}
    >
      {animation === 'char-by-char' && text ? (
        renderCharByChar()
      ) : children ? (
        children
      ) : (
        text
      )}
    </Tag>
  );
};

AnimatedTitle.propTypes = {
  text: PropTypes.string,
  animation: PropTypes.oneOf([
    'fade',
    'reveal', 
    'glow', 
    'shimmer', 
    'wave', 
    'shadow', 
    'gradient-shift',
    'char-by-char'
  ]),
  tag: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  color: PropTypes.string,
  underline: PropTypes.bool,
  children: PropTypes.node,
};

export default AnimatedTitle; 