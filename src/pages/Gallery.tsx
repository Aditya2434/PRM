// src/pages/Gallery.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Factory, 
  Flame, 
  ShieldCheck 
} from 'lucide-react';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GallerySection from '@/components/sections/GallerySection';

const Gallery = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const gallerySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageGallery",
        "@id": "https://www.paragonrefractoriesandminerals.com/gallery/#gallery",
        "url": "https://www.paragonrefractoriesandminerals.com/gallery",
        "name": "Industrial Plant & Product Gallery | Paragon Refractories and Minerals",
        "description": "Visual archive of Paragon Refractories and Minerals displaying heavy refractory manufacturing facilities, continuous reheating furnace projects, and foundry castings.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.paragonrefractoriesandminerals.com/gallery/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.paragonrefractoriesandminerals.com/" },
          { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://www.paragonrefractoriesandminerals.com/gallery" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-500 selection:text-white">
      <SEO 
        title="Industrial Plant & Product Gallery | Paragon Refractories and Minerals"
        description="Explore our visual gallery showing manufacturing facilities, active reheating furnace projects, high-alumina bricks, and custom cast iron parts in production."
        keywords="refractory products photos, industrial furnace manufacturing images, steel plant setup gallery, casting parts photos"
        url="/gallery"
        schema={gallerySchema}
      />
      
      <Navbar />

      <main className="flex-grow">
        
        {/* ══════════════════════════════════════════════════════════════
            1. BRIGHT ARCHITECTURAL HERO SECTION (CENTER-ALIGNED)
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-18 border-b border-slate-200/80 overflow-hidden bg-slate-50">
          
          {/* Subtle Full-Bleed Background Image with Frosted Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/gallery_hero.jpg"
              alt="Paragon Refractories and Minerals Manufacturing Gallery"
              className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] opacity-20"
            />
            {/* Soft Luminous Frosted Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-slate-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80" />
          </div>

          {/* Blueprint Grid & Warm Ambient Radial Glows */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none z-0" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="container mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
            
            {/* Breadcrumb Navigation (Center-Aligned) */}
            <nav aria-label="breadcrumb" className="mb-5 flex justify-center">
              <ol className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                <li>
                  <Link to="/" className="hover:text-[#090D16] transition-colors">Home</Link>
                </li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <li className="text-[#D97706] font-semibold">Gallery</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Category Eyebrow Pill (Center-Aligned) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D97706] font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                <span>Visual Archive &amp; Field Execution</span>
              </div>

              {/* Authoritative Display Headline (Center-Aligned) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-6 leading-[1.10] tracking-tight">
                Industrial Plant &amp;{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#B45309]">
                  Manufacturing Visuals.
                </span>
              </h1>

              {/* Narrative Subtext (Center-Aligned) */}
              <p className="font-ui text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-8">
                Explore authentic high-definition photographs from our refractory brick production lines, heavy reheating furnace construction sites, and foundry casting divisions across India.
              </p>

              {/* Verified Badges Strip (Center-Aligned) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Factory className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>FACILITIES: <strong>3 PRODUCTION UNITS</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Flame className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>METALLURGY: <strong>1850°C THERMAL PEAK</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>QUALITY: <strong>100% VERIFIED FIELD QA</strong></span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Hairline Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </section>

        {/* Gallery Grid */}
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;