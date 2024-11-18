import React from 'react';

interface ProductItemProps {
  category: string;
  name: string;
  price: string;
  imageSrc?: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ category, name, price, imageSrc }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow items-start font-bold text-stone-500 max-md:mt-10">
      {imageSrc ? (
        <div className="flex relative flex-col self-stretch w-full text-2xl font-medium tracking-widest text-center text-white aspect-[0.707]">
          <img loading="lazy" src={imageSrc} alt={name} className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col pt-96 w-full aspect-[0.707] max-md:pt-24">
            <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
            <button className="relative px-14 py-3 bg-black max-md:px-5">
              ADD TO CART
            </button>
          </div>
        </div>
      ) : (
        <div className="flex shrink-0 self-stretch h-[399px]" />
      )}
      <div className="mt-3 text-2xl">{category}</div>
      <div className="mt-3 text-4xl text-black">{name}</div>
      <div className="mt-3.5 text-3xl">{price}</div>
    </div>
  </div>
);

const ProductGrid: React.FC = () => {
  const products = [
    { category: "People", name: "Red Bench", price: "$3.89" },
    { category: "Food", name: "Egg Balloon", price: "$93.89", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fe5e53ee16b9162570381afde0d23ecd2d0d54a96164df22bd79d18474e14e8?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" },
    { category: "Food", name: "Egg Balloon", price: "$93.89", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fe5e53ee16b9162570381afde0d23ecd2d0d54a96164df22bd79d18474e14e8?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" },
    { category: "People", name: "Man", price: "", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a78ffb10be40736777bc1bba776ada560aa3231a3aa8f885e7b2f8cf92a3855?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" },
    { category: "Landmarks", name: "Architecture", price: "" },
    { category: "Landmarks", name: "Architecture", price: "" },
  ];

  return (
    <div className="max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;