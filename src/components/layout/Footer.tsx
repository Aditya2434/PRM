// src/components/layout/Footer.tsx
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';
import { services } from '@/data/services';
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#090D16] text-white">
      {/* Top Accent Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-20 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center gap-3.5">
                <img
                  src={logo}
                  alt="Paragon Refractories and Minerals"
                  className="h-11 w-auto object-contain bg-transparent"
                />
                <div className="flex flex-col border-l border-slate-800 pl-3.5">
                  <span className="font-display text-base font-extrabold text-white leading-tight tracking-tight uppercase">
                    Paragon
                  </span>
                  <span className="font-mono text-[9px] font-bold text-[#D97706] tracking-[0.22em] uppercase mt-0.5">
                    Refractories &amp; Minerals
                  </span>
                </div>
              </div>
            </Link>
            <p className="font-ui text-slate-400 text-sm leading-relaxed font-normal">
              India's premier manufacturer of high-temperature refractory materials, turnkey industrial reheating furnaces, and custom cast iron components since 2000.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.facebook.com/profile.php?id=61589326615080"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#D97706] hover:border-[#D97706] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/110518013/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#D97706] hover:border-[#D97706] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-mono text-[11px] font-bold text-white uppercase tracking-[0.18em] mb-6 pb-3 border-b border-white/10">
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#service-${service.id}`}
                    className="font-ui text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors shrink-0" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-mono text-[11px] font-bold text-white uppercase tracking-[0.18em] mb-6 pb-3 border-b border-white/10">
              Products &amp; Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Refractory Materials', href: '/products/refractory-materials#first-product' },
                { name: 'Industrial Equipment', href: '/products/industrial-equipment#first-product' },
                { name: 'Cast Iron Parts', href: '/products/cast-iron-parts#first-product' },
                { name: 'About Us', href: '/about#industrial-legacy' },
                { name: 'Projects Delivered', href: '/projects#projects-grid' },
                { name: 'Certificates (ISO)', href: '/certificates#certificates-grid' },
                { name: 'Photo Gallery', href: '/gallery#gallery-grid' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="font-ui text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-mono text-[11px] font-bold text-white uppercase tracking-[0.18em] mb-6 pb-3 border-b border-white/10">
              Direct Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+919932317334"
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <div className="font-mono text-[9.5px] text-slate-500 uppercase tracking-widest font-semibold mb-0.5">Phone</div>
                    <span className="font-ui text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
                      +91 99323 17334 / +91 81588 84204
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:paragonrefractories@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <div className="font-mono text-[9.5px] text-slate-500 uppercase tracking-widest font-semibold mb-0.5">Email</div>
                    <span className="font-ui text-sm text-slate-300 group-hover:text-white transition-colors break-all">
                      paragonrefractories@gmail.com
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <div className="font-mono text-[9.5px] text-slate-500 uppercase tracking-widest font-semibold mb-0.5">Headquarters</div>
                  <span className="font-ui text-sm text-slate-300 leading-relaxed">
                    Durgapur, West Bengal,<br />India — 713206
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-5 sm:px-6 lg:px-20 py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-ui text-xs text-slate-500">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-slate-300">Paragon Refractories and Minerals.</span>{' '}
            All Rights Reserved.
          </p>
          <div className="flex gap-6 font-mono text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
            <Link to="/privacy-policy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">
              Support &amp; Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;