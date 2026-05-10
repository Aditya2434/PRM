// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import SEO from '@/components/SEO';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CTASection from '@/components/sections/CTASection';
import PartnersSection from '@/components/sections/PartnersSection';
import ContactStrip from '@/components/sections/ContactStrip';

// Scroll to Top Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 bg-[#e63946] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#c1121f] z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Strict Site Name Schema for Google
  const siteNameSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Paragon Refractories and Minerals",
    "alternateName": ["Paragon Refractories & Minerals", "PRM"],
    "url": "https://www.paragonrefractoriesandminerals.com/"
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Reheating Furnace Manufacturer in India | Refractory Materials & Industrial Equipment"
        description="Paragon Refractories & Minerals (PRM) is a leading reheating furnace manufacturer in India, supplying high-quality refractory materials and industrial equipment."
        keywords="Reheating furnace manufacturer in India, Reheating furnaces, Refractory Materials, Industrial Equipment, Steel Plants, PRM"
        url="/"
        schema={siteNameSchema}
      />
      {/* Header Area */}
      <TopBar />
      <Header />
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <CTASection />
        <PartnersSection />
        <ContactStrip />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;