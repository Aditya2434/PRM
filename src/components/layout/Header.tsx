// src/components/layout/Header.tsx
import { Mail, Phone, ChevronRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import logo from '@/assets/logo.png';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-white py-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative z-30">
      {/* Container with consistent padding */}
      <div className="container mx-auto px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        
        {/* Logo & Company Name */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          {/* Logo Image with Glow Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            <img 
              src={logo} 
              alt="Paragon Refractories and Minerals" 
              className="relative h-14 w-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-sm" 
            />
          </div>

          {/* Text Section - Uniform Typography */}
          <div className="flex flex-col border-l border-gray-300 pl-3 py-1">
            <h1 className="text-2xl font-bold text-[#0f172a] leading-none tracking-tight group-hover:text-[#1e3a5f] transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              Paragon Refractories
            </h1>
            {/* Highlighted "And Minerals" with Gradient and Weight */}
            <span className="text-sm font-semibold bg-gradient-to-r from-[#e63946] to-[#b91c1c] bg-clip-text text-transparent leading-tight mt-1 tracking-wide">
              And Minerals
            </span>
          </div>
        </motion.div>

        {/* Right Section: Contact Info & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Contact Group */}
          <div className="flex items-center gap-8 hidden md:flex">
            {/* Email Block */}
            <div className="flex items-center gap-3 group/item">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#e63946] shadow-sm transition-all duration-300 group-hover/item:bg-[#e63946] group-hover/item:text-white group-hover/item:border-[#e63946] group-hover/item:shadow-md">
                <Mail className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Us</span>
                <a href="mailto:paragonrefractories22@gmail.com" className="text-sm font-semibold text-[#334155] hover:text-[#e63946] transition-colors">
                  paragonrefractories22@gmail.com
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />

            {/* Phone Block */}
            <div className="flex items-center gap-3 group/item">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#e63946] shadow-sm transition-all duration-300 group-hover/item:bg-[#e63946] group-hover/item:text-white group-hover/item:border-[#e63946] group-hover/item:shadow-md">
                <Phone className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Us</span>
                <a href="tel:+919932317334" className="text-sm font-semibold text-[#334155] hover:text-[#e63946] transition-colors">
                  +91 9932317334
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button - Premium Gradient */}
          <CustomButton 
            variant="primary" 
            className="group relative overflow-hidden bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] hover:from-[#e63946] hover:to-[#d62828] text-white px-9 py-4 text-[13px] font-bold tracking-[0.15em] rounded-sm shadow-lg shadow-slate-900/10 transition-all duration-500 transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              GET A QUOTE
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </CustomButton>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;