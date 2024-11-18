import React from 'react';

interface ProductDisplayProps {
  title: string;
  price: number;
  imageUrl: string;
}

const Cart: React.FC<ProductDisplayProps> = ({ title, price, imageUrl }) => {
  return (
    <article className="flex flex-col px-7 py-6 mx-auto w-full bg-white border-4 border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
      <header className="flex gap-5 justify-between">
        <div className="flex flex-col self-end mt-14 max-md:mt-10">
          <h1 className="text-xl font-bold text-black">{title}</h1>
          <div className="self-start mt-3.5 text-3xl text-stone-500">
            ${price.toFixed(2)}
          </div>
        </div>
        <div className="flex flex-col">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fafbf0c072d9060a11478d4c1b4f17cd0c8960eb14273a8c0e68afc007982a8?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" 
            alt="" 
            className="object-contain self-end aspect-square w-[18px] max-md:mr-1" 
          />
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/940e93358eb70d0faf8ba4157f5b8dcac367f178c40d98d912c9e377396dd4c8?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" 
            alt="" 
            className="object-contain mt-7 aspect-[1.73] w-[149px]" 
          />
        </div>
      </header>
      <img 
        loading="lazy" 
        src={imageUrl} 
        alt="Product" 
        className="object-contain mt-6 w-full aspect-[333.33] max-md:mr-1"
      />
      <button className="px-16 pt-4 pb-6 mt-6 text-2xl font-medium tracking-widest text-center text-black whitespace-nowrap bg-white border-black border-solid border-[3px] max-md:px-5">
        CLEAR
      </button>
    </article>
  );
};

export default Cart;