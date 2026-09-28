// src/components/sections/GallerySection.tsx
import { useState, useEffect, useRef } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogDescription,
  DialogHeader,
  DialogClose
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Eye, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems } from '@/data/galleryData';

const GallerySection = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const activeItem = selectedItemIndex !== null ? galleryItems[selectedItemIndex] || null : null;

  // Navigation handlers for Lightbox
  const handlePrevImage = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! > 0 ? prev! - 1 : galleryItems.length - 1));
    setZoomLevel(1);
  };

  const handleNextImage = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! < galleryItems.length - 1 ? prev! + 1 : 0));
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'Escape') setSelectedItemIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex]);

  // Auto-scroll active thumbnail into view in the filmstrip
  useEffect(() => {
    if (selectedItemIndex !== null && filmstripRef.current) {
      const activeThumb = filmstripRef.current.children[selectedItemIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedItemIndex]);

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-900 selection:bg-amber-500 selection:text-white relative">
      
      {/* ══════════════════════════════════════════════════════════════
          MAIN VISUAL ARCHIVE GRID (PURE IMAGES, ZERO TAGS/TEXTS)
      ══════════════════════════════════════════════════════════════ */}
      <section id="gallery-grid" className="py-10 lg:py-16 relative z-10 scroll-mt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          
          {/* Dynamic Masonry Columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (index % 6) * 0.03 }}
                className="break-inside-avoid"
              >
                <div
                  onClick={() => {
                    setSelectedItemIndex(index);
                    setZoomLevel(1);
                  }}
                  className="group relative rounded-2xl sm:rounded-3xl bg-slate-100 border border-slate-200/80 shadow-[0_8px_25px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.18)] transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-1.5"
                >
                  {/* Pure Image Display - No Tags or Text */}
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.02] block"
                  />

                  {/* Subtle Frosted Hover Ring & Center Inspect Trigger */}
                  <div className="absolute inset-0 bg-slate-950/15 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-xl flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform">
                      <Eye className="w-5 h-5 text-[#D97706]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PANORAMIC LIGHT FROSTED GLASS LIGHTBOX MODAL
      ══════════════════════════════════════════════════════════════ */}
      <Dialog 
        open={selectedItemIndex !== null} 
        onOpenChange={(open) => {
          if (!open) setSelectedItemIndex(null);
        }}
      >
        <DialogContent 
          showCloseButton={false}
          overlayClassName="bg-slate-900/20 backdrop-blur-md"
          className="fixed inset-0 top-0 left-0 translate-x-0 translate-y-0 w-screen h-screen max-w-none max-h-none sm:max-w-none p-0 m-0 rounded-none border-0 gap-0 z-50 bg-[#F1F5F9]/95 backdrop-blur-3xl flex flex-col justify-between overflow-hidden text-slate-900 duration-200"
        >
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-sky-300/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

          {/* ──────────────────────────────────────────────────────────
              TOP FLOATING GLASS HEADER
          ────────────────────────────────────────────────────────── */}
          <DialogHeader className="pt-2.5 sm:pt-4 pb-1.5 sm:pb-2 px-2 sm:px-8 flex items-center justify-center shrink-0 z-30 w-full relative">
            <div className="bg-white/95 backdrop-blur-xl border border-white/95 shadow-[0_10px_35px_rgba(0,0,0,0.06)] rounded-full px-3 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-3 sm:gap-6 max-w-[98vw] sm:max-w-md">
              
              {/* Title / Identity */}
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)] animate-pulse shrink-0" />
                <DialogTitle className="font-display font-bold text-xs sm:text-sm text-slate-900 truncate leading-tight">
                  Visual Archive
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Paragon Refractories and Minerals Gallery Image
                </DialogDescription>
              </div>

              {/* Counter Indicator */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="font-mono text-[10.5px] font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/80">
                  {selectedItemIndex !== null ? String(selectedItemIndex + 1).padStart(2, '0') : '01'} / {String(galleryItems.length).padStart(2, '0')}
                </span>
              </div>

              {/* Floating Close Button */}
              <DialogClose asChild>
                <button 
                  title="Close Fullscreen (Esc)"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-500 text-slate-600 flex items-center justify-center transition-all cursor-pointer border border-slate-200/80 shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </DialogClose>

            </div>
          </DialogHeader>

          {/* ──────────────────────────────────────────────────────────
              CENTRAL CANVAS & NAVIGATION (PURE IMAGE ONLY)
          ────────────────────────────────────────────────────────── */}
          <div 
            className="flex-1 w-full min-h-0 overflow-hidden flex items-center justify-center px-2 sm:px-6 relative z-20"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Previous Button (Desktop / Tablet) */}
            <button
              onClick={handlePrevImage}
              title="Previous Photograph (Left Arrow)"
              className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all cursor-pointer shrink-0 group hover:scale-110 mr-4 lg:mr-8 z-30"
            >
              <ChevronLeft className="w-5 h-5 text-[#D97706] group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Central High-Resolution Plaque (Pure Image Only) */}
            <div 
              className="transition-transform duration-200 ease-out origin-center flex flex-col items-center justify-center relative z-10 w-full max-w-[960px] max-h-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {activeItem && (
                <div className="relative p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/95 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.14)] ring-1 ring-black/5 flex flex-col items-center max-w-full">
                  
                  {/* Pure Image Display */}
                  <div className="relative w-full max-h-[66vh] sm:max-h-[70vh] lg:max-h-[74vh] flex items-center justify-center overflow-hidden rounded-xl bg-slate-950 border border-slate-200/80 shadow-xs">
                    <img
                      src={activeItem.url}
                      alt={activeItem.title}
                      className="max-h-[66vh] sm:max-h-[70vh] lg:max-h-[74vh] w-auto max-w-full object-contain select-none pointer-events-none filter contrast-[1.02] block"
                    />
                  </div>

                </div>
              )}
            </div>

            {/* Next Button (Desktop / Tablet) */}
            <button
              onClick={handleNextImage}
              title="Next Photograph (Right Arrow)"
              className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all cursor-pointer shrink-0 group hover:scale-110 ml-4 lg:ml-8 z-30"
            >
              <ChevronRight className="w-5 h-5 text-[#D97706] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* ──────────────────────────────────────────────────────────
              BOTTOM DOCK & FILMSTRIP
          ────────────────────────────────────────────────────────── */}
          <div className="pb-2 sm:pb-3 px-2 sm:px-8 flex flex-col items-center justify-center shrink-0 z-30 w-full relative gap-2">
            
            {/* Live Interactive Filmstrip (Horizontal Carousel) */}
            <div className="w-full max-w-4xl overflow-x-auto no-scrollbar py-1">
              <div ref={filmstripRef} className="flex items-center gap-2 px-2 justify-start sm:justify-center">
                {galleryItems.map((item, idx) => {
                  const isCurrent = idx === selectedItemIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedItemIndex(idx);
                        setZoomLevel(1);
                      }}
                      className={`relative w-12 h-9 sm:w-14 sm:h-10 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-[#D97706] ring-2 ring-amber-400 scale-110 shadow-md'
                          : 'border-slate-300 opacity-60 hover:opacity-100 hover:border-slate-400'
                      }`}
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Floating Zoom & Controls Bar */}
            <div className="bg-white/90 backdrop-blur-xl border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-full px-3 py-1 flex items-center gap-2 sm:gap-3">
              
              {/* Mobile Prev / Next Buttons */}
              <button
                onClick={handlePrevImage}
                title="Previous"
                className="md:hidden p-1.5 rounded-full hover:bg-slate-100 text-slate-700 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Zoom Controls */}
              <button
                onClick={handleZoomOut}
                title="Zoom Out (-)"
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
              >
                <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              
              <button
                onClick={handleResetZoom}
                title="Click to Reset (100%)"
                className="px-2 py-0.5 text-xs font-mono font-bold text-slate-900 hover:text-[#D97706] cursor-pointer"
              >
                {Math.round(zoomLevel * 100)}%
              </button>

              <button
                onClick={handleZoomIn}
                title="Zoom In (+)"
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                onClick={handleResetZoom}
                title="Reset View"
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>

              <button
                onClick={handleNextImage}
                title="Next"
                className="md:hidden p-1.5 rounded-full hover:bg-slate-100 text-slate-700 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </DialogContent>
      </Dialog>

      {/* ══════════════════════════════════════════════════════════════
          TECHNICAL PLANT INQUIRY & CONSULTATION CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/80 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl text-center">
          <div className="bg-white/80 backdrop-blur-xl border border-white/95 rounded-3xl p-6 sm:p-10 shadow-[0_15px_45px_rgba(15,23,42,0.06)] relative overflow-hidden">
            
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[#D97706] font-mono text-[10.5px] font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Field-Validated Thermal Excellence</span>
              </span>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Planning a Steel Plant Overhaul or Refractory Procurement?
              </h3>

              <p className="font-ui text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto mt-2 leading-relaxed">
                Connect with our senior metallurgists and EPC furnace engineers. Schedule a physical facility inspection in Durgapur, West Bengal or request certified Mill Test Certificates (MTC).
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full bg-slate-900 hover:bg-[#D97706] text-white text-xs font-ui font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Request Engineering Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/products/refractory-materials"
                  className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-ui font-bold uppercase tracking-wider transition-all border border-slate-200/80 inline-flex items-center gap-2"
                >
                  <span>Explore Refractory Catalog</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default GallerySection;