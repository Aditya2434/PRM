// src/pages/Gallery.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GallerySection from '@/components/sections/GallerySection';
import { ChevronRight } from 'lucide-react';

const Gallery = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Industrial Plant & Product Gallery | Paragon Refractories and Minerals"
        description="Explore our gallery showing manufacturing facilities, active reheating furnace projects, high-alumina bricks, and custom cast iron parts in production."
        keywords="refractory products photos, industrial furnace manufacturing images, steel plant setup gallery, casting parts photos"
        url="/gallery"
      />
      
      {/* Header Area */}
      <TopBar />
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Premium Hero Banner — Industrial Theme */}
        <section className="relative bg-[#0f172a] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden flex items-center min-h-[55vh]">
          {/* Background Image — Steel Plant Panorama */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/gallery_hero.jpg"
              alt="Industrial Steel Plant Gallery"
              className="w-full h-full object-cover animate-ken-burns"
            />
          </div>
          {/* Multi-layer overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/92 via-[#0f172a]/65 to-[#0f172a]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-[#0f172a]/30" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-60deg,transparent,transparent_30px,rgba(230,57,70,0.03)_30px,rgba(230,57,70,0.03)_31px)] pointer-events-none" />
          {/* Corner brackets */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 border-t-2 border-l-2 border-[#e63946]/60" />
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-16 h-16 border-b-2 border-r-2 border-[#e63946]/60" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 bg-[#e63946]/15 border border-[#e63946]/30 rounded-full px-5 py-1.5 mb-5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e63946] animate-pulse" />
                <span className="text-[#e63946] text-[10px] font-black uppercase tracking-[0.25em]">Visual Showcase</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
                Our Gallery
              </h1>
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#e63946] to-transparent mx-auto mb-6" />
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-white/80 uppercase bg-black/25 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/10">
                <a href="/" className="hover:text-[#e63946] transition-colors duration-300">Home</a>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-[#e63946]">Gallery</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;