async function getProduct(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div className="max-w-5xl mx-auto p-10">

      <div className="border rounded-xl p-8 shadow">

        <h1 className="text-4xl font-bold">
          {product.name}
        </h1>

        <p className="mt-4 text-lg">
          Brand: {product.brand}
        </p>

        <p className="mt-4 text-lg">
          Category: {product.category}
        </p>

        <p className="mt-4 text-3xl font-bold text-orange-600">
          ₹{product.price}
        </p>

        <p className="mt-4">
          Stock: {product.stock}
        </p>

        <p className="mt-6 text-gray-700">
          {product.description}
        </p>
         <a
  href={`https://wa.me/919550511020?text=${encodeURIComponent(
    `Hello Sri Durga Traders,

Product: ${product.name}
Brand: ${product.brand}
Price: ₹${product.price}

I am interested in this product.`
  )}`}
  target="_blank"
  className="
    inline-block
    mt-6
    bg-green-600
    text-white
    px-6
    py-3
    rounded-lg
  "
>
  Order on WhatsApp
</a>
      </div>

    </div>
  );
}