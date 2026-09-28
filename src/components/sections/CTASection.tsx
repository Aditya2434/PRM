// src/components/sections/CTASection.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-[#090D16]">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      
      {/* Subtle top accent divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Direct Industrial Consultation
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Engineered For Extreme Thermal Demands.
              <span className="block text-[#D97706] mt-2">Connect With Our Technical Team.</span>
            </h2>
            
            <p className="font-ui text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed text-base font-normal">
              Whether you need customized high-alumina refractory linings, pusher furnace retrofitting, or heat-resistant cast iron components, our metallurgical specialists are ready.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-[#D97706] hover:bg-[#F59E0B] text-white px-8 sm:px-9 py-4 rounded-md font-ui font-bold text-xs tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-amber-600/25 w-full sm:w-auto"
                >
                  Request Technical Proposal
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              <a
                href="tel:+919932317334"
                className="group flex items-center justify-center gap-3 border border-white/20 text-white px-8 sm:px-9 py-4 rounded-md font-ui font-bold text-xs tracking-[0.16em] uppercase hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" strokeWidth={2.5} />
                +91 99323 17334
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;