import Banner from "@/app/sections/Banner";
import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import LogoTicker from "@/app/sections/LogoTicker";
import Features from "@/app/sections/Features";
import ProductShowcase from "@/app/sections/ProductShowcase";
import FAQs from "@/app/sections/Faqs";
import CallToAction from "@/app/sections/CallToAction";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </main>
  );
}
