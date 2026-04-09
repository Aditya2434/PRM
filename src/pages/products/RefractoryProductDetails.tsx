// src/pages/products/RefractoryProductDetails.tsx
import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, Image as ImageIcon, ZoomIn, X, ChevronLeft } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { refractoryProducts } from '@/data/refractoryProducts';

const RefractoryProductDetails = () => {
  const { productId } = useParams();
  
  // Find the exact product based on the URL parameter
  const product = refractoryProducts.find(p => p.id === productId);

  // Track the active INDEX (0 to 3) instead of the image URL to handle empty slots properly
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Track whether the full-screen lightbox is open
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset the active image and close lightbox if the user clicks a different product in the sidebar
  useEffect(() => {
    setActiveIndex(0);
    setIsLightboxOpen(false);
  }, [product]);

  // Handle Escape key to close the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // If the user types a bad URL, kick them back to the catalog
  if (!product) {
    return <Navigate to="/products/refractory-material" replace />;
  }

  // Combine the main image and any extra gallery images.
  // Filter out any undefined values so the array only has real image links.
  const allImages = [product.image, ...(product.gallery || [])].filter(Boolean) as string[];

  // Force exactly 4 slots for the UI layout. 
  // Fill the first slots with available images, leave the rest as undefined.
  const galleryImages = [
    allImages[0],
    allImages[1],
    allImages[2],
    allImages[3]
  ];

  const activeImage = galleryImages[activeIndex];

  // Lightbox Navigation Handlers
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeImage) return;
    const currentIdx = allImages.indexOf(activeImage);
    const nextIdx = (currentIdx + 1) % allImages.length;
    const nextImgSrc = allImages[nextIdx];
    setActiveIndex(galleryImages.indexOf(nextImgSrc));
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeImage) return;
    const currentIdx = allImages.indexOf(activeImage);
    const prevIdx = (currentIdx - 1 + allImages.length) % allImages.length;
    const prevImgSrc = allImages[prevIdx];
    setActiveIndex(galleryImages.indexOf(prevImgSrc));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030508] font-sans selection:bg-[#e63946]/30 selection:text-white">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow pt-32 lg:pt-40 pb-32 relative">
        
        {/* Minimalist Background Ambient Effect - isolated in its own overflow container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#e63946]/[0.02] to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
          
          {/* Top Navigation & Breadcrumbs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <Link 
              to="/products/refractory-material" 
              className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Catalog
            </Link>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500"
            >
              <Link to="/products/refractory-material" className="hover:text-gray-300 transition-colors">Refractory</Link>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span className="text-[#e63946]">{product.category}</span>
            </motion.div>
          </div>

          {/* Premium Grid Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            
            {/* ---------------------------------------------------------------- */}
            {/* LEFT SIDE: Main Product Content (9 Columns)                      */}
            {/* ---------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-9 flex flex-col"
            >
              
              {/* Top Profile Section: Images (Left) + Text (Right) */}
              <div className="flex flex-col md:flex-row gap-10 xl:gap-14 mb-16">
                
                {/* Image Gallery Column */}
                <div className="w-full md:w-5/12 shrink-0 flex flex-col gap-4">
                  {/* Main Viewer - Added Cursor Pointer and Click Handler */}
                  <div 
                    className={`w-full aspect-[4/3] relative overflow-hidden rounded-sm bg-[#0a111a] shadow-2xl group border border-white/5 flex items-center justify-center ${activeImage ? 'cursor-zoom-in' : ''}`}
                    onClick={() => activeImage && setIsLightboxOpen(true)}
                  >
                    <AnimatePresence mode="wait">
                      {activeImage ? (
                        <>
                          <motion.img 
                            key={activeImage}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            src={activeImage} 
                            alt={product.name} 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                          />
                          {/* Hover Zoom Icon */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-[#030508]/40 transition-colors duration-500 z-10 flex items-center justify-center pointer-events-none">
                            <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-500 scale-50 group-hover:scale-100" />
                          </div>
                        </>
                      ) : (
                        <motion.div 
                          key="no-image"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center justify-center text-gray-600"
                        >
                          <ImageIcon className="w-16 h-16 mb-3 opacity-30" />
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">No Image Available</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="absolute top-4 left-4 z-20 pointer-events-none">
                      <span className="bg-[#030508]/80 backdrop-blur-md border border-white/10 text-white text-[10px] px-3 py-1.5 rounded-sm uppercase tracking-[0.15em]">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Row - Always showing exactly 4 slots */}
                  <div className="grid grid-cols-4 gap-2 md:gap-3">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        disabled={!img}
                        className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-[#0a111a] border flex items-center justify-center transition-all duration-300 ${img ? 'cursor-pointer group' : 'cursor-not-allowed opacity-50'} ${
                          activeIndex === idx 
                            ? 'border-[#e63946] shadow-[0_0_15px_rgba(230,57,70,0.3)]' 
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 z-10 ${activeIndex === idx ? 'opacity-0' : 'group-hover:opacity-0'}`} />
                        {img ? (
                          <img 
                            src={img} 
                            alt={`${product.name} thumbnail ${idx + 1}`} 
                            className={`w-full h-full object-cover transition-transform duration-500 ${activeIndex === idx ? 'scale-110' : 'group-hover:scale-110'}`}
                          />
                        ) : (
                          <ImageIcon className={`w-5 h-5 transition-colors duration-300 ${activeIndex === idx ? 'text-[#e63946]' : 'text-gray-600'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title & Introduction */}
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 tracking-tight leading-[1.1]">
                    {product.name} 
                    {/* DYNAMIC SUBTITLE - Only renders if the product has a subtitle (e.g. 'Standard') */}
                    {product.subtitle && (
                      <span className="text-[#e63946] block mt-2 md:mt-1">{product.subtitle}</span>
                    )}
                  </h1>
                  
                  <div className="flex flex-col gap-6">
                    {/* Render dynamic description paragraphs if they exist, otherwise fallback to shortDescription */}
                    {product.longDescription ? (
                      product.longDescription.map((desc, idx) => (
                        <p key={idx} className={`text-base text-gray-300 leading-relaxed font-light ${idx === 0 ? 'border-l-2 border-[#e63946]/50 pl-4' : ''}`}>
                          {desc}
                        </p>
                      ))
                    ) : (
                      <p className="text-base text-gray-300 leading-relaxed border-l-2 border-[#e63946]/50 pl-4 font-light">
                        {product.shortDescription}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Data Table Specifications (For multi-grade products like Side Arch) */}
              {product.tableSpecs && (
                <div className="mb-16">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-8 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    Technical Specifications 
                    <span className="text-gray-500 text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em]">
                      – {product.name}
                    </span>
                  </h3>
                  <div className="overflow-x-auto border border-white/10 rounded-md bg-white/[0.01]">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-[#0a111a] border-b border-white/10">
                        <tr>
                          {product.tableSpecs.headers.map((header, i) => (
                            <th key={i} className={`p-4 font-bold text-white tracking-[0.1em] uppercase text-[10px] ${i === 0 ? 'bg-[#e63946]/10 text-[#e63946]' : ''}`}>
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {product.tableSpecs.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-white/5 transition-colors duration-200">
                            {row.map((cell, j) => (
                              <td key={j} className={`p-4 ${j === 0 ? 'text-gray-400 font-medium' : 'text-white font-light'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Standard Grid Specifications (For single-grade products like 70% Alumina) */}
              {product.detailedSpecs && !product.tableSpecs && (
                <div className="mb-16">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-8 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    Product Specifications 
                    <span className="text-gray-500 text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em]">
                      – {product.name}
                    </span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.detailedSpecs.map((spec, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/5 transition-colors duration-300">
                        <span className="text-[11px] text-gray-400 uppercase tracking-[0.15em] mb-1 sm:mb-0">{spec.label}</span>
                        <span className="text-sm text-white font-medium text-left sm:text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features - Only show if features exist */}
              {product.features && (
                <div className="mb-16">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:border-[#e63946]/50 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300">
                          <span className="w-2 h-2 rounded-full bg-[#e63946] shadow-[0_0_8px_rgba(230,57,70,0.6)]" />
                        </div>
                        <span className="text-sm md:text-base text-gray-300 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications List - Only show if applications exist */}
              {product.applications && (
                <div className="mb-20">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-6">
                    Primary Applications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {product.applications.map((app, idx) => (
                      <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-sm p-4 hover:bg-white/5 transition-colors duration-300 group">
                        <span className="text-sm text-gray-300 font-light group-hover:text-white transition-colors">
                          {app}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architectural CTA Strip */}
              <div className="relative border border-white/10 bg-white/[0.01] p-10 md:p-14 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e63946]/0 via-[#e63946]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="relative z-10 max-w-md">
                  <h4 className="text-xl md:text-2xl font-serif text-white mb-3">Require tailored specifications?</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    Consult with our engineering team for custom formulations, bulk acquisition pricing, and rapid deployment details.
                  </p>
                </div>

                <Link 
                  to="/contact" 
                  className="relative z-10 flex-shrink-0 inline-flex items-center justify-center border border-white/20 bg-[#0a111a] hover:bg-white hover:text-black text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 rounded-sm shadow-xl"
                >
                  Contact Sales
                </Link>
              </div>

            </motion.div>

            {/* ---------------------------------------------------------------- */}
            {/* RIGHT SIDE: Sidebar Catalog (3 Columns)                          */}
            {/* ---------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 h-full"
            >
              <div className="sticky top-32 pb-12">
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-8 pb-4 border-b border-white/10">
                  Explore Catalog
                </h3>
                
                <div className="flex flex-col">
                  {refractoryProducts.map((p) => {
                    const isActive = p.id === product.id;
                    
                    return (
                      <Link 
                        key={p.id}
                        to={`/products/refractory-material/${p.id}`}
                        className={`group flex items-center gap-4 py-4 border-b border-white/5 transition-all duration-300 ${
                          isActive ? 'pointer-events-none' : 'hover:pl-2 hover:border-white/10'
                        }`}
                      >
                        {/* Minimalist Thumbnail - Object Cover */}
                        <div className="w-10 h-10 rounded-sm overflow-hidden bg-[#0a111a] flex-shrink-0 relative flex items-center justify-center">
                          {p.image ? (
                            <img 
                              src={p.image} 
                              alt={p.name} 
                              className={`w-full h-full object-cover transition-all duration-700 ${
                                isActive ? 'opacity-100 scale-110' : 'opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110'
                              }`} 
                            />
                          ) : (
                            <ImageIcon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-[#e63946]' : 'text-gray-600 group-hover:text-white'}`} />
                          )}
                          {isActive && <div className="absolute inset-0 ring-1 ring-inset ring-[#e63946]" />}
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-grow min-w-0">
                          <h4 className={`text-sm truncate transition-colors duration-300 ${
                            isActive ? 'text-white font-medium' : 'text-gray-400 group-hover:text-white'
                          }`}>
                            {p.name}
                          </h4>
                          <p className={`text-[9px] uppercase tracking-[0.15em] mt-0.5 transition-colors duration-300 ${
                            isActive ? 'text-[#e63946]' : 'text-gray-600'
                          }`}>
                            {p.category}
                          </p>
                        </div>

                        {/* Slide-in Arrow */}
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-all duration-300 ${
                          isActive ? 'text-[#e63946]' : 'text-gray-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                        }`} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      {/* --- FULL SCREEN LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {isLightboxOpen && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030508]/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-all duration-300 p-3 z-50 bg-white/5 hover:bg-white/10 rounded-full hover:rotate-90"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Previous Image Button (Only show if multiple images) */}
            {allImages.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-all duration-300 p-3 md:p-4 z-50 bg-white/5 hover:bg-[#e63946] rounded-full hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}

            {/* Next Image Button (Only show if multiple images) */}
            {allImages.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-all duration-300 p-3 md:p-4 z-50 bg-white/5 hover:bg-[#e63946] rounded-full hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}

            {/* Lightbox Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <img
                src={activeImage}
                alt={`${product.name} Fullscreen`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 flex items-center justify-center gap-2">
                {allImages.length > 1 && allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(galleryImages.indexOf(img))}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === img ? 'bg-[#e63946] w-6' : 'bg-white/30 hover:bg-white/60'
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

export default RefractoryProductDetails;