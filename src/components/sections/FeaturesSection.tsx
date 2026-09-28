// src/components/sections/FeaturesSection.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Cog, Layers, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCategory {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  division: string;
  tagline: string;
  specBadge: string;
  metric: string;
  metricLabel: string;
  description: string;
  highlights: string[];
  image: string;
  link: string;
  tags: string[];
  stats: { label: string; value: string }[];
}

const featureCategories: FeatureCategory[] = [
  {
    id: 1,
    division: 'DIV 01',
    icon: Flame,
    title: 'Industrial Refractory Materials',
    subtitle: 'Thermal & Chemical Shielding',
    tagline: 'Engineered for extreme operating environments exceeding 1850°C',
    specBadge: 'Max Temp 1850°C',
    metric: 'IS-6 to H.A. 80%',
    metricLabel: 'Certified Grade Range',
    description:
      'Standard IS-6 and IS-8 fire bricks up to High-Alumina 80% (H.A. 80%), customizable roof bricks, dense castables, and ramming masses engineered to withstand severe thermal shock and chemical slag corrosion.',
    highlights: [
      'Wide range starting from IS-6 & IS-8 up to High-Alumina 80% (H.A. 80%)',
      'Customizable furnace roof bricks, hanger shapes & tailored arch blocks',
      'Low-cement and ultra-low cement castable matrices with zero spalling',
    ],
    image: '/images/Gallery/g29.webp',
    link: '/products/refractory-materials',
    tags: ['IS-6 to H.A. 80%', 'Custom Roof Bricks', 'High-Alumina Bricks', 'Refractory Castables'],
    stats: [
      { label: 'Thermal Rating', value: '1850°C' },
      { label: 'Grade Spectrum', value: 'IS-6 to H.A. 80%' },
      { label: 'Roof Bricks', value: 'Customizable' },
    ],
  },
  {
    id: 2,
    division: 'DIV 02',
    icon: Cog,
    title: 'Mechanical Equipment & Furnaces',
    subtitle: 'Heavy-Duty Reheating Systems',
    tagline: 'Turnkey EPC reheating furnace solutions from 5 to 100+ TPH capacity',
    specBadge: '5 to 100+ TPH',
    metric: '35%+',
    metricLabel: 'Fuel Efficiency Gains',
    description:
      'Custom-engineered walking beam and continuous pusher reheating furnaces integrated with advanced metallic recuperators, automated combustion controls, and heavy billet charging mechanisms.',
    highlights: [
      'Turnkey EPC: design, fabrication, refractory lining & commissioning',
      'Metallic recuperator heat recovery yielding 30–40% fuel savings',
      'Precision automated hydraulic and mechanical pusher drives',
    ],
    image: '/images/industrial_equipment_hero.jpg',
    link: '/products/industrial-equipment',
    tags: ['Walking Beam Furnaces', 'Metallic Recuperators', 'Pusher Systems', 'Combustion Automation'],
    stats: [
      { label: 'Capacity Range', value: '5 – 100+ TPH' },
      { label: 'Heat Recovery', value: 'High-Efficiency' },
      { label: 'Turnkey Scope', value: 'End-to-End' },
    ],
  },
  {
    id: 3,
    division: 'DIV 03',
    icon: Layers,
    title: 'Precision Cast Iron Components',
    subtitle: 'High-Temperature Metallurgy',
    tagline: 'Heat-resistant alloy casting for severe thermal cycling and mechanical wear',
    specBadge: 'Grade FG-260+',
    metric: 'FG-260',
    metricLabel: 'Alloy Grade Standard',
    description:
      'Engineered heat-resistant cast iron components custom cast and machined to withstand brutal cyclical furnace thermal shock, heavy billet abrasion, and continuous oxidizing environments.',
    highlights: [
      'Heavy skid rails, rider blocks, and charging roll assemblies',
      'Custom furnace inspection, flue gas, and burner door castings',
      'Tight dimensional tolerances with high thermal-fatigue endurance',
    ],
    image: '/images/cast_iron_hero.jpg',
    link: '/products/cast-iron-parts',
    tags: ['CI Skid Rails & Ends', 'Inspection Doors', 'Charging & Flue Doors', 'Custom Alloy Castings'],
    stats: [
      { label: 'Casting Grade', value: 'FG-260+' },
      { label: 'Fatigue Life', value: 'Continuous Cycle' },
      { label: 'Quality', value: 'ISO Standard' },
    ],
  },
];

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = featureCategories[activeTab];
  const IconComp = current.icon;

  return (
    <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#FAFBFD] text-slate-900 overflow-hidden border-b border-slate-200/80">
      {/* Precision Blueprint Grid Overlay on Crisp White */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle Warm Amber Top Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[280px] bg-gradient-to-b from-amber-500/[0.08] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-20 relative z-10">
        {/* Mobile / Small Screens (< md): Compact Premium Segmented Control */}
        <div className="grid grid-cols-3 md:hidden p-1 bg-slate-200/80 rounded-2xl mb-5 border border-slate-300/60 shadow-xs">
          {featureCategories.map((cat, idx) => {
            const isActive = activeTab === idx;
            const TabIcon = cat.icon;
            const shortTitles = ['Refractory', 'Furnaces', 'Cast Iron'];

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-md shadow-slate-300/50 border border-slate-200 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1 transition-colors ${
                    isActive
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-slate-300/60 text-slate-600'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                </div>
                <span className={`font-mono text-[8.5px] uppercase font-bold tracking-wider ${isActive ? 'text-amber-700' : 'text-slate-500'}`}>
                  {cat.division}
                </span>
                <span className="font-display text-[10.5px] font-bold truncate max-w-full text-center leading-tight mt-0.5">
                  {shortTitles[idx]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tablet & Desktop Screens (md+): 3 Architectural Feature Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {featureCategories.map((cat, idx) => {
            const isActive = activeTab === idx;
            const TabIcon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`group relative text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-white border-amber-400 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/20'
                    : 'bg-white/70 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Active Indicator Bar on Top */}
                <div
                  className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 via-[#D97706] to-amber-500 opacity-100'
                      : 'opacity-0'
                  }`}
                />

                <div className="flex items-center justify-between gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-amber-100/70 group-hover:text-amber-800'
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                  </div>

                  <span
                    className={`font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${
                      isActive
                        ? 'bg-amber-100 text-amber-900 border border-amber-300/60'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {cat.division}
                  </span>
                </div>

                <div className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#D97706] mb-1">
                  {cat.subtitle}
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {cat.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Feature Showcase Interactive Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/60 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[580px]">
              
              {/* Left Column: Image Preview with Spec Badges (5 cols) */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px] overflow-hidden bg-slate-950">
                <img
                  src={current.image}
                  alt={current.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-700 hover:scale-110"
                />

                {/* Subtle Image Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,1)]" />
                  {current.specBadge}
                </div>

                {/* Bottom Overlay Metric Box */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 z-10 py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-amber-300/90 font-semibold mb-0.5">
                        {current.metricLabel}
                      </div>
                      <div className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                        {current.metric}
                      </div>
                    </div>

                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Information & Specs (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Division Tag & Subtitle */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300/80">
                      {current.division}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#D97706]">
                      {current.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                    {current.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-ui text-sm sm:text-base font-semibold text-amber-800/90 leading-relaxed mb-4">
                    {current.tagline}
                  </p>

                  {/* Paragraph */}
                  <p className="font-ui text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {current.description}
                  </p>

                  {/* 3 Key Highlights with Checkmarks */}
                  <div className="space-y-2.5 mb-8">
                    {current.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                        <span className="font-ui text-xs sm:text-sm text-slate-700 font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 3 Column Quick Specs Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 py-4 px-4 sm:px-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                    {current.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <div className="font-display text-sm sm:text-base font-extrabold text-slate-900">
                          {stat.value}
                        </div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {current.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[11px] font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-500 text-xs">
                    <Shield className="w-4 h-4 text-amber-600" />
                    <span>Engineered with strict ISO &amp; IS Quality Standards</span>
                  </div>

                  <Link
                    to={current.link}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#090D16] hover:bg-[#D97706] text-white font-ui text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-500/20 group w-full sm:w-auto"
                  >
                    <span>Explore Products &amp; Specs</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FeaturesSection;