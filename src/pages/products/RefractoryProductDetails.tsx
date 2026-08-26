// src/pages/products/RefractoryProductDetails.tsx
import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowLeft, 
  Image as ImageIcon, 
  ZoomIn, 
  X, 
  ChevronLeft,
  Download,
  FileText,
  Send,
  Check,
  Phone,
  Mail,
  Sparkles
} from 'lucide-react';
import SEO from '@/components/SEO';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import logo from '@/assets/logo.png';
import { refractoryProducts } from '@/data/refractoryProducts';

const RefractoryProductDetails = () => {
  const { productId } = useParams();
  
  const product = refractoryProducts.find(p => p.id === productId);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Inquiry Form State - Started Clean (No dummy data)
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitting, setInquirySubmitting] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // PDF Download simulation state
  const [downloadState, setDownloadState] = useState<'idle' | 'processing' | 'done'>('idle');

  // Swipe States
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    setActiveIndex(0);
    setIsLightboxOpen(false);
    setInquirySubmitted(false);
    setInquiryName('');
    setInquiryEmail('');
    setInquiryCompany('');
    setInquiryMessage(''); // Removed dummy text
    setDownloadState('idle');
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  if (!product) {
    return <Navigate to="/products/refractory-materials" replace />;
  }

  const allImages = [product.image, ...(product.gallery || [])].filter(Boolean) as string[];

  const galleryImages = [
    allImages[0],
    allImages[1],
    allImages[2],
    allImages[3]
  ];

  const activeImage = galleryImages[activeIndex];

  const goNextImage = () => {
    if (!activeImage) return;
    const currentIdx = allImages.indexOf(activeImage);
    const nextIdx = (currentIdx + 1) % allImages.length;
    const nextImgSrc = allImages[nextIdx];
    setActiveIndex(galleryImages.indexOf(nextImgSrc));
  };

  const goPrevImage = () => {
    if (!activeImage) return;
    const currentIdx = allImages.indexOf(activeImage);
    const prevIdx = (currentIdx - 1 + allImages.length) % allImages.length;
    const prevImgSrc = allImages[prevIdx];
    setActiveIndex(galleryImages.indexOf(prevImgSrc));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    goNextImage();
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    goPrevImage();
  };

  // Touch Handlers for Swipe
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goNextImage();
    if (isRightSwipe) goPrevImage();
  };

  // Inquiry Submission using Web3Forms
  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;

    setInquirySubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e0c4e386-1dea-4873-86d2-5edee06ea579",
          subject: `B2B Inquiry: ${product.name} from ${inquiryCompany || inquiryName}`,
          name: inquiryName,
          email: inquiryEmail,
          company: inquiryCompany || "Not provided",
          message: inquiryMessage,
          from_name: "PRM Website B2B Inquiry",
        }),
      });

      const result = await response.json();
      if (response.status === 200) {
        setInquirySubmitted(true);
        setInquiryName('');
        setInquiryEmail('');
        setInquiryCompany('');
        setInquiryMessage('');
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setInquirySubmitting(false);
    }
  };

  // Simulated PDF Download
  const handleDownloadSpecs = () => {
    setDownloadState('processing');
    setTimeout(() => {
      setDownloadState('done');
      // Trigger browser printing for clean printout of specification table
      setTimeout(() => {
        window.print();
        setDownloadState('idle');
      }, 500);
    }, 1000);
  };

  // Generate keywords
  const dynamicKeywords = [
    product.name,
    `${product.name} manufacturer`,
    `${product.name} supplier`,
    `buy ${product.name}`,
    `${product.name} price`,
    product.category,
    "Refractory Manufacturer India",
    "PRM Refractories",
    "Furnace Lining Bricks",
    ...(product.applications || [])
  ].join(", ");

  // Schema.org Product Graph Data
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://www.paragonrefractoriesandminerals.com/products/refractory-materials/${product.id}#product`,
        "name": product.name,
        "image": product.image ? `https://www.paragonrefractoriesandminerals.com${product.image}` : undefined,
        "description": product.shortDescription,
        "brand": {
          "@type": "Brand",
          "name": "Paragon Refractories"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Paragon Refractories and Minerals",
          "url": "https://www.paragonrefractoriesandminerals.com/"
        },
        "category": `Refractory Materials > ${product.category}`
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.paragonrefractoriesandminerals.com/products/refractory-materials/${product.id}#breadcrumb`,
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
            "name": "Refractory Materials",
            "item": "https://www.paragonrefractoriesandminerals.com/products/refractory-materials"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.name,
            "item": `https://www.paragonrefractoriesandminerals.com/products/refractory-materials/${product.id}`
          }
        ]
      }
    ]
  };

  // Material Performance values based on Category
  const getPerformanceProfile = () => {
    const cat = product.category.toLowerCase();
    if (cat.includes('alumina')) {
      return [
        { label: "Refractoriness (Max Temp)", value: 95 },
        { label: "Cold Crushing Strength", value: 88 },
        { label: "Slag Corrosion Resistance", value: 90 },
        { label: "Thermal Shock Resistance", value: 80 }
      ];
    } else if (cat.includes('castable')) {
      return [
        { label: "Thermal Stability", value: 92 },
        { label: "Mechanical Strength", value: 85 },
        { label: "Monolithic Durability", value: 90 },
        { label: "Abrasion Resistance", value: 86 }
      ];
    } else if (cat.includes('insulat')) {
      return [
        { label: "Thermal Insulation (R-Value)", value: 98 },
        { label: "Low Heat Storage", value: 95 },
        { label: "Lightweight Structure", value: 92 },
        { label: "Thermal Shock Resistance", value: 75 }
      ];
    } else {
      return [
        { label: "Refractoriness (Max Temp)", value: 90 },
        { label: "Thermal Stability", value: 85 },
        { label: "Slag Corrosion Resistance", value: 88 },
        { label: "Thermal Shock Resistance", value: 84 }
      ];
    }
  };

  const performanceStats = getPerformanceProfile();

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f4f0] font-sans selection:bg-[#c49a3c]/30 selection:text-white print:bg-white print:text-black">
      <SEO 
        title={`${product.name} Manufacturer in India | Paragon Refractories and Minerals`}
        description={`Buy high-quality ${product.name} engineered for steel furnaces by PRM. Technical Specs - Max Temp: ${product.specs.maxTemp}, Bulk Density: ${product.specs.density}. Ensure superior thermal resistance.`}
        keywords={dynamicKeywords}
        url={`/products/refractory-materials/${product.id}`}
        image={product.image || undefined}
        schema={combinedSchema}
      />
      
      {/* Navigation Area - Hidden during print */}
      <div className="print:hidden">
        <TopBar />
        <Header />
        <Navbar />
      </div>

      <main className="flex-grow pt-24 md:pt-32 lg:pt-40 pb-32 relative print:pt-0 print:pb-0">
        
        {/* Subtle diagonal background stripe - Hidden during print */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 print:hidden">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0d1f35]/[0.02] to-transparent" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-blueprint-grid opacity-30 pointer-events-none" />
        </div>

        {/* SCREEN-ONLY LAYOUT */}
        <div className="print:hidden">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
            
            {/* Breadcrumb & Navigation strip */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <Link 
                to="/products/refractory-materials" 
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#c49a3c] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Catalog
              </Link>

              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                <Link to="/products/refractory-materials" className="hover:text-gray-600 transition-colors">Refractories</Link>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-[#c49a3c]">{product.category}</span>
              </div>
            </div>

            {/* Core Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
              
              {/* Left Column: Image Gallery, Specs, Details */}
              <div className="lg:col-span-8 flex flex-col">
                {/* Product Header & Images */}
                <div className="flex flex-col md:flex-row gap-8 xl:gap-12 mb-16 items-start">
                  
                  {/* Image Container with blueprint drawing pattern */}
                  <div className="w-full md:w-5/12 shrink-0 flex flex-col gap-4">
                    <div 
                      className={`w-full aspect-[4/3] relative overflow-hidden rounded-2xl bg-white shadow-md group border border-[#e8e3d8] bg-blueprint-grid p-2 transition-all duration-500 hover:border-[#0d1f35]/20 flex items-center justify-center ${activeImage ? 'cursor-zoom-in' : ''}`}
                      onClick={() => activeImage && setIsLightboxOpen(true)}
                    >
                      {/* Technical Blueprint Watermarks */}
                      <div className="absolute top-2 left-2 text-[8px] font-mono text-[#0d1f35]/30 select-none">PRM-SPEC-DRAW-A1</div>
                      <div className="absolute bottom-2 right-2 text-[8px] font-mono text-[#0d1f35]/30 select-none">SCALE: N.T.S.</div>
                      
                      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-slate-300" />
                      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-300" />

                      <AnimatePresence mode="wait">
                        {activeImage ? (
                          <>
                            <motion.img 
                              key={activeImage}
                              initial={{ opacity: 0, scale: 1.03 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.97 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              src={activeImage} 
                              alt={product.name} 
                              className="w-full h-full object-cover rounded-xl opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-[#0d1f35]/15 transition-colors duration-500 z-10 flex items-center justify-center pointer-events-none">
                              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-100" />
                            </div>
                          </>
                        ) : (
                          <motion.div 
                            key="no-image"
                            className="flex flex-col items-center justify-center text-gray-400"
                          >
                            <ImageIcon className="w-12 h-12 mb-2 opacity-30" />
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-30">Drawing Pending</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Thumbnail Row */}
                    <div className="grid grid-cols-4 gap-2 md:gap-3">
                      {galleryImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          disabled={!img}
                          className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-white border flex items-center justify-center transition-all duration-300 ${img ? 'cursor-pointer group' : 'cursor-not-allowed opacity-50'} ${
                            activeIndex === idx 
                              ? 'border-[#c49a3c] shadow-[0_0_12px_rgba(196,154,60,0.2)] ring-1 ring-[#c49a3c]' 
                              : 'border-[#e8e3d8] hover:border-gray-400'
                          }`}
                        >
                          <div className={`absolute inset-0 bg-black/5 transition-opacity duration-300 z-10 ${activeIndex === idx ? 'opacity-0' : 'group-hover:opacity-0'}`} />
                          {img ? (
                            <img 
                              src={img} 
                              alt={`${product.name} thumbnail ${idx + 1}`} 
                              className={`w-full h-full object-cover transition-transform duration-500 ${activeIndex === idx ? 'scale-105' : 'group-hover:scale-105'}`}
                            />
                          ) : (
                            <ImageIcon className={`w-4 h-4 transition-colors duration-300 ${activeIndex === idx ? 'text-[#c49a3c]' : 'text-gray-400'}`} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Text Summary */}
                  <div className="w-full md:flex-grow">
                    
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded bg-white border border-[#e8e3d8] shadow-sm mb-4">
                      <Sparkles className="w-3.5 h-3.5 text-[#c49a3c]" />
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#0d1f35] font-bold">{product.category} Refractory</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0d1f35] font-black tracking-tight leading-[1.1] mb-5">
                      {product.name}
                      {product.subtitle && (
                        <span className="text-[#c49a3c] block mt-1 font-serif text-2xl font-bold italic">{product.subtitle}</span>
                      )}
                    </h1>

                    <div className="flex flex-col gap-5 text-gray-600 font-light leading-relaxed text-sm md:text-base mb-6">
                      {product.longDescription ? (
                        product.longDescription.map((desc, idx) => (
                          <p key={idx} className={idx === 0 ? 'border-l-3 border-[#c49a3c] pl-4 font-normal text-[#0d1f35]/90' : ''}>
                            {desc}
                          </p>
                        ))
                      ) : (
                        <p className="border-l-3 border-[#c49a3c] pl-4 font-normal text-[#0d1f35]/90">
                          {product.shortDescription}
                        </p>
                      )}
                    </div>

                    {/* Quick Tech Parameters Badge Grid */}
                    <div className="grid grid-cols-2 gap-4 bg-white border border-[#e8e3d8] rounded-2xl p-5 shadow-sm">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Max Classification Temp</span>
                        <span className="text-lg md:text-xl font-bold text-[#0d1f35]">{product.specs.maxTemp}</span>
                      </div>
                      <div className="flex flex-col border-l border-gray-100 pl-4">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Bulk Density Spec</span>
                        <span className="text-lg md:text-xl font-bold text-[#0d1f35]">{product.specs.density}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specifications Table Section */}
                <div className="mb-12 relative bg-white border border-[#e8e3d8] rounded-2xl p-6 md:p-8 shadow-sm">
                  
                  {/* Section Header with PDF print button */}
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                    <h3 className="text-xl md:text-2xl font-serif text-[#0d1f35] font-bold flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#c49a3c]" />
                      Technical Datasheet
                    </h3>

                    <button 
                      onClick={handleDownloadSpecs}
                      disabled={downloadState !== 'idle'}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-white bg-[#c49a3c] hover:bg-[#0d1f35] border-none shadow-[0_4px_14px_rgba(196,154,60,0.35)] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-5 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 transform relative overflow-hidden group animate-industrial-pulse"
                    >
                      {downloadState === 'idle' && (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          Print / Download PDF
                        </>
                      )}
                      {downloadState === 'processing' && (
                        <>
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#c49a3c] border-t-transparent animate-spin" />
                          Processing...
                        </>
                      )}
                      {downloadState === 'done' && (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-500" />
                          PDF Document Ready
                        </>
                      )}
                    </button>
                  </div>

                  {/* Specs Table Rendering */}
                  {product.tableSpecs ? (
                    <div className="overflow-x-auto border border-gray-100 rounded-xl bg-white">
                      <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-[#0d1f35] text-white">
                          <tr>
                            {product.tableSpecs.headers.map((header, i) => (
                              <th key={i} className={`p-4 font-bold tracking-[0.1em] uppercase text-[10px] ${i === 0 ? 'bg-[#c49a3c]' : ''}`}>
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {product.tableSpecs.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors duration-150">
                              {row.map((cell, j) => (
                                <td key={j} className={`p-4 ${j === 0 ? 'text-[#0d1f35] font-semibold text-xs' : 'text-gray-700 font-light'}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : product.detailedSpecs ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.detailedSpecs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-center p-4 bg-gray-50/50 border border-gray-100 rounded-xl hover:bg-white hover:border-[#0d1f35]/20 hover:shadow-sm transition-all duration-300">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{spec.label}</span>
                          <span className="text-sm text-[#0d1f35] font-bold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm italic">Detailed specification sheet under compilation.</p>
                  )}
                </div>

                {/* Material Performance Indicators */}
                <div className="mb-12 bg-white border border-[#e8e3d8] rounded-2xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-xl md:text-2xl font-serif text-[#0d1f35] font-bold mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
                    <Sparkles className="w-5 h-5 text-[#c49a3c]" />
                    Material Performance Profile
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {performanceStats.map((stat, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-baseline text-xs">
                          <span className="text-gray-600 font-medium">{stat.label}</span>
                          <span className="text-[#c49a3c] font-bold">{stat.value}%</span>
                        </div>
                        
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.value}%` }}
                            transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[#0d1f35] to-[#c49a3c] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features & Applications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Features block */}
                  {product.features && (
                    <div className="bg-white border border-[#e8e3d8] rounded-2xl p-6 md:p-8 shadow-sm">
                      <h3 className="text-lg md:text-xl font-serif text-[#0d1f35] font-bold mb-6 pb-3 border-b border-gray-100">
                        Key Features
                      </h3>
                      <div className="space-y-4">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 group">
                            <div className="w-5 h-5 rounded-full bg-[#0d1f35]/5 border border-[#0d1f35]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#c49a3c] transition-colors duration-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c49a3c]" />
                            </div>
                            <span className="text-sm text-gray-600 leading-relaxed font-light group-hover:text-gray-900 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Applications block */}
                  {product.applications && (
                    <div className="bg-white border border-[#e8e3d8] rounded-2xl p-6 md:p-8 shadow-sm">
                      <h3 className="text-lg md:text-xl font-serif text-[#0d1f35] font-bold mb-6 pb-3 border-b border-gray-100">
                        Primary Applications
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.applications.map((app, idx) => (
                          <div key={idx} className="bg-gray-50/50 border border-gray-100 rounded-xl p-4 hover:bg-white hover:border-[#0d1f35]/20 hover:shadow-sm transition-all duration-300 group">
                            <span className="text-xs text-gray-600 font-medium group-hover:text-[#0d1f35] transition-colors">
                              {app}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Right Column: Sticky Inquiry Card & Other Products */}
              <div className="lg:col-span-4 h-full">
                <div className="sticky top-28 space-y-8 pb-12">
                  
                  {/* Modern B2B Inquiry Card */}
                  <div className="bg-white border-2 border-[#0d1f35]/10 rounded-2xl p-6 shadow-md relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0d1f35] to-[#c49a3c]" />
                    
                    <h3 className="text-lg font-serif text-[#0d1f35] font-bold mb-2 flex items-center gap-2">
                      <Send className="w-4 h-4 text-[#c49a3c]" />
                      B2B Quick Inquiry
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">
                      Interested in bulk supply? Request quotation, custom shapes, or custom chemical formulations below.
                    </p>

                    <AnimatePresence mode="wait">
                      {!inquirySubmitted ? (
                        <form onSubmit={handleInquirySubmit} className="space-y-4">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Your Name *</label>
                            <input 
                              type="text" 
                              required
                              value={inquiryName}
                              onChange={(e) => setInquiryName(e.target.value)}
                              placeholder="Your full name" 
                              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-[#e8e3d8] rounded-xl focus:outline-none focus:border-[#0d1f35] focus:bg-white transition-all font-light"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email Address *</label>
                              <input 
                                type="email" 
                                required
                                value={inquiryEmail}
                                onChange={(e) => setInquiryEmail(e.target.value)}
                                placeholder="company@email.com" 
                                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-[#e8e3d8] rounded-xl focus:outline-none focus:border-[#0d1f35] focus:bg-white transition-all font-light"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Company Name</label>
                              <input 
                                type="text" 
                                value={inquiryCompany}
                                onChange={(e) => setInquiryCompany(e.target.value)}
                                placeholder="Enterprise or plant name" 
                                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-[#e8e3d8] rounded-xl focus:outline-none focus:border-[#0d1f35] focus:bg-white transition-all font-light"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Specifications / Notes *</label>
                            <textarea 
                              rows={3}
                              required
                              value={inquiryMessage}
                              onChange={(e) => setInquiryMessage(e.target.value)}
                              placeholder={`Type your inquiry notes here regarding: ${product.name}...`}
                              className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-[#e8e3d8] rounded-xl focus:outline-none focus:border-[#0d1f35] focus:bg-white transition-all font-light resize-none leading-relaxed"
                            />
                          </div>

                          <button 
                            type="submit" 
                            disabled={inquirySubmitting}
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#0d1f35] hover:bg-[#c49a3c] text-white py-3 px-6 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 disabled:opacity-50"
                          >
                            {inquirySubmitting ? (
                              <>
                                <div className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Send className="w-3 h-3" />
                                Submit Inquiry
                              </>
                            )}
                          </button>
                        </form>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-8 px-4 border border-green-100 bg-green-50/50 rounded-2xl flex flex-col items-center gap-3"
                        >
                          <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md animate-bounce">
                            <Check className="w-6 h-6" />
                          </div>
                          <h4 className="text-sm font-bold text-green-800 uppercase tracking-wider mt-2">Inquiry Submitted</h4>
                          <p className="text-[11px] text-green-700/80 leading-relaxed font-light">
                            Your request for **{product.name}** has been sent to our sales engineering desk. We will reach back to you at **{inquiryEmail}** shortly.
                          </p>
                          <button 
                            onClick={() => setInquirySubmitted(false)}
                            className="text-[10px] font-bold uppercase tracking-widest text-[#0d1f35] hover:underline mt-2"
                          >
                            Submit another inquiry
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Quick Contacts Footer */}
                    <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-2 text-[10px] text-gray-500 font-medium">
                      <a href="tel:+919932317334" className="flex items-center gap-2 hover:text-[#c49a3c] transition-colors">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        Sales Hot-line: +91 99323 17334
                      </a>
                      <a href="mailto:paragonrefractories22@gmail.com" className="flex items-center gap-2 hover:text-[#c49a3c] transition-colors">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        Email: paragonrefractories22@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Sidebar Catalog list */}
                  <div className="bg-white border border-[#e8e3d8] rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d1f35] mb-6 pb-3 border-b border-gray-100">
                      Refractory Materials
                    </h3>
                    
                    <div className="flex flex-col gap-1 pr-2 max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full transition-all">
                      {refractoryProducts.map((p) => {
                        const isActive = p.id === product.id;
                        
                        return (
                          <Link 
                            key={p.id}
                            to={`/products/refractory-materials/${p.id}`}
                            className={`group flex items-center gap-3 py-3 border-b border-gray-100 transition-all duration-300 ${
                              isActive ? 'pointer-events-none' : 'hover:pl-2 hover:border-gray-200'
                            }`}
                          >
                            <div className="w-9 h-9 rounded-lg overflow-hidden bg-white border border-gray-200 flex-shrink-0 relative flex items-center justify-center">
                              {p.image ? (
                                <img 
                                  src={p.image} 
                                  alt={p.name} 
                                  className={`w-full h-full object-cover transition-all duration-700 ${
                                    isActive ? 'opacity-100 scale-105' : 'opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'
                                  }`} 
                                />
                              ) : (
                                <ImageIcon className={`w-3.5 h-3.5 transition-colors duration-300 ${isActive ? 'text-[#c49a3c]' : 'text-gray-400 group-hover:text-gray-700'}`} />
                              )}
                              {isActive && <div className="absolute inset-0 ring-1 ring-inset ring-[#c49a3c] rounded-lg" />}
                            </div>
                            
                            <div className="flex-grow min-w-0 pr-2">
                              <h4 className={`text-xs truncate transition-colors duration-300 ${
                                isActive ? 'text-[#0d1f35] font-bold' : 'text-gray-600 group-hover:text-[#0d1f35]'
                              }`}>
                                {p.name}
                              </h4>
                              <p className={`text-[8px] uppercase tracking-[0.15em] mt-0.5 transition-colors duration-300 ${
                                isActive ? 'text-[#c49a3c]' : 'text-gray-400'
                              }`}>
                                {p.category}
                              </p>
                            </div>

                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-all duration-300 ${
                              isActive ? 'text-[#c49a3c]' : 'text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                            }`} />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* PRINT-ONLY CORPORATE DATASHEET TEMPLATE */}
        <div className="hidden print:block bg-white text-black p-8 font-sans max-w-4xl mx-auto">
          
          {/* Document Header */}
          <div className="flex justify-between items-center border-b-3 border-[#0d1f35] pb-4 mb-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Paragon Logo" className="h-14 w-auto object-contain bg-transparent" />
              <div>
                <h1 className="text-xl font-extrabold text-[#0d1f35] tracking-tight uppercase">Paragon Refractories and Minerals</h1>
                <p className="text-[9px] text-[#c49a3c] font-bold uppercase tracking-[0.15em] mt-0.5">High-Temperature Refractory Solutions & Industrial Engineering</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Technical Datasheet</h2>
              <span className="inline-block text-[9px] bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-mono text-slate-600 mt-1 uppercase font-bold">
                DOC: PRM-{product.id.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-12 gap-8 mb-8 items-center bg-slate-50/50 border border-slate-100 rounded-xl p-4">
            {/* Product Image */}
            <div className="col-span-4 border border-slate-200 rounded-lg p-1.5 bg-white">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover rounded" 
              />
            </div>
            {/* Summary Details */}
            <div className="col-span-8">
              <span className="text-[9px] text-[#c49a3c] font-bold uppercase tracking-wider">{product.category} Series</span>
              <h3 className="text-lg font-bold text-[#0d1f35] mt-0.5 mb-2.5">{product.name}</h3>
              <p className="text-xs text-gray-700 leading-relaxed font-light">{product.shortDescription}</p>
              {product.longDescription && (
                <p className="text-xs text-gray-500 leading-relaxed font-light mt-2 border-t border-dashed border-slate-200 pt-2">{product.longDescription[0]}</p>
              )}
            </div>
          </div>

          {/* Table Specification Section */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-[#0d1f35] uppercase tracking-wider mb-3 pb-1 border-b border-slate-200">
              Material Physical & Chemical Properties
            </h4>
            
            {product.tableSpecs ? (
              <table className="w-full text-xs text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    {product.tableSpecs.headers.map((header, i) => (
                      <th key={i} className="border border-slate-200 p-2 text-[9px] font-bold text-[#0d1f35] uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.tableSpecs.rows.map((row, i) => (
                    <tr key={i} className="odd:bg-white even:bg-slate-50/20">
                      {row.map((cell, j) => (
                        <td key={j} className={`border border-slate-200 p-2 text-gray-600 ${j === 0 ? 'font-medium' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : product.detailedSpecs ? (
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 border border-slate-200 rounded-lg p-4 bg-white">
                {product.detailedSpecs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-baseline py-1.5 border-b border-slate-100 text-xs">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-[8px]">{spec.label}</span>
                    <span className="font-bold text-[#0d1f35]">{spec.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-xs italic">Detailed specifications pending catalog updates.</p>
            )}
          </div>

          {/* Dynamic Technical Properties Summary */}
          <div className="mb-8 grid grid-cols-2 gap-6 bg-slate-50/30 border border-slate-100 rounded-xl p-4">
            <div className="space-y-1">
              <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Max Classification Temperature</span>
              <p className="text-sm font-bold text-[#0d1f35]">{product.specs.maxTemp}</p>
            </div>
            <div className="space-y-1 border-l border-slate-200 pl-6">
              <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Standard Bulk Density</span>
              <p className="text-sm font-bold text-[#0d1f35]">{product.specs.density}</p>
            </div>
          </div>

          {/* Corporate Seal & Notes */}
          <div className="mt-16 pt-4 border-t border-slate-200 text-center">
            <p className="text-[9px] font-bold text-[#0d1f35] tracking-wide">PARAGON REFRACTORIES AND MINERALS</p>
            <p className="text-[8px] text-gray-400 mt-1 uppercase">Durgapur, West Bengal, India, 713201</p>
            <p className="text-[7.5px] text-gray-400 mt-0.5">
              Phone: +91 99323 17334 / +91 81588 84204 | Email: paragonrefractories22@gmail.com | Website: www.paragonrefractoriesandminerals.com
            </p>
            <p className="text-[6.5px] text-gray-300 italic mt-3">
              Disclaimer: The values listed above represent average properties based on standard testing methods. Custom variants can be engineered upon request.
            </p>
          </div>

        </div>

      </main>

      <AnimatePresence>
        {isLightboxOpen && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020a14]/95 backdrop-blur-xl p-4 md:p-10 print:hidden"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-all duration-300 p-3 z-50 bg-white/5 hover:bg-white/10 rounded-full hover:rotate-90"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {allImages.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-all duration-300 p-3 md:p-4 z-50 bg-white/5 hover:bg-[#c49a3c] rounded-full hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}

            {allImages.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-all duration-300 p-3 md:p-4 z-50 bg-white/5 hover:bg-[#c49a3c] rounded-full hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()} 
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={activeImage}
                alt={`${product.name} Fullscreen`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-none"
              />
              <div className="mt-6 flex items-center justify-center gap-2">
                {allImages.length > 1 && allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(galleryImages.indexOf(img))}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === img ? 'bg-[#c49a3c] w-6' : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default RefractoryProductDetails;