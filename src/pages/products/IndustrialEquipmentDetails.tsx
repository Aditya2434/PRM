// src/pages/products/IndustrialEquipmentDetails.tsx
import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Phone, 
  Flame, 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  Award, 
  ArrowUpRight, 
  Maximize2, 
  X,
  Factory,
  Cpu,
  Layers,
  Activity,
  Zap,
  Mail,
  Sliders,
  Send,
  Check,
  Wind,
  Gauge
} from 'lucide-react';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import logo from '@/assets/logo.png';
import { equipmentsData } from '@/data/industrialEquipments';

// --- Precision Engineering Telemetry Card --- //
interface TelemetryCardProps {
  icon: any;
  label: string;
  sublabel: string;
  value: string;
  unit?: string;
  tag: string;
}

const TelemetryCard = ({ icon: Icon, label, sublabel, value, unit, tag }: TelemetryCardProps) => {
  const getValueSizeClass = (val: string) => {
    const len = val.length;
    if (len <= 6) return "text-2xl sm:text-[26px]";
    if (len <= 8) return "text-xl sm:text-[22px]";
    if (len <= 10) return "text-lg sm:text-[19px]";
    return "text-[16px] sm:text-[18px]";
  };

  const displayTag = tag.replace(/^\/\/\s*/, '').trim();

  return (
    <div className="group relative rounded-2xl bg-white/90 hover:bg-white backdrop-blur-xl border border-slate-200/90 hover:border-amber-400 p-4 sm:p-4.5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(217,119,6,0.09)] hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between min-h-[175px]">
      {/* Ambient top-right corner glow */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-bl from-amber-400/15 via-orange-300/5 to-transparent rounded-full blur-xl pointer-events-none group-hover:from-amber-400/25 transition-all duration-500" />

      <div>
        {/* Top Header: Icon in glowing badge + parameter index/tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 flex items-center justify-center text-amber-700 shadow-xs group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300 shrink-0">
            <Icon className="w-4 h-4 text-amber-600" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 group-hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
            {displayTag}
          </span>
        </div>

        {/* Hero Numerical Metric with Monospace Unit */}
        <div className="flex flex-col">
          <span className={`${getValueSizeClass(value)} font-extrabold text-slate-900 tracking-tight leading-tight whitespace-nowrap`}>
            {value}
          </span>
          {unit && (
            <span className="text-[11px] sm:text-xs font-mono font-bold text-amber-600 tracking-wider uppercase mt-1 whitespace-nowrap">
              {unit}
            </span>
          )}
        </div>

        {/* Metric Label */}
        <h4 
          className="text-xs sm:text-[13px] font-bold text-slate-700 mt-2 leading-snug group-hover:text-slate-900 transition-colors truncate whitespace-nowrap block"
          title={label}
        >
          {label}
        </h4>
      </div>

      {/* Sublabel Context Strip with Active Indicator */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center">
        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-slate-500 group-hover:text-slate-700 transition-colors truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
          <span className="truncate">{sublabel}</span>
        </span>
      </div>
    </div>
  );
};

const IndustrialEquipmentDetails = () => {
  const { id } = useParams();
  
  const product = equipmentsData.find(p => p.id === id);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'highlights' | 'applications'>('specs');

  // Inquiry Form State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('Standard EPC Sizing');
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
  }, [id]);

  if (!product) {
    return <Navigate to="/products/industrial-equipment" replace />;
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
    if (distance > minSwipeDistance) {
      setActiveIndex((prev) => (prev + 1) % allImages.length);
    }
    if (distance < -minSwipeDistance) {
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
          subject: `Industrial Equipment Inquiry: ${product.title} [Sizing: ${selectedCapacity}]`,
          product: product.title,
          category: product.category,
          estimated_capacity: selectedCapacity,
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

  // Find 4 related complementary equipment systems
  const relatedEquipments = equipmentsData
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  // Equipment specs entries for tabs, gauges, and print dossier
  const specsEntries = Object.entries(product.specs || {});

  // Tailored, high-precision engineering telemetry metrics for each industrial equipment item
  interface TelemetryData {
    label: string;
    sublabel: string;
    value: string;
    unit?: string;
    icon: any;
    tag: string;
  }

  const getEquipmentTelemetry = (): TelemetryData[] => {
    if (product.id === 'recuperator') {
      return [
        { label: 'Service Temp', sublabel: 'Ceramic / Metallic Peak', value: '1,400°C', unit: 'MAX', icon: Flame, tag: 'THERMAL' },
        { label: 'Air Preheat', sublabel: 'Combustion Heat Output', value: '800°C', unit: 'OUTPUT', icon: Activity, tag: 'PREHEAT' },
        { label: 'Heat Recovery', sublabel: 'Fuel Consumption Reduction', value: '30%–70%', unit: 'YIELD', icon: Gauge, tag: 'EFFICIENCY' },
        { label: 'Tube Alloy', sublabel: 'Heat-Resistant Tube Matrix', value: 'SS / Ceramic', unit: 'TUBES', icon: ShieldCheck, tag: 'ALLOY' }
      ];
    }

    if (product.id === 'pusher-type-reheating-furnace') {
      return [
        { label: 'Max Temp', sublabel: 'Continuous Heating & Soaking', value: '1,300°C', unit: 'RATING', icon: Flame, tag: 'THERMAL' },
        { label: 'Throughput', sublabel: 'Continuous Billets & Slabs', value: '5–100+', unit: 'TPH', icon: Layers, tag: 'CAPACITY' },
        { label: 'Fuel Types', sublabel: 'Coal · Oil · Gas Compatible', value: 'Multi-Fuel', unit: 'FIRING', icon: Zap, tag: 'FIRING' },
        { label: 'Control System', sublabel: 'Multi-Zone Thermal Synced', value: 'PLC Auto', unit: 'SYSTEM', icon: Cpu, tag: 'CONTROL' }
      ];
    }

    if (product.id === 'heating-pumping-unit') {
      return [
        { label: 'Preheat Temp', sublabel: 'Viscosity Optimization', value: '140°C', unit: 'PREHEAT', icon: Flame, tag: 'THERMAL' },
        { label: 'Operating Press.', sublabel: 'Continuous Atomization', value: '5–20', unit: 'BAR', icon: Gauge, tag: 'PRESSURE' },
        { label: 'Pump Drive', sublabel: 'Heavy Fuel Flow Delivery', value: 'Gear / Screw', unit: 'DRIVE', icon: Activity, tag: 'PUMP' },
        { label: 'Safety System', sublabel: 'Pressure Interlocks & Alarms', value: 'PLC Auto', unit: 'PANEL', icon: Cpu, tag: 'CONTROL' }
      ];
    }

    if (product.id === 'industrial-blowers') {
      return [
        { label: 'Air Flow', sublabel: 'High-Volume Delivery', value: '50,000+', unit: 'm³/hr', icon: Wind, tag: 'AIR FLOW' },
        { label: 'Static Pressure', sublabel: 'Heavy Industrial Ducting', value: '1,500', unit: 'mmWC', icon: Gauge, tag: 'PRESSURE' },
        { label: 'Motor Power', sublabel: 'Direct or Belt Driven', value: '1–100', unit: 'HP', icon: Zap, tag: 'POWER' },
        { label: 'Thermal Limit', sublabel: 'Custom High-Temp Avail.', value: '300°C', unit: 'PEAK', icon: Flame, tag: 'THERMAL' }
      ];
    }

    if (product.id === 'industrial-pulverizer') {
      return [
        { label: 'Output Capacity', sublabel: 'Continuous Fuel Processing', value: '10', unit: 'TPH MAX', icon: Layers, tag: 'CAPACITY' },
        { label: 'Motor Power', sublabel: 'High-Torque Heavy Impact', value: '10–100', unit: 'HP', icon: Zap, tag: 'POWER' },
        { label: 'Fineness', sublabel: 'Uniform Coal Particle Size', value: '0–3', unit: 'mm', icon: Activity, tag: 'FINENESS' },
        { label: 'Intake Size', sublabel: 'Impact Grinding Chamber', value: '50', unit: 'mm MAX', icon: Gauge, tag: 'FEED' }
      ];
    }

    if (product.id === 'billet-ejector') {
      return [
        { label: 'Thermal Limit', sublabel: 'Discharge End Interface', value: '1,200°C+', unit: 'HOT ZONE', icon: Flame, tag: 'THERMAL' },
        { label: 'Drive Actuation', sublabel: 'Heavy-Duty Hydraulic Force', value: 'Hydraulic', unit: 'POWER', icon: Gauge, tag: 'DRIVE' },
        { label: 'Operation Cycle', sublabel: 'Rolling Mill Synced Push', value: 'Automatic', unit: 'CYCLE', icon: Cpu, tag: 'CONTROL' },
        { label: 'Steel Grade', sublabel: 'Heat-Treated Alloy Steel', value: 'Alloy Steel', unit: 'GRADE', icon: ShieldCheck, tag: 'ALLOY' }
      ];
    }

    if (product.id === 'billet-pusher') {
      return [
        { label: 'Thermal Limit', sublabel: 'Furnace Entry Interface', value: '1,200°C+', unit: 'HOT ZONE', icon: Flame, tag: 'THERMAL' },
        { label: 'Push Capacity', sublabel: 'Continuous Heavy Charging', value: '100+', unit: 'TONS', icon: Layers, tag: 'CAPACITY' },
        { label: 'Stroke Length', sublabel: 'Precision Engineered Travel', value: '3,000', unit: 'mm', icon: Activity, tag: 'STROKE' },
        { label: 'Control System', sublabel: 'Stroke Limit Synced to Mill', value: 'PLC Auto', unit: 'SYSTEM', icon: Cpu, tag: 'CONTROL' }
      ];
    }

    if (product.id === 'industrial-burner') {
      return [
        { label: 'Firing Capacity', sublabel: 'Atomized Fuel Delivery', value: '100+', unit: 'LPH', icon: Flame, tag: 'FIRING' },
        { label: 'Operating Press.', sublabel: 'Stable Flame Geometry', value: '5–20', unit: 'BAR', icon: Gauge, tag: 'PRESSURE' },
        { label: 'Burner Series', sublabel: '2A to 6A Scalable Frames', value: '2A–6A', unit: 'SCALE', icon: Layers, tag: 'SCALE' },
        { label: 'Fuel Types', sublabel: 'FO / LDO / Gas Compatible', value: 'Multi-Fuel', unit: 'DUAL-FIRE', icon: Zap, tag: 'FUEL' }
      ];
    }

    if (product.id === 'butterfly-valve') {
      return [
        { label: 'Diameter Range', sublabel: 'Wafer / Lug / Flanged Bodies', value: '1”–24”', unit: 'DN25–600', icon: Layers, tag: 'SIZE' },
        { label: 'Pressure Rating', sublabel: 'Leak-Tight Bi-Directional', value: 'PN25', unit: 'MAX', icon: Gauge, tag: 'PRESSURE' },
        { label: 'Thermal Rating', sublabel: 'High-Temp Metal-Seated', value: '200°C+', unit: 'RATED', icon: Flame, tag: 'THERMAL' },
        { label: 'Actuator Type', sublabel: 'Pneumatic / Electric / Manual', value: 'Pneumatic', unit: 'ACTUATED', icon: Cpu, tag: 'ACTUATION' }
      ];
    }

    if (product.id === 'industrial-pulley') {
      return [
        { label: 'Load Rating', sublabel: 'Heavy Dynamic Duty', value: '50+ Tons', unit: 'CAPACITY', icon: Layers, tag: 'LOAD' },
        { label: 'Sheave Dia.', sublabel: 'Machined Cast Steel', value: '1,000', unit: 'mm MAX', icon: Gauge, tag: 'DIAMETER' },
        { label: 'Hardness', sublabel: 'Heat-Treated Groove', value: '350', unit: 'BHN', icon: ShieldCheck, tag: 'HARDNESS' },
        { label: 'Rope Range', sublabel: 'Wire Rope Compatibility', value: '12–40', unit: 'mm', icon: Activity, tag: 'CABLE' }
      ];
    }

    if (product.id === 'industrial-winch-machine') {
      return [
        { label: 'Pull Capacity', sublabel: 'High-Torque Heavy Haulage', value: '30+', unit: 'TONS', icon: Layers, tag: 'CAPACITY' },
        { label: 'Motor Power', sublabel: 'Heavy Crane Duty Drive', value: '50+', unit: 'HP', icon: Zap, tag: 'POWER' },
        { label: 'Rope Speed', sublabel: 'Controlled Drum Spooling', value: '20', unit: 'm/min', icon: Gauge, tag: 'SPEED' },
        { label: 'Brake Type', sublabel: 'Fail-Safe Electro-Magnetic', value: 'Thruster', unit: 'BRAKE', icon: ShieldCheck, tag: 'SAFETY' }
      ];
    }

    // Generic fallback with clean parsing
    const specsEntries = Object.entries(product.specs || {});
    const tempSpec = specsEntries.find(([k]) => k.toLowerCase().includes('temp'));
    let cleanTemp = '1,300°C';
    if (tempSpec) {
      const raw = String(tempSpec[1]);
      const match = raw.match(/(\d{3,4}(?:\+)?°C)/g);
      cleanTemp = match ? match[match.length - 1] : raw.replace(/up to/i, '').split('(')[0].trim().slice(0, 8);
    }

    const capSpec = specsEntries.find(([k]) => k.toLowerCase().includes('capacity') || k.toLowerCase().includes('flow') || k.toLowerCase().includes('output'));
    const cleanCap = capSpec ? String(capSpec[1]).split('(')[0].trim().slice(0, 10) : 'Custom';

    const effSpec = specsEntries.find(([k]) => k.toLowerCase().includes('efficiency') || k.toLowerCase().includes('pressure') || k.toLowerCase().includes('power'));
    const cleanEff = effSpec ? String(effSpec[1]).split('(')[0].trim().slice(0, 10) : 'High Yield';

    const ctrlSpec = specsEntries.find(([k]) => k.toLowerCase().includes('control') || k.toLowerCase().includes('operation') || k.toLowerCase().includes('drive'));
    const cleanCtrl = ctrlSpec ? String(ctrlSpec[1]).split('/')[0].trim().slice(0, 10) : 'PLC Auto';

    return [
      { label: 'Thermal Limit', sublabel: 'Peak Operating Threshold', value: cleanTemp, unit: 'PEAK', icon: Flame, tag: 'THERMAL' },
      { label: 'Rated Capacity', sublabel: 'Continuous Operation', value: cleanCap, unit: 'OUTPUT', icon: Layers, tag: 'CAPACITY' },
      { label: 'Performance', sublabel: 'Operating Specification', value: cleanEff, unit: 'SPEC', icon: Gauge, tag: 'SPEC' },
      { label: 'Control System', sublabel: 'Integrated Automation', value: cleanCtrl, unit: 'SYSTEM', icon: Cpu, tag: 'CONTROL' }
    ];
  };

  const equipmentTelemetry = getEquipmentTelemetry();

  // Pair specsEntries into 2-by-2 columns for high-density, single-page engineering PDF layout
  const equipSpecPairs: Array<[[string, any], [string, any] | null]> = [];
  for (let i = 0; i < specsEntries.length; i += 2) {
    equipSpecPairs.push([specsEntries[i], specsEntries[i + 1] || null]);
  }

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 flex flex-col selection:bg-amber-100 selection:text-amber-900 font-sans">
      <SEO 
        title={`${product.title} | Heavy Industrial Furnace Hardware | PRM`}
        description={product.desc}
      />

      {/* Screen Interactive Layout (Hidden during print for instant PDF preview) */}
      <div className="print:hidden flex flex-col min-h-screen">
        <Navbar />

      {/* Subtle Luminous Background Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 print:hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-200/20 via-orange-100/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-100/30 via-slate-100/40 to-transparent blur-3xl opacity-60" />
      </div>

      <main className="relative z-10 flex-grow pt-20 sm:pt-24 pb-20 print:pt-0 print:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 print:p-0">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 font-medium mb-5 print:hidden">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link to="/products/industrial-equipment" className="hover:text-slate-900 transition-colors">Industrial Equipment</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-amber-700 font-semibold">{product.title}</span>
          </nav>

          {/* ══════════════════════════════════════════════════════════════
              HERO 50/50 SPLIT: MINIMALIST LUXURY SHOWCASE
          ══════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16 lg:mb-24 print:hidden">
            
            {/* LEFT COLUMN: FLOATING 3D PEDESTAL SHOWCASE */}
            <div className="lg:col-span-6 flex flex-col items-center">
              
              {/* Luminous Pedestal Container */}
              <div className="relative w-full max-w-[500px] rounded-3xl bg-gradient-to-b from-white/95 via-slate-50/70 to-slate-100/80 p-5 sm:p-7 border border-slate-200/80 backdrop-blur-2xl shadow-[0_16px_45px_-15px_rgba(0,0,0,0.06)] overflow-hidden group">
                
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

                {/* Equipment Floating Display */}
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
                    className="relative flex items-center justify-center max-h-[260px] sm:max-h-[300px] w-full"
                  >
                    <img 
                      src={allImages[activeIndex] || '/images/industrial_equipment_hero.jpg'} 
                      alt={`${product.title} - View ${activeIndex + 1}`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('industrial_equipment_hero')) {
                          target.src = '/images/industrial_equipment_hero.jpg';
                        }
                      }}
                      className="max-h-[240px] sm:max-h-[280px] max-w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.16)] transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                  </motion.div>

                  {/* Realistic Contact Shadow */}
                  <div className="w-40 sm:w-52 h-4 bg-slate-900/10 rounded-full blur-md mx-auto -mt-1.5 transition-all duration-500 group-hover:w-48 group-hover:opacity-75" />

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
                            if (!target.src.includes('industrial_equipment_hero')) {
                              target.src = '/images/industrial_equipment_hero.jpg';
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
              <div className="w-full max-w-[500px] mt-3">
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
                  {product.category} Machinery · Heavy Industrial Hardware
                </span>
              </div>

              {/* Product Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
                {product.title}
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                {product.desc}
              </p>

              {/* 4 PRECISION ENGINEERING TELEMETRY CARDS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 mb-8">
                {equipmentTelemetry.map((item, idx) => (
                  <TelemetryCard 
                    key={idx}
                    icon={item.icon}
                    label={item.label}
                    sublabel={item.sublabel}
                    value={item.value}
                    unit={item.unit}
                    tag={item.tag}
                  />
                ))}
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 text-[11px] text-slate-500 font-medium border-t border-slate-100 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ISO 9001:2015 Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fast Track EPC Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Factory Commissioning Support</span>
                </div>
              </div>

            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════
              SECTION 2: INTERACTIVE SPECIFICATION SYSTEM
          ══════════════════════════════════════════════════════════════ */}
          <div className="mb-16 lg:mb-24 print:hidden">
            
            {/* Segmented Tab Bar */}
            <div className="flex items-center justify-center sm:justify-start gap-2 p-1.5 rounded-2xl bg-slate-100/90 max-w-fit mb-8 border border-slate-200/60 shadow-xs">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Engineering Parameters
              </button>
              <button
                onClick={() => setActiveTab('highlights')}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'highlights'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Operational Highlights &amp; Features
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'applications'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Industrial Applications
              </button>
            </div>

            {/* TAB CONTENT 1: ENGINEERING PARAMETERS */}
            {activeTab === 'specs' && (
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
              >
                {/* LEFT PANE: CERTIFIED TECHNICAL DATASHEET TABLE (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between">
                  <div className="w-full h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 absolute top-0 left-0" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700">
                            OFFICIAL CERTIFIED DATASHEET
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                          Primary Engineering Parameters
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Factory Calibrated Operational Ratings &amp; Mechanical Tolerances
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-amber-50/90 border border-amber-200/70 text-amber-700 flex items-center justify-center shrink-0 shadow-xs">
                        <Sliders className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Datasheet Rows */}
                    <div className="divide-y divide-slate-100">
                      {specsEntries.map(([label, value], i) => (
                        <div 
                          key={i} 
                          className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-2 sm:px-3 rounded-xl hover:bg-amber-50/40 transition-colors group gap-1.5 sm:gap-4"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors truncate">
                              {label}
                            </span>
                          </div>
                          <span className="text-xs sm:text-[13px] font-bold text-slate-900 font-mono bg-slate-50/90 px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs group-hover:border-amber-400 group-hover:bg-white transition-all text-left sm:text-right shrink-0">
                            {String(value)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footnote Strip */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>IS, ASTM &amp; ISO 9001:2015 Manufacturing Standard</span>
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-amber-700">
                      CAD &amp; GA Blueprints On Request
                    </span>
                  </div>
                </div>

                {/* RIGHT PANE: MANUFACTURING INTEGRITY & COMMISSIONING (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between">
                  <div className="w-full h-1 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 absolute top-0 left-0" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                            QUALITY ASSURANCE
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                          Heavy Engineering Standards
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Shell Metallurgy, Dynamic Balancing &amp; Commissioning
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 shadow-xs">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Spec Highlight Blocks */}
                    <div className="space-y-4">
                      {/* Block 1: Structural Fabrication */}
                      <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                            Heavy Structural Metallurgy
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                            NDT Tested
                          </span>
                        </div>
                        <div className="text-sm font-bold text-slate-900 font-mono">
                          Heavy-Gauge MS / SS 304 / SS 310 / Heat-Treated Alloy
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Submerged-arc welded seams, non-destructive ultrasonic testing, and thermal stress-relieved frames.
                        </p>
                      </div>

                      {/* Block 2: 2-Col Metrics */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                          <span className="text-[10.5px] font-semibold text-slate-400 block mb-1">
                            Dynamic Balance
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono block">
                            ISO 1940 G2.5 / G6.3
                          </span>
                          <span className="text-[10px] text-slate-500 block mt-0.5">
                            Vibration &lt; 2.5 mm/s
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                          <span className="text-[10.5px] font-semibold text-slate-400 block mb-1">
                            Pressure Testing
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono block">
                            1.5× Working Press.
                          </span>
                          <span className="text-[10px] text-slate-500 block mt-0.5">
                            100% Sealed Joints
                          </span>
                        </div>
                      </div>

                      {/* Block 3: Commissioning & Turnkey EPC */}
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-white border border-amber-200/70">
                        <div className="flex items-center gap-1.5 mb-1 text-amber-900 font-bold text-xs">
                          <Award className="w-3.5 h-3.5 text-amber-600" />
                          <span>Turnkey On-Site Commissioning</span>
                        </div>
                        <p className="text-xs text-amber-900/80 leading-relaxed">
                          Complete on-site mechanical alignment, burner firing trials, and PLC automation integration supported across India and export destinations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Footer Action */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-slate-700">OEM Warranty &amp; Spares Backing</span>
                    </div>
                    <button
                      onClick={handleDownloadDatasheet}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Print Datasheet</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB CONTENT 2: OPERATIONAL HIGHLIGHTS & FEATURES */}
            {activeTab === 'highlights' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[...(product.highlights || []), ...(product.features || [])].map((feat, i) => (
                  <div 
                    key={i}
                    className="p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-amber-400/80 transition-all duration-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB CONTENT 3: PRIMARY INDUSTRIAL APPLICATIONS */}
            {activeTab === 'applications' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {(product.applications || []).map((app, i) => (
                  <div 
                    key={i}
                    className="p-6 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-amber-400/80 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700 shrink-0">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest block mb-0.5">
                        Operating Zone
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {app}
                      </h4>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </div>

          {/* ══════════════════════════════════════════════════════════════
              SECTION 3: LUXURY COMMERCIAL RFQ & SIZING SUITE
          ══════════════════════════════════════════════════════════════ */}
          <div id="rfq-section" className="mb-16 lg:mb-24 scroll-mt-28 print:hidden">
            <div className="rounded-3xl bg-white/95 border border-slate-200/90 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden">
              
              {/* Soft corner amber ambient wash */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10">
                
                {/* Left: Enterprise Advisory */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[#D97706] font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-4">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Factory Procurement
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                      Procure Direct from Factory
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                      Looking for custom dimensions, heavy furnace assemblies, or specialized high-temperature hardware? Connect directly with our manufacturing engineering division for factory pricing, CAD blueprints, and turnkey delivery.
                    </p>

                    <div className="space-y-4 text-xs">
                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Direct Engineering Hotline</span>
                          <a href="tel:+919932317334" className="font-bold text-slate-900 hover:text-amber-700 transition-colors">
                            +91 99323 17334 / +91 81588 84204
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Official Corporate RFQ Desk</span>
                          <a href="mailto:paragonrefractories22@gmail.com" className="font-bold text-slate-900 hover:text-amber-700 transition-colors">
                            paragonrefractories22@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <Award className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Quality Standard</span>
                          <span className="font-bold text-slate-900">
                            ISO 9001:2015 Certified &amp; IS/ASTM Compliant
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 mt-8">
                    <span className="text-[11px] text-slate-400 font-mono block">
                      Turnkey Commissioning: On-Site Metallurgical Installation Available
                    </span>
                  </div>
                </div>

                {/* Right: Minimalist Luxury Form */}
                <div className="lg:col-span-7">
                  {inquirySubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200/80"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Technical Inquiry Dispatched</h4>
                      <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
                        Thank you for your interest in <strong>{product.title}</strong>. Our industrial engineering team has received your specifications and will respond within 4 business hours.
                      </p>
                      <button
                        onClick={() => setInquirySubmitted(false)}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-amber-600 transition-colors cursor-pointer"
                      >
                        Submit Another Requirement
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      
                      {/* Sizing / Capacity Selector Pills */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Project Sizing / Requirement Tier
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['10–25 TPH', '25–50 TPH', '50–80+ TPH', 'Custom EPC Sizing'].map((tier) => (
                            <button
                              type="button"
                              key={tier}
                              onClick={() => setSelectedCapacity(tier)}
                              className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                                selectedCapacity === tier
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Full Name *
                          </label>
                          <input 
                            type="text"
                            required
                            value={inquiryName}
                            onChange={(e) => setInquiryName(e.target.value)}
                            placeholder="Aditya Sharma"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Work Email *
                          </label>
                          <input 
                            type="email"
                            required
                            value={inquiryEmail}
                            onChange={(e) => setInquiryEmail(e.target.value)}
                            placeholder="aditya@steelmill.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Enterprise / Plant Name
                        </label>
                        <input 
                          type="text"
                          value={inquiryCompany}
                          onChange={(e) => setInquiryCompany(e.target.value)}
                          placeholder="Eastern Re-Rolling Mills Ltd."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Technical Requirements / Furnace Details *
                        </label>
                        <textarea 
                          rows={3}
                          required
                          value={inquiryMessage}
                          onChange={(e) => setInquiryMessage(e.target.value)}
                          placeholder={`Please share operating conditions, required flow rate / dimensions, target furnace layout, or delivery schedule for ${product.title}...`}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none leading-relaxed"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={inquirySubmitting}
                        className="w-full py-4 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-amber-600 transition-all duration-300 shadow-[0_10px_25px_rgba(15,23,42,0.15)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        {inquirySubmitting ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <span>Transmit Technical RFQ</span>
                            <Send className="w-4 h-4 text-amber-400" />
                          </>
                        )}
                      </button>

                    </form>
                  )}
                </div>

              </div>

            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              SECTION 4: COMPLEMENTARY INDUSTRIAL MACHINERY SHOWCASE
          ══════════════════════════════════════════════════════════════ */}
          <div className="print:hidden">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                  Turnkey Hardware Systems
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Complementary Industrial Machinery
                </h3>
              </div>
              <Link 
                to="/products/industrial-equipment"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-600 transition-colors"
              >
                <span>View Full Equipment Catalog</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedEquipments.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/products/industrial-equipment/${rel.id}`}
                  className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-amber-400/80 hover:shadow-[0_20px_40px_rgba(217,119,6,0.1)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/80 flex items-center justify-center p-4 mb-4 overflow-hidden relative">
                      <img 
                        src={rel.image || '/images/industrial_equipment_hero.jpg'} 
                        alt={rel.title} 
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('industrial_equipment_hero')) {
                            target.src = '/images/industrial_equipment_hero.jpg';
                          }
                        }}
                        className="max-h-36 max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-bold text-slate-800 border border-slate-200/80 shadow-xs">
                        {rel.category}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                      Heavy Industrial Hardware
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {rel.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-amber-700">
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* ══════════════════════════════════════════════════════════════
          FULLSCREEN LIGHTBOX MODAL
      ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 print:hidden"
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
                  src={allImages[activeIndex] || '/images/industrial_equipment_hero.jpg'} 
                  alt={product.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('industrial_equipment_hero')) {
                      target.src = '/images/industrial_equipment_hero.jpg';
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
                <h3 className="text-white font-bold text-lg">{product.title}</h3>
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
          EXECUTIVE MACHINERY SPECIFICATION DOSSIER (PRINT / PDF ONLY)
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
            <div className="text-xs font-bold text-slate-900 tracking-tight">MACHINERY SPECIFICATION</div>
            <div className="text-[9px] text-slate-400 font-mono mt-0.5">PRM-EQP-{product.id.toUpperCase().slice(0, 14)}</div>
          </div>
        </div>

        {/* Equipment Identity Header (Airy & Spacious, No Cluttered Nested Boxes) */}
        <div className="py-6 border-b border-slate-100">
          <div className="text-[10px] font-bold tracking-widest uppercase text-amber-700 mb-1.5">
            {product.category} Heavy Equipment · Turnkey Industrial Metallurgy
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
            {product.title}
          </h1>

          <p className="text-[11px] text-slate-600 leading-relaxed max-w-2xl mb-3">
            {product.desc}
          </p>

          <div className="flex items-center gap-6 text-[9.5px] font-medium text-slate-600 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Continuous 24/7 Heavy Operation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Automated PLC / Synced Controls
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Turnkey EPC Delivery &amp; OEM Spares
            </span>
          </div>
        </div>

        {/* 4 Key Engineering Telemetry Metrics (Spacious Horizontal Strip) */}
        <div className="grid grid-cols-4 divide-x divide-slate-200 border border-slate-200 rounded-xl my-6 bg-slate-50/50 py-3 text-center">
          {equipmentTelemetry.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="text-[8.5px] font-semibold text-slate-400 uppercase tracking-wider">{item.label}</div>
              <div className="text-base font-bold text-slate-900 mt-1">{item.value}</div>
              <div className="text-[8px] text-amber-700 font-medium mt-0.5">{item.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Machinery Technical Properties Table (Generous Spacing, Clean Typography) */}
        <div className="mb-6 print-avoid-break">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-amber-500 inline-block rounded-xs" />
              ENGINEERED MECHANICAL &amp; OPERATIONAL PARAMETERS
            </h2>
            <span className="text-[9px] text-slate-400 font-medium">Factory Calibrated Tolerances</span>
          </div>

          <table className="w-full text-[10px] border border-slate-200 border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-[9px] uppercase tracking-wider">
                <th className="py-2.5 px-3.5 text-left font-semibold w-[28%] border-r border-slate-800">Machinery Parameter</th>
                <th className="py-2.5 px-3.5 text-left font-semibold w-[22%] border-r border-slate-800">Engineered Spec</th>
                <th className="py-2.5 px-3.5 text-left font-semibold w-[28%] border-r border-slate-800">Machinery Parameter</th>
                <th className="py-2.5 px-3.5 text-left font-semibold w-[22%]">Engineered Spec</th>
              </tr>
            </thead>
            <tbody>
              {equipSpecPairs.map(([left, right], i) => (
                <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}>
                  <td className="py-2 px-3.5 font-medium text-slate-700 border-r border-slate-100">{left[0]}</td>
                  <td className="py-2 px-3.5 font-mono font-bold text-slate-900 border-r border-slate-100">{String(left[1])}</td>
                  {right ? (
                    <>
                      <td className="py-2 px-3.5 font-medium text-slate-700 border-r border-slate-100">{right[0]}</td>
                      <td className="py-2 px-3.5 font-mono font-bold text-slate-900">{String(right[1])}</td>
                    </>
                  ) : (
                    <td colSpan={2} className="py-2 px-3.5 text-slate-400 italic text-[9px]">
                      Custom parameters engineered on application request
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Operational Applications (Clean & Airy 2-Column List) */}
        <div className="mb-6 pt-2 print-avoid-break">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 inline-block rounded-xs" />
            OPERATIONAL APPLICATIONS &amp; PLANT INTEGRATION
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[10px] text-slate-700">
            {(product.applications && product.applications.length > 0
              ? product.applications
              : [
                  "Continuous Rolling Mill Reheating Systems",
                  "Heavy Billet, Bloom & Slab Thermal Processing",
                  "Waste Flue Gas High-Efficiency Thermal Recovery",
                  "Automated Furnace Charging & Discharging Cycles"
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
              Confidential Machinery Dossier · Factory Acceptance Testing (FAT) with weld NDT supplied with dispatch
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">CERTIFIED QUALITY SPECIFICATION</div>
            <div className="text-[10px] font-extrabold text-slate-800 mt-0.5">PRM ENGINEERING DIVISION</div>
            <div className="text-[8.5px] text-emerald-700 font-semibold mt-0.5">✓ ISO 9001:2015 REGISTERED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialEquipmentDetails;