export interface NavLink {
  name: string;
  href: string;
  hasDropdown: boolean;
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: 'HOME', href: '/', hasDropdown: false }, 
  { name: 'ABOUT US', href: '/about', hasDropdown: false },
  { name: 'SERVICES', href: '/services', hasDropdown: false }, 
  { name: 'PROJECTS', href: '/projects', hasDropdown: false }, // <-- Updated
  { name: 'OUR CLIENTS', href: '/#clients', hasDropdown: false },
  { name: 'PRODUCTS', href: '#', hasDropdown: true },
  { name: 'CONTACT', href: '/#contact', hasDropdown: false },
];

export const topBarLinks: Omit<NavLink, 'hasDropdown'>[] = [
  { name: 'Career', href: '#' },
  { name: 'Give Feedback', href: '#' },
  { name: 'Contact Us', href: '/#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', icon: 'FaLinkedinIn', href: 'https://www.linkedin.com/company/110518013/' },
];