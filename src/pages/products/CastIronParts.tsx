// src/pages/products/CastIronParts.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { Settings, ChevronLeft, ChevronRight, ZoomIn, X, ArrowRight } from 'lucide-react';
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

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % part.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + part.images.length) % part.images.length);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-[#0a111a] border border-white/10 rounded-2xl overflow-hidden hover:border-[#e63946]/40 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(230,57,70,0.15)]"
    >
      <div 
        className="relative h-64 sm:h-72 overflow-hidden bg-[#0a111a] cursor-zoom-in group/image"
        onClick={() => onOpenLightbox(part.images as string[], activeImgIndex)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-transparent to-transparent z-10 opacity-80 pointer-events-none" />
        
        {part.images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`${part.title} View ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              activeImgIndex === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-[#030508]/40 transition-colors duration-500 z-10 flex items-center justify-center pointer-events-none">
          <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover/image:opacity-80 transition-opacity duration-500 scale-50 group-hover/image:scale-100" />
        </div>

        {part.images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 hover:bg-[#e63946] border border-white/10 hover:border-[#e63946] text-white rounded-full opacity-0 group-hover/image:opacity-100 transition-all duration-300 shadow-xl"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 hover:bg-[#e63946] border border-white/10 hover:border-[#e63946] text-white rounded-full opacity-0 group-hover/image:opacity-100 transition-all duration-300 shadow-xl"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        <div className="absolute top-5 right-5 z-20 pointer-events-none">
          <span className="bg-[#e63946] text-white text-[9px] font-bold px-3 py-1.5 rounded-md uppercase tracking-[0.2em] shadow-lg">
            {part.category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 border-t border-white/5 group-hover:border-[#e63946]/30 transition-colors duration-500">
        <h3 className="text-xl font-serif text-white mb-3 leading-tight group-hover:text-[#e63946] transition-colors duration-500">
          {part.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
          {part.desc}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          {Object.entries(part.specs).map(([key, value], idx) => (
            <div key={idx} className="bg-white/[0.02] rounded-xl p-3 border border-white/5 flex flex-col gap-1 transition-colors duration-300 group-hover:border-white/10">
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest truncate">{key}</span>
              <span className="text-white text-xs font-mono truncate">{value as string}</span>
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
          className="mt-6 flex items-center justify-between w-full px-5 py-4 bg-[#e63946]/10 border border-[#e63946]/30 hover:bg-[#e63946] hover:border-[#e63946] group/enq transition-all duration-300 rounded-xl"
        >
          <span className="text-[10px] font-bold text-[#e63946] group-hover/enq:text-white uppercase tracking-[0.2em] transition-colors duration-300">
            Make an Enquiry
          </span>
          <div className="w-6 h-6 rounded-full bg-[#e63946]/20 flex items-center justify-center transition-all duration-300 group-hover/enq:bg-white/20">
            <ArrowRight className="w-3.5 h-3.5 text-[#e63946] group-hover/enq:text-white transform group-hover/enq:translate-x-1 transition-transform duration-300" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
const CastIronParts = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const [lightboxData, setLightboxData] = useState<{ images: string[]; index: number } | null>(null);

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

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      index: (lightboxData.index + 1) % lightboxData.images.length
    });
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      index: (lightboxData.index - 1 + lightboxData.images.length) % lightboxData.images.length
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080d14]">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        
        {/* --- Premium Cinematic Hero Section --- */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#e63946] rounded-full blur-[150px] pointer-events-none" 
          />
          <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-[#1e3a5f] rounded-full blur-[150px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-24 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#e63946]"></span>
                <span className="text-[#e63946] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Foundry Excellence
                </span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#e63946]"></span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Cast Iron <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] via-[#ff6b6b] to-[#ffb3c6]">
                  Components.
                </span>
              </h1>
              
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                High-grade industrial castings designed for extreme durability. Precision-machined to withstand severe thermal cycling and heavy mechanical loads.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Premium Introduction Section (Above Filter) --- */}
        <section className="container mx-auto px-6 lg:px-24 pb-16 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-[#0d1520]/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 lg:p-12 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] group hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#e63946] via-[#ff6b6b] to-transparent opacity-80" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#e63946]/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-serif text-white mb-5 tracking-wide">
                Engineering Excellence for Demanding Environments
              </h2>
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
                Industrial equipment is essential for ensuring efficient, reliable, and high-performance operations in demanding industrial environments such as steel plants, rolling mills, cement plants, power plants, foundries, and reheating furnaces. <span className="text-white font-medium">At Paragon Refractories and Minerals</span>, we are a leading manufacturer and supplier of industrial equipment in India, offering a comprehensive range of solutions including reheating furnaces, industrial burners, recuperators, blowers, fuel heating & pumping units, and material handling systems. With strong expertise in both refractory materials and furnace engineering, we deliver integrated, energy-efficient, and performance-driven solutions tailored to specific industrial requirements. Our equipment is manufactured using high-grade materials and advanced engineering techniques to ensure durability, precision, and long service life under continuous and high-temperature operating conditions.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- Sleek Minimalist Filter Bar --- */}
        <section className="sticky top-0 z-40 bg-[#080d14]/90 backdrop-blur-xl border-b border-white/5 py-5 mb-16 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="container mx-auto px-6 lg:px-24">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 ${
                    activeFilter === category
                      ? 'bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/40 shadow-[0_0_20px_rgba(230,57,70,0.15)]'
                      : 'bg-transparent text-gray-500 border border-transparent hover:border-white/10 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- Premium Equipment Grid --- */}
        <section className="container mx-auto px-6 lg:px-24 pb-24">
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

        {/* --- Custom Engineering CTA --- */}
        <section className="relative py-24 overflow-hidden bg-[#080d14]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
          
          <div className="container mx-auto px-6 lg:px-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0d1520] to-[#0a111a] border border-white/10 rounded-3xl p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#e63946]/10 blur-[100px] pointer-events-none rounded-full" />

              <div className="md:w-2/3 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#e63946] font-bold tracking-[0.3em] text-[10px] uppercase">
                    Custom Foundry
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Need specialized cast components?
                </h2>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                  Our foundry can produce custom cast iron and alloy components based on your precise engineering drawings and material specifications.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-end shrink-0 w-full md:w-auto mt-6 md:mt-0 relative z-10">
                <Link to="/contact" className="relative group block w-full md:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#e63946] to-[#ffb3c6] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
                  <CustomButton className="relative w-full md:w-auto bg-[#e63946] hover:bg-[#d62828] text-white font-bold py-4 px-10 uppercase tracking-[0.2em] text-[11px] transition-all duration-300 rounded-xl text-center shadow-2xl">
                    Request a Quote
                  </CustomButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* --- FULL SCREEN LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030508]/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setLightboxData(null)}
          >
            <button
              onClick={() => setLightboxData(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-all duration-300 p-3 z-50 bg-white/5 hover:bg-white/10 rounded-full hover:rotate-90"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {lightboxData.images.length > 1 && (
              <button
                onClick={handleLightboxPrev}
                className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-all duration-300 p-3 md:p-4 z-50 bg-white/5 hover:bg-[#e63946] rounded-full hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}

            {lightboxData.images.length > 1 && (
              <button
                onClick={handleLightboxNext}
                className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-all duration-300 p-3 md:p-4 z-50 bg-white/5 hover:bg-[#e63946] rounded-full hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <img
                src={lightboxData.images[lightboxData.index]}
                alt="Fullscreen view"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
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
                      lightboxData.index === idx ? 'bg-[#e63946] w-6' : 'bg-white/30 hover:bg-white/60'
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