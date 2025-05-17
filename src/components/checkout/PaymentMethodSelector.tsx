import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "../ui/icon";

interface PaymentMethodSelectorProps {
  value: string;
  onSelect: (value: string) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  value,
  onSelect,
}) => {
  const paymentMethods = [
    {
      id: "cash",
      name: "Наличными курьеру",
      icon: "Banknote",
    },
    {
      id: "card",
      name: "Картой курьеру",
      icon: "CreditCard",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <h3 className="text-lg font-medium">Способ оплаты</h3>
      </div>

      <RadioGroup
        value={value}
        onValueChange={onSelect}
        className="grid gap-3 pt-2"
      >
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-muted/50 ${
              value === method.id ? "border-[#B255FF] bg-[#B255FF]/5" : ""
            }`}
            onClick={() => onSelect(method.id)}
          >
            <RadioGroupItem value={method.id} id={method.id} />
            <Icon name={method.icon} className="h-5 w-5 text-[#B255FF]" />
            <Label
              htmlFor={method.id}
              className="flex-1 cursor-pointer font-normal"
            >
              {method.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PaymentMethodSelector;
