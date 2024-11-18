import React from 'react';
import RelatedProducts from './RelatedProducts'

const ProductDetails: React.FC = () => {
  return (
    <section>
      <div className="flex flex-wrap gap-5 justify-between mt-14 max-md:mt-10 max-md:max-w-full">
        <h1 className="self-start text-3xl font-bold text-black">
          Samurai King Resting
        </h1>
        <button className="px-10 py-4 text-2xl font-medium tracking-widest text-white bg-black max-md:px-5">
          ADD TO CART
        </button>
      </div>
      <div className="flex relative flex-col items-start mt-7 max-w-full text-xl font-bold text-black min-h-[553px] pt-[486px] w-[1290px] max-md:pt-24 max-md:pr-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/63c22a61e85c8cccde3c5429d01973b48072e5632dcab192901ce87d4ef16fd3?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" alt="Samurai King Resting" className="object-cover absolute inset-0 size-full" />
        <div className="relative px-14 py-6 bg-white max-md:px-5">
          Photo of the day
        </div>
      </div>
      <div className="mt-11 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start mt-1 text-2xl font-bold text-stone-500 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-black">About the Samurai King Resting</h2>
              <h3 className="mt-5">Pets</h3>
              <p className="self-stretch mt-6 text-lg leading-7 max-md:max-w-full">
                So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder
                <br />
                <br />
                text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
              </p>
            </div>
          </div>
          <RelatedProducts />
        </div>
      </div>
      <div className="shrink-0 mt-32 max-w-full h-1 border-4 border-solid border-neutral-200 w-[1281px] max-md:mt-10" />
      <div className="flex flex-wrap gap-5 justify-between mt-16 ml-4 w-full max-w-[1267px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2.5 text-3xl text-black">
          <h2 className="grow font-bold">Photography</h2>
          <span className="text-4xl font-semibold">/ </span>
          <span className="basis-auto text-neutral-400">Premium Photos</span>
        </div>
        <div className="flex gap-4 self-start text-2xl">
          <div className="flex gap-2 text-neutral-400">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3db84678cda73a297fbb3863ceb024f649dfe1089b5e9f82a6d9a44377d2a95?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" alt="" className="object-contain shrink-0 my-auto aspect-square w-[15px]" />
            <span>Sort By</span>
          </div>
          <div className="flex gap-3 text-black whitespace-nowrap">
            <span>Price</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13aaf9d260d27f7f1c32e195f5bbca8433e117a8ec1bfa01c5ac86f9ee693d74?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" alt="" className="object-contain shrink-0 my-auto aspect-[1.64] w-[18px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;