import { Mail, Phone } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import logo from '@/assets/logo.png';

const Header = () => {
  return (
    <div className="bg-white py-5 border-b border-gray-100">
      {/* Updated the padding here: px-10 (40px) for mobile, lg:px-20 (80px) for desktop */}
      <div className="container mx-auto px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Company Name */}
        <div className="flex items-center gap-3 mb-4 md:mb-0 group cursor-pointer">
          <img 
            src={logo} 
            alt="Paragon Refractories and Minerals" 
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex flex-col border-l border-gray-300 pl-3">
            <span className="text-xl md:text-2xl font-serif font-bold text-[#1e3a5f] leading-none tracking-tight">
              Paragon Refractories
            </span>
            <span className="text-[11px] md:text-xs font-sans font-bold text-[#e63946] leading-none tracking-[0.25em] uppercase mt-1">
              And Minerals
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-gray-100">
              <Mail className="w-4 h-4 text-[#e63946]" />
            </div>
            <div className="text-sm">
              <p className="text-gray-400 font-medium uppercase text-[9px] tracking-widest">Email Support</p>
              <p className="font-bold text-[#1e3a5f] text-xs">info@petro.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-gray-100">
              <Phone className="w-4 h-4 text-[#e63946]" />
            </div>
            <div className="text-sm">
              <p className="text-gray-400 font-medium uppercase text-[9px] tracking-widest">Call Support</p>
              <p className="font-bold text-[#1e3a5f] text-xs">+62 123 6700 411</p>
            </div>
          </div>

          <CustomButton 
            variant="primary" 
            className="bg-[#e63946] hover:bg-[#1e3a5f] text-white px-7 py-5 text-[11px] font-bold tracking-widest rounded-none transition-all duration-300"
          >
            GET A QUOTE
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Header;