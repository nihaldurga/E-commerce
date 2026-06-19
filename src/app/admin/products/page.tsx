"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();

      setProducts(data);
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product: any) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (category === "" ||
        product.category === category)
  );

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <input
          placeholder="Search products..."
          className="border p-3 rounded-lg"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="border p-3 rounded-lg"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="">
            All Categories
          </option>

          <option value="Paints">
            Paints
          </option>

          <option value="Cement">
            Cement
          </option>

          <option value="Steel">
            Steel
          </option>

          <option value="Tiles">
            Tiles
          </option>

          <option value="Plumbing">
            Plumbing
          </option>

          <option value="Electrical">
            Electrical
          </option>

          <option value="Hardware">
            Hardware
          </option>
        </select>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {filteredProducts.map(
          (product: any) => (
            <Link
              key={product._id}
              href={`/products/${product._id}`}
            >
              <div
                className="
                  bg-white
                  rounded-xl
                  shadow-lg
                  p-6
                  hover:shadow-2xl
                  transition
                  cursor-pointer
                "
              >
                <span
                  className="
                    bg-orange-100
                    text-orange-600
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  {product.category}
                </span>

                <h2 className="text-2xl font-bold mt-4">
                  {product.name}
                </h2>

                <p className="text-gray-500">
                  {product.brand}
                </p>

                <p
                  className="
                    text-orange-600
                    text-2xl
                    font-bold
                    mt-4
                  "
                >
                  ₹{product.price}
                </p>

                <p>
                  Stock:
                  {product.stock}
                </p>
              </div>
            </Link>
          )
        )}

      </div>

    </div>
  );
}