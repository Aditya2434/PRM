// src/components/layout/TopBar.tsx
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-[#090D16] text-white py-2 sm:py-2.5 border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center max-w-7xl relative z-10 gap-2 sm:gap-0">

        {/* Left Side: Tagline */}
        <div className="flex flex-row items-start sm:items-center justify-center w-full sm:w-auto text-center sm:text-left px-2 sm:px-0">
          
          {/* Desktop Pulse Indicator */}
          <div className="hidden sm:flex relative h-2 w-2 shrink-0 mr-3 mt-1 sm:mt-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97706]"></span>
          </div>
          
          {/* Intelligent Responsive Typography */}
          <span className="text-slate-300 text-[9px] sm:text-[11px] tracking-wide font-medium leading-[1.6] sm:leading-tight">
            <span className="text-white font-bold block sm:inline mb-0.5 sm:mb-0 uppercase tracking-widest sm:tracking-normal font-display">
              PARAGON REFRACTORIES &amp; MINERALS
            </span>
            <span className="hidden sm:inline text-amber-500 mx-2">•</span>
            <span className="text-slate-400">
              ISO 9001:2015 Certified High-Temperature Thermal Engineering
            </span>
          </span>
        </div>

        {/* Right Side: Functional Social Links */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center sm:justify-end border-t border-white/5 sm:border-none pt-2 sm:pt-0 mt-0.5 sm:mt-0">
          <span className="text-[9.5px] font-mono font-bold uppercase tracking-[0.16em] text-slate-400 mr-1">
            Follow Us
          </span>
          <a
            href="https://www.facebook.com/profile.php?id=61589326615080"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-6 h-6 bg-white/5 hover:bg-[#D97706] border border-white/10 hover:border-[#D97706] rounded-full transition-all duration-300 shadow-sm"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-2.5 h-2.5 text-amber-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/company/110518013/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-6 h-6 bg-white/5 hover:bg-[#D97706] border border-white/10 hover:border-[#D97706] rounded-full transition-all duration-300 shadow-sm"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-2.5 h-2.5 text-amber-400 group-hover:text-white transition-colors" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;