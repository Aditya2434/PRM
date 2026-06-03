// src/components/layout/TopBar.tsx
import { FaLinkedinIn } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-[#1e3a5f] text-white py-2 sm:py-2.5 border-b border-white/10 relative overflow-hidden">
      {/* Industrial diagonal stripe overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(255,255,255,0.02)_20px,rgba(255,255,255,0.02)_40px)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#e63946]/15 via-transparent to-[#152d4a]/40 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center max-w-7xl relative z-10 gap-2 sm:gap-0">

        {/* Left Side: Tagline */}
        <div className="flex flex-row items-start sm:items-center justify-center w-full sm:w-auto text-center sm:text-left px-2 sm:px-0">
          
          {/* Desktop Pulse Indicator */}
          <div className="hidden sm:flex relative h-2 w-2 shrink-0 mr-3 mt-1 sm:mt-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e63946] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e63946]"></span>
          </div>
          
          {/* Intelligent Responsive Typography */}
          <span className="text-gray-300 text-[9px] sm:text-[11px] tracking-wide font-medium leading-[1.6] sm:leading-tight">
            <span className="text-white font-bold block sm:inline mb-0.5 sm:mb-0 uppercase tracking-widest sm:tracking-normal sm:uppercase-none">
              Paragon Refractories and Minerals
            </span>
            <span className="hidden sm:inline text-[#e63946] mx-2">•</span>
            <span className="opacity-80">
              Manufacturer of Reheating Furnace, Refractories and Reheating Furnace Materials
            </span>
          </span>
        </div>

        {/* Right Side: Functional LinkedIn Link */}
        <div className="flex items-center shrink-0 w-full sm:w-auto justify-center sm:justify-end border-t border-white/5 sm:border-none pt-2 sm:pt-0 mt-0.5 sm:mt-0">
          <a
            href="https://www.linkedin.com/company/110518013/admin/page-posts/published/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 sm:px-4 py-1.5 bg-white/5 hover:bg-[#e63946] border border-white/10 hover:border-[#e63946] rounded-full transition-all duration-300 shadow-sm"
            aria-label="LinkedIn"
          >
            {/* Mobile Pulse Indicator inside the pill */}
            <span className="relative flex h-1.5 w-1.5 shrink-0 sm:hidden">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e63946] group-hover:bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#e63946] group-hover:bg-white transition-colors"></span>
            </span>
            
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
              Follow Us
            </span>
            <FaLinkedinIn className="w-3.5 h-3.5 text-[#e63946] group-hover:text-white transition-colors" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;