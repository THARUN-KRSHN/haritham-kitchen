import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandTrustStrip from './components/BrandTrustStrip';
import ProductSection from './components/ProductSection';
import LocalShops from './components/LocalShops';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col w-full overflow-x-hidden bg-brand-offwhite">
      <div className="w-full">
        <div className="bg-[#E7F2E5] relative overflow-hidden">
          <Navbar />
          <Hero />
        </div>
      </div>
      <BrandTrustStrip />
      <ProductSection />
      <LocalShops />
      <Stats />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
