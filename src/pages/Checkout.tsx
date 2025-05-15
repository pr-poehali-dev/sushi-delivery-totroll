import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import EmptyCartMessage from "@/components/checkout/EmptyCartMessage";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import Icon from "@/components/ui/icon";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
    paymentMethod: "card",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Если корзина пуста, показываем сообщение
  if (items.length === 0) {
    return <EmptyCartMessage />;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки заказа
    setTimeout(() => {
      alert("Заказ успешно оформлен!");
      clearCart();
      navigate("/");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Оформление заказа</h1>
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <Icon name="ArrowLeft" className="h-4 w-4" />
          <span>Назад в меню</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <CheckoutForm
              formData={formData}
              isSubmitting={isSubmitting}
              onInputChange={handleInputChange}
              onPaymentMethodChange={handlePaymentMethodChange}
              onSubmit={handleSubmit}
            />
          </Card>
        </div>

        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
