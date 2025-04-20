import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className="relative w-10 h-10">
        {/* House shape */}
        <div className="absolute inset-0 bg-blue-600 rounded-t-lg"></div>
        {/* Roof */}
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
          border-l-[12px] border-l-transparent
          border-b-[12px] border-b-blue-600
          border-r-[12px] border-r-transparent"
        ></div>
        {/* Door */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-6 bg-white rounded-t-sm"></div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-blue-600 font-arabic">
          عقارك حمص
        </span>
        <span className="text-xs text-gray-600">Real Estate</span>
      </div>
    </div>
  );
};

export default Logo;
