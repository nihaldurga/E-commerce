const products = [
  {
    name: "Asian Paints",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
  },
  {
    name: "UltraTech Cement",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  },
  {
    name: "Tata Steel",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },
  {
    name: "Kajaria Tiles",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {product.name}
                </h3>

                <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg">
                  View Product
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}