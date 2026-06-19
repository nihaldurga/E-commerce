import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Sri Durga Traders"
           width={50}
           height={50}
          />

          <div>
            <h1 className="font-bold text-xl">
              Sri Durga Traders
            </h1>

            <p className="text-sm text-gray-500">
              Construction Materials
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
         <Link href="/products">
  Products
</Link>

<Link href="/contact">
  Contact
</Link>
         <Link href="/services">
  Painting Service
</Link>
        </div>
      </div>
    </nav>
  );
}