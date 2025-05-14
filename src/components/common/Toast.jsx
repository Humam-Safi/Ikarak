import React, { useEffect } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ type = 'info', message, duration = 5000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  // Icon mapping based on toast type
  const icons = {
    success: <FaCheckCircle className="text-green-500 text-xl ml-3" />,
    error: <FaExclamationTriangle className="text-red-500 text-xl ml-3" />,
    warning: <FaExclamationTriangle className="text-yellow-500 text-xl ml-3" />,
    info: <FaInfoCircle className="text-primary-500 text-xl ml-3" />,
  };

  // Background styles based on toast type
  const backgrounds = {
    success: 'bg-green-50 border-r-4 border-green-500',
    error: 'bg-red-50 border-r-4 border-red-500',
    warning: 'bg-yellow-50 border-r-4 border-yellow-500',
    info: 'bg-primary-50 border-r-4 border-primary-500',
  };

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
      <div className={`flex items-center justify-between p-4 rounded-lg shadow-lg ${backgrounds[type]}`}>
        <div className="flex items-center">
          {icons[type]}
          <p className="text-grey-800">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-grey-500 hover:text-grey-700 transition-colors"
          aria-label="Close notification"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Toast; 