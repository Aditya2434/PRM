// src/components/sections/ServicesSection.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Flame, Wrench, Activity, Factory, Hexagon, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Flame,
  Wrench,
  Activity,
  Factory,
  Hexagon,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-3.5 sm:px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[#D97706] font-mono text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              Engineering Capabilities
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#090D16] tracking-tight">
              Turnkey Industrial Services
            </h2>
          </div>
          <p className="max-w-md font-ui text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed font-normal border-l-2 border-amber-500/40 pl-3 sm:pl-5">
            Full-lifecycle engineering support from refractory furnace lining design and thermal analysis to precision cast component fabrication.
          </p>
        </div>

        {/* Service Cards Grid - Minimum 2 in a row on all screen sizes */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            if (!IconComponent) return null;

            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={index >= 6 ? "hidden" : "h-full flex flex-col"}
              >
                <Link
                  to="/services"
                  className="group flex flex-col justify-between p-3.5 sm:p-5 md:p-8 h-full bg-white border border-slate-200/90 rounded-xl hover:border-amber-500/40 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Top accent bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D97706] to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div>
                    {/* Icon */}
                    <div className="mb-3 sm:mb-4 md:mb-6">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg border border-slate-200 bg-slate-50 group-hover:bg-[#090D16] group-hover:border-[#090D16] flex items-center justify-center transition-all duration-300 shadow-xs">
                        <IconComponent
                          className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 group-hover:text-amber-400 transition-colors duration-300"
                          strokeWidth={1.75}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xs sm:text-sm md:text-base font-bold text-slate-900 mb-1.5 sm:mb-2 md:mb-3 transition-colors duration-300 group-hover:text-[#D97706] tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-ui text-[11px] sm:text-xs md:text-sm text-slate-500 leading-relaxed font-normal mb-3 sm:mb-4 md:mb-6 line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 sm:gap-2 font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[#D97706] transition-all duration-300 transform group-hover:translate-x-1 mt-auto pt-2">
                    <span>Explore <span className="hidden sm:inline">Capability</span></span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-14 flex justify-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 sm:gap-3 bg-[#090D16] hover:bg-[#D97706] text-white px-6 sm:px-9 py-3 sm:py-4 rounded-md font-ui font-bold text-xs tracking-[0.16em] uppercase transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/20 text-center"
          >
            Explore All Engineering Services
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;