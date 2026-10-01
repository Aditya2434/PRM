// src/components/sections/ContactStrip.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

interface ContactInfoItem {
  id: number;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  status: string;
  badgeDotColor: string;
  lines: string[];
  href: string;
}

const contactInfo: ContactInfoItem[] = [
  {
    id: 1,
    icon: Phone,
    title: 'DIRECT INDUSTRIAL HOTLINE',
    status: 'ACTIVE NOW',
    badgeDotColor: 'bg-emerald-500',
    lines: ['+91 9932317334'],
    href: 'tel:+919932317334',
  },
  {
    id: 2,
    icon: Mail,
    title: 'TECHNICAL & COMMERCIAL RFQ',
    status: '24H QUOTES',
    badgeDotColor: 'bg-amber-500',
    lines: ['paragonrefractories22@gmail.com'],
    href: 'mailto:paragonrefractories22@gmail.com',
  },
];

const ContactStrip = () => {
  return (
    <section id="contact" className="py-10 sm:py-14 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex items-center p-4 sm:p-5 md:p-6 bg-white rounded-2xl border border-slate-200/90 hover:border-amber-500/50 shadow-xs hover:shadow-xl hover:shadow-amber-500/5 active:scale-[0.99] transition-all duration-300 overflow-hidden"
            >
              {/* Premium Gradient Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-[#D97706] to-amber-400 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-3.5 sm:gap-4 md:gap-5 w-full">
                {/* Premium Obsidian Icon Badge */}
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-[#090D16] border border-amber-500/30 rounded-xl flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300 shadow-sm shadow-slate-900/10">
                  <item.icon className="w-5 h-5 text-amber-400" strokeWidth={2} />
                </div>
                
                {/* Text Content */}
                <div className="text-left flex-1 min-w-0">
                  {/* Status & Label Row */}
                  <div className="flex items-center justify-between gap-1.5 mb-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-slate-500 tracking-[0.14em] uppercase truncate">
                      {item.title}
                    </span>
                    <span className="shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[8.5px] sm:text-[9px] font-semibold border border-slate-200/80">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.badgeDotColor} animate-pulse`} />
                      {item.status}
                    </span>
                  </div>
                  
                  {/* Value without truncation */}
                  <p className="text-[13px] sm:text-base md:text-lg font-bold text-[#090D16] group-hover:text-[#D97706] transition-colors duration-300 font-ui break-all sm:break-normal leading-snug">
                    {item.lines[0]}
                  </p>
                </div>

                {/* Action Arrow Badge */}
                <div className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-50 border border-amber-200/70 text-[#D97706] group-hover:bg-[#090D16] group-hover:text-amber-400 group-hover:border-[#090D16] transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;