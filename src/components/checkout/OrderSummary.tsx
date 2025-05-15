
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useDeliveryMode } from "@/hooks/use-delivery-mode";

const OrderSummary: React.FC = () => {
  const { items, getTotalItems, getTotalPrice } = useCart();
  const { isDelivery } = useDeliveryMode();
  
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  const deliveryCost = isDelivery && totalPrice < 1000 ? 250 : 0;
  const finalTotal = totalPrice + deliveryCost;

  return (
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
  );
};

export default OrderSummary;
