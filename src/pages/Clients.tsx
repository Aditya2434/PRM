// src/pages/Clients.tsx
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  Award, 
  ShieldCheck, 
  Search, 
  X, 
  Flame, 
  CheckCircle2, 
  PhoneCall, 
  Factory, 
  SlidersHorizontal,
  ArrowUpRight
} from 'lucide-react';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { clients } from '@/data/clients';

const Clients = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  // Filtered clients for directory
  const filteredClients = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return clients;
    return clients.filter(client => client.name.toLowerCase().includes(query));
  }, [searchQuery]);

  const clientsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://www.paragonrefractoriesandminerals.com/clients/#clientlist",
        "name": "Steel Plant & Rolling Mill Clients of Paragon Refractories and Minerals",
        "description": "PRM is trusted by 100+ major steel manufacturing plants and rolling mills across India for industrial reheating furnaces, refractory supplies, and cast iron components.",
        "itemListElement": clients.map((client, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": client.name
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.paragonrefractoriesandminerals.com/clients/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.paragonrefractoriesandminerals.com/" },
          { "@type": "ListItem", "position": 2, "name": "Clients", "item": "https://www.paragonrefractoriesandminerals.com/clients" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-white text-slate-900 selection:bg-amber-500 selection:text-white">
      <SEO 
        title="Our Steel Plant & Rolling Mill Clients | Paragon Refractories and Minerals"
        description="PRM is trusted by major steel manufacturing plants and rolling mills across India for high-quality furnace components, castings, and refractory supplies."
        keywords="steel plant clients, rolling mill partners, industrial furnace customers, refractory clients India, steel manufacturer suppliers"
        url="/clients"
        schema={clientsSchema}
      />
      <Navbar />

      <main className="flex-grow">
        
        {/* ══════════════════════════════════════════════════════════════
            1. BRIGHT ARCHITECTURAL HERO SECTION (CENTER-ALIGNED)
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-18 border-b border-slate-200/80 overflow-hidden bg-slate-50">
          
          {/* Subtle Full-Bleed Industrial Background Image with Frosted Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/clients_hero.jpg"
              alt="Paragon Refractories and Minerals Industrial Clients"
              className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] opacity-20"
            />
            {/* Soft Luminous Frosted Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-slate-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80" />
          </div>

          {/* Blueprint Grid & Warm Ambient Radial Glows */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none z-0" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            
            {/* Breadcrumb Navigation (Center-Aligned) */}
            <nav aria-label="breadcrumb" className="mb-5 flex justify-center">
              <ol className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                <li>
                  <Link to="/" className="hover:text-[#090D16] transition-colors">Home</Link>
                </li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <li className="text-[#D97706] font-semibold">Our Clients</li>
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
                <span>Enterprise Partnerships &amp; Steel Network</span>
              </div>

              {/* Authoritative Display Headline (Center-Aligned) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-6 leading-[1.10] tracking-tight">
                Trusted by India's{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#B45309]">
                  Premier Steel &amp; Metallurgical
                </span>{" "}
                Leaders.
              </h1>

              {/* Narrative Subtext (Center-Aligned) */}
              <p className="font-ui text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-8">
                Supplying heavy-duty reheating furnaces, high-alumina refractories, and precision cast iron components to leading industrial steelmakers, rolling mills, and foundries nationwide.
              </p>

              {/* Verified Badges Strip (Center-Aligned) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Building2 className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>NETWORK: <strong>100+ INDUSTRIAL CLIENTS</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Award className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>PARTNERSHIP: <strong>25+ YEARS CONTINUOUS SUPPLY</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>RELIABILITY: <strong>ZERO UNPLANNED SHUTDOWNS</strong></span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Hairline Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. INTERACTIVE CLIENT DIRECTORY WITH SEARCH & FILTERS
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80 relative">
          <div className="container mx-auto px-6 lg:px-20">
            
            {/* Header + Search Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200/60">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D97706] uppercase tracking-[0.2em] mb-2">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>CLIENT DIRECTORY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
                  Explore Enterprise Industrial Partners
                </h2>
              </div>

              {/* Search Input & Total Count */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative w-full md:w-80 lg:w-96">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search steel plant, company, partner..."
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 shadow-xs transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <span className="hidden sm:inline-block text-xs font-mono text-slate-500 font-medium whitespace-nowrap">
                  Showing <strong className="text-slate-900">{filteredClients.length}</strong> of {clients.length}
                </span>
              </div>
            </div>

            {/* Clients Grid */}
            {filteredClients.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300 max-w-md mx-auto">
                <Building2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">No Matching Clients Found</h3>
                <p className="text-xs text-slate-500 mb-4">
                  No partners match "{searchQuery}".
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {filteredClients.map((client, index) => {
                  return (
                    <motion.div
                      key={client.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (index % 5) * 0.04 }}
                      className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 p-5 flex flex-col items-center text-center overflow-hidden"
                    >
                      {/* Top Animated Golden Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-[#D97706] to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                      {/* Logo Container */}
                      <div className="w-full h-24 sm:h-28 flex items-center justify-center p-3 rounded-xl bg-slate-50/70 group-hover:bg-amber-50/30 border border-slate-100 group-hover:border-amber-200/50 transition-all duration-300 mb-4">
                        <img
                          src={client.image}
                          alt={client.name}
                          className="max-h-16 sm:max-h-18 max-w-[85%] object-contain filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Client Name */}
                      <h3 className="font-display font-bold text-sm sm:text-[14.5px] text-slate-900 group-hover:text-[#D97706] transition-colors line-clamp-1">
                        {client.name}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. WHY STEEL GIANTS RELY ON PRM (4 STRATEGIC PILLARS)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative">
          <div className="container mx-auto px-6 lg:px-20">
            
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[#D97706] font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>THE PRM ADVANTAGE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight mb-4">
                Why Industry Titans Rely on Our Thermal Solutions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We bridge high-temperature refractory chemistry with precision mechanical furnace construction to safeguard operational uptime across India's harshest rolling mills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[#D97706] flex items-center justify-center mb-5">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5">
                  1850°C Thermal Threshold
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered high-alumina bricks and low-cement castables formulated to withstand extreme heat flux without spalling or structural collapse.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[#D97706] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5">
                  Zero Unplanned Outages
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Turnkey EPC relining programs that extend furnace campaign life and eliminate costly mill emergency shutdowns during peak production.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[#D97706] flex items-center justify-center mb-5">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5">
                  Foundry-to-Furnace Integration
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Integrated alloy CI casting foundry (FG-260 skid riders) and refractory manufacturing in Durgapur for seamless compatibility.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[#D97706] flex items-center justify-center mb-5">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5">
                  Rapid Turnaround &amp; Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strategic field crews on 24/7 standby for immediate emergency inspection, refractory patching, and rapid skid replacement.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            6. ENTERPRISE PARTNERSHIP CTA STRIP
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-white relative">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="relative rounded-3xl bg-[#090D16] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
              
              {/* Subtle Ambient Background Gradients */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-5">
                  <span>ENTERPRISE COLLABORATION</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white mb-4 leading-tight">
                  Ready to Elevate Your Plant's Furnace Performance &amp; Lining Life?
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
                  Connect directly with PRM's thermal engineering directors to discuss turnkey furnace installations, refractory bulk supplies, or scheduled annual maintenance contracts.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/25 cursor-pointer"
                  >
                    <span>Initiate Partnership Inquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>View Field Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Clients;