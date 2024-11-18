"use client";

import Link from 'next/link';
import CartPopover from './CartPopover';

export default function Header() {
  return (
    <header className="w-full py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          BEJAMAS_
        </Link>
        <CartPopover />
      </div>
      <div className="mt-4 h-px w-full bg-neutral-200" />
    </header>
  );
}