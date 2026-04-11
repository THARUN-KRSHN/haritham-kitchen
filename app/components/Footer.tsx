import Image from 'next/image';
import Link from 'next/link';
const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Col 1: Logo & Tagline */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="#home" className="inline-block bg-white p-2 rounded-xl mb-6">
              <Image
                src="/images/logo.png"
                alt="Haritham Kitchen"
                width={160}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-brand-mint text-base font-medium leading-relaxed max-w-sm mb-6">
              Bringing authentic Kerala flavors to your home, one jar at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-mint hover:text-white transition-colors p-2 -ml-2" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-mint hover:text-white transition-colors p-2" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 lg:col-span-4 lg:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Product', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-brand-mint hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="md:col-span-4 justify-self-start md:justify-self-end text-left min-w-[200px]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="text-brand-mint hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@harithamkitchens.com" className="text-brand-mint hover:text-white transition-colors break-all">
                  hello@harithamkitchens.com
                </a>
              </li>
            </ul>
             <div className="mt-8 pt-8 border-t border-white/5 md:hidden">
              <span className="block text-[140px] font-extrabold text-white/5 opacity-50 font-playfair tracking-normal -mb-20">
                HARITHAM KITCHEN
              </span>
            </div>
          </div>
          
        </div>
        
        {/* Large Brand Watermark */}
         <div className="hidden md:block w-full overflow-hidden mb-8 border-b border-white/10 pb-4">
            <span className="block text-[8vw] lg:text-[140px] font-extrabold text-brand-mint/5 whitespace-nowrap leading-none select-none tracking-tight font-sans">
              HARITHAM KITCHEN
            </span>
          </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 md:pt-0 border-t border-brand-mint/20 md:border-none">
          <p className="text- brand-mint/60 text-sm text-center sm:text-left">
            © 2026 Haritham Kitchen. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-brand-mint/60">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
