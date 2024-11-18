"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    router.push(createPageURL(page), {
      scroll: false
    });
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`text-base ${
            i === currentPage ? 'font-semibold text-black' : 'text-zinc-400'
          }`}
          aria-label={`Page ${i}`}
          aria-current={i === currentPage ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <nav className="self-center mt-8 w-full max-w-md" aria-label="Pagination">
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="disabled:opacity-50"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-3 h-3" />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="disabled:opacity-50"
          aria-label="Next page"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </nav>
  );
}