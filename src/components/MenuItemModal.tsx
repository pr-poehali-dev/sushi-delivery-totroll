
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { formatWeight } from "@/data/utils";

interface MenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    weight?: number;
    spicy?: boolean;
    vegetarian?: boolean;
    tags?: string[];
  } | null;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({
  isOpen,
  onClose,
  item,
}) => {
  const { addToCart } = useCart();

  if (!item) return null;

  const handleAddToCart = () => {
    addToCart(item);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#B255FF]">{item.name}</DialogTitle>
          <div className="flex items-center space-x-2 mt-1">
            {item.spicy && (
              <Badge variant="outline" className="bg-red-50 text-red-500 border-red-300">
                Острое
              </Badge>
            )}
            {item.vegetarian && (
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-300">
                Вегетарианское
              </Badge>
            )}
            {item.weight && (
              <Badge variant="outline" className="bg-gray-50">
                {formatWeight(item.weight)}
              </Badge>
            )}
          </div>
        </DialogHeader>
        <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-md">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <DialogDescription className="text-base text-black">
          {item.description}
        </DialogDescription>
        <DialogFooter className="flex justify-between items-center mt-4">
          <div className="text-xl font-bold text-black">{item.price} ₽</div>
          <Button
            className="bg-[#B255FF] hover:bg-[#B255FF]/80"
            onClick={handleAddToCart}
          >
            В корзину
            <Icon name="ShoppingCart" className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemModal;
