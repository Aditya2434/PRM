// src/components/sections/ContactStrip.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

interface ContactInfoItem {
  id: number;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  lines: string[];
  href: string;
}

const contactInfo: ContactInfoItem[] = [
  {
    id: 1,
    icon: Phone,
    title: 'DIRECT INDUSTRIAL HOTLINE',
    lines: ['+91 9932317334'],
    href: 'tel:+919932317334',
  },
  {
    id: 2,
    icon: Mail,
    title: 'TECHNICAL & COMMERCIAL RFQ',
    lines: ['paragonrefractories22@gmail.com'],
    href: 'mailto:paragonrefractories22@gmail.com',
  },
];

const ContactStrip = () => {
  return (
    <section id="contact" className="py-14 bg-white border-t border-slate-200/80">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center p-6 bg-slate-50/80 hover:bg-white rounded-xl border border-slate-200/80 hover:border-amber-500/40 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="flex items-center gap-5 w-full">
                {/* Icon Container */}
                <div className="shrink-0 w-12 h-12 bg-amber-500/10 border border-amber-500/25 rounded-xl flex items-center justify-center text-[#D97706] group-hover:bg-[#090D16] group-hover:text-amber-400 group-hover:border-[#090D16] transition-all duration-300 shadow-xs">
                  <item.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                
                {/* Text Content */}
                <div className="text-left flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold text-slate-500 tracking-[0.16em] uppercase block mb-1">
                    {item.title}
                  </span>
                  
                  {item.lines.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-base sm:text-lg font-bold text-[#090D16] group-hover:text-[#D97706] transition-colors duration-300 truncate font-ui">
                      {line}
                    </p>
                  ))}
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