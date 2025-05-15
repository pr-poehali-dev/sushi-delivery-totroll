
import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mr-2 shadow-md">
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
