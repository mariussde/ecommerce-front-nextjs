import React from 'react';
import Header from './Header';
import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';
import CategoryFilter from './CategoryFilter';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';

const ProductPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col px-20 pt-9 pb-16 bg-white max-md:px-5">
      <Header />
      <ProductDetails />
      <section className="flex flex-wrap gap-5 justify-between mt-14 ml-4 w-full max-w-[1266px] max-md:mt-10 max-md:max-w-full">
        <CategoryFilter />
        <div className="flex flex-col max-md:max-w-full">
          <ProductGrid />
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default ProductPage;