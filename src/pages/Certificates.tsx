// src/pages/Certificates.tsx
import { useEffect } from 'react';
import SEO from '@/components/SEO';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CertificatesSection from '@/components/sections/CertificatesSection';

const Certificates = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Our Certificates | Paragon Refractories and Minerals"
        description="View the recognitions, quality accreditations, and industry standard certificates of Paragon Refractories & Minerals."
        keywords="Certificates, Quality Accreditations, ISO, PRM, Paragon Refractories"
        url="/certificates"
      />
      
      {/* Header Area */}
      <TopBar />
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <CertificatesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Certificates;