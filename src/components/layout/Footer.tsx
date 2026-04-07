// src/components/layout/Footer.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Send } from 'lucide-react';
import { services } from '@/data/services';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] text-white pt-20">
      {/* Updated padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="container mx-auto px-12 lg:px-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Paragon Refractories and Minerals Logo" 
                className="h-12 w-auto object-contain" 
              />
              <div className="flex flex-col border-l border-gray-700 pl-3">
                <span className="text-sm font-bold leading-tight tracking-tight uppercase">PARAGON REFRACTORIES</span>
                <span className="text-[9px] font-bold text-[#e63946] tracking-[0.2em] uppercase">AND MINERALS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Providing world-class industrial solutions and minerals. Our commitment 
              to excellence ensures sustainable progress for our global partners.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#1e3a5f]/40 border border-gray-800 flex items-center justify-center hover:bg-[#e63946] hover:border-[#e63946] transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#e63946]" />
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a 
                    href="#services"
                    className="text-sm text-gray-400 hover:text-[#e63946] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-[#e63946] transition-colors" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#e63946]" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/products/refractory-material"
                  className="text-sm text-gray-400 hover:text-[#e63946] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-[#e63946] transition-colors" />
                  Refractory Material
                </a>
              </li>
              <li>
                <a 
                  href="/products/industrial-equipments"
                  className="text-sm text-gray-400 hover:text-[#e63946] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-[#e63946] transition-colors" />
                  Industrial Equipments
                </a>
              </li>
              <li>
                <a 
                  href="/products/cast-iron-parts"
                  className="text-sm text-gray-400 hover:text-[#e63946] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-[#e63946] transition-colors" />
                  Cast Iron Parts
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Subscribe
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#e63946]" />
            </h4>
            <p className="text-sm text-gray-400 mb-6 font-medium">
              Stay updated with our latest industrial news and mineral sourcing updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-gray-800 text-white text-sm focus:outline-none focus:border-[#e63946] transition-colors"
              />
              <button className="px-5 py-3 bg-[#e63946] hover:bg-white hover:text-[#e63946] transition-all duration-300">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#0a1520] py-8">
        {/* Updated padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
        <div className="container mx-auto px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} <span className="text-gray-300">Paragon Refractories and Minerals</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-gray-500 tracking-widest uppercase">
            {/* Added link to /privacy-policy */}
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;