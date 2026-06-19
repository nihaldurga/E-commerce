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

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      setProducts((prev) =>
        prev.filter((p) => p._id !== id)
      );

      alert("Product Deleted");
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (category === "" ||
        product.category === category)
  );

  const categories = [
    "Paints",
    "Cement",
    "Plumbing",
    "Electrical",
    "Hardware",
    "Sanitary",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-10">
          Manage Products
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <input
            placeholder="Search products..."
            className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-xl
              p-4
              text-white
            "
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("")}
              className={`px-4 py-2 rounded-full border ${
                category === ""
                  ? "bg-orange-500 border-orange-500"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setCategory(cat)
                }
                className={`px-4 py-2 rounded-full border ${
                  category === cat
                    ? "bg-orange-500 border-orange-500"
                    : "bg-zinc-900 border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredProducts.map(
            (product) => (
              <div
                key={product._id}
                className="
                  bg-zinc-950
                  border
                  border-zinc-800
                  rounded-3xl
                  p-6
                "
              >
                <span
                  className="
                    bg-orange-500/10
                    text-orange-400
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

                <p className="text-zinc-400 mt-2">
                  {product.brand}
                </p>

                <p className="text-3xl font-bold text-white mt-4">
                  ₹{product.price}
                </p>

                <p className="text-zinc-500 mt-2">
                  Stock: {product.stock}
                </p>

                <div className="flex gap-2 mt-6">
                  <Link
                    href={`/admin/edit/${product._id}`}
                    className="
                      flex-1
                      text-center
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      py-3
                      rounded-xl
                    "
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteProduct(product._id)
                    }
                    className="
                      flex-1
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      py-3
                      rounded-xl
                    "
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}