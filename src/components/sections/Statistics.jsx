import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaUsers, FaHandshake, FaStar } from 'react-icons/fa';
import AnimatedSection from '../common/AnimatedSection';
import AnimatedTitle from '../common/AnimatedTitle';

const StatItem = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 50;
      const stepValue = value / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += 1;
        setCount(Math.min(Math.round(stepValue * current), value));
        if (current >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div ref={counterRef} className="text-center p-6">
      <div className="flex justify-center mb-4">
        {React.cloneElement(icon, {
          className: "text-4xl text-primary-700 animate-bounce-slow"
        })}
      </div>
      <div className="text-3xl font-bold text-primary-700 mb-2">{count}+</div>
      <div className="text-grey-700">{label}</div>
    </div>
  );
};

const Statistics = () => {
  const stats = [
    { icon: <FaHome />, value: 500, label: "عقار متاح" },
    { icon: <FaUsers />, value: 1000, label: "عميل سعيد" },
    { icon: <FaHandshake />, value: 300, label: "صفقة ناجحة" },
    { icon: <FaStar />, value: 50, label: "وكيل عقاري" },
  ];

  return (
    <AnimatedSection animation="fade-in-up">
      <section className="py-16 bg-grey-50">
        <div className="container mx-auto px-4">
          <AnimatedTitle
            text="إحصائياتنا"
            tag="h2"
            animation="shimmer"
            className="text-4xl font-bold text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Statistics; 