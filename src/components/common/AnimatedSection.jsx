import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = '',
  once = true,
  animateChildren = false,
  childrenDelay = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [threshold, once]);

  const getAnimationStyle = () => {
    const baseStyle = {
      transition: `all ${duration}s ease-out ${delay}s`,
    };

    switch (animation) {
      case 'fade':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
        };
      case 'slide-up':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        };
      case 'slide-down':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
        };
      case 'slide-left':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
        };
      case 'slide-right':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
        };
      case 'zoom-in':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        };
      case 'zoom-out':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(1.2)',
        };
      case 'flip-x':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'rotateX(0)' : 'rotateX(90deg)',
        };
      case 'flip-y':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'rotateY(0)' : 'rotateY(90deg)',
        };
      default:
        return baseStyle;
    }
  };

  // If animateChildren is true, add staggered animations to child elements
  if (animateChildren && React.Children.count(children) > 0) {
    return (
      <div
        ref={sectionRef}
        className={`animated-section ${className}`}
        style={{ opacity: 1 }}
      >
        {React.Children.map(children, (child, index) => {
          const childStyle = {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `all ${duration}s ease-out ${delay + index * childrenDelay}s`,
          };

          return React.cloneElement(child, {
            style: {
              ...child.props.style,
              ...childStyle,
            },
          });
        })}
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className={`animated-section ${className}`}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 