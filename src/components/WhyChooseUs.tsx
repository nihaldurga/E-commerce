export default function WhyChooseUs() {
  const features = [
    {
      title: "Quality Products",
      desc: "We provide trusted brands and genuine materials.",
    },
    {
      title: "Best Pricing",
      desc: "Competitive pricing for all construction materials.",
    },
    {
      title: "Expert Guidance",
      desc: "Get advice for paints, cement, steel and more.",
    },
    {
      title: "Fast Service",
      desc: "Quick response through WhatsApp and phone.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Sri Durga Traders?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}