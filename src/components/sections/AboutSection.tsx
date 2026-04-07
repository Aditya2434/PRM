// src/components/sections/AboutSection.tsx
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10" />

      <div className="container mx-auto px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <SectionTitle title="ABOUT US" />
            
            <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] leading-tight mb-8 tracking-tight">
              Trusted Manufacturer of <span className="text-[#e63946] border-b-2 border-[#e63946]/10">Refractory Materials and Furnace Equipment</span>
            </h3>

            <div className="space-y-8">
              {/* Professional Text Block */}
              <div className="relative pl-6 border-l-4 border-[#e63946]">
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  Welcome to <span className="font-bold text-[#1e3a5f]">Paragon Refractories and Minerals</span>, a trusted manufacturer and supplier of high-performance refractory materials, heavy industrial mechanical equipment, and cast iron products for the reheating furnace industry. Established in 2000, we specialize in manufacturing and supplying solutions tailored for walking beam, walking hearth, and pusher-type reheating furnaces.
                </p>
              </div>
              
              {/* Centered "Know More" Button - FIXED LINK TO /about */}
              <div className="flex justify-center lg:justify-start pt-4">
                <a href="/about" className="group">
                  <button className="flex items-center gap-3 bg-transparent border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-3.5 font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-sm">
                    Know More
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Enhanced Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] mt-8 lg:mt-0"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative shrink-0 group">
                <div className="w-full md:w-52 h-64 bg-gray-100 rounded-sm overflow-hidden relative">
                  {/* Image with subtle zoom on hover */}
                  <img
                    src="/src/assets/images/Founder.jpg"
                    alt="Kalika Prasad Chauhan"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = '/src/assets/images/Founder.png';
                    }}
                  />
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
                
                {/* Founder Badge */}
                <div className="absolute bottom-0 left-0 bg-[#e63946] text-white px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg">
                  FOUNDER
                </div>
              </div>

              <div className="flex-1 py-2">
                <h4 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-1">
                  Kalika Prasad Chauhan
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-4 bg-[#e63946]" />
                  <p className="text-xs text-[#e63946] font-bold tracking-[0.15em] uppercase">
                    Founder & CEO
                  </p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Kalika Prasad Chauhan (K.P. Chauhan), Founder of Paragon Refractories and Minerals, brings decades of expertise in refractory materials and furnace engineering.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;