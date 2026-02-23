import { socialLinks } from '@/data/navLinks';
import { FaLinkedinIn } from 'react-icons/fa';

// Map icons to the components imported from react-icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedinIn, // Only mapping LinkedIn now
};

const TopBar = () => {
  return (
    <div className="bg-[#1e3a5f] text-white py-2.5 border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs max-w-7xl">
        
        {/* Left Side: Tagline */}
        <div className="mb-2 sm:mb-0">
          <span className="italic opacity-80 text-[11px] tracking-wider font-medium">
            Paragon Refractories and Minerals - Excellence in Industrial Solutions
          </span>
        </div>
        
        {/* Right Side: Social Media Icons Only */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            if (!Icon) return null;
            
            return (
              <a
                key={social.name}
                href={social.href}
                target={social.name === 'LinkedIn' ? '_blank' : '_self'}
                rel={social.name === 'LinkedIn' ? 'noopener noreferrer' : ''}
                className="text-white/80 hover:text-[#e63946] hover:scale-110 transition-all duration-300 flex items-center gap-2"
                aria-label={social.name}
              >
                <Icon className="w-4 h-4" />
                {/* Optional: Add text next to the icon since it's the only one */}
                <span className="hidden sm:inline font-semibold uppercase tracking-wider">Follow Us</span>
              </a>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default TopBar;