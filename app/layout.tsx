import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Haritham Kitchen — Authentic Kerala Inji Curry | Homemade & Natural',
  description: 'Rooted in Kerala tradition, Haritham Kitchen crafts authentic homemade Inji Curry with handpicked ingredients — 100% natural, made with love.',
  openGraph: {
    title: 'Haritham Kitchen — Authentic Kerala Inji Curry',
    description: 'Rooted in Kerala tradition, Haritham Kitchen crafts authentic homemade Inji Curry with handpicked ingredients — 100% natural, made with love.',
    url: 'https://harithamkitchens.com',
    siteName: 'Haritham Kitchen',
    images: [
      {
        url: '/logo.png', // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haritham Kitchen — Authentic Kerala Inji Curry',
    description: '100% natural, homemade Inji Curry',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} scroll-smooth`}>
      <body className={`${montserrat.className} bg-brand-offwhite text-brand-dark antialiased selection:bg-brand-mint selection:text-brand-dark`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-brand-primary focus:text-white">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
