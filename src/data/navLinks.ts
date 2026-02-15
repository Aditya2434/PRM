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
  { name: 'HOME', href: '#', hasDropdown: true },
  { name: 'ABOUT US', href: '#about', hasDropdown: true },
  { name: 'SERVICES', href: '#services', hasDropdown: true },
  { name: 'PAGES', href: '#', hasDropdown: true },
  { name: 'PROJECTS', href: '#projects', hasDropdown: true },
  { name: 'NEWS', href: '#news', hasDropdown: true },
  { name: 'CONTACT', href: '#contact', hasDropdown: true },
];

export const topBarLinks: Omit<NavLink, 'hasDropdown'>[] = [
  { name: 'Career', href: '#' },
  { name: 'Give Feedback', href: '#' },
  { name: 'Contact Us', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', icon: 'FaFacebookF', href: '#' },
  { name: 'Twitter', icon: 'FaTwitter', href: '#' },
  { name: 'Instagram', icon: 'FaInstagram', href: '#' },
  { name: 'Pinterest', icon: 'FaPinterestP', href: '#' },
];
