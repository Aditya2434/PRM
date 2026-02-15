import { topBarLinks, socialLinks } from '@/data/navLinks';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

// Map icons to the components imported from react-icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
};

const TopBar = () => {
  return (
    <div className="bg-[#1e3a5f] text-white py-2.5 border-b border-white/5">
      {/* Applied px-10 (40px) and lg:px-20 (80px) to match the Header section */}
      <div className="container mx-auto px-10 lg:px-20 flex flex-col sm:flex-row justify-between items-center text-xs">
        {/* Left Side: Tagline */}
        <div className="mb-2 sm:mb-0">
          <span className="italic opacity-80 text-[10px] tracking-wider">
            We help the world growing since 1983
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <div className="flex gap-4">
            {topBarLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.15em] uppercase hover:text-[#e63946] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Social Media Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              // Safety check to ensure the icon exists in the map
              if (!Icon) return null;
              
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="hover:text-[#e63946] transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;