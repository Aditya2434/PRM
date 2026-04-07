// src/pages/Services.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Flame, Wrench, Activity, Factory, Hexagon, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactStrip from '@/components/sections/ContactStrip';
import heroBg from '@/assets/images/cta-bg.jpg';
import { services } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Flame,
  Wrench,
  Activity,
  Factory,
  Hexagon,
};

const Services = () => {
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
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <img src={heroBg} alt="Services Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 shadow-xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
              <span className="text-[#e63946] text-xs font-black uppercase tracking-[0.2em]">What We Do</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] to-[#ffb3c6]">Services</span>
            </motion.h1>
          </div>
        </section>

        {/* Floating Intro Section */}
        <section className="relative z-20 -mt-10 mb-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] p-8 md:p-12 text-center border border-gray-100"
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                <strong className="text-[#0f172a] font-bold tracking-wide">Paragon Refractories and Minerals</strong> provides comprehensive industrial furnace maintenance and shutdown services designed to ensure safe operation, maximum efficiency, and extended equipment life across all types of complex industrial environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Modern Services Grid Section */}
        <section className="py-12 lg:py-20 bg-[#f8fafc] relative overflow-hidden">
          {/* Decorative background accent */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-100/50 skew-x-12 -translate-x-1/2 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <motion.div
                    key={service.id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-200 hover:border-[#1e3a5f]/20 overflow-hidden flex flex-col z-10 hover:-translate-y-1.5"
                  >
                    {/* Top Animated Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#1e3a5f] to-[#e63946] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    
                    {/* Background Watermark Number */}
                    <div className="absolute top-6 right-6 text-7xl font-black text-slate-50 group-hover:text-blue-50/50 transition-colors duration-500 select-none pointer-events-none -z-10 tracking-tighter">
                      0{index + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-[#1e3a5f] group-hover:border-[#1e3a5f] group-hover:shadow-lg flex items-center justify-center mb-8 transition-all duration-500 shrink-0 group-hover:-translate-y-1">
                      {IconComponent && <IconComponent className="w-8 h-8 text-[#e63946] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#1e3a5f] mb-4 tracking-wide uppercase transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[14.5px] text-slate-500 group-hover:text-slate-700 leading-relaxed transition-colors duration-300 flex-grow font-medium">
                      {service.description}
                    </p>
                    
                    {/* Checklist Elements */}
                    <ul className="mt-8 space-y-3 pt-6 border-t border-slate-100 transition-colors duration-300">
                      <li className="flex items-center text-sm font-bold text-slate-400 group-hover:text-[#1e3a5f] transition-colors duration-300 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-[#e63946] mr-3 shrink-0" /> 
                        Performance Restoration
                      </li>
                      <li className="flex items-center text-sm font-bold text-slate-400 group-hover:text-[#1e3a5f] transition-colors duration-300 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-[#e63946] mr-3 shrink-0" /> 
                        Minimized Downtime
                      </li>
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Strip */}
        <ContactStrip />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;