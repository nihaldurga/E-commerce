import Link from "next/link";
export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">

      <div className="text-center max-w-4xl">

        <h1 className="text-6xl font-bold">
          Sri Durga Traders
        </h1>

        <h2 className="text-2xl mt-4 text-gray-600">
          Paints, Cement, Steel, Tiles & Construction Materials
        </h2>

        <p className="mt-6 text-lg">
          Your One Stop Destination For Construction Needs
        </p>
        <Link
  href="/quote"
  className="
    bg-green-600
    text-white
    px-6
    py-3
    rounded-lg
  "
>
  Request Quote
</Link>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg">
            Browse Products
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Request Quote
          </button> 
          
        </div>

      </div>

    </section>
    
  );
}