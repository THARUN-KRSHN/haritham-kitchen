'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

type FormData = {
  name: string;
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
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
    <section id="contact" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Social Follow Card */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[3rem] p-10 flex flex-col items-center gap-8">
              <h3 className="text-2xl font-bold text-brand-primary">Follow Us On</h3>
              
              <div className="w-full bg-white rounded-[2.5rem] shadow-md border border-gray-100 p-8 flex justify-center items-center">
                 <div className="relative w-full h-20 md:h-24">
                   <Image
                      src="/images/logo.png"
                      alt="Haritham Kitchen Logo"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain"
                    />
                 </div>
              </div>
              
              <div className="flex gap-6 mt-4">
                <a href="#" aria-label="Instagram" className="w-14 h-14 bg-white border-2 border-brand-dark rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-colors">
                  <Instagram className="w-7 h-7" />
                </a>
                <a href="#" aria-label="Facebook" className="w-14 h-14 bg-white border-2 border-brand-dark rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-colors">
                  <Facebook className="w-7 h-7" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Feedback Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full max-w-lg"
          >
            <div className="mb-10">
              <h2 className="text-4xl md:text-6xl text-brand-dark flex flex-col font-light gap-1 mb-4">
                 <span>Get In</span>
                 <strong className="font-semibold mt-1">Touch</strong>
              </h2>
              <p className="text-xl md:text-2xl text-brand-primary font-light pl-2">Share Your Feedback</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-6 py-4 rounded-full border-2 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary text-lg ${
                    errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-200'
                  }`}
                  {...register('name', { required: 'Name is required' })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="mt-2 pl-4 text-sm text-red-600 font-medium">{errors.name.message}</p>}
              </div>

              <div>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  className={`w-full px-6 py-4 rounded-3xl border-2 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none text-lg ${
                    errors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-200'
                  }`}
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && <p className="mt-2 pl-4 text-sm text-red-600 font-medium">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-brand-primary hover:bg-brand-deep disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary min-h-[60px]"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Submit Feedback"
                )}
              </button>

              {status === 'success' && (
                <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="p-4 rounded-2xl bg-brand-primary/10 text-brand-deep text-center text-base font-medium border border-brand-primary/20">
                  Thank you! We&apos;ll be in touch.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="p-4 rounded-2xl bg-red-50 text-red-700 text-center text-base font-medium border border-red-100">
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
