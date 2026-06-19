const categories = [
  "Paints",
  "Cement",
  "Steel",
  "Tiles",
  "Plumbing",
  "Electrical",
  "Hardware",
  "Tools",
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Product Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map((category) => (
          <div
            key={category}
            className="
              p-8
              rounded-xl
              shadow-md
              border
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              cursor-pointer
              text-center
            "
          >
            <h3 className="text-xl font-semibold">
              {category}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}