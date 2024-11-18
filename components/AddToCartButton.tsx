"use client";

import { Product } from "@/lib/api";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button 
      onClick={() => addItem(product)}
      className={cn(className)}
    >
      ADD TO CART
    </button>
  );
}