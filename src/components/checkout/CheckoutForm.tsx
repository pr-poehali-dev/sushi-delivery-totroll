
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import DeliveryMethodSelector from "./DeliveryMethodSelector";
import PaymentMethodSelector from "./PaymentMethodSelector";
import { useDeliveryMode } from "@/hooks/use-delivery-mode";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  comment: string;
  paymentMethod: string;
}

interface CheckoutFormProps {
  formData: FormData;
  isSubmitting: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPaymentMethodChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  formData,
  isSubmitting,
  onInputChange,
  onPaymentMethodChange,
  onSubmit
}) => {
  const { isDelivery } = useDeliveryMode();

  return (
    <form onSubmit={onSubmit}>
      <DeliveryMethodSelector />

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Имя*</Label>
            <Input
              id="name"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Телефон*</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={onInputChange}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Ваш email"
            value={formData.email}
            onChange={onInputChange}
          />
        </div>

        {isDelivery && (
          <div>
            <Label htmlFor="address">Адрес доставки*</Label>
            <Input
              id="address"
              name="address"
              placeholder="Улица, дом, квартира"
              value={formData.address}
              onChange={onInputChange}
              required={isDelivery}
            />
          </div>
        )}

        <div>
          <Label htmlFor="comment">Комментарий к заказу</Label>
          <Textarea
            id="comment"
            name="comment"
            placeholder="Особые пожелания, промокод"
            value={formData.comment}
            onChange={onInputChange}
          />
        </div>

        <PaymentMethodSelector 
          value={formData.paymentMethod} 
          onChange={onPaymentMethodChange} 
        />
      </div>

      <Button
        type="submit"
        className="mt-6 w-full bg-[#B255FF] hover:bg-[#B255FF]/80"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
            Оформление...
          </>
        ) : (
          "Оформить заказ"
        )}
      </Button>
    </form>
  );
};

export default CheckoutForm;
