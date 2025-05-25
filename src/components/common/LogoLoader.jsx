import React from 'react';
import { motion } from 'framer-motion';

const LogoLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-auto"
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-full h-full"
          style={{
            filter: "brightness(0.9) sepia(1) hue-rotate(155deg) saturate(2) contrast(1.2)",
            mixBlendMode: "multiply",
            backgroundColor: "transparent"
          }}
        />
      </motion.div>
    </div>
  );
};

export default LogoLoader; 