import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <div style={{
      display:"none"
    }}>
      <a
        href="https://wa.me/00963967517652"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute -top-10 right-0 bg-white px-4 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-green-600">
          تواصل معنا على واتساب
        </div>
        <FaWhatsapp className="text-2xl animate-bounce-slow" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp; 