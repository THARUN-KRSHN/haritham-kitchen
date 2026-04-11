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
    <main id="main-content" className="flex min-h-screen flex-col w-full overflow-x-hidden pt-14 md:pt-16 lg:pt-0">
      <Navbar />
      <Hero />
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
