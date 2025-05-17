
import React from "react";
import { useDeliveryMode } from "@/hooks/use-delivery-mode";

const DeliveryMethodSelector: React.FC = () => {
  const { isDelivery, setIsDelivery } = useDeliveryMode();
  
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${
            !isDelivery
              ? "bg-[#B255FF] text-white"
              : "bg-gray-100 text-black"
          }`}
          onClick={() => setIsDelivery(false)}
        >
          Самовывоз
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            isDelivery
              ? "bg-[#B255FF] text-white"
              : "bg-gray-100 text-black"
          }`}
          onClick={() => setIsDelivery(true)}
        >
          Доставка
        </button>
      </div>

      {!isDelivery && (
        <div className="mt-4">
          <p className="font-medium">Адрес самовывоза:</p>
          <p>г. Москва, ул. Суши, д. 42</p>
          <p className="text-sm text-gray-500">Ежедневно: 10:00 - 23:00</p>
        </div>
      )}
    </div>
  );
};

export default DeliveryMethodSelector;
