'use client';

import { useForm } from 'react-hook-form';

import { Send } from 'lucide-react';

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
import Image from 'next/image';
import { useState } from 'react';

type FormData = {
  name: string;
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    // Simulate API submission
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log('Feedback submitted:', data);
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-brand-mint py-20 relative overflow-hidden">
      {/* Decorative texture/shape */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-cream rounded-full mix-blend-multiply opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Social Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-3 block">
              Follow Us On
            </span>
            
            <div className="w-full max-w-[280px] bg-white p-6 rounded-3xl shadow-sm border border-brand-mint mb-8 flex justify-center items-center h-48">
               <Image
                  src="/images/logo.png"
                  alt="Haritham Kitchen Logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
            </div>
            
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-dark hover:text-white hover:bg-brand-primary transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-mint focus:ring-brand-primary">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Facebook" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-dark hover:text-white hover:bg-brand-primary transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-mint focus:ring-brand-primary">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right: Feedback Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-brand-cream w-full">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-brand-dark mb-2">Get In Touch</h2>
              <p className="text-brand-dark/70">Share Your Feedback with us.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark/80 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Meera Nair"
                  className={`w-full px-4 py-3 rounded-xl border bg-brand-offwhite/50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                    errors.name ? 'border-red-300 focus:ring-red-500' : 'border-brand-mint'
                  }`}
                  {...register('name', { required: 'Name is required' })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 font-medium">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark/80 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us what you think..."
                  className={`w-full px-4 py-3 rounded-xl border bg-brand-offwhite/50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none ${
                    errors.message ? 'border-red-300 focus:ring-red-500' : 'border-brand-mint'
                  }`}
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600 font-medium">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-brand-primary hover:bg-brand-deep disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary min-h-[44px]"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Submit Feedback <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-brand-primary/10 text-brand-deep text-sm font-medium border border-brand-primary/20">
                  Thank you! We&apos;ll be in touch.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-100">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
