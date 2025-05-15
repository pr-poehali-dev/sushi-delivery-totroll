import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

interface CartProps {
  isMobile?: boolean;
  iconColor?: string;
}

const Cart: React.FC<CartProps> = ({
  isMobile = false,
  iconColor = "#B255FF",
}) => {
  // В реальном приложении здесь будет стейт для товаров, общей суммы и т.д.
  const [cartItems, setCartItems] = React.useState<any[]>([]);
  const cartCount = cartItems.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={isMobile ? "ghost" : "outline"}
          size={isMobile ? "sm" : "default"}
          className={`relative h-10 w-10 p-0 text-${iconColor === "black" ? "black" : "[#B255FF]"}`}
        >
          <Icon name="ShoppingCart" className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-96 p-4">
        <SheetHeader>
          <SheetTitle className="text-[#B255FF]">Ваш заказ</SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Icon
              name="ShoppingCart"
              className="h-16 w-16 text-gray-300 mb-4"
            />
            <p className="text-gray-500">Ваша корзина пуста</p>
            <p className="text-gray-400 text-sm mt-2">
              Добавьте что-нибудь вкусненькое
            </p>
          </div>
        ) : (
          <div className="mt-6">
            {/* Здесь будет список товаров в корзине */}
          </div>
        )}

        <SheetFooter className="mt-6">
          <Button
            disabled={cartItems.length === 0}
            className="w-full bg-[#B255FF] hover:bg-[#B255FF]/80"
          >
            Оформить заказ
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
