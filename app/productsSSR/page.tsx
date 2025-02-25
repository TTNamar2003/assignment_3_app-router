import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.products;
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <ul className="space-y-4">
        {products.slice(0, 10).map((product) => (
          <li
            key={product.id}
            className="border p-5 rounded-lg shadow-md transition-all transform hover:scale-105 hover:bg-gray-100 "
          >
            <h2 className="text-lg font-semibold "
              >{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-bold text-blue-600">${product.price}</p>
            <span className="text-sm bg-gray-200 px-2 py-1 rounded">{product.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
