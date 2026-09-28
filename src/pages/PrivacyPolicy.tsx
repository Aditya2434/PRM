// src/pages/PrivacyPolicy.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Privacy Policy | Paragon Refractories & Minerals"
        description="Privacy Policy for Paragon Refractories & Minerals (PRM). Learn how we collect, use, and protect your personal data."
      />
      <Navbar />

      <main className="flex-grow">
        {/* Light Architectural Page Hero */}
        <PageHero
          eyebrow="Legal Information"
          title="Privacy Policy & Data Protection"
          subtitle="How Paragon Refractories and Minerals collects, manages, and safeguards your corporate and personal information."
          breadcrumbs={[
            { label: "Privacy Policy" }
          ]}
        />

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-200/80">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 lg:p-14 rounded-2xl shadow-sm border border-slate-200/80"
            >
              <div className="border-b border-slate-100 pb-5 mb-8">
                <p className="text-xs font-mono font-bold text-[#D97706] tracking-widest uppercase">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
              
              <div className="space-y-10 text-slate-600 font-normal leading-relaxed">
                
                {/* Section 1 */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#090D16] mb-3 flex items-center gap-3">
                    <span className="w-6 h-1 bg-[#D97706] inline-block rounded-full" />
                    1. Introduction
                  </h2>
                  <p className="pl-9 text-slate-600 leading-relaxed">
                    Welcome to Paragon Refractories and Minerals. We respect your corporate and personal privacy and are committed to protecting all confidential data. This privacy policy informs you as to how we handle information when you visit our website, download technical datasheets, or submit commercial RFQs.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#090D16] mb-3 flex items-center gap-3">
                    <span className="w-6 h-1 bg-[#D97706] inline-block rounded-full" />
                    2. Data Collection &amp; Usage
                  </h2>
                  <p className="pl-9 text-slate-600 leading-relaxed">
                    When you interact with our website or submit inquiries, we may process commercial contact information such as name, professional email address, organization name, phone number, and technical project requirements to respond accurately to your inquiries.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#090D16] mb-3 flex items-center gap-3">
                    <span className="w-6 h-1 bg-[#D97706] inline-block rounded-full" />
                    3. Legal Grounding &amp; Data Security
                  </h2>
                  <p className="pl-9 text-slate-600 leading-relaxed">
                    We maintain industry-standard security protocols to prevent unauthorized access, accidental alteration, or disclosure of submitted information. Your information is strictly utilized for engineering consultation, quotation fulfillment, and customer support.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200/80 ml-0 sm:ml-9">
                  <h3 className="text-lg font-display font-bold text-[#090D16] mb-2">
                    4. Contact Our Compliance Team
                  </h3>
                  <p className="text-sm text-slate-600">
                    If you have questions regarding this privacy policy or our data practices, contact us at: <br/>
                    <a href="mailto:paragonrefractories22@gmail.com" className="text-[#D97706] hover:text-[#090D16] transition-colors font-mono font-bold mt-2 inline-block">
                      paragonrefractories22@gmail.com
                    </a>
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;