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
import ProductsSection from '@/components/sections/ProductsSection';
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
      className={`fixed bottom-6 right-6 w-12 h-12 bg-[#c49a3c] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#9a7530] z-50 ${
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
  // Handle scrolling on page load (Top or Specific hash)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Rich combined Schema for Google SEO (LocalBusiness, WebSite & Organization)
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.paragonrefractoriesandminerals.com/#website",
        "url": "https://www.paragonrefractoriesandminerals.com/",
        "name": "Paragon Refractories and Minerals",
        "alternateName": ["Paragon Refractories & Minerals", "PRM"],
        "description": "Leading Reheating Furnace Manufacturer & Refractory Supplier in India"
      },
      {
        "@type": "Organization",
        "@id": "https://www.paragonrefractoriesandminerals.com/#organization",
        "name": "Paragon Refractories and Minerals",
        "url": "https://www.paragonrefractoriesandminerals.com/",
        "logo": "https://www.paragonrefractoriesandminerals.com/src/assets/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/paragon-refractories-minerals"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919932317334",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["en", "Hindi", "Bengali"]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.paragonrefractoriesandminerals.com/#localbusiness",
        "name": "Paragon Refractories and Minerals",
        "image": "https://www.paragonrefractoriesandminerals.com/images/refractory_hero.jpg",
        "telephone": ["+919932317334", "+918158884204"],
        "email": "paragonrefractories22@gmail.com",
        "url": "https://www.paragonrefractoriesandminerals.com/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Durgapur",
          "addressLocality": "Durgapur",
          "addressRegion": "West Bengal",
          "postalCode": "713201",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.5204,
          "longitude": 87.3119
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Reheating Furnace Manufacturer & Refractory Supplier in India | Paragon Refractories and Minerals"
        description="Paragon Refractories & Minerals (PRM) is India's leading manufacturer of reheating furnaces, high-alumina bricks, castables, and heat-resistant cast iron components."
        keywords="reheating furnace manufacturer, refractory materials manufacturer, high alumina bricks 80%, industrial furnace supplier India, cast iron furnace parts, continuous pusher furnace, refractory castables Durgapur West Bengal"
        url="/"
        schema={combinedSchema}
      />
      {/* Header Area */}
      <TopBar />
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ProjectsSection />
        <ProductsSection />
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