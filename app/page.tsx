import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandTrustStrip from './components/BrandTrustStrip';
import ProductSection from './components/ProductSection';
import LocalShops from './components/LocalShops';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import PreFooterCTA from './components/PreFooterCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col w-full overflow-x-hidden bg-white">
      <div className="px-4 pt-4 lg:px-6 lg:pt-6 w-full max-w-[1500px] mx-auto">
        <div className="bg-[#E7F2E5] rounded-[2.5rem] relative overflow-hidden">
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
      <PreFooterCTA />
      <Footer />
    </main>
  );
}
