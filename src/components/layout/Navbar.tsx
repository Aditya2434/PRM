import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/data/navLinks';
import CustomButton from '@/components/ui/CustomButton';
import logo from '@/assets/logo.png';

// 1. Define Submenu Data locally
const submenuData: Record<string, { name: string; href: string }[]> = {
  'ABOUT US': [
    { name: 'Our Story', href: '#story' },
    { name: 'Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
  ],
  'SERVICES': [
    { name: 'Refractories', href: '#refractories' },
    { name: 'Minerals', href: '#minerals' },
    { name: 'Consulting', href: '#consulting' },
  ],
  'PROJECTS': [
    { name: 'Industrial', href: '#industrial' },
    { name: 'Eco-Friendly', href: '#eco' },
    { name: 'Manufacturing', href: '#manufacturing' },
  ],
  'PRODUCTS': [
    { name: 'Refractory Materials', href: '#refractory-materials' },
    { name: 'Industrial Equipment', href: '#industrial-equipment' },
    { name: 'Cast Iron Parts', href: '#cast-iron-parts' },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // Wrapper for sticky positioning with floating overlap (-mb-20)
    <div className={`sticky top-0 z-40 w-full flex flex-col items-center transition-all duration-300 pointer-events-none -mb-20 ${scrolled ? 'pt-2' : 'pt-4'}`}>
      
      {/* Main Navbar Pill */}
      <nav
        className={`pointer-events-auto transition-all duration-300 flex justify-between items-center px-6 lg:px-8
          bg-[#0f172a] text-white w-[95%] lg:max-w-7xl mx-auto
          ${scrolled ? 'py-2 shadow-lg bg-[#0f172a]/95 backdrop-blur-md' : 'py-3'}
          ${isOpen ? 'rounded-t-3xl rounded-b-none' : 'rounded-full shadow-md'} 
        `}
      >
        
        {/* Left: Logo - Filters removed to ensure visibility */}
        <div className="flex items-center shrink-0">
          <img 
            src={logo} 
            alt="Paragon Logo" 
            className="h-12 w-auto object-contain bg-white/10 rounded-sm p-1" 
          />
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
          {navLinks.map((link: any) => {
            const subItems = submenuData[link.name];
            const hasSubmenu = link.hasDropdown && subItems && subItems.length > 0;

            return (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href || '#'} 
                  className="relative flex items-center gap-1 text-[12px] font-bold text-white uppercase tracking-wider hover:text-[#e63946] transition-colors py-2"
                >
                  {link.name}
                  {hasSubmenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                  
                  {/* Animated Underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e63946] transition-all duration-300 group-hover:w-full" />
                </a>

                {/* Desktop Dropdown Menu */}
                {hasSubmenu && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-sm overflow-hidden py-2 mt-4 border-t-2 border-[#e63946]"
                      >
                        {subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 text-sm font-medium text-gray-600 hover:text-[#e63946] hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-[#e63946]"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Search Bar (Desktop) & Menu Toggle (Mobile) */}
        <div className="flex items-center gap-4">
          
          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center relative group">
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-4 pr-10 py-1.5 w-40 focus:w-60 transition-all duration-300 bg-white/10 border border-white/10 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/30"
            />
            <Search className="absolute right-3 w-4 h-4 text-gray-400 group-hover:text-white transition-colors pointer-events-none" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-[#e63946] transition-colors focus:outline-none ml-auto"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto lg:hidden w-[95%] bg-[#0f172a] rounded-b-3xl overflow-hidden shadow-xl border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              
              {/* Mobile Search Bar */}
              <div className="relative mb-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-4 pr-10 py-2 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/20"
                />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>

              {navLinks.map((link: any) => {
                const subItems = submenuData[link.name];
                const hasSubmenu = link.hasDropdown && subItems && subItems.length > 0;

                return (
                  <div key={link.name} className="border-b border-white/5 last:border-0 pb-2">
                    <div className="flex justify-between items-center">
                      <a
                        href={link.href || '#'} 
                        className="text-white font-bold uppercase tracking-wider text-sm hover:text-[#e63946] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                      {hasSubmenu && (
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="text-white/70 hover:text-white"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {hasSubmenu && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 ml-4 flex flex-col gap-2 pl-4 border-l border-white/20"
                      >
                        {subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="text-gray-300 text-sm hover:text-white py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-4 mt-2">
                <a href="/contact" className="block w-full">
                  <CustomButton 
                    className="w-full bg-[#e63946] hover:bg-white hover:text-[#e63946] text-white font-bold py-3 uppercase tracking-widest text-xs transition-colors rounded-xl"
                  >
                    Get a Quote
                  </CustomButton>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;