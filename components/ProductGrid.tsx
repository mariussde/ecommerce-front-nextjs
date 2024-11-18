"use client";

import { Product } from '@/lib/api';
import AddToCartButton from './AddToCartButton';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="flex-1 grid grid-cols-3 gap-4 max-md:grid-cols-1">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="relative aspect-square w-full">
            <img
              src={product.image_url}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            <AddToCartButton 
              product={product}
              className="absolute bottom-0 left-0 w-full py-2 bg-black text-white text-sm text-center font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {product.stock_quantity === 0 && (
              <div className="absolute top-0 right-0 bg-white px-2 py-1 text-sm">
                Sold out
              </div>
            )}
          </div>
          <div className="mt-2">
            <span className="text-sm font-bold text-stone-500">
              {product.categories.name}
            </span>
            <h3 className="mt-1 text-base font-bold text-black">
              {product.name}
            </h3>
            <span className="mt-1 text-sm font-bold text-stone-500">
              ${product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}