// src/pages/Gallery.tsx
import { useEffect } from 'react';
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
        title="Image Gallery | Paragon Refractories and Minerals"
        description="Explore our gallery to view our advanced manufacturing facilities, refractory materials, and heavy industrial equipment."
        keywords="Gallery, Manufacturing, Refractory Images, Steel Plant Equipment, PRM"
        url="/gallery"
      />
      
      {/* Header Area */}
      <TopBar />
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Clean Hero Banner - Increased pt (padding-top) to prevent navbar overlap */}
        <section className="relative bg-[#0f172a] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden flex items-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
              Our Gallery
            </h1>
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-white/80 uppercase bg-black/40 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/10">
              <a href="/" className="hover:text-[#e63946] transition-colors duration-300">Home</a>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-[#e63946]">Gallery</span>
            </div>
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