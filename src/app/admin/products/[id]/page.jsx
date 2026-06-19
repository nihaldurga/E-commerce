"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams();
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
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      setForm({
        name: data.name || "",
        category: data.category || "",
        brand: data.brand || "",
        price: data.price || "",
        stock: data.stock || "",
        description: data.description || "",
      });
    }

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Updated Successfully");
    router.push("/admin/products");
  };

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="brand"
          value={form.brand}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="stock"
          value={form.stock}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="file"
          accept="image/*"
        />

        <button
          className="
            bg-green-600
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          Update Product
        </button>
      </form>
    </div>
  );
}