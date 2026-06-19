import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center text-center">

          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
          />

          <h1 className="text-6xl md:text-8xl font-bold mt-8">
            Sri Durga
          </h1>

          <h2 className="text-6xl md:text-8xl font-bold text-zinc-500">
            Traders
          </h2>

          <p className="text-zinc-400 mt-8 max-w-2xl text-lg">
            Hardware • Electrical • Plumbing • Sanitary • Paints
          </p>

          <p className="text-zinc-500 mt-4 max-w-xl">
            Trusted supplier serving Vizianagaram with premium building materials.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="#products"
              className="bg-white text-black px-8 py-4 rounded-xl"
            >
              Browse Products
            </a>

            <a
              href="/quote"
              className="border border-zinc-700 px-8 py-4 rounded-xl"
            >
              Get Quote
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}