// src/pages/products/RefractoryProductDetails.tsx
import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft,
  Send,
  Check,
  Phone,
  Flame,
  ShieldCheck,
  CheckCircle2,
  Download,
  Award,
  FlaskConical,
  ArrowUpRight,
  Maximize2,
  X
} from 'lucide-react';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import logo from '@/assets/logo.png';
import { refractoryProducts } from '@/data/refractoryProducts';

// --- Radial Gauge Component --- //
interface RadialGaugeProps {
  percent: number;
  displayValue: string;
  label: string;
  sublabel: string;
  gradientId: string;
}

const RadialGauge = ({ 
  percent, 
  displayValue, 
  label, 
  sublabel,
  gradientId
}: RadialGaugeProps) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (Math.min(Math.max(percent, 5), 100) / 100) * circumference;

  // Responsive font size based on character count so text never clips or overflows the ring
  const getFontSizeClass = (text: string) => {
    const len = text.trim().length;
    if (len <= 4) return "text-sm sm:text-base font-extrabold";
    if (len <= 7) return "text-xs sm:text-[13px] font-extrabold";
    if (len <= 10) return "text-[11px] sm:text-xs font-bold";
    return "text-[10px] font-bold";
  };

  return (
    <div className="group flex flex-col items-center justify-between p-3 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_22px_rgba(0,0,0,0.03)] hover:border-amber-400/80 hover:shadow-[0_16px_35px_rgba(217,119,6,0.1)] transition-all duration-300 min-h-[175px] w-full overflow-hidden">
      {/* Gauge Ring with Strictly Bounded Centered Value */}
      <div className="relative w-[84px] h-[84px] sm:w-[88px] sm:h-[88px] flex items-center justify-center shrink-0">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="5"
            className="text-slate-100"
            fill="transparent"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            fill="transparent"
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>

        {/* Value container with strict bounded dimensions preventing ring collisions */}
        <div className="absolute inset-0 flex items-center justify-center text-center p-2.5 pointer-events-none">
          <span className={`${getFontSizeClass(displayValue)} text-slate-900 tracking-tight leading-tight px-1 text-center max-w-[62px] break-words line-clamp-2`}>
            {displayValue}
          </span>
        </div>
      </div>

      {/* Label & Refined Sublabel Badge Below the Ring */}
      <div className="flex flex-col items-center text-center mt-2 w-full">
        <span 
          className="text-xs sm:text-[13px] font-bold text-slate-800 tracking-tight leading-snug group-hover:text-slate-900 transition-colors truncate whitespace-nowrap block w-full px-1"
          title={label}
        >
          {label}
        </span>
        <span className="inline-block text-[10px] font-semibold text-amber-700 bg-amber-50/90 px-2.5 py-0.5 rounded-full border border-amber-200/50 mt-1.5 leading-tight max-w-[95%] truncate">
          {sublabel}
        </span>
      </div>
    </div>
  );
};

