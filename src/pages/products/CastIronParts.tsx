// src/pages/products/CastIronParts.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { ChevronLeft, ChevronRight, ZoomIn, X, ArrowRight, Flame, Layers, ShieldCheck } from 'lucide-react';
import { castIronData, type CastIronPart } from '@/data/castIronParts';

const categories = ['All', 'Furnace Parts', 'Structural', 'Custom Castings'];

// --- INDIVIDUAL CARD COMPONENT ---
const CastIronCard = ({ 
  part, 
  onOpenLightbox 
}: { 
  part: CastIronPart; 
  onOpenLightbox: (images: string[], index: number) => void;
}) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Swipe States for Inline Card
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const goNext = () => setActiveImgIndex((prev) => (prev + 1) % part.images.length);
  const goPrev = () => setActiveImgIndex((prev) => (prev - 1 + part.images.length) % part.images.length);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    goNext();
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    goPrev();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) goNext();
    if (distance < -minSwipeDistance) goPrev();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10"
    >
      <div 
        className="relative h-64 sm:h-72 overflow-hidden bg-slate-900 cursor-zoom-in group/image active:cursor-grabbing"
        onClick={() => onOpenLightbox(part.images as string[], activeImgIndex)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-300" />
        
        {part.images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`${part.title} View ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out pointer-events-none ${
              activeImgIndex === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-[#020a14]/30 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
          <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover/image:opacity-80 transition-opacity duration-300 scale-75 group-hover/image:scale-100" />
        </div>

        {part.images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-[#D97706] border border-white/20 text-white rounded-full opacity-0 group-hover/image:opacity-100 transition-all duration-300 shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-[#D97706] border border-white/20 text-white rounded-full opacity-0 group-hover/image:opacity-100 transition-all duration-300 shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none">
          <span className="bg-[#090D16]/90 backdrop-blur-sm text-amber-400 border border-white/15 text-[9px] font-mono font-bold px-3 py-1 rounded-md uppercase tracking-[0.16em] shadow-sm">
            {part.category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 border-t border-slate-100">
        <h3 className="font-display text-lg lg:text-xl font-bold text-[#090D16] mb-2 leading-tight group-hover:text-[#D97706] transition-colors duration-300">
          {part.title}
        </h3>
        
        <p className="font-ui text-slate-500 text-sm leading-relaxed font-normal mb-6">
          {part.desc}
        </p>

        <div className="grid grid-cols-2 gap-2.5 mt-auto">
          {Object.entries(part.specs).map(([key, value], idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg p-2.5 border border-slate-200 flex flex-col gap-0.5 group-hover:border-amber-500/20 transition-colors">
              <span className="text-[8.5px] text-slate-400 font-mono font-bold uppercase tracking-wider truncate">{key}</span>
              <span className="text-[#090D16] text-xs font-mono font-semibold truncate">{value as string}</span>
            </div>
          ))}
        </div>

        <Link 
          to="/contact"
          onClick={() => {
            setTimeout(() => {
              window.scrollTo({ top: window.innerHeight * 0.6, behavior: 'smooth' });
            }, 100);
          }}
          className="mt-6 flex items-center justify-between w-full px-4 py-3 bg-slate-50 border border-slate-200 hover:border-[#090D16] hover:bg-[#090D16] group/enq transition-all duration-200 rounded-lg"
        >
          <span className="font-mono text-[10px] font-bold text-slate-700 group-hover/enq:text-white uppercase tracking-[0.18em] transition-colors">
            Request Spec Sheet
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/enq:text-amber-400 transform group-hover/enq:translate-x-0.5 transition-all" />
        </Link>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
const CastIronParts = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const [lightboxData, setLightboxData] = useState<{ images: string[]; index: number } | null>(null);

  // Swipe States for Lightbox
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const filteredParts = activeFilter === 'All' 
    ? castIronData 
    : castIronData.filter(item => item.category === activeFilter.toUpperCase());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxData(null);
    };
    if (lightboxData) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData]);

  const goLightboxNext = () => {
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      index: (lightboxData.index + 1) % lightboxData.images.length
    });
  };

  const goLightboxPrev = () => {
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      index: (lightboxData.index - 1 + lightboxData.images.length) % lightboxData.images.length
    });
  };

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    goLightboxNext();
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    goLightboxPrev();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) goLightboxNext();
    if (distance < -minSwipeDistance) goLightboxPrev();
  };

  // Combined Collection & Breadcrumb Schema
  const castIronSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.paragonrefractoriesandminerals.com/products/cast-iron-parts/#collection",
        "url": "https://www.paragonrefractoriesandminerals.com/products/cast-iron-parts",
        "name": "Heat-Resistant Cast Iron Furnace Parts Catalog | PRM",
        "description": "Premium industrial cast iron furnace parts: charging doors, hangers, skid blocks, discharge doors, inspection doors, and dampers.",
        "publisher": {
          "@type": "Organization",
          "name": "Paragon Refractories & Minerals"
        },
        "about": {
          "@type": "Thing",
          "name": "Cast Iron Furnace Parts"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.paragonrefractoriesandminerals.com/products/cast-iron-parts/#breadcrumb",
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
            "name": "Cast Iron Parts",
            "item": "https://www.paragonrefractoriesandminerals.com/products/cast-iron-parts"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Cast Iron Furnace Parts Manufacturer | CI Components | Paragon Refractories and Minerals"
        description="PRM is a leading cast iron furnace parts manufacturer in India. We supply heat-resistant CI charging doors, skids, dampers, and custom castings for reheating furnaces."
        keywords="cast iron furnace parts, CI skid manufacturer India, furnace charging doors, industrial damper casting, heat resistant iron casting West Bengal"
        url="/products/cast-iron-parts"
        schema={castIronSchema}
      />
      <Navbar />

      <main className="flex-grow">
        {/* ══════════════════════════════════════════════════════════════
            1. BRIGHT ARCHITECTURAL HERO SECTION (CENTER-ALIGNED)
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-18 border-b border-slate-200/80 overflow-hidden bg-slate-50">
          
          {/* Subtle Full-Bleed Industrial Background Image with Frosted Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/cast_iron_hero.jpg"
              alt="Paragon Cast Iron Furnace Parts & Foundry Metallurgy"
              className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] opacity-20"
            />
            {/* Luminous Frosted Gradient Overlays */}
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
                <span className="text-slate-400">Products</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <li className="text-[#D97706] font-semibold">Cast Iron Parts</li>
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
                <span>Foundry Metallurgy • Heat-Resistant Castings</span>
              </div>

              {/* Authoritative Display Headline (Center-Aligned) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-6 leading-[1.10] tracking-tight">
                Cast Iron{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#B45309]">
                  Furnace Components.
                </span>
              </h1>

              {/* Narrative Subtext (Center-Aligned) */}
              <p className="font-ui text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-8">
                High-grade heat-resistant industrial castings engineered for severe thermal cycling, impact resistance, and extended service life in heavy reheating furnaces.
              </p>

              {/* Verified Badges Strip (Center-Aligned) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Flame className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>METALLURGY: <strong>HEAT-RESISTANT CI &amp; ALLOY</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Layers className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>PRECISION: <strong>HIGH DIMENSIONAL ACCURACY</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>CUSTOM CASTINGS: <strong>FOUNDRY PATTERN CASTING</strong></span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Hairline Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </section>

        {/* --- Overview Section --- */}
        <section className="container mx-auto px-5 sm:px-6 lg:px-24 py-8 sm:py-12">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10"
          >
            <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-4 lg:pb-0 lg:pr-8">
              <span className="font-mono text-[10.5px] text-[#D97706] font-bold uppercase tracking-[0.2em] block mb-2">
                Foundry Metallurgy
              </span>
              <h2 className="font-display text-2xl font-bold text-[#090D16] tracking-tight leading-snug">
                High-Temperature Metallurgy for Continuous Operation
              </h2>
            </div>
            <div className="lg:w-2/3">
              <p className="font-ui text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                Furnace components must withstand rapid thermal shocks and severe abrasive conditions from heavy steel billets. We produce heat-resistant alloy cast iron components including water-cooled skid blocks, furnace charging doors, discharge chutes, beam hangers, inspection doors, and high-temp flue dampers.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- Filter Bar — Clean Industrial --- */}
        <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 mb-12 shadow-xs">
          <div className="container mx-auto px-5 sm:px-6 lg:px-24">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-md text-xs font-mono font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                    activeFilter === category
                      ? 'bg-[#090D16] text-white border border-[#090D16] shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-[#D97706] hover:text-[#D97706]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- Grid --- */}
        <section id="first-product" className="container mx-auto px-5 sm:px-6 lg:px-24 pb-16 sm:pb-24 scroll-mt-28">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
          >
            <AnimatePresence>
              {filteredParts.map((part) => (
                <CastIronCard 
                  key={part.id} 
                  part={part} 
                  onOpenLightbox={(images, index) => setLightboxData({ images, index })} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- CTA — Foundry --- */}
        <section className="relative py-20 overflow-hidden bg-[#090D16] border-t border-white/10">
          <div className="container mx-auto px-5 sm:px-6 lg:px-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="md:w-2/3">
                <div className="inline-flex items-center gap-2 font-mono text-[10.5px] font-bold text-amber-400 tracking-[0.2em] uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Custom Pattern &amp; Casting Production
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Need custom cast iron furnace components made to order?
                </h2>
                <p className="font-ui text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
                  Our foundry casts custom patterns based on your exact mechanical drawings, alloy specifications, and heat treatment requirements.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-end shrink-0 w-full md:w-auto">
                <Link to="/contact" className="w-full md:w-auto">
                  <CustomButton className="w-full md:w-auto bg-[#D97706] hover:bg-[#F59E0B] text-white font-ui font-bold py-4 px-8 uppercase tracking-[0.16em] text-xs transition-all duration-300 rounded-md shadow-xl shadow-amber-600/20">
                    Request Foundry Quote
                  </CustomButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#090D16]/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setLightboxData(null)}
          >
            <button
              onClick={() => setLightboxData(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-all p-3 z-50 bg-white/10 hover:bg-white/20 rounded-full"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 md:w-7 md:h-7" />
            </button>

            {lightboxData.images.length > 1 && (
              <button
                onClick={handleLightboxPrev}
                className="absolute left-4 md:left-10 text-white/70 hover:text-white transition-all p-3 md:p-4 z-50 bg-white/10 hover:bg-[#D97706] rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            )}

            {lightboxData.images.length > 1 && (
              <button
                onClick={handleLightboxNext}
                className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-all p-3 md:p-4 z-50 bg-white/10 hover:bg-[#D97706] rounded-full"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={lightboxData.images[lightboxData.index]}
                alt="Fullscreen view"
                className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl pointer-events-none"
              />
              <div className="mt-6 flex items-center justify-center gap-2">
                {lightboxData.images.length > 1 && lightboxData.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxData({ ...lightboxData, index: idx });
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      lightboxData.index === idx ? 'bg-[#D97706] w-6' : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CastIronParts;