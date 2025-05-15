
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const EmptyCartMessage: React.FC = () => {
  const navigate = useNavigate();

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
};

export default EmptyCartMessage;
