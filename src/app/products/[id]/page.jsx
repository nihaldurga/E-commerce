import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { notFound } from "next/navigation";

async function getProduct(id) {
  await connectDB();

  const product = await Product.findById(id).lean();

  if (!product) {
    notFound();
  }

  return JSON.parse(JSON.stringify(product));
}

export default async function ProductPage({
  params,
}) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div
          className="
            max-w-5xl
            mx-auto
            bg-zinc-950
            border
            border-zinc-800
            rounded-3xl
            p-10
          "
        >
          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              text-sm
              bg-orange-500/10
              text-orange-400
            "
          >
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-6">
            {product.name}
          </h1>

          <p className="text-zinc-400 text-xl mt-3">
            {product.brand}
          </p>

          <div className="mt-8">
            <p className="text-6xl font-bold text-orange-500">
              ₹{product.price}
            </p>
          </div>

          <div className="mt-8 flex gap-8">
            <div>
              <p className="text-zinc-500">
                Available Stock
              </p>
              <p className="text-2xl font-semibold">
                {product.stock}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Description
            </h2>

            <p className="text-zinc-400 leading-8">
              {product.description}
            </p>
          </div>

          <a
            href={`https://wa.me/919490583898?text=${encodeURIComponent(
              `Hello Sri Durga Traders,

Product: ${product.name}
Brand: ${product.brand}
Price: ₹${product.price}

I am interested in this product.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              mt-10
              bg-green-600
              hover:bg-green-700
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}