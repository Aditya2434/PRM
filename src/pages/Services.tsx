// src/pages/Services.tsx
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Flame, 
  Settings, 
  Activity, 
  CheckCircle2,
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Gauge,
  Factory,
  Hexagon
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';
import { services } from '@/data/services';
import ContactStrip from '@/components/sections/ContactStrip';

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Flame,
  Wrench,
  Activity,
  Factory,
  Hexagon,
};

const Services = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Industrial Furnace Maintenance & Refractory Engineering",
    "provider": {
      "@type": "Organization",
      "name": "Paragon Refractories and Minerals",
      "url": "https://www.paragonrefractoriesandminerals.com"
    },
    "description": "Comprehensive industrial furnace services: refractory lining, hot shutdown repairs, metallic recuperator servicing, and burner calibration."
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-500 selection:text-white">
      <SEO 
        title="Industrial Furnace Services | Maintenance & Refractory Repairs | PRM"
        description="Paragon Refractories & Minerals provides turnkey industrial furnace maintenance, refractory relining, recuperator repairs, and shutdown engineering across India."
        keywords="furnace maintenance services, refractory lining repair, industrial furnace repair India, rolling mill maintenance, metallic recuperator repair"
        url="/services"
        schema={servicesSchema}
      />

      <Navbar />

      <main className="flex-grow">
        
        {/* ══════════════════════════════════════════════════════════════
            1. BRIGHT ARCHITECTURAL HERO SECTION (CENTER-ALIGNED)
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-18 border-b border-slate-200/80 overflow-hidden bg-slate-50">
          
          {/* Subtle Full-Bleed Background Image with Frosted Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/services_hero.jpg"
              alt="Paragon Industrial Furnace Maintenance and Services"
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
                <li className="text-[#D97706] font-semibold">Services</li>
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
                <span>Specialized Furnace Field Operations</span>
              </div>

              {/* Authoritative Display Headline (Center-Aligned) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-6 leading-[1.10] tracking-tight">
                Industrial Engineering &amp;{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#B45309]">
                  Furnace Services.
                </span>
              </h1>

              {/* Narrative Subtext (Center-Aligned) */}
              <p className="font-ui text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-8">
                Comprehensive maintenance, precision refractory relining, recuperator repairs, and fast-response emergency shutdown support for steel plants and rolling mills.
              </p>

              {/* Verified Badges Strip (Center-Aligned) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Zap className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>RAPID RESPONSE: <strong>EMERGENCY REPAIRS</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Gauge className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>OPTIMIZATION: <strong>MINIMUM HEAT LOSS</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>STANDARD: <strong>ISO 9001:2015 CERTIFIED</strong></span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Hairline Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </section>


        {/* ══════════════════════════════════════════════════════════════
            2. OVERVIEW SECTION (CONCISE & ARCHITECTURAL)
        ══════════════════════════════════════════════════════════════ */}
        <section className="container mx-auto px-5 sm:px-6 lg:px-20 py-8 sm:py-12">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 lg:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-[#D97706] to-amber-500" />

            <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-4 lg:pb-0 lg:pr-8">
              <span className="font-mono text-[10.5px] text-[#D97706] font-bold uppercase tracking-[0.2em] block mb-2">
                Turnkey Operations
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#090D16] tracking-tight leading-snug">
                Engineered for Zero Unplanned Furnace Downtime
              </h2>
            </div>
            <div className="lg:w-2/3">
              <p className="font-ui text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                Paragon Refractories and Minerals provides certified engineering technicians and specialized tools for complete furnace rebuilds, ceramic fiber lining retrofits, combustion tuning, and preventive shutdown management. We restore full operational thermal efficiency while extending equipment service life.
              </p>
            </div>
          </motion.div>
        </section>


        {/* ══════════════════════════════════════════════════════════════
            3. SERVICES GRID SECTION (PREMIUM CARDS)
        ══════════════════════════════════════════════════════════════ */}
        <section id="services-grid" className="py-12 lg:py-16 bg-[#FAFBFD] border-t border-slate-200/80 relative overflow-hidden scroll-mt-28">
          {/* Subtle Blueprint Grid Pattern */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Wrench;
                return (
                  <motion.div
                    id={`service-${service.id}`}
                    key={service.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="scroll-mt-28 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-amber-400/60 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between hover:-translate-y-1.5"
                  >
                    {/* Top hover accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-[#D97706] to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    <div>
                      {/* Eyebrow Header */}
                      <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                        <span className="font-mono text-[10.5px] font-bold text-[#D97706] uppercase tracking-wider">
                          0{index + 1} / FIELD SERVICE
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#D97706] group-hover:bg-[#090D16] group-hover:text-amber-400 flex items-center justify-center mb-5 transition-all duration-300 shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#D97706] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-ui text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Original Clean Checklist */}
                    <div className="pt-5 border-t border-slate-100 space-y-2.5 mt-auto">
                      <div className="flex items-center text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D97706] mr-2.5 shrink-0" /> 
                        <span>Full Thermal Restoration</span>
                      </div>
                      <div className="flex items-center text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D97706] mr-2.5 shrink-0" /> 
                        <span>Certified Shutdown Speed</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <ContactStrip />
      </main>

      <Footer />
    </div>
  );
};

export default Services;