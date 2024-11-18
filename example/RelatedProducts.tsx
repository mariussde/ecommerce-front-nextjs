import React from 'react';

interface ProductProps {
  imageSrc: string;
  category: string;
  name: string;
  price: string;
}

const Product: React.FC<ProductProps> = ({ imageSrc, category, name, price }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow items-start font-bold text-stone-500 max-md:mt-8">
      <img loading="lazy" src={imageSrc} alt={name} className="object-contain self-stretch w-full aspect-[0.8]" />
      <div className="mt-3.5 text-sm">{category}</div>
      <div className="mt-2 text-base text-black">{name}</div>
      <div className="mt-2 text-base">{price}</div>
    </div>
  </div>
);

const RelatedProducts: React.FC = () => {
  const products = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5baddcc6d0bcdbb81a27fece99504fed7bba2644bce3a2790d9748d716e89765?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37", category: "Food", name: "Egg Balloon", price: "$93.89" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb9800e9aae38d38f8735b2fadfc4dc9285d810e880b9db863aab679df03ff55?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37", category: "Food", name: "Egg Balloon", price: "$93.89" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9eab2a06f0525aaae94ef607e2e38f5f1cb3df133a340f9bc9849da3ad720c8?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37", category: "Food", name: "Egg Balloon", price: "$93.89" },
  ];

  return (
    <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10">
        <h3 className="self-end text-2xl font-bold text-right text-black">
          People also buy
        </h3>
        <div className="mt-10">
          <div className="flex gap-5 max-md:flex-col">
            {products.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;