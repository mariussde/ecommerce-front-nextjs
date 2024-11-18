import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex flex-wrap gap-10 self-start ml-3 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25b1d1694324d2540cfd646cba891d17996a2507062d5534f2ca93999c39d7f7?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" alt="Company logo" className="object-contain shrink-0 self-end mt-6 max-w-full aspect-[6.21] w-[124px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2f421e0b3a79380eff318cb5fe72cd3afbdd74ea622ecba5eea6921ad76265?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" alt="Shopping cart icon" className="object-contain shrink-0 aspect-square w-[54px]" />
      </div>
      <div className="shrink-0 mt-7 ml-2.5 max-w-full h-1 border-4 border-solid border-neutral-200 w-[1281px]" />
    </header>
  );
};

export default Header;