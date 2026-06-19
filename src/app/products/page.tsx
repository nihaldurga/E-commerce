import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import Link from "next/link";

async function getProducts(category?: string) {
  await connectDB();

  const products = category
    ? await Product.find({ category }).lean()
    : await Product.find().lean();

  return JSON.parse(JSON.stringify(products));
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const products = await getProducts(category);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">
            {category ? `${category} Products` : "All Products"}
          </h1>

          <p className="text-zinc-500 mt-4 text-lg">
            Premium construction materials for your projects.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              No products found
            </h2>

            <p className="text-zinc-500 mt-2">
              Try adding products from the admin dashboard.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product: any) => (
              <Link
                key={product._id}
                href={`/products/${product._id}`}
              >
                <div
                  className="
                    group
                    h-full
                    bg-zinc-950
                    border
                    border-zinc-800
                    rounded-3xl
                    p-6
                    hover:border-orange-500
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >

                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        bg-orange-500/10
                        text-orange-400
                      "
                    >
                      {product.category}
                    </span>

                    <span className="text-zinc-500 text-sm">
                      Stock {product.stock}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white">
                    {product.name}
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {product.brand}
                  </p>

                  <div className="mt-8">
                    <p className="text-4xl font-bold text-white">
                      ₹{product.price}
                    </p>
                  </div>

                  <button
                    className="
                      mt-8
                      w-full
                      bg-white
                      text-black
                      py-3
                      rounded-xl
                      font-semibold
                      transition
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >
                    View Product
                  </button>

                </div>
              </Link>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}