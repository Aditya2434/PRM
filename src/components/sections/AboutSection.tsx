// src/components/sections/AboutSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, Factory, Flame, History } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import founderImg from '@/assets/images/Founder.jpg';

const pillars = [
  {
    icon: Flame,
    title: 'High-Temperature Mastery',
    desc: 'Thermal shielding & furnace bricks operating up to 1850°C continuous load.',
  },
  {
    icon: Factory,
    title: 'Turnkey Furnace EPC',
    desc: 'Pusher & walking beam reheating furnaces from 5 to 100+ TPH.',
  },
  {
    icon: ShieldCheck,
    title: 'IS-6 to H.A. 80% & Custom Shapes',
    desc: 'Complete refractory spectrum, customizable roof bricks, and precision FG-260 alloy cast iron components.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 bg-[#FAFBFD] relative overflow-hidden border-b border-slate-200/80">
      {/* Precision Blueprint Grid */}
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

      <div className="container mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-slate-200 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D97706] font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-4">
              <History className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Heritage &amp; Industrial Leadership</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.25]">
              <span className="block">25 Years of Thermal Excellence &amp;</span>
              <span className="block mt-2.5 sm:mt-3 text-[#D97706]">Furnace Engineering</span>
            </h2>
          </div>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center mb-10 sm:mb-14">
          
          {/* Left Column on Desktop / Second on Mobile: Story + Key Value Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Engineering Resilience for India's Core Industries
              </h3>
              
              <p className="font-ui text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Founded in 2000, Paragon Refractories and Minerals has grown into a premier integrated manufacturer. We provide complete thermal solutions to major steel plants, rolling mills, and metallurgy complexes across India and international markets.
              </p>

              {/* 3 Core Capability Highlights */}
              {/* Mobile (< sm): Compact Unified Executive Capability Deck */}
              <div className="sm:hidden bg-slate-50/90 rounded-2xl border border-slate-200/80 divide-y divide-slate-200/60 overflow-hidden shadow-2xs">
                {pillars.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="p-3.5 flex items-start gap-3 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-display font-bold text-xs text-slate-900 leading-snug">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-600 leading-snug mt-0.5 font-ui">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tablet & Desktop (sm+): 3 Column Grid */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                {pillars.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 hover:border-amber-400/50 hover:bg-amber-50/30 transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-[#D97706] flex items-center justify-center mb-2.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="font-display font-bold text-xs text-slate-900 mb-1">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-snug">
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA & Accreditation Row */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 bg-[#090D16] hover:bg-[#D97706] text-white px-7 py-3.5 rounded-xl font-ui font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-500/20 group"
                >
                  <span>Explore Heritage &amp; Infrastructure</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3.5 py-2 rounded-lg border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                  <span>ISO 9001:2015 CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column on Desktop / First on Mobile (just below heading): Founder Card (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-[#D97706] to-amber-500" />

              {/* Founder Image & Title Header */}
              <div className="flex items-center gap-5 mb-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-lg shrink-0 bg-slate-900">
                  <img
                    src={founderImg}
                    alt="Kalika Prasad Chauhan"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[9.5px] font-bold tracking-widest uppercase border border-amber-200">
                      <Award className="w-3 h-3 text-[#D97706]" />
                      <span>Founder &amp; MD</span>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/i-am-kp-chauhan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0077B5]/10 hover:bg-[#0077B5] text-[#0077B5] hover:text-white transition-all duration-300 border border-[#0077B5]/25 group shadow-xs hover:shadow-md hover:shadow-[#0077B5]/20 shrink-0"
                      aria-label="K.P Chauhan on LinkedIn"
                      title="Connect with K.P Chauhan on LinkedIn"
                    >
                      <FaLinkedinIn className="w-3 h-3 text-[#0077B5] group-hover:text-white transition-colors" />
                      <span className="font-mono text-[10px] font-bold tracking-wider uppercase group-hover:text-white">LinkedIn</span>
                    </a>
                  </div>
                  
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    Kalika Prasad Chauhan
                  </h3>

                  <div className="text-xs font-medium text-slate-500 mt-0.5">
                    Managing Director since 2000
                  </div>
                </div>
              </div>

              {/* Founder Statement */}
              <div className="relative pl-4 py-2 border-l-2 border-amber-400 bg-amber-50/40 rounded-r-xl mb-5">
                <p className="font-ui text-xs sm:text-[13px] text-slate-700 italic leading-relaxed font-normal">
                  "Our mission has always been singular: build thermal and metallurgical solutions that never compromise under the harshest furnace fires."
                </p>
              </div>

              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-5">
                With over two and a half decades of hands-on metallurgical leadership, Kalika Prasad Chauhan has steered Paragon Refractories and Minerals into a national benchmark for heavy reheating furnace engineering and high-alumina refractory manufacturing.
              </p>

              {/* Quick Bullet Pillars */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Turnkey Reheating Furnace Engineering</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Specialized Refractories for all kinds of furnace systems</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Heavy-Duty FG-260 Cast Iron Assemblies</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;