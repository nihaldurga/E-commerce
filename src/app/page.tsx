import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}