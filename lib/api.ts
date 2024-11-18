import { type ClassValue } from "clsx";

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock_quantity: number;
  is_featured: boolean;
  image_url: string;
  category_id: number;
  created_at: string;
  updated_at: string;
  categories: Category;
  related_products?: Product[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    last_page: number;
    limit: number;
  };
}

const API_URL = 'https://ecommerce-api-0pi3.onrender.com';

export async function getFeaturedProduct() {
  const response = await fetch(`${API_URL}/products?is_featured=true`);
  if (!response.ok) throw new Error('Failed to fetch featured product');
  const data = await response.json() as PaginatedResponse<Product>;
  return data.data[0];
}

export async function getProducts(params: {
  page?: number;
  limit?: number;
  category?: string;
  sortBy?: 'price';
  order?: 'asc' | 'desc';
}) {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) searchParams.append(key, value.toString());
  });
  
  // Ensure we don't get featured products in the main grid
  searchParams.append('is_featured', 'false');

  const response = await fetch(`${API_URL}/products?${searchParams.toString()}`);
  if (!response.ok) throw new Error('Failed to fetch products');
  
  return response.json() as Promise<PaginatedResponse<Product>>;
}

export async function getProductBySlug(slug: string) {
  const response = await fetch(`${API_URL}/products/${slug}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  
  return response.json() as Promise<Product>;
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) throw new Error('Failed to fetch categories');
  
  return response.json() as Promise<Category[]>;
}