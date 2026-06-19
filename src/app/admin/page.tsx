"use client";

import { useState } from "react";

export default function AdminPage() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    console.log(data);

    alert("Product Added");
  };

  return (
    <div className="max-w-3xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          className="border p-3 w-full"
        />

            <select
        name="category"
        onChange={(e) =>
          setForm({
            ...form,
            category: e.target.value,
          })
        }
        className="border p-3 w-full"
      >

        <option value="">
          Select Category
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

        <input
          name="brand"
          required
          placeholder="Brand"
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="price"
          required
          placeholder="Price"
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="stock"
          required
          placeholder="Stock"
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="description"
          required
          placeholder="Description"
          onChange={handleChange}
          className="border p-3 w-full"
        />
<button
  className="bg-orange-600 text-white px-6 py-3 rounded-lg"
>
          Add Product
        </button>

      </form>

    </div>
  );
}