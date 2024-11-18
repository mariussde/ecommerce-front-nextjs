import { getProducts, getCategories, getFeaturedProduct } from '@/lib/api';
import ProductGrid from '@/components/ProductGrid';
import CategoryFilter from '@/components/CategoryFilter';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import { ShoppingCart } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string; category?: string; sortBy?: string; order?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const [{ data: products, meta }, categories, featuredProduct] = await Promise.all([
    getProducts({ 
      page: currentPage,
      limit: 6,
      category: searchParams.category,
      sortBy: searchParams.sortBy as 'price',
      order: searchParams.order as 'asc' | 'desc'
    }),
    getCategories(),
    getFeaturedProduct()
  ]);

  return (
    <main className="flex flex-col px-6 py-4 bg-white max-w-6xl mx-auto">
      <Header />
      
      {/* Featured Product */}
      <section className="mt-8">
        <div className="flex flex-wrap gap-4 justify-between">
          <h1 className="text-xl font-bold text-black">{featuredProduct.name}</h1>
          <AddToCartButton product={featuredProduct} className="px-6 py-2 text-sm font-medium tracking-wider text-white bg-black hover:bg-black/90" />
        </div>
        
        <div className="relative mt-4 aspect-video w-full">
          <img 
            src={featuredProduct.image_url} 
            alt={featuredProduct.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 px-4 py-2 bg-white text-sm font-bold">
            Photo of the day
          </div>
        </div>

        <div className="mt-6 flex gap-8 max-md:flex-col">
          <div className="w-3/5 max-md:w-full">
            <h2 className="text-lg font-bold">About {featuredProduct.name}</h2>
            <h3 className="mt-2 text-base font-bold text-stone-500">{featuredProduct.categories.name}</h3>
            <p className="mt-3 text-sm leading-6 text-stone-500">
              {featuredProduct.description}
            </p>
          </div>
          
          {featuredProduct.related_products && (
            <div className="w-2/5 max-md:w-full">
              <h3 className="text-lg font-bold text-right">People also buy</h3>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {featuredProduct.related_products.slice(0, 3).map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="relative aspect-square w-full">
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                      <AddToCartButton 
                        product={product}
                        className="absolute bottom-0 left-0 w-full py-2 bg-black text-white text-xs text-center font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="mt-2 text-xs font-bold text-stone-500 block">
                      {product.categories.name}
                    </span>
                    <span className="mt-1 text-sm font-bold text-black block">
                      {product.name}
                    </span>
                    <span className="mt-1 text-xs font-bold text-stone-500">
                      ${product.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <hr className="my-8 border-t-2 border-neutral-200" />

      <section className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-lg">
          <h2 className="font-bold">Photography</h2>
          <span className="text-xl font-semibold">/</span>
          <span className="text-neutral-400">Premium Photos</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-neutral-400">
            <ShoppingCart className="w-4 h-4" />
            <span>Sort By</span>
          </div>
          <button className="flex items-center gap-2">
            Price
            <span className="rotate-180">⌃</span>
          </button>
        </div>
      </section>

      <section className="flex gap-8 max-md:flex-col">
        <CategoryFilter categories={categories} />
        <div className="flex-1 flex flex-col">
          <ProductGrid products={products} />
          <Pagination currentPage={currentPage} totalPages={meta.last_page} />
        </div>
      </section>
    </main>
  );
}