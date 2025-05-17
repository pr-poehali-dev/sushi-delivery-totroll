import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "../ui/icon";

interface DeliveryMethodSelectorProps {
  value: string;
  onSelect: (value: string) => void;
}

const DeliveryMethodSelector: React.FC<DeliveryMethodSelectorProps> = ({
  value,
  onSelect,
}) => {
  const deliveryMethods = [
    {
      id: "delivery",
      name: "Доставка",
      description:
        "Бесплатно от 1100₽ в Лазаревском, в соседние населенные пункты по тарифу такси",
      icon: "Truck",
    },
    {
      id: "pickup",
      name: "Самовывоз",
      description: "п. Лазаревское, ул. Лазарева 17Б",
      icon: "Store",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <h3 className="text-lg font-medium">Способ получения</h3>
      </div>

      <RadioGroup
        value={value}
        onValueChange={onSelect}
        className="grid gap-3 pt-2"
      >
        {deliveryMethods.map((method) => (
          <div
            key={method.id}
            className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-muted/50 ${
              value === method.id ? "border-[#B255FF] bg-[#B255FF]/5" : ""
            }`}
            onClick={() => onSelect(method.id)}
          >
            <RadioGroupItem value={method.id} id={method.id} />
            <Icon name={method.icon} className="h-5 w-5 text-[#B255FF]" />
            <div className="flex-1">
              <Label htmlFor={method.id} className="cursor-pointer font-medium">
                {method.name}
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                {method.description}
              </p>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default DeliveryMethodSelector;
