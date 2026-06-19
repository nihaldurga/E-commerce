import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import Link from "next/link";

async function getProducts() {
  await connectDB();

  const products = await Product.find().lean();

  return JSON.parse(JSON.stringify(products));
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-10">
        Products
      </h1>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product: any) => (
           <Link
  key={product._id}
  href={`/products/${product._id}`}
>
  <div
    className="
      bg-white
      rounded-2xl
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      p-6
      border
      hover:-translate-y-2
      cursor-pointer
    "
  >
    <div className="mb-4">
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
    </div>

    <h2 className="text-2xl font-bold">
      {product.name}
    </h2>

    <p className="text-gray-500 mt-2">
      {product.brand}
    </p>

    <p
      className="
        text-3xl
        font-bold
        text-orange-600
        mt-4
      "
    >
      ₹{product.price}
    </p>

    <p className="mt-2">
      Available Stock: {product.stock}
    </p>

    <button
      className="
        mt-6
        w-full
        bg-orange-600
        text-white
        py-3
        rounded-lg
      "
    >
      View Details
    </button>
  </div>
</Link>
          ))}
        </div>
      )}
    </div>
  );
}