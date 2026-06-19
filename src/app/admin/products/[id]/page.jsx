"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `/api/products/${params.id}`
        );

        const data = await res.json();

        if (!data) {
          alert("Product not found");
          return;
        }

        setForm({
          name: data.name || "",
          category: data.category || "",
          brand: data.brand || "",
          price: data.price || "",
          stock: data.stock || "",
          description: data.description || "",
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `/api/products/${params.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (res.ok) {
      alert("Product Updated");
      router.push("/admin/products");
    } else {
      alert("Failed to update product");
    }
  };

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
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12">
          Edit Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            name="name"
            value={form.name}
            placeholder="Product Name"
            onChange={handleChange}
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-800
              rounded-xl
              p-4
              text-white
              focus:outline-none
              focus:border-orange-500
            "
          />

          <div>
            <p className="text-zinc-400 mb-4">
              Select Category
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      category: cat,
                    })
                  }
                  className={`
                    p-4
                    rounded-xl
                    border
                    transition-all
                    ${
                      form.category === cat
                        ? "bg-orange-500 border-orange-500 text-white"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <input
            name="brand"
            value={form.brand}
            placeholder="Brand"
            onChange={handleChange}
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-800
              rounded-xl
              p-4
              text-white
              focus:outline-none
              focus:border-orange-500
            "
          />

          <input
            name="price"
            value={form.price}
            placeholder="Price"
            onChange={handleChange}
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-800
              rounded-xl
              p-4
              text-white
              focus:outline-none
              focus:border-orange-500
            "
          />

          <input
            name="stock"
            value={form.stock}
            placeholder="Stock"
            onChange={handleChange}
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-800
              rounded-xl
              p-4
              text-white
              focus:outline-none
              focus:border-orange-500
            "
          />

          <input
            name="description"
            value={form.description}
            placeholder="Description"
            onChange={handleChange}
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-800
              rounded-xl
              p-4
              text-white
              focus:outline-none
              focus:border-orange-500
            "
          />

          <button
            type="submit"
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-semibold
              py-4
              rounded-xl
              transition
            "
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}