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
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import { Separator } from "@/components/ui/separator";

interface CartProps {
  isMobile?: boolean;
  iconColor?: string;
  onCheckout?: () => void;
}

const Cart: React.FC<CartProps> = ({
  isMobile = false,
  iconColor = "#B255FF",
  onCheckout,
}) => {
  const navigate = useNavigate();
  const {
    items,
    getTotalItems,
    getTotalPrice,
    removeFromCart,
    updateQuantity,
  } = useCart();
  const cartCount = getTotalItems();
  const cartTotal = getTotalPrice();

  // Локальное состояние для управления открытием/закрытием корзины
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCheckout = () => {
    setIsOpen(false); // Закрываем корзину
    if (onCheckout) {
      onCheckout();
    } else {
      navigate("/checkout");
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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

        {items.length === 0 ? (
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
          <div className="mt-6 flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="h-16 w-16 rounded overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.price} ₽</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 w-7 p-0"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Icon name="Minus" className="h-3 w-3" />
                  </Button>
                  <span className="w-5 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 w-7 p-0"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Icon name="Plus" className="h-3 w-3" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0 text-gray-400"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Icon name="Trash2" className="h-4 w-4" />
                </Button>
              </div>
            ))}

            <Separator className="my-2" />

            <div className="flex justify-between items-center">
              <span className="font-medium">Итого:</span>
              <span className="font-bold text-lg">{cartTotal} ₽</span>
            </div>
          </div>
        )}

        <SheetFooter className="mt-6">
          <Button
            disabled={items.length === 0}
            className="w-full bg-[#B255FF] hover:bg-[#B255FF]/80"
            onClick={handleCheckout}
          >
            Оформить заказ
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
