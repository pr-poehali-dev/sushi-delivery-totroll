
import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-9 h-10 relative">
        {/* Основная форма капли-геолокации */}
        <div className="absolute inset-0 bg-white rounded-t-full rounded-b-lg transform rotate-45 origin-bottom"></div>
        
        {/* Рис (основа суши) */}
        <div className="absolute inset-0 bg-white rounded-t-full rounded-b-lg transform rotate-45 origin-bottom scale-[0.92]"></div>
        
        {/* Нори (лист водоросли) */}
        <div className="absolute inset-x-0 top-0 bottom-1/2 bg-black rounded-t-full transform rotate-45 origin-bottom scale-[0.92] opacity-90"></div>
        
        {/* Розовый лосось */}
        <div className="absolute inset-x-[15%] top-[10%] bottom-[55%] bg-red-300 rounded-t-full transform rotate-45 origin-bottom scale-[0.92]"></div>
        
        {/* Белая полоска сливочного сыра */}
        <div className="absolute inset-x-[20%] top-[30%] h-[8%] bg-white rounded-sm transform rotate-45 origin-bottom"></div>
        
        {/* Авокадо */}
        <div className="absolute inset-x-[15%] top-[38%] h-[8%] bg-green-400 rounded-sm transform rotate-45 origin-bottom"></div>
        
        {/* Блики */}
        <div className="absolute left-1 top-1 w-1.5 h-2.5 bg-white opacity-50 rounded-full"></div>
        
        {/* Чёрные точки (кунжут) */}
        <div className="absolute top-[15%] left-[35%] w-1 h-0.5 bg-black rounded-full transform rotate-45"></div>
        <div className="absolute top-[20%] left-[50%] w-1 h-0.5 bg-black rounded-full transform rotate-45"></div>
        <div className="absolute top-[25%] left-[30%] w-1 h-0.5 bg-black rounded-full transform rotate-20"></div>
        <div className="absolute top-[18%] left-[55%] w-0.5 h-0.5 bg-black rounded-full"></div>
        <div className="absolute top-[24%] left-[45%] w-0.5 h-0.5 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Logo;
