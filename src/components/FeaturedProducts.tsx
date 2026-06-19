export default function FeaturedProducts() {
  return (
   <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Our Products
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        "Cement",
        "Steel",
        "Paints",
        "Tiles"
      ].map((item) => (
        <div
          key={item}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
        >
          <img
            src={`/products/${item.toLowerCase()}.jpg`}
            alt={item}
            className="h-56 w-full object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-bold">{item}</h3>
            <button className="mt-4 text-orange-500 font-semibold">
              View Details →
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}