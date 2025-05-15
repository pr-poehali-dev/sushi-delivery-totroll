
import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-10 h-11 relative">
        {/* Геолокационная метка (капля) */}
        <div className="absolute inset-0 bg-red-600 rounded-t-full rounded-b-lg transform rotate-45 origin-bottom"></div>
        <div className="absolute inset-0 bg-red-500 rounded-t-full rounded-b-lg transform rotate-45 origin-bottom scale-[0.85]"></div>
        
        {/* Светлая полоса слева */}
        <div className="absolute left-1 top-1 bottom-1 w-1.5 bg-white opacity-40 rounded-full"></div>
        
        {/* Чёрная тень справа */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-black opacity-40 rounded-r-full"></div>
        
        {/* Суши в центре */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] w-6 h-3 bg-white rounded-sm flex items-center justify-center">
          <div className="w-5 h-2 bg-gray-100 rounded-sm flex items-center justify-center">
            <div className="w-4 h-1 flex">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-0.5 h-1 bg-black mx-[1px]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
