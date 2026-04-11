import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden pt-20">
      <Navbar />
      <section className="bg-brand-offwhite py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-mint">
          <h1 className="text-4xl font-semibold text-brand-dark mb-8">Terms & Conditions</h1>
          <div className="prose prose-brand max-w-none text-brand-dark/80">
            <p className="mb-4">Effective Date: April 2026</p>
            <p className="mb-6">Please read these Terms and Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) carefully before using the Haritham Kitchen website.</p>
            
            <h2 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">1. Product Information</h2>
            <p className="mb-4">Haritham Kitchen offers artisanal homemade food products, specifically Inji Curry. All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion.</p>
            
            <h2 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">2. Pricing and Availability</h2>
            <p className="mb-4">Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue a product.</p>
            
            <h2 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">3. Disclaimers</h2>
            <p className="mb-4">Our homemade products are prepared with care. However, we do not guarantee specific shelf life beyond typical conditions if not stored properly. Please refrigerate after opening and use a dry spoon.</p>
            
            <h2 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">4. Shipping & Delivery</h2>
            <p className="mb-4">Delivery areas are currently restricted to specific pin codes within Kerala, India. Timelines provided are estimates.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
