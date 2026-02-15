import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks } from '@/data/navLinks';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile'; // Fixed import name here
import CustomButton from '@/components/ui/CustomButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile(); // Fixed usage here

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-100',
        isScrolled ? 'shadow-md py-2' : 'py-4'
      )}
    >
      {/* Padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="container mx-auto px-12 lg:px-24 flex justify-between items-center">
        
        {/* Mobile Logo (Visible only on scroll or mobile) */}
        <div className={cn("transition-opacity duration-300", isScrolled ? "opacity-100" : "opacity-0 hidden md:block")}>
           <span className="text-xl font-bold text-[#1e3a5f]">PARAGON</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 w-full justify-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="flex items-center gap-1 text-[13px] font-bold text-[#1e3a5f] hover:text-[#e63946] transition-colors uppercase tracking-wider py-4"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} strokeWidth={3} />}
              </a>
              
              {/* Dropdown (Simple implementation) */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg border-t-2 border-[#e63946] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#e63946] border-b border-gray-100">Option 1</a>
                  <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#e63946] border-b border-gray-100">Option 2</a>
                  <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#e63946]">Option 3</a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#1e3a5f]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-8 py-4 text-sm font-bold text-[#1e3a5f] border-b border-gray-50 hover:bg-gray-50 hover:text-[#e63946] uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="p-8">
              <CustomButton variant="primary" className="w-full justify-center">GET A QUOTE</CustomButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;