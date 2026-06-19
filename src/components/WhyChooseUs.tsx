export default function WhyChooseUs() {
  const features = [
    "Premium Quality Products",
    "Trusted Local Supplier",
    "Affordable Pricing",
    "Fast Service",
  ];

  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature) => (
            <div
              key={feature}
              className="
                border
                border-zinc-800
                p-8
                rounded-3xl
              "
            >
              {feature}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}