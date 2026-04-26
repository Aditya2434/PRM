// src/components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navLinks";
import CustomButton from "@/components/ui/CustomButton";
import logo from "@/assets/logo.png";

const submenuData: Record<string, { name: string; href: string }[]> = {
  "ABOUT US": [
    { name: "Our Story", href: "/#about" },
    { name: "Team", href: "/#team" },
    { name: "Careers", href: "/#careers" },
  ],
  PRODUCTS: [
    { name: "Refractory Materials", href: "/products/refractory-materials" },
    { name: "Industrial Equipment", href: "/products/industrial-equipment" },
    { name: "Cast Iron Parts", href: "/products/cast-iron-parts" },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 w-full flex flex-col items-center transition-all duration-300 pointer-events-none -mb-[100px] ${scrolled ? "pt-1.5" : "pt-2"}`}
    >
      <nav
        className={`pointer-events-auto transition-all duration-300 flex justify-between items-center px-6 lg:px-12
          bg-[#0f172a] text-white w-[95%] md:w-[80%] lg:w-max mx-auto lg:gap-16
          ${scrolled ? "py-1.5 shadow-lg bg-[#0f172a]/95 backdrop-blur-md" : "py-2"}
          ${isOpen ? "rounded-t-3xl rounded-b-none" : "rounded-full shadow-md"} 
        `}
      >
        <div className="flex items-center shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="Paragon Logo"
              className="h-9 lg:h-10 w-auto object-contain bg-white/10 rounded-sm p-1 cursor-pointer"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
          {navLinks.map((link: any) => {
            const subItems = submenuData[link.name];
            const isDirectPage =
              link.name === "SERVICES" ||
              link.name === "PROJECTS" ||
              link.name === "CONTACT";
            const hasSubmenu =
              !isDirectPage &&
              link.hasDropdown &&
              subItems &&
              subItems.length > 0;
            const linkHref = isDirectPage
              ? link.href
              : hasSubmenu
                ? "#"
                : link.href || "#";

            return (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {hasSubmenu ? (
                  <Link
                    to={linkHref}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDropdown(
                        activeDropdown === link.name ? null : link.name,
                      );
                    }}
                    className="relative flex items-center gap-1 text-[12px] font-bold text-white uppercase tracking-wider hover:text-[#e63946] transition-colors py-1.5"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e63946] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <Link
                    to={linkHref}
                    className="relative flex items-center gap-1 text-[12px] font-bold text-white uppercase tracking-wider hover:text-[#e63946] transition-colors py-1.5"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e63946] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}

                {hasSubmenu && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-60 bg-white shadow-xl rounded-sm overflow-hidden py-2 mt-3 border-t-2 border-[#e63946]"
                      >
                        {subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-[#e63946] hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-[#e63946]"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-[#e63946] transition-colors focus:outline-none ml-auto py-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto lg:hidden w-[95%] md:w-[80%] bg-[#0f172a] rounded-b-3xl overflow-hidden shadow-xl border-t border-white/10"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link: any) => {
                const subItems = submenuData[link.name];
                const isDirectPage =
                  link.name === "SERVICES" ||
                  link.name === "PROJECTS" ||
                  link.name === "CONTACT";
                const hasSubmenu =
                  !isDirectPage &&
                  link.hasDropdown &&
                  subItems &&
                  subItems.length > 0;
                const linkHref = isDirectPage ? link.href : link.href || "#";

                return (
                  <div
                    key={link.name}
                    className="border-b border-white/5 last:border-0 pb-2"
                  >
                    {hasSubmenu ? (
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name,
                          )
                        }
                        className="w-full flex justify-between items-center py-1"
                      >
                        <span className="text-white font-bold uppercase tracking-wider text-sm hover:text-[#e63946] transition-colors text-left">
                          {link.name}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""} text-white/70`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={linkHref}
                        className="block w-full text-white font-bold uppercase tracking-wider text-sm hover:text-[#e63946] transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}

                    <AnimatePresence>
                      {hasSubmenu && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 ml-4 flex flex-col gap-2 pl-4 border-l border-white/20">
                            {subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block text-gray-300 text-sm hover:text-white py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="pt-3 mt-1">
                <Link
                  to="/contact"
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <CustomButton className="w-full bg-[#e63946] hover:bg-white hover:text-[#e63946] text-white font-bold py-2.5 uppercase tracking-widest text-xs transition-colors rounded-xl">
                    Get a Quote
                  </CustomButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;