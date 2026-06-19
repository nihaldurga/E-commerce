import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import About from "@/components/About";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}