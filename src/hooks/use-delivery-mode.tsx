
import React, { createContext, useContext, useState, useEffect } from "react";

type DeliveryMode = "delivery" | "pickup";

interface DeliveryModeContextType {
  mode: DeliveryMode;
  setMode: (mode: DeliveryMode) => void;
  isDelivery: boolean;
  setIsDelivery: (isDelivery: boolean) => void;
}

const DeliveryModeContext = createContext<DeliveryModeContextType | undefined>(undefined);

export const DeliveryModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Инициализируем состояние из localStorage или по умолчанию
  const [mode, setModeInternal] = useState<DeliveryMode>(() => {
    const savedMode = localStorage.getItem("deliveryMode");
    return (savedMode === "pickup" ? "pickup" : "delivery") as DeliveryMode;
  });

  // Обновляем localStorage при изменении режима
  useEffect(() => {
    localStorage.setItem("deliveryMode", mode);
  }, [mode]);

  // Функция для установки режима
  const setMode = (newMode: DeliveryMode) => {
    setModeInternal(newMode);
  };

  // Вспомогательные функции для работы с булевым значением
  const isDelivery = mode === "delivery";
  const setIsDelivery = (value: boolean) => {
    setMode(value ? "delivery" : "pickup");
  };

  return (
    <DeliveryModeContext.Provider value={{ mode, setMode, isDelivery, setIsDelivery }}>
      {children}
    </DeliveryModeContext.Provider>
  );
};

export const useDeliveryMode = () => {
  const context = useContext(DeliveryModeContext);
  if (context === undefined) {
    throw new Error("useDeliveryMode must be used within a DeliveryModeProvider");
  }
  return context;
};
