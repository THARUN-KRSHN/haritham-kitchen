import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden pt-20">
      <Navbar />
      <section className="bg-brand-offwhite py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-mint">
          <h1 className="text-4xl font-semibold text-brand-dark mb-8">Privacy Policy</h1>
          <div className="prose prose-brand max-w-none text-brand-dark/80">
            <p className="mb-4">Effective Date: April 2026</p>
            <p className="mb-6">At Haritham Kitchen, we respect your privacy and are committed to protecting it through our compliance with this policy.</p>
            
            <h2 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, e-mail address, and telephone number, provided via our feedback forms.</p>
            
            <h2 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use information that we collect about you or that you provide to us to present our Website and its contents to you, to provide you with information about our products, and to fulfill any other purpose for which you provide it.</p>
            
            <h2 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">3. Data Security</h2>
            <p className="mb-4">We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.</p>
            
            <h2 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">4. Contact Information</h2>
            <p className="mb-4">To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:hello@harithamkitchens.com" className="text-brand-primary underline">hello@harithamkitchens.com</a>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