const RefractoryProductDetails = () => {
  const { productId } = useParams();
  
  const product = refractoryProducts.find(p => p.id === productId);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'zones'>('specs');

  // Inquiry Form State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [selectedTonnage, setSelectedTonnage] = useState<string>('25 MT');
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
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return <Navigate to="/products/refractory-materials" replace />;
  }

  // Gallery array creation
  const allImages = [
    product.image,
    ...(product.gallery || [])
  ].filter(Boolean) as string[];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % allImages.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
      } else if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, allImages.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % allImages.length);
    } else if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }
  };

  const handleDownloadDatasheet = () => {
    setDownloadState('processing');
    setTimeout(() => {
      window.print();
      setDownloadState('idle');
    }, 80);
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "e0c4e386-1dea-4873-86d2-5edee06ea579",
          subject: `Minimalist RFQ: ${product.name} [Requirement: ${selectedTonnage}]`,
          product: product.name,
          category: product.category,
          estimated_tonnage: selectedTonnage,
          from_name: inquiryName,
          email: inquiryEmail,
          company: inquiryCompany,
          message: inquiryMessage,
        })
      });

      const result = await response.json();
      if (result.success) {
        setInquirySubmitted(true);
        setInquiryName('');
        setInquiryEmail('');
        setInquiryCompany('');
        setInquiryMessage('');
      } else {
        alert("Failed to submit inquiry. Please reach out to us directly.");
      }
    } catch {
      alert("Submission error. Please contact PRM via phone or email directly.");
    } finally {
      setInquirySubmitting(false);
    }
  };

  const scrollToQuote = () => {
    const el = document.getElementById('rfq-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find related products in the same category or refractory family
  const relatedProducts = refractoryProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  // Compute radial gauge values based on product specs
  const maxTempNumeric = parseInt(product.specs?.maxTemp?.replace(/[^0-9]/g, '') || '1750', 10);
  const tempPercent = Math.min(Math.round((maxTempNumeric / 1900) * 100), 100);

  // Extract Al2O3 percentage
  const al2o3Spec = product.detailedSpecs?.find(s => s.label.toLowerCase().includes('al₂o₃') || s.label.toLowerCase().includes('alumina'));
  const al2o3Percent = al2o3Spec ? parseInt(al2o3Spec.value.replace(/[^0-9]/g, '') || '80', 10) : 80;

  // Extract CCS formatted cleanly
  const ccsSpec = product.detailedSpecs?.find(s => s.label.toLowerCase().includes('cold crushing') || s.label.toLowerCase().includes('ccs'));
  const ccsMatch = ccsSpec?.value.match(/(\d+)\s*(?:–|-)\s*(\d+)/);
  const ccsDisplay = ccsMatch ? `${ccsMatch[2]} MPa` : (ccsSpec?.value ? `${ccsSpec.value.replace(/[^0-9]/g, '').slice(0, 2)} MPa` : '60 MPa');

  // Extract Bulk Density formatted cleanly
  const densityVal = product.specs?.density || '2.65 g/cm³';
  const densityClean = densityVal.split('–')[0].replace(/[^0-9.]/g, '').trim();
  const densityDisplay = densityClean ? `${densityClean} g/cc` : '2.6 g/cc';

  // Pair detailedSpecs into 2-by-2 columns for high-density, single-page engineering PDF layout
  const detailedSpecsList = product.detailedSpecs || [];
  const specPairs: Array<[{ label: string; value: string }, { label: string; value: string } | null]> = [];
  for (let i = 0; i < detailedSpecsList.length; i += 2) {
    specPairs.push([detailedSpecsList[i], detailedSpecsList[i + 1] || null]);
  }

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 flex flex-col selection:bg-amber-100 selection:text-amber-900 font-sans">
      <SEO 
        title={`${product.name} | Luxury Refractory Specification | Paragon Refractories`}
        description={product.shortDescription}
      />

      {/* Screen Interactive Layout (Hidden during print for instant PDF preview) */}
      <div className="print:hidden flex flex-col min-h-screen">
        {/* Single Clean Navbar */}
        <Navbar />

      {/* Subtle Luminous Background Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-200/20 via-orange-100/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-100/30 via-slate-100/40 to-transparent blur-3xl opacity-60" />
      </div>

      <main className="relative z-10 flex-grow pt-20 sm:pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 font-medium mb-5">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link to="/products/refractory-materials" className="hover:text-slate-900 transition-colors">Refractory Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-amber-700 font-semibold">{product.name}</span>
          </nav>

          {/* --- HERO 50/50 SPLIT: MINIMALIST LUXURY SHOWCASE --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16 lg:mb-24">
            
            {/* LEFT COLUMN: FLOATING 3D PEDESTAL SHOWCASE */}
            <div className="lg:col-span-6 flex flex-col items-center">
              
              {/* Luminous Pedestal Container */}
              <div className="relative w-full max-w-[480px] rounded-3xl bg-gradient-to-b from-white/95 via-slate-50/70 to-slate-100/80 p-5 sm:p-7 border border-slate-200/80 backdrop-blur-2xl shadow-[0_16px_45px_-15px_rgba(0,0,0,0.06)] overflow-hidden group">
                
                {/* Soft ambient golden back-glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-tr from-amber-400/25 via-orange-300/20 to-transparent rounded-full blur-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-90" />

                {/* Floating luxury status capsules */}
                <div className="relative z-10 flex items-center justify-between w-full mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 text-white backdrop-blur-md shadow-sm border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-semibold tracking-wider uppercase">PRM Ultra-Grade</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 text-slate-700 backdrop-blur-md border border-slate-200/80 text-[11px] font-medium shadow-sm">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                </div>

                {/* Product Floating Display */}
                <div 
                  className="relative z-10 flex flex-col items-center justify-center my-2 cursor-pointer select-none"
                  onClick={() => setIsLightboxOpen(true)}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <motion.div 
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative flex items-center justify-center max-h-[270px] sm:max-h-[310px]"
                  >
                    <img 
                      src={allImages[activeIndex] || '/images/refractory/High Alumina.webp'} 
                      alt={`${product.name} - View ${activeIndex + 1}`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('High%20Alumina.webp') && !target.src.includes('High Alumina.webp')) {
                          target.src = '/images/refractory/High Alumina.webp';
                        }
                      }}
                      className="max-h-[250px] sm:max-h-[290px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.16)] transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                  </motion.div>

                  {/* Realistic Contact Shadow */}
                  <div className="w-36 sm:w-48 h-4 bg-slate-900/10 rounded-full blur-md mx-auto -mt-1.5 transition-all duration-500 group-hover:w-44 group-hover:opacity-75" />

                  {/* Magnify Hint */}
                  <div className="absolute bottom-1 right-1 p-2 rounded-full bg-white/90 text-slate-600 hover:text-slate-900 shadow-sm border border-slate-200/80 transition-all opacity-0 group-hover:opacity-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Thumbnail Track */}
                {allImages.length > 1 && (
                  <div className="relative z-10 flex items-center justify-center gap-2.5 pt-4 border-t border-slate-200/60 mt-3">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`relative w-12 h-12 rounded-xl overflow-hidden p-1 transition-all duration-300 cursor-pointer ${
                          activeIndex === idx 
                            ? 'ring-2 ring-amber-500 bg-white shadow-md scale-105' 
                            : 'bg-slate-100/70 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`Angle ${idx + 1}`} 
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('High%20Alumina.webp') && !target.src.includes('High Alumina.webp')) {
                              target.src = '/images/refractory/High Alumina.webp';
                            }
                          }}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Action Button */}
              <div className="w-full max-w-[480px] mt-3">
                <button
                  onClick={handleDownloadDatasheet}
                  disabled={downloadState !== 'idle'}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-md transition-all text-xs font-semibold cursor-pointer"
                >
                  <Download className={`w-3.5 h-3.5 text-amber-600 ${downloadState === 'processing' ? 'animate-bounce' : ''}`} />
                  <span>{downloadState === 'processing' ? 'Preparing Specification...' : 'Download Specification'}</span>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: LUXURY EDITORIAL DOSSIER */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-amber-500" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-700">
                  {product.category} Refractory · Grade {product.subtitle || 'Standard'}
                </span>
              </div>

              {/* Product Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
                {product.name}
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                {product.shortDescription || product.longDescription?.[0]}
              </p>

              {/* 4 CIRCULAR / RADIAL PERFORMANCE GAUGES */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                <RadialGauge 
                  percent={tempPercent}
                  displayValue={product.specs.maxTemp}
                  label="Service Temp"
                  sublabel="Peak Rating"
                  gradientId="grad-temp"
                />
                <RadialGauge 
                  percent={al2o3Percent}
                  displayValue={`${al2o3Percent}%`}
                  label="Alumina"
                  sublabel="Al₂O₃ Matrix"
                  gradientId="grad-al2o3"
                />
                <RadialGauge 
                  percent={85}
                  displayValue={ccsDisplay}
                  label="CCS Strength"
                  sublabel="Cold Load"
                  gradientId="grad-ccs"
                />
                <RadialGauge 
                  percent={78}
                  displayValue={densityDisplay}
                  label="Bulk Density"
                  sublabel="Compacted"
                  gradientId="grad-density"
                />
              </div>

              {/* CTAs & Direct Contact */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-200/80">
                <button
                  onClick={scrollToQuote}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-amber-600 transition-all duration-300 shadow-[0_10px_25px_rgba(15,23,42,0.15)] group cursor-pointer"
                >
                  <span>Request Commercial Quotation</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a 
                  href="tel:+919932317334"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white text-slate-700 font-semibold text-sm border border-slate-200/90 hover:border-amber-400 hover:text-slate-900 hover:shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call Metallurgist</span>
                </a>
              </div>

              {/* Trust Micro-Metrics */}
              <div className="flex items-center gap-6 mt-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Ready Factory Dispatch
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Custom Geometric Cuts
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Export Palletized
                </span>
              </div>

            </div>

          </div>

          {/* --- SECTION 2: LUXURY GLASS TABS CONSOLE --- */}
          <div className="mb-20">
            
            {/* Tab Controls */}
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex p-1.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-sm">
                {[
                  { id: 'specs', label: 'Technical Specifications' },
                  { id: 'features', label: 'Engineering Features' },
                  { id: 'zones', label: 'Furnace Applications' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'specs' | 'features' | 'zones')}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB CONTENT: SPECS */}
            {activeTab === 'specs' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              >
                {/* Chemical & Lab Composition Card */}
                <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)] relative overflow-hidden">
                  <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 absolute top-0 left-0" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Chemical Composition & Purity</h3>
                      <p className="text-xs text-slate-500 mt-0.5">X-Ray Fluorescence (XRF) & Lab Analysis</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {(product.detailedSpecs || [
                      { label: "Al₂O₃ Content", value: "≥ 80.0%" },
                      { label: "Fe₂O₃", value: "≤ 1.5%" },
                      { label: "Apparent Porosity", value: "≤ 21%" },
                      { label: "Bulk Density", value: "≥ 2.65 g/cm³" },
                      { label: "Cold Crushing Strength", value: "≥ 55 MPa" },
                      { label: "Refractoriness", value: "≥ 1800°C" },
                      { label: "RUL @ 0.2 MPa", value: "≥ 1520°C" }
                    ]).map((spec, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0">
                        <span className="text-xs sm:text-sm font-medium text-slate-600">{spec.label}</span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Physical Tolerances & Geometry Card */}
                <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between">
                  <div className="w-full h-1 bg-gradient-to-r from-slate-700 to-slate-900 absolute top-0 left-0" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">Standard Formats & Tolerances</h3>
                        <p className="text-xs text-slate-500 mt-0.5">IS & ASTM Dimensional Compliance</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Standard Brick Dimensions</span>
                        <span className="text-xl font-extrabold text-slate-900 font-mono">230 × 115 × 75 mm</span>
                        <span className="text-xs text-slate-500 block mt-1">Equivalent to 9" × 4.5" × 3" Standard Straight</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200/60">
                          <span className="text-[11px] font-semibold text-slate-400 block">Dimensional Tolerance</span>
                          <span className="text-sm font-bold text-slate-800">± 1.0 mm Accuracy</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200/60">
                          <span className="text-[11px] font-semibold text-slate-400 block">Thermal Shock Cycles</span>
                          <span className="text-sm font-bold text-slate-800">30+ Water Quench</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                        <span className="text-xs font-bold text-amber-900 block mb-1">Available Geometric Shapes</span>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          Standard Straights, End Arch, Side Arch, Wedge, Key, Skewbacks, and custom machined CNC blocks for specialized burner throat rings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Quality Grade: ISO 9001:2015</span>
                    <span className="font-semibold text-amber-700">Custom Tooling on Request</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB CONTENT: FEATURES */}
            {activeTab === 'features' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(product.features || [
                  "Excellent performance in ultra-high temperatures up to 1800°C",
                  "High resistance to slag erosion, basic oxides, and molten bath wash",
                  "Superior mechanical strength and load-bearing capacity under thermal soak",
                  "Low apparent porosity for extended campaign life in corrosive furnaces",
                  "Consistent dimensional accuracy for minimal refractory mortar joints",
                  "Verified chemical purity preventing premature softening and creep"
                ]).map((feature, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-amber-400 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      {feature.split(' ').slice(0, 4).join(' ')}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB CONTENT: ZONES */}
            {activeTab === 'zones' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(product.applications || [
                  "Electric Arc Furnace (EAF) Roofs & Delta Sections",
                  "Blast Furnace & Hot Blast Stove Lining",
                  "Cement Rotary Kilns (Burning & High-Heat Transition Zones)",
                  "Steel Ladle Working Linings & Tundish Impact Pads",
                  "Petrochemical Heaters & Reformer Chambers",
                  "High-Temperature Continuous Tunnel Kilns"
                ]).map((app, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-sm flex items-start gap-4 hover:border-amber-400 hover:shadow-md transition-all"
                  >
                    <div className="p-3 rounded-xl bg-slate-900 text-white shrink-0">
                      <Flame className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block mb-1">Industrial Target Zone</span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{app}</h4>
                      <p className="text-xs text-slate-500 mt-1">Recommended for high thermal stability and structural durability.</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </div>

          {/* --- SECTION 3: LUXURY PROCUREMENT RFQ CONSOLE --- */}
          <div id="rfq-section" className="mb-20 scroll-mt-28">
            <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-[0_25px_60px_rgba(15,23,42,0.25)] relative overflow-hidden">
              
              {/* Golden Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10">
                
                {/* Left Info */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
                      Direct Manufacturer Pricing
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                      Request Precision Commercial Quotation
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Procure directly from Paragon Refractories & Minerals with factory gate pricing, mill test certificates, and full logistical dispatch coordination across India and worldwide ports.
                    </p>

                    {/* Quick Specs Snapshot */}
                    <div className="space-y-3 pt-4 border-t border-slate-800/80 mb-6">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Selected Product:</span>
                        <span className="text-amber-400 font-semibold">{product.name}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Standard Packaging:</span>
                        <span className="text-white font-medium">Export Wooden Pallets (Shrink Wrapped)</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotline Details */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="text-xs text-slate-400 block mb-1">Direct Engineering Desk Hotline</span>
                    <a href="tel:+919932317334" className="text-base font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 99323 17334 / +91 81588 84204</span>
                    </a>
                  </div>
                </div>

                {/* Right Form */}
                <div className="lg:col-span-7">
                  {inquirySubmitted ? (
                    <div className="p-10 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center min-h-[380px]">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                        <Check className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Quotation Request Received</h3>
                      <p className="text-slate-300 text-sm max-w-md mb-6">
                        Thank you for your commercial inquiry. Our senior refractory application engineer will review your tonnage requirement and contact you within 2 business hours.
                      </p>
                      <button
                        onClick={() => setInquirySubmitted(false)}
                        className="py-2.5 px-6 rounded-xl bg-amber-500 text-slate-900 font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      
                      {/* Tonnage Selector Chips */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          Select Estimated Quantity
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {['10 MT', '25 MT', '50 MT', '100+ MT'].map((tonnage) => (
                            <button
                              type="button"
                              key={tonnage}
                              onClick={() => {
                                setSelectedTonnage(tonnage);
                                setInquiryMessage(prev => {
                                  const prefix = `Estimated Requirement: ${tonnage}. `;
                                  if (prev.startsWith('Estimated Requirement:')) {
                                    return prev.replace(/^Estimated Requirement:[^.]*\.\s*/, prefix);
                                  }
                                  return prefix + prev;
                                });
                              }}
                              className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                selectedTonnage === tonnage
                                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                              }`}
                            >
                              {tonnage}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Inputs Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1">Full Name *</label>
                          <input 
                            type="text" 
                            required
                            value={inquiryName}
                            onChange={(e) => setInquiryName(e.target.value)}
                            placeholder="e.g. Rajesh Sharma"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1">Official Email *</label>
                          <input 
                            type="email" 
                            required
                            value={inquiryEmail}
                            onChange={(e) => setInquiryEmail(e.target.value)}
                            placeholder="name@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">Company / Plant Location</label>
                        <input 
                          type="text" 
                          value={inquiryCompany}
                          onChange={(e) => setInquiryCompany(e.target.value)}
                          placeholder="e.g. Steel Plant, Raipur / Hazira"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">Project Specifications / Notes</label>
                        <textarea 
                          rows={3}
                          value={inquiryMessage}
                          onChange={(e) => setInquiryMessage(e.target.value)}
                          placeholder={`Requirements for ${product.name}, standard shapes or custom drawings...`}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={inquirySubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-[0_10px_25px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {inquirySubmitting ? (
                          <span>Processing RFQ...</span>
                        ) : (
                          <>
                            <span>Transmit Quotation Request</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                          <span>ISO 9001:2015 Certified Manufacturer</span>
                        </span>
                        <a href="mailto:paragonrefractories22@gmail.com" className="text-amber-400 hover:underline">
                          Direct email: paragonrefractories22@gmail.com
                        </a>
                      </div>

                    </form>
                  )}
                </div>

              </div>

            </div>
          </div>

          {/* --- SECTION 4: HORIZONTAL RELATED PRODUCTS SHOWCASE --- */}
          <div>
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                  Complementary Refractories
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Related Engineering Grades
                </h3>
              </div>
              <Link 
                to="/products/refractory-materials"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-600 transition-colors"
              >
                <span>View All Grades</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/products/refractory-materials/${rel.id}`}
                  className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-amber-400/80 hover:shadow-[0_20px_40px_rgba(217,119,6,0.1)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/80 flex items-center justify-center p-4 mb-4 overflow-hidden relative">
                      <img 
                        src={rel.image || '/images/refractory/High Alumina.webp'} 
                        alt={rel.name} 
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('High%20Alumina.webp') && !target.src.includes('High Alumina.webp')) {
                            target.src = '/images/refractory/High Alumina.webp';
                          }
                        }}
                        className="max-h-36 max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-bold text-slate-800 border border-slate-200/80 shadow-xs">
                        {rel.specs?.maxTemp || '1750°C'}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug mb-2">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                    <span>Inspect Specs</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div 
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image in Lightbox */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center">
                <img 
                  src={allImages[activeIndex] || '/images/refractory/High Alumina.webp'} 
                  alt={product.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('High%20Alumina.webp') && !target.src.includes('High Alumina.webp')) {
                      target.src = '/images/refractory/High Alumina.webp';
                    }
                  }}
                  className="max-h-[70vh] max-w-full object-contain drop-shadow-2xl" 
                />

                {/* Left/Right Controls */}
                {allImages.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
                      className="absolute left-2 p-3 rounded-full bg-black/50 text-white hover:bg-amber-600 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={() => setActiveIndex((prev) => (prev + 1) % allImages.length)}
                      className="absolute right-2 p-3 rounded-full bg-black/50 text-white hover:bg-amber-600 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Title & Counter */}
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-lg">{product.name}</h3>
                <span className="text-slate-400 text-xs mt-1 block">
                  Angle {activeIndex + 1} of {allImages.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

        <Footer />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          EXECUTIVE TECHNICAL SPECIFICATION DOSSIER (PRINT / PDF ONLY)
      ══════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════
          EXECUTIVE TECHNICAL SPECIFICATION DOSSIER (PRINT / PDF ONLY)
      ══════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════
          EXECUTIVE TECHNICAL SPECIFICATION DOSSIER (PRINT / PDF ONLY)
      ══════════════════════════════════════════════════════════════ */}
      <div className="hidden print:block bg-white text-slate-900 font-sans w-full max-w-[800px] mx-auto p-0 print-specification-dossier">
        {/* Top Corporate Letterhead (Clean Luxury Architectural Design) */}
        <div className="border-t-2 border-amber-500 pt-5 pb-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0 border border-slate-200">
              <img src={logo} alt="PRM Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-wide uppercase text-slate-900">
                PARAGON REFRACTORIES &amp; MINERALS
              </div>
              <div className="text-[10px] text-amber-700 font-semibold mt-0.5">
                Manufacturer of reheating furnace , refractory and reheating furnace materials
              </div>
              <div className="text-[9px] text-slate-500 mt-0.5">
                Durgapur Works, West Bengal – 713206, India · Tel: +91 99323 17334 / +91 81588 84204
              </div>
            </div>
          </div>

          <div className="text-right border-l border-slate-200 pl-5 shrink-0">
            <div className="inline-block bg-amber-50 text-amber-800 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-amber-200/80 mb-1">
              ISO 9001:2015 CERTIFIED
            </div>
            <div className="text-xs font-bold text-slate-900 tracking-tight">TECHNICAL SPECIFICATION</div>
            <div className="text-[9px] text-slate-400 font-mono mt-0.5">PRM-TDS-{product.id.toUpperCase().slice(0, 14)}</div>
          </div>
        </div>

        {/* Product Identity Header (Airy & Spacious, No Cluttered Nested Boxes) */}
        <div className="py-6 border-b border-slate-100">
          <div className="text-[10px] font-bold tracking-widest uppercase text-amber-700 mb-1.5">
            {product.category} Refractory Series · Grade {product.subtitle || 'Standard'}
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
            {product.name}
          </h1>

          <p className="text-[11px] text-slate-600 leading-relaxed max-w-2xl mb-3">
            {product.shortDescription || product.longDescription?.[0]}
          </p>

          <div className="flex items-center gap-6 text-[9.5px] font-medium text-slate-600 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Extreme Thermal Shock Resistance
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              High Refractoriness Under Load
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Slag &amp; Alkali Flux Barrier
            </span>
          </div>
        </div>

        {/* 4 Key Performance Metrics (Spacious Horizontal Strip) */}
        <div className="grid grid-cols-4 divide-x divide-slate-200 border border-slate-200 rounded-xl my-6 bg-slate-50/50 py-3 text-center">
          <div className="px-2">
            <div className="text-[8.5px] font-semibold text-slate-400 uppercase tracking-wider">MAX SERVICE TEMP</div>
            <div className="text-base font-bold text-slate-900 mt-1">{product.specs?.maxTemp || '1800°C'}</div>
            <div className="text-[8px] text-amber-700 font-medium mt-0.5">Peak Operational</div>
          </div>
          <div className="px-2">
            <div className="text-[8.5px] font-semibold text-slate-400 uppercase tracking-wider">PRIMARY COMPOSITION</div>
            <div className="text-base font-bold text-slate-900 mt-1">{al2o3Spec?.value || '≥ 80% Al₂O₃'}</div>
            <div className="text-[8px] text-amber-700 font-medium mt-0.5">High Alumina Matrix</div>
          </div>
          <div className="px-2">
            <div className="text-[8.5px] font-semibold text-slate-400 uppercase tracking-wider">COLD CRUSHING STRENGTH</div>
            <div className="text-base font-bold text-slate-900 mt-1">{ccsDisplay}</div>
            <div className="text-[8px] text-amber-700 font-medium mt-0.5">Compressive Yield</div>
          </div>
          <div className="px-2">
            <div className="text-[8.5px] font-semibold text-slate-400 uppercase tracking-wider">BULK DENSITY</div>
            <div className="text-base font-bold text-slate-900 mt-1">{densityVal}</div>
            <div className="text-[8px] text-amber-700 font-medium mt-0.5">Compacted Mass</div>
          </div>
        </div>

        {/* Technical Properties Table (Generous Spacing, Clean Typography) */}
        <div className="mb-6 print-avoid-break">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-amber-500 inline-block rounded-xs" />
              GUARANTEED TECHNICAL PROPERTIES
            </h2>
            <span className="text-[9px] text-slate-400 font-medium">Standard Geometry: 230 × 115 × 75 mm</span>
          </div>

          <table className="w-full text-[10px] border border-slate-200 border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-[9px] uppercase tracking-wider">
                <th className="py-2.5 px-3.5 text-left font-semibold w-[28%] border-r border-slate-800">Test Parameter</th>
                <th className="py-2.5 px-3.5 text-left font-semibold w-[22%] border-r border-slate-800">Guaranteed Spec</th>
                <th className="py-2.5 px-3.5 text-left font-semibold w-[28%] border-r border-slate-800">Test Parameter</th>
                <th className="py-2.5 px-3.5 text-left font-semibold w-[22%]">Guaranteed Spec</th>
              </tr>
            </thead>
            <tbody>
              {specPairs.map(([left, right], i) => (
                <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}>
                  <td className="py-2 px-3.5 font-medium text-slate-700 border-r border-slate-100">{left.label}</td>
                  <td className="py-2 px-3.5 font-mono font-bold text-slate-900 border-r border-slate-100">{left.value}</td>
                  {right ? (
                    <>
                      <td className="py-2 px-3.5 font-medium text-slate-700 border-r border-slate-100">{right.label}</td>
                      <td className="py-2 px-3.5 font-mono font-bold text-slate-900">{right.value}</td>
                    </>
                  ) : (
                    <td colSpan={2} className="py-2 px-3.5 text-slate-400 italic text-[9px]">
                      Custom dimensions and shapes available on request
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommended Applications (Clean & Airy 2-Column List) */}
        <div className="mb-6 pt-2 print-avoid-break">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 inline-block rounded-xs" />
            RECOMMENDED APPLICATIONS &amp; THERMAL ZONES
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[10px] text-slate-700">
            {(product.applications && product.applications.length > 0
              ? product.applications
              : [
                  "Walking Beam & Continuous Pusher Reheating Furnaces",
                  "High-Pressure Boilers, Target Walls & Burner Quarls",
                  "Rotary Kiln Burning & Transition Zones",
                  "Steel Plant Ladles, Tundish & Soaking Pits"
                ]
            ).map((app, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Sign-off & Quality Assurance Footer */}
        <div className="border-t border-slate-200 pt-5 mt-6 flex items-end justify-between text-[9px] text-slate-500 print-avoid-break">
          <div>
            <div className="font-extrabold text-slate-900 text-xs">PARAGON REFRACTORIES &amp; MINERALS</div>
            <div className="mt-0.5">Works &amp; Head Office: Durgapur, West Bengal – 713206, India</div>
            <div>Direct Desk: +91 99323 17334 / +91 81588 84204 · Email: paragonrefractories@gmail.com</div>
            <div className="text-[8px] text-slate-400 mt-1">
              Confidential Technical Data Sheet · Batch Mill Test Certificate (MTC) supplied with dispatch
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">CERTIFIED QUALITY SPECIFICATION</div>
            <div className="text-[10px] font-extrabold text-slate-800 mt-0.5">PRM METALLURGY DIVISION</div>
            <div className="text-[8.5px] text-emerald-700 font-semibold mt-0.5">✓ ISO 9001:2015 REGISTERED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefractoryProductDetails;