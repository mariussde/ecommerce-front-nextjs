"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronUp } from 'lucide-react';
import { useCallback } from 'react';

export default function SortButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
        params.set('sortBy', 'price');
      } else {
        params.delete(name);
        params.delete('sortBy');
      }
      return params.toString();
    },
    [searchParams]
  );

  const currentOrder = searchParams.get('order');
  
  const handleSort = () => {
    let newOrder: string;
    if (!currentOrder || currentOrder === 'desc') {
      newOrder = 'asc';
    } else {
      newOrder = 'desc';
    }
    
    const queryString = createQueryString('order', newOrder);
    router.push(`?${queryString}`, { scroll: false });
  };

  return (
    <button 
      onClick={handleSort}
      className="flex items-center gap-2 text-sm"
    >
      Price
      <ChevronUp 
        className={`w-3 h-3 transition-transform ${
          currentOrder === 'desc' ? 'rotate-180' : ''
        } ${!currentOrder ? 'opacity-50' : ''}`}
      />
    </button>
  );
}