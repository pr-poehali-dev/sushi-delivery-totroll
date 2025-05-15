
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { useCart } from "@/hooks/use-cart";
import { useDeliveryMode } from "@/hooks/use-delivery-mode";
import { Separator } from "@/components/ui/separator";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalItems, getTotalPrice, clearCart } = useCart();
  const { isDelivery, setIsDelivery } = useDeliveryMode();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
    paymentMethod: "card",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  const deliveryCost = isDelivery && totalPrice < 1000 ? 250 : 0;
  const finalTotal = totalPrice + deliveryCost;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Оформление заказа</h1>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center">
            <Icon name="ShoppingCart" className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-xl mb-4">Ваша корзина пуста</p>
            <Button onClick={() => navigate("/")} className="bg-[#B255FF] hover:bg-[#B255FF]/80">
              Вернуться к меню
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Оформление заказа</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Способ получения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
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
                <div className="mb-4">
                  <p className="font-medium">Адрес самовывоза:</p>
                  <p>г. Москва, ул. Суши, д. 42</p>
                  <p className="text-sm text-gray-500">Ежедневно: 10:00 - 23:00</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя*</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label>Способ оплаты</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={handlePaymentMethodChange}
                      className="flex flex-col space-y-2 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="cursor-pointer">
                          Банковской картой онлайн
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="cursor-pointer">
                          Наличными при получении
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
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
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Ваш заказ</CardTitle>
              <CardDescription>
                {totalItems} {totalItems === 1 ? "товар" : totalItems < 5 ? "товара" : "товаров"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-500 mx-1">×</span>
                      <span>{item.quantity}</span>
                    </div>
                    <span>{item.price * item.quantity} ₽</span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Сумма заказа</span>
                  <span>{totalPrice} ₽</span>
                </div>
                {isDelivery && (
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span>
                      {deliveryCost === 0 ? "Бесплатно" : `${deliveryCost} ₽`}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <span className="font-bold">Итого:</span>
              <span className="font-bold text-xl">{finalTotal} ₽</span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
