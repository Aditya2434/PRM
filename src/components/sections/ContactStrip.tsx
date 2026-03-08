// src/components/sections/ContactStrip.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

interface ContactInfoItem {
  id: number;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  lines: string[];
}

const contactInfo: ContactInfoItem[] = [
  {
    id: 1,
    icon: Phone,
    title: 'CALL US NOW',
    lines: [
      '+91 9932317334'
    ],
  },
  {
    id: 2,
    icon: Mail,
    title: 'SEND US A MESSAGE',
    lines: [
      'paragonrefractories22@gmail.com'
    ],
  },
];

const ContactStrip = () => {
  return (
    <section id="contact" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden flex items-center p-6 lg:p-8 bg-[#0f172a] rounded-2xl shadow-xl hover:shadow-[0_8px_30px_rgb(230,57,70,0.2)] transition-all duration-300 border border-white/5"
            >
              {/* Decorative hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e63946]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-5 w-full">
                {/* Icon Container - Compact & Left Aligned */}
                <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#e63946] group-hover:border-[#e63946] group-hover:scale-110 transition-all duration-300 shadow-inner">
                  <item.icon className="w-5 h-5 text-[#e63946] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
                
                {/* Text Content - Horizontal Layout */}
                <div className="text-left flex-1">
                  <h4 className="text-[11px] font-bold text-gray-400 mb-1.5 tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  {item.lines.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-[15px] md:text-base font-medium text-white/90 tracking-wide group-hover:text-white transition-colors duration-300">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;