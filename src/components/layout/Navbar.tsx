// src/components/layout/Navbar.tsx
// Unified Premium Navigation — translucent glassmorphic design
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { navLinks } from "@/data/navLinks";
import logo from "@/assets/logo.png";

const submenuData: Record<string, { name: string; href: string }[]> = {
  PRODUCTS: [
    { name: "Refractory Materials", href: "/products/refractory-materials#first-product" },
    { name: "Industrial Equipment", href: "/products/industrial-equipment#first-product" },
    { name: "Cast Iron Parts", href: "/products/cast-iron-parts#first-product" },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(href.substring(2));
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* ── Top Announcement Bar ──────────────────────────────── */}
      <div
        className={`bg-[#090D16] text-white transition-all duration-500 overflow-hidden border-b border-white/5 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between h-12 gap-4">

          {/* Left — Brand tagline */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="text-[10.5px] text-slate-300 font-medium tracking-wide hidden sm:block">
              <span className="text-white font-bold tracking-wider">PARAGON REFRACTORIES &amp; MINERALS</span>
              <span className="text-amber-500 mx-2">/</span>
              <span className="text-slate-400">ISO 9001:2015 Certified High-Temperature Thermal Engineering</span>
            </span>
            <span className="text-[10.5px] text-slate-300 font-medium tracking-wide sm:hidden">
              Paragon Refractories &amp; Minerals
            </span>
          </div>

          {/* Right — Phone + CTA + LinkedIn */}
          <div className="flex items-center gap-3 shrink-0">

            {/* Phone */}
            <a
              href="tel:+919932317334"
              className="hidden md:flex items-center gap-2 group"
            >
              <span className="w-6 h-6 rounded-full bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center transition-colors duration-200">
                <Phone className="w-3 h-3 text-amber-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
              </span>
              <span className="font-mono text-[10px] font-bold text-slate-300 group-hover:text-white tracking-wide transition-colors">
                +91 99323 17334
              </span>
            </a>

            {/* Divider */}
            <span className="hidden md:block w-px h-4 bg-white/10" />

            {/* Get A Quote CTA */}
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-[#090D16] px-3.5 py-1 rounded text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
            >
              Get A Quote
            </Link>

            {/* Divider */}
            <span className="hidden sm:block w-px h-4 bg-white/10" />

            {/* Social Links: Facebook & LinkedIn */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline font-mono font-medium tracking-widest uppercase text-[9.5px] text-slate-400">Follow Us</span>
              <a
                href="https://www.facebook.com/profile.php?id=61589326615080"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3 h-3 text-amber-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/110518013/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3 h-3 text-amber-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Main Navigation Bar ───────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/75 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(15,23,42,0.14),0_0_0_1px_rgba(255,255,255,0.55)] border-b border-white/40"
            : "bg-white/88 backdrop-blur-xl border-b border-slate-200/60"
        }`}
      >
        {/* Gradient shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3.5 shrink-0 group"
          >
            <div className="relative">
              {/* Amber glow on hover */}
              <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
              <img
                src={logo}
                alt="Paragon Refractories and Minerals"
                className="relative h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col border-l border-slate-300/70 pl-3.5">
              <span className="font-display text-base lg:text-lg font-extrabold text-[#090D16] leading-tight tracking-tight uppercase">
                Paragon
              </span>
              <span className="font-mono text-[9px] font-bold tracking-[0.22em] text-[#D97706] uppercase mt-0.5">
                Refractories &amp; Minerals
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link: any) => {
              const subItems = submenuData[link.name];
              const hasSubmenu = link.hasDropdown && subItems && subItems.length > 0;
              const linkHref = hasSubmenu ? "#" : link.href || "#";
              const active = isActive(link.href);

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {hasSubmenu ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.name ? null : link.name)
                      }
                      className={`relative flex items-center gap-1.5 px-4 py-2 rounded-md text-[11px] font-ui font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                        active
                          ? "text-[#D97706] bg-amber-50"
                          : "text-slate-700 hover:text-[#090D16] hover:bg-slate-100/70"
                      }`}
                    >
                      {active && (
                        <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500" />
                      )}
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180 text-[#D97706]" : "text-slate-400"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={linkHref}
                      onClick={(e) => handleNavClick(e, linkHref)}
                      className={`relative flex items-center gap-1 px-4 py-2 rounded-md text-[11px] font-ui font-semibold uppercase tracking-[0.14em] transition-all duration-200 group ${
                        active
                          ? "text-[#D97706] bg-amber-50"
                          : "text-slate-700 hover:text-[#090D16] hover:bg-slate-100/70"
                      }`}
                    >
                      {active && (
                        <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500" />
                      )}
                      {link.name}
                      <span
                        className={`absolute bottom-1 left-4 right-4 h-[1.5px] bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-transform duration-200 origin-left ${
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  )}

                  {/* Dropdown */}
                  {hasSubmenu && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-3 w-64 bg-white/90 backdrop-blur-xl border border-white/60 rounded-xl shadow-[0_20px_48px_-8px_rgba(15,23,42,0.16),0_0_0_1px_rgba(217,119,6,0.08)] overflow-hidden"
                        >
                          <div className="h-[2px] bg-gradient-to-r from-[#D97706] via-amber-400 to-transparent" />
                          {subItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-between px-5 py-3.5 text-[11px] font-semibold text-slate-600 hover:text-[#090D16] hover:bg-amber-50/60 transition-all duration-150 border-b border-slate-100/60 last:border-0 group"
                            >
                              <span className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-500 transition-colors shrink-0" />
                                {item.name}
                              </span>
                              <ArrowUpRight className="w-3 h-3 text-slate-300 group-hover:text-amber-500 transition-all opacity-0 group-hover:opacity-100" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop — empty right slot (CTA moved to top bar) */}
          <div className="hidden lg:flex items-center" />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:text-[#D97706] hover:bg-slate-100/80 transition-all duration-200 -mr-1"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ───────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Panel — dark premium */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full z-50 lg:hidden shadow-2xl overflow-y-auto flex flex-col bg-[#090D16]"
            >
              {/* Panel Header */}
              <div className="relative flex items-center justify-between px-6 h-20 border-b border-white/8 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent pointer-events-none" />
                <div className="relative flex items-center gap-3">
                  <img src={logo} alt="PRM" className="h-8 w-auto object-contain brightness-0 invert opacity-80" />
                  <span className="font-display text-sm font-bold text-white tracking-wide">Navigation</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="relative w-8 h-8 flex items-center justify-center rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Items */}
              <div className="px-4 py-4 flex flex-col gap-0.5 flex-1">
                {navLinks.map((link: any) => {
                  const subItems = submenuData[link.name];
                  const hasSubmenu = link.hasDropdown && subItems && subItems.length > 0;
                  const linkHref = link.href || "#";

                  return (
                    <div key={link.name}>
                      {hasSubmenu ? (
                        <>
                          <button
                            onClick={() =>
                              setActiveDropdown(activeDropdown === link.name ? null : link.name)
                            }
                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-[11px] font-ui font-bold uppercase tracking-[0.14em] text-slate-300 hover:text-white hover:bg-white/8 transition-all"
                          >
                            {link.name}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                activeDropdown === link.name ? "rotate-180 text-amber-400" : "text-slate-500"
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="py-1 pl-4 border-l-2 border-amber-500/30 ml-4 mb-2 mt-1 space-y-0.5">
                                  {subItems.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-2 py-2 px-3 rounded-md text-[11px] font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-amber-500/50 shrink-0" />
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={linkHref}
                          onClick={(e) => handleNavClick(e, linkHref)}
                          className={`flex items-center px-4 py-3 rounded-lg text-[11px] font-ui font-bold uppercase tracking-[0.14em] transition-all ${
                            isActive(linkHref)
                              ? "text-amber-400 bg-amber-500/10"
                              : "text-slate-300 hover:text-white hover:bg-white/8"
                          }`}
                        >
                          {isActive(linkHref) && (
                            <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 shrink-0" />
                          )}
                          {link.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile CTA Footer */}
              <div className="px-4 py-5 border-t border-white/8 space-y-3 shrink-0 bg-black/20">
                <a
                  href="tel:+919932317334"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <span className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                    <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Call Us</div>
                    <div className="text-sm font-semibold text-white">+91 99323 17334</div>
                  </div>
                </a>
                <a
                  href="mailto:paragonrefractories@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <span className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                    <Mail className="w-3.5 h-3.5" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Email Us</div>
                    <div className="text-xs font-semibold text-white break-all">paragonrefractories@gmail.com</div>
                  </div>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-[#090D16] py-3.5 rounded-lg font-ui text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-lg shadow-amber-900/40 mt-1"
                >
                  Get A Quote
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-medium">Follow Us:</span>
                  <a
                    href="https://www.facebook.com/profile.php?id=61589326615080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 hover:bg-[#D97706] hover:text-white hover:border-[#D97706] transition-all"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/110518013/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 hover:bg-[#D97706] hover:text-white hover:border-[#D97706] transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;