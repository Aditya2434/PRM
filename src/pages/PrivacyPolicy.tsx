// src/pages/PrivacyPolicy.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import heroBg from '@/assets/images/cta-bg.jpg';

const PrivacyPolicy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {/* Navigation Area */}
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* Premium Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img src={heroBg} alt="Privacy Policy Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 shadow-xl"
            >
              <ShieldCheck className="w-4 h-4 text-[#e63946]" />
              <span className="text-[#e63946] text-xs font-black uppercase tracking-[0.2em]">Legal Information</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] to-[#ffb3c6]">Policy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto font-medium"
            >
              How we collect, use, and protect your personal data.
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative z-20 -mt-16 mb-24 px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100"
            >
              <div className="border-b border-slate-100 pb-6 mb-8">
                 <p className="text-sm font-bold text-[#e63946] tracking-widest uppercase">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
              
              <div className="space-y-12 text-slate-600 font-medium leading-relaxed">
                
                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#e63946] inline-block rounded-full" />
                    1. Introduction
                  </h2>
                  <p className="pl-11">
                    Welcome to Paragon Refractories and Minerals. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#e63946] inline-block rounded-full" />
                    2. The Data We Collect About You
                  </h2>
                  <p className="pl-11">
                    We may collect, use, store and transfer different kinds of personal data about you, including identity data, contact data, technical data, and usage data when you interact with our website or use our contact forms.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#e63946] inline-block rounded-full" />
                    3. How We Use Your Personal Data
                  </h2>
                  <p className="pl-11">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: where we need to perform the contract we are about to enter into or have entered into with you, where it is necessary for our legitimate interests, or where we need to comply with a legal or regulatory obligation.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#e63946] inline-block rounded-full" />
                    4. Data Security
                  </h2>
                  <p className="pl-11">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100 ml-11">
                  <h2 className="text-xl font-bold text-[#0f172a] mb-3">
                    5. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this privacy policy or our privacy practices, please contact us directly at: <br/>
                    <a href="mailto:paragonrefractories22@gmail.com" className="text-[#e63946] hover:text-[#0f172a] transition-colors font-bold mt-2 inline-block">
                      paragonrefractories22@gmail.com
                    </a>
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;