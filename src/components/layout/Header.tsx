// src/components/layout/Header.tsx
import { Mail, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-white py-3 md:py-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative z-30">
      {/* Container with responsive padding and horizontal layout for mobile */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24 flex flex-row justify-between items-center gap-2 lg:gap-0">
        
        {/* Logo & Company Name */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0"
        >
          {/* Logo Image with Glow Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-amber-100 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            <img 
              src={logo} 
              alt="Paragon Refractories and Minerals" 
              className="relative h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-sm bg-transparent" 
            />
          </div>

          {/* Text Section - Responsive Typography */}
          <div className="flex flex-col border-l border-gray-300 pl-2 md:pl-3 py-1">
            <span className="text-[15px] sm:text-lg md:text-2xl font-bold text-[#0B1828] leading-none tracking-tight group-hover:text-[#0B1828]/80 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              Paragon Refractories
            </span>
            {/* Highlighted "And Minerals" */}
            <span className="text-[9px] sm:text-[11px] md:text-sm font-semibold text-[#D97706] leading-tight mt-0.5 md:mt-1 tracking-wide">
              And Minerals
            </span>
          </div>
        </motion.div>

        {/* Right Section: Contact Info & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-4 lg:gap-8"
        >
          {/* Contact Group - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Email Block */}
            <div className="flex items-center gap-3 group/item">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#D97706] shadow-sm transition-all duration-300 group-hover/item:bg-[#D97706] group-hover/item:text-white group-hover/item:border-[#D97706] group-hover/item:shadow-md">
                <Mail className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Email Us</span>
                <a href="mailto:paragonrefractories22@gmail.com" className="text-sm font-semibold text-slate-700 hover:text-[#D97706] transition-colors">
                  paragonrefractories22@gmail.com
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-slate-200" />

            {/* Phone Block */}
            <div className="flex items-center gap-3 group/item">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#D97706] shadow-sm transition-all duration-300 group-hover/item:bg-[#D97706] group-hover/item:text-white group-hover/item:border-[#D97706] group-hover/item:shadow-md">
                <Phone className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Call Us</span>
                <a href="tel:+919932317334" className="text-sm font-semibold text-slate-700 hover:text-[#D97706] transition-colors">
                  +91 9932317334
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            to="/contact"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: window.innerHeight * 0.6, behavior: 'smooth' });
              }, 150);
            }}
          >
            <button 
              className="inline-flex items-center gap-2 bg-[#090D16] hover:bg-[#D97706] text-white px-5 py-3 md:px-7 md:py-3.5 text-xs font-ui font-bold tracking-[0.16em] uppercase rounded-md shadow-md hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
            >
              <span><span className="hidden sm:inline">GET A </span>QUOTE</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;