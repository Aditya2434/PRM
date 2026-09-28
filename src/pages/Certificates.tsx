// src/pages/Certificates.tsx
import { useEffect } from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CertificatesSection from '@/components/sections/CertificatesSection';

const Certificates = () => {
  // Scroll to top on page load
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const certificatesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.paragonrefractoriesandminerals.com/certificates/#webpage",
        "url": "https://www.paragonrefractoriesandminerals.com/certificates",
        "name": "Quality Certifications & Statutory Accreditations | Paragon Refractories and Minerals",
        "description": "Review verified statutory compliance, DGFT Importer-Exporter Code (IEC), and permanent municipal trade licenses of Paragon Refractories and Minerals.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.paragonrefractoriesandminerals.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Certificates",
              "item": "https://www.paragonrefractoriesandminerals.com/certificates"
            }
          ]
        }
      },
      {
        "@type": "GovernmentPermit",
        "name": "PRM Permanent Trade License (Form IV)",
        "permitType": "Municipal Commercial & Industrial Enrolment",
        "validFrom": "2026",
        "validUntil": "2029",
        "issuedBy": {
          "@type": "GovernmentOrganization",
          "name": "Municipal Commercial Licensing Authority, West Bengal"
        }
      },
      {
        "@type": "GovernmentPermit",
        "name": "DGFT Importer-Exporter Code (IEC)",
        "permitType": "Permanent Cross-Border Foreign Trade Permit",
        "issuedBy": {
          "@type": "GovernmentOrganization",
          "name": "Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry, Government of India"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-500 selection:text-white">
      <SEO
        title="Quality Certifications & DGFT Accreditations | Paragon Refractories and Minerals"
        description="Review our verified statutory compliance, permanent municipal trade licenses, and DGFT Importer-Exporter Code (IEC) authorizing global supply of refractories and furnace equipment."
        keywords="PRM trade license, DGFT IEC certificate, refractory quality certificates, industrial furnace manufacturer compliance, steel plant vendor credentials, Durgapur refractory accreditation"
        url="/certificates"
        schema={certificatesSchema}
      />

      {/* Header Area */}
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