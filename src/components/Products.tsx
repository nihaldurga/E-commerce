const product = [
  "Hardware",
  "Electrical",
  "Plumbing",
  "Sanitary",
  "Paints",
];

export default function products() {
  return (
    <section
      id="product"
      className="bg-black text-white py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Our Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {product.map((item) => (
            <div
              key={item}
              className="
                border
                border-zinc-800
                rounded-3xl
                p-10
                hover:border-white
                transition
              "
            >
              <h3 className="text-3xl font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}