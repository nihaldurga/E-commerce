import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Sri Durga Traders"
            width={45}
            height={45}
          />
          <h1 className="font-bold text-xl text-white">
            Sri Durga Traders
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-zinc-300">
          

            <Link href="/products">
              Products
            </Link>
           <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="tel:+919490583898"
          className="bg-white text-black px-5 py-2 rounded-lg font-medium"
        >
          Call Now
        </a>

      </div>
    </nav>
  );
}