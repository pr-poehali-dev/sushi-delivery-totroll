import React from "react";
import { DeliveryToggle } from "./Header";

interface MobileDeliveryToggleProps {
  isDelivery: boolean;
  setIsDelivery: (value: boolean) => void;
}

const MobileDeliveryToggle: React.FC<MobileDeliveryToggleProps> = ({
  isDelivery,
  setIsDelivery,
}) => {
  return (
    <div className="md:hidden bg-gradient-to-b from-[#B255FF]/10 to-transparent py-2 mb-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <span
            className={`text-sm mr-3 ${!isDelivery ? "font-bold text-black" : "text-black/70"}`}
          >
            Самовывоз
          </span>
          <DeliveryToggle
            isDelivery={isDelivery}
            setIsDelivery={setIsDelivery}
          />
          <span
            className={`text-sm ml-3 ${isDelivery ? "font-bold text-black" : "text-black/70"}`}
          >
            Доставка
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileDeliveryToggle;
