import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-offwhite px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-playfair font-bold text-brand-dark mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-6">Page Not Found</h2>
      <p className="text-brand-dark/70 max-w-md mx-auto mb-8">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-primary hover:bg-brand-deep transition-all shadow-sm"
      >
        Return Home
      </Link>
    </div>
  );
}
