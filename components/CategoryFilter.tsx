"use client";

import { Category } from '@/lib/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface CategoryFilterProps {
  categories: Category[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const currentCategory = searchParams.get('category');

  const handleCategoryChange = (slug: string) => {
    const newCategory = currentCategory === slug ? '' : slug;
    const queryString = createQueryString('category', newCategory);
    router.push(`?${queryString}`, { 
      scroll: false 
    });
  };

  return (
    <aside className="flex flex-col items-start self-start mt-1 text-base">
      <h2 className="font-bold text-black">Category</h2>
      {categories.map((category) => (
        <label
          key={category.id}
          className="flex gap-3 mt-4 items-center cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={category.slug === currentCategory}
              onChange={() => handleCategoryChange(category.slug)}
              className="peer sr-only"
            />
            <div className="h-4 w-4 shrink-0 border-2 border-black peer-checked:bg-black peer-checked:border-black transition-colors" />
          </div>
          <span>{category.name}</span>
        </label>
      ))}
    </aside>
  );
}