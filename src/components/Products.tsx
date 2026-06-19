import Link from "next/link";

const products = [
  "Hardware",
  "Electrical",
  "Plumbing",
  "Sanitary",
  "Paints",
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-black text-white py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Our Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item) => (
            <Link
              key={item}
              href={`/products?category=${item}`}
            >
              <div
                className="
                  border
                  border-zinc-800
                  rounded-3xl
                  p-10
                  hover:border-white
                  hover:bg-zinc-900
                  transition
                  cursor-pointer
                "
              >
                <h3 className="text-3xl font-semibold">
                  {item}
                </h3>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}