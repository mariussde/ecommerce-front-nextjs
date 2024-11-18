"use client";

import { useCart } from '@/hooks/useCart';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingCart } from 'lucide-react';

export default function CartPopover() {
  const { items, clearCart } = useCart();
  const totalItems = items.length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-1 relative">
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 mr-4" align="end">
        {items.length > 0 ? (
          <>
            <div className="space-y-4 max-h-96 overflow-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-bold">{item.product.name}</h3>
                    <p className="text-sm text-stone-500">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => clearCart()}
              className="w-full mt-4 px-4 py-2 text-sm font-medium tracking-wider text-black border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              CLEAR
            </button>
          </>
        ) : (
          <div className="text-center py-4 text-stone-500">
            Your cart is empty
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}