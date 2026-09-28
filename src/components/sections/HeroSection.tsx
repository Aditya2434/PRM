// src/components/sections/HeroSection.tsx
// Responsive Hybrid Hero: Cinematic Full-Width (lg+) & Modern Touch Deck (<lg)
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  ChevronLeft, 
  Pause, 
  Play, 
  ExternalLink
} from "lucide-react";
import StatsStrip from "./StatsStrip";

interface SlideItem {
  id: string;
  category: string;
  shortName: string;
  badge: string;
  headline: string;
  highlightText: string;
  title: string;
  spec: string;
  highlight: string;
  subtext: string;
  detail: string;
  image: string;
  mobileImage: string;
  link: string;
}

const slides: SlideItem[] = [
  {
    id: "reheating-furnaces",
    category: "Walking Beam Furnaces",
    shortName: "W-Beam",
    badge: "EPC Heavy Engineering",
    headline: "High-Performance Walking Beam &",
    highlightText: "Heavy Reheating Systems",
    title: "Walking Beam Reheating Furnaces",
    spec: "Capacity: 5 to 100+ TPH",
    highlight: "Uniform Billet Soaking • ~18% Fuel Savings",
    subtext: "Continuous automated walking beam reheating furnaces engineered for uniform billet soaking, multi-fuel efficiency, and 24/7 heavy industrial duty cycles.",
    detail: "Heavy-duty continuous reheating systems for billets, blooms, and slabs with automated walking mechanisms and multi-fuel combustion.",
    image: "/images/Gallery/g17.webp",
    mobileImage: "/images/Gallery/g17.webp",
    link: "/products/industrial-equipment",
  },
  {
    id: "pusher-furnaces",
    category: "Pusher Furnaces",
    shortName: "Pusher",
    badge: "Continuous Reheating EPC",
    headline: "Continuous Pusher Type",
    highlightText: "Reheating Furnaces",
    title: "Pusher Type Billet Reheating Furnaces",
    spec: "Capacity: 10 to 80+ TPH",
    highlight: "Heavy Hydraulic Pusher • High Thermal Efficiency",
    subtext: "Continuous pusher type reheating furnaces engineered for hot rolling mills, delivering uniform billet heating, rugged mechanical reliability, and minimized scale loss.",
    detail: "Continuous pusher type reheating furnaces with hydraulic pushers, metallic recuperators, and precision combustion zones.",
    image: "/images/Gallery/g18.webp",
    mobileImage: "/images/Gallery/g18.webp",
    link: "/products/industrial-equipment",
  },
  {
    id: "refractories",
    category: "Refractory Materials",
    shortName: "Refractory",
    badge: "High-Temperature Metallurgy",
    headline: "Advanced High-Alumina Fire Bricks &",
    highlightText: "Refractory Linings",
    title: "High-Alumina Fire Bricks & Monolithics",
    spec: "Operating Peak: 1850°C",
    highlight: "IS-6 to H.A. 80% • Custom Roof Bricks • High Thermal Shock Resistance",
    subtext: "Precision dense refractory fire bricks spanning IS-6 to High-Alumina 80%, customizable roof bricks, and low-cement castables built to withstand punishing slag corrosion in steel ladle and reheating furnaces.",
    detail: "Dense high-alumina bricks, customizable roof shapes, low-cement castables, and refractory mortars built for severe chemical slag attack in ladle and reheating furnaces.",
    image: "/images/Gallery/g29.webp",
    mobileImage: "/images/Gallery/g29mob.webp",
    link: "/products/refractory-materials",
  },
  {
    id: "cast-iron",
    category: "Cast Iron Components",
    shortName: "Cast Iron",
    badge: "Bespoke Foundry Metallurgy",
    headline: "Custom Heat-Resistant Castings &",
    highlightText: "Heavy Foundry Metallurgy",
    title: "Heat-Resistant Cast Iron Furnace Parts",
    spec: "High-Cr Ni Alloy Grades",
    highlight: "Skid Riders • Furnace Rollers • Dampers",
    subtext: "Precision-cast heat-resistant alloy skids, charge doors, combustion dampers, and walking beam components engineered for severe thermal mechanical fatigue.",
    detail: "Heavy foundry metallurgy providing bespoke heat-resistant cast iron components for steel rolling mills across India.",
    image: "/images/Gallery/g28.webp",
    mobileImage: "/images/Gallery/g28.webp",
    link: "/products/cast-iron-parts",
  },
];



const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 6500;
  const TICK_INTERVAL = 50;

  useEffect(() => {
    if (!isPlaying) return;

    const step = (TICK_INTERVAL / SLIDE_DURATION) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => prev + step);
    }, TICK_INTERVAL);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (progress >= 100) {
      setActiveSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }
  }, [progress]);

  const handleManualSelect = (index: number) => {
    setActiveSlide(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const current = slides[activeSlide];

  return (
    <>
      {/* ═════════════════════════════════════════════════════════════
          1. LARGE SCREENS (lg+): Cinematic Full-Width Experience
      ═════════════════════════════════════════════════════════════ */}
      <section 
        className="hidden lg:flex relative min-h-[85vh] flex-col justify-between overflow-hidden bg-[#060A12] text-white selection:bg-amber-500 selection:text-black pt-8 pb-12"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Full-Bleed Cinematic Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "_desktop"}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <img
                src={current.image}
                alt={current.headline}
                className="w-full h-full object-cover object-center filter brightness-[0.50] contrast-[1.05]"
              />
              {/* Dimming overlay */}
              <div className="absolute inset-0 bg-black/35 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Gradients & Blueprint Grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090D16]/92 via-[#090D16]/75 to-[#060A12]" />
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 blur-[100px]"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.1) 40%, transparent 70%)"
            }}
          />
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px"
            }}
          />
        </div>

        {/* Centered Content */}
        <div className="container mx-auto px-6 lg:px-20 relative z-10 my-auto pt-6">
          <div className="max-w-4xl mx-auto text-center">

            {/* Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-amber-400/25 backdrop-blur-md text-amber-400 font-mono text-[10px] font-semibold tracking-[0.18em] uppercase mb-5 shadow-[0_0_20px_rgba(217,119,6,0.15)]"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>{current.category}</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-300 font-medium">ISO 9001:2015</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              key={current.id + "_desk_title"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-white mb-6 drop-shadow-md"
            >
              <span className="block leading-[1.26] text-white">
                {current.headline}
              </span>
              <span className="block mt-2.5 pb-2 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent leading-[1.3] drop-shadow-xs">
                {current.highlightText}
              </span>
            </motion.h1>

          </div>
        </div>

        {/* Large Screen Bottom Console & Stats */}
        <div className="container mx-auto px-6 lg:px-20 relative z-10 pt-6">
          
          {/* Interactive Slide Switcher */}
          <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl p-2.5 mb-5 shadow-lg">
            <div className="flex items-center justify-between gap-4">
              
              <div className="grid grid-cols-4 gap-2 flex-1">
                {slides.map((slide, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => handleManualSelect(idx)}
                      className={`text-left p-2 rounded-lg border transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? "bg-amber-500/15 border-amber-400/80 text-white shadow-[0_0_20px_rgba(217,119,6,0.25)]"
                          : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className={`font-mono text-[9px] uppercase tracking-wider ${isActive ? "text-amber-400 font-bold" : "text-slate-500"}`}>
                          0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        )}
                      </div>
                      <span className="font-ui text-[11px] font-semibold block truncate">
                        {slide.category}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Progress & Controls */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-28 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                    aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handlePrev}
                    className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    title="Previous"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    title="Next"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          2. SMALL SCREENS (< lg): Architectural Premium Touch Deck
      ═════════════════════════════════════════════════════════════ */}
      <section className="block lg:hidden relative bg-gradient-to-b from-[#FBFBFD] via-[#F4F6FB] to-[#E9EEF5] text-slate-900 px-5 sm:px-8 pt-8 pb-14 sm:pb-16 border-b border-slate-200/80 overflow-hidden selection:bg-amber-500 selection:text-black">
        
        {/* Soft Ambient Warm Accent Glows */}
        <div 
          className="absolute -top-12 -right-12 w-80 h-80 pointer-events-none opacity-60 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.05) 50%, transparent 75%)"
          }}
        />
        <div 
          className="absolute bottom-0 -left-12 w-72 h-72 pointer-events-none opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)"
          }}
        />

        {/* Blueprint Grid Lines (Subtle Light Theme Architectural Motif) */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 23, 42, 0.6) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 23, 42, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="relative z-10 max-w-xl mx-auto">

          {/* 1. TOP: Mobile Visual Showcase Card (Interactive Gallery Frame) */}
          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_14px_35px_-10px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden mb-5 transition-all">
            
            {/* Visual Frame */}
            <div className="relative h-56 sm:h-68 bg-slate-100 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + "_mob"}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <picture className="w-full h-full">
                    <source media="(max-width: 640px)" srcSet={current.mobileImage} />
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.03]"
                    />
                  </picture>
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Top Pills */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 bg-black/75 backdrop-blur-md text-white border border-white/20 px-2.5 py-1 rounded-full font-mono text-[9px] uppercase tracking-wider font-semibold shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {current.badge}
                </span>
                <span className="font-mono text-[9px] text-amber-300 font-bold bg-black/75 px-2.5 py-1 rounded-full backdrop-blur-md border border-amber-400/30 shadow-md">
                  {current.spec}
                </span>
              </div>
            </div>

            {/* Slim Animated Progress Bar */}
            <div className="h-1 w-full bg-slate-100 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Mobile Tab Selectors & Action Bar */}
            <div className="p-3.5 bg-slate-50/90 border-t border-slate-100">
              
              {/* 4 Segmented Slide Pills */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-200/70 rounded-xl mb-3">
                {slides.map((slide, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => handleManualSelect(idx)}
                      className={`text-center py-2 px-1 rounded-lg text-[9.5px] sm:text-[10px] font-ui font-bold uppercase tracking-wider transition-all truncate ${
                        isActive
                          ? "bg-white text-amber-700 shadow-sm border border-slate-200/80 scale-[1.02]"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {slide.shortName}
                    </button>
                  );
                })}
              </div>

              {/* Action link & Controls */}
              <div className="flex items-center justify-between pt-0.5">
                <Link
                  to={current.link}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-ui font-bold text-[11px] uppercase tracking-wide shadow-xs transition-colors"
                >
                  <span>Explore Specs</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                    aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                    aria-label="Previous slide"
                    title="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                    aria-label="Next slide"
                    title="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* 2. BELOW: Dynamic Editorial Typography & Specs */}
          <div className="px-1">
            {/* Mobile Badge */}
            <motion.div 
              key={current.id + "_mob_badge"}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 font-mono text-[9.5px] font-bold tracking-[0.14em] uppercase mb-2.5 shadow-xs"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600" />
              </span>
              <span>{current.category}</span>
              <span className="text-amber-400">•</span>
              <span className="text-slate-600 font-semibold">ISO 9001:2015</span>
            </motion.div>

            {/* Mobile Headline */}
            <motion.h1 
              key={current.id + "_mob_title"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2.5 leading-[1.25]"
            >
              <span className="block text-slate-900">{current.headline}</span>
              <span className="inline-block mt-0.5 pb-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent font-black drop-shadow-xs">
                {current.highlightText}
              </span>
            </motion.h1>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          3. INDUSTRIAL STATS STRIP (Directly Below Hero Section)
      ═════════════════════════════════════════════════════════════ */}
      <StatsStrip />
    </>
  );
};

export default HeroSection;