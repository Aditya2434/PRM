// src/pages/AboutUs.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Target, 
  Layers, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Factory,
  Flame,
  ArrowRight,
  Phone,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';
import founderImg from '@/assets/images/Founder.jpg';
import { FaLinkedinIn } from 'react-icons/fa';

const milestones = [
  { value: "2000", label: "Year Established", desc: "Founding in Durgapur" },
  { value: "500+", label: "Furnaces Built & Lined", desc: "Walking Beam & Pusher EPC" },
  { value: "1850°C", label: "Max Operating Temp", desc: "Severe-Duty Threshold" },
  { value: "100+", label: "Tier-1 Industrial Partners", desc: "Premier Steel Plants" },
];

const pillars = [
  {
    icon: Eye,
    tag: "01 / PURPOSE",
    title: "Our Vision",
    desc: "To stand as India's premier thermal engineering authority, recognized globally for setting uncompromised standards in refractory longevity, furnace thermal efficiency, and precision metallurgy.",
    bullets: [
      "Zero unplanned furnace downtime",
      "Sub-80°C outer shell temperature",
      "Campaign life extended by up to 35%"
    ]
  },
  {
    icon: Target,
    tag: "02 / COMMITMENT",
    title: "Our Mission",
    desc: "To formulate, manufacture, and erect severe-duty refractory materials, heavy industrial mechanical hardware, and precision cast iron products that enhance thermal performance and safeguard human operator safety.",
    bullets: [
      "Strict IS-6 to H.A. 80% & custom roof brick compliance",
      "High-tensile FG-260 alloy cast iron",
      "Severe-duty monolithic castables"
    ]
  },
  {
    icon: Layers,
    tag: "03 / CAPABILITY",
    title: "What We Do",
    desc: "We engineer comprehensive, turnkey industrial solutions: from refractory design and supply to complete turnkey fabrication, refractory lining, and commissioning of modern pusher and walking hearth reheating furnaces.",
    bullets: [
      "Turnkey 5 to 100+ TPH furnaces",
      "In-house refractory masonry teams",
      "Metallic recuperators (15-20% fuel cut)"
    ]
  },
];

const AboutUs = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Paragon Refractories and Minerals",
    "description": "Learn about Paragon Refractories and Minerals, an engineering authority in refractory materials, turnkey reheating furnaces, and precision cast iron furnace hardware since 2000.",
    "url": "https://www.paragonrefractoriesandminerals.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Paragon Refractories and Minerals",
      "foundingDate": "2000",
      "founder": {
        "@type": "Person",
        "name": "Kalika Prasad Chauhan",
        "jobTitle": "Founder & Managing Director",
        "sameAs": "https://www.linkedin.com/in/i-am-kp-chauhan/"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Durgapur",
        "addressRegion": "West Bengal",
        "postalCode": "713206",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-500 selection:text-white">
      <SEO 
        title="About Us | Reheating Furnace & Refractory Engineering | PRM"
        description="Established in 2000 in Durgapur, Paragon Refractories & Minerals is India's trusted manufacturer of reheating furnaces, high-alumina refractory bricks, and cast iron furnace hardware."
        keywords="about paragon refractories, industrial furnace manufacturer history, refractory company India, Kalika Prasad Chauhan, steel plant engineering West Bengal"
        url="/about"
        schema={aboutSchema}
      />

      <Navbar />

      <main className="flex-grow">
        
        {/* ══════════════════════════════════════════════════════════════
            1. BRIGHT ARCHITECTURAL HERO SECTION (CENTER-ALIGNED)
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-18 border-b border-slate-200/80 overflow-hidden bg-slate-50">
          
          {/* Subtle Full-Bleed Industrial Background Image with Frosted Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/about_us_hero.jpg"
              alt="Paragon Industrial Refractory & Furnace Engineering"
              className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] opacity-25"
            />
            {/* Soft Luminous Frosted Gradient Overlays */}
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
                <li className="text-[#D97706] font-semibold">About Us</li>
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
                <span>Corporate Heritage &amp; Profile • Est. 2000</span>
              </div>

              {/* Authoritative Display Headline (Center-Aligned) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-6 leading-[1.10] tracking-tight">
                Two Decades of{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#B45309]">
                  Thermal Engineering
                </span>{" "}
                Authority.
              </h1>

              {/* Concise Narrative Subtext (Center-Aligned) */}
              <p className="font-ui text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-8">
                Paragon Refractories and Minerals is an engineering authority in high-temperature refractory systems, turnkey reheating furnaces, and precision cast iron furnace hardware for India's premier steel producers and metallurgical complexes.
              </p>

              {/* Verified Badges Strip (Center-Aligned) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Award className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>FOUNDED: <strong>YEAR 2000</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>QUALITY: <strong>ISO 9001:2015</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Factory className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>CAPABILITY: <strong>TURNKEY EPC EXECUTION</strong></span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Hairline Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </section>


        {/* ══════════════════════════════════════════════════════════════
            2. MAIN SHOWCASE: INDUSTRIAL LEGACY & FOUNDER SPOTLIGHT
            (2-COLUMN LAYOUT MATCHING HOME PAGE ABOUT SECTION)
        ══════════════════════════════════════════════════════════════ */}
        <section id="industrial-legacy" className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Story + Key Milestones (7 cols) */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-[#D97706] to-amber-500" />

                  <div className="inline-flex items-center gap-2 font-mono text-[10.5px] font-bold text-[#D97706] tracking-[0.2em] uppercase mb-3">
                    <Flame className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Our Industrial Legacy</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
                    Excellence in Furnace &amp; Refractory Metallurgy Since 2000
                  </h2>

                  <div className="space-y-4 text-slate-600 font-ui text-sm sm:text-base leading-relaxed font-normal mb-8">
                    <p>
                      <strong className="text-slate-900 font-semibold">Paragon Refractories and Minerals</strong> was founded to bridge the critical gap between heavy furnace design and high-temperature refractory durability. Over two decades, we have evolved into a trusted turnkey partner for rolling mills, foundries, and integrated steel works across India.
                    </p>
                    <p>
                      We specialize in end-to-end design, lining, and commissioning of walking beam, walking hearth, and pusher-type reheating furnaces. Our complete material range—from 80% alumina fire bricks to specialized burner blocks and alloy CI skid systems—is rigorously tested to operate in punishing atmospheres up to 1850°C.
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      By combining refractory ceramic science with mechanical furnace fabrication, we maximize thermal efficiency, minimize fuel consumption, and eliminate unplanned furnace downtime.
                    </p>
                  </div>

                  {/* 4 Milestones Cards Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-100">
                    {milestones.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 hover:border-amber-400/50 hover:bg-amber-50/30 transition-all duration-300 group"
                      >
                        <div className="font-display font-black text-xl sm:text-2xl text-slate-900 group-hover:text-[#D97706] transition-colors">
                          {item.value}
                        </div>
                        <div className="font-display font-bold text-xs text-slate-800 mt-1">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-0.5 font-normal">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>

              {/* Right Column: Founder & Leadership Card (5 cols) */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
                  
                  {/* Top Accent Gradient Bar (matching home page) */}
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
                      
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight truncate">
                        Kalika Prasad Chauhan
                      </h3>

                      <div className="text-xs font-medium text-slate-500 mt-0.5">
                        Managing Director since 2000
                      </div>
                    </div>
                  </div>

                  {/* Founder Statement Quote Box (matching home page) */}
                  <div className="relative pl-4 py-2 border-l-2 border-amber-400 bg-amber-50/40 rounded-r-xl mb-5">
                    <p className="font-ui text-xs sm:text-[13px] text-slate-700 italic leading-relaxed font-normal">
                      "Our mission has always been singular: build thermal and metallurgical solutions that never compromise under the harshest furnace fires."
                    </p>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-6">
                    Bringing decades of deep metallurgical expertise in refractory ceramics and furnace engineering, guiding Paragon Refractories and Minerals' operations with uncompromising precision and technical integrity.
                  </p>

                  {/* Verified Capabilities Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>Turnkey Reheating Furnace Engineering &amp; Commissioning</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>Specialized High-Alumina &amp; Monolithic Castables Formulation</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>Heavy-Duty FG-260 Cast Iron Assemblies</span>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════
            3. STRATEGIC PILLARS: VISION, MISSION, WHAT WE DO
            (MATCHES HOME PAGE SERVICE / PILLAR CARD STYLING)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 lg:py-24 bg-[#FAFBFD] relative overflow-hidden border-t border-slate-200/80">
          {/* Subtle Precision Blueprint Grid */}
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
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D97706] font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Foundational Principles</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                  Our Core Strategic Pillars
                </h2>
              </div>
              <p className="max-w-md font-ui text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-l-2 border-amber-500/40 pl-5">
                Formulating advanced ceramics, heavy cast iron metallurgy, and complete turnkey furnace engineering for India's core industries.
              </p>
            </div>

            {/* 3 Premium Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-amber-400/60 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between hover:-translate-y-1.5"
                  >
                    {/* Top hover accent bar (matching Home page services) */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-[#D97706] to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    <div>
                      {/* Eyebrow index */}
                      <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                        <span className="font-mono text-[10px] font-bold text-[#D97706] uppercase tracking-wider">
                          {pillar.tag}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#D97706] flex items-center justify-center mb-5 group-hover:bg-[#090D16] group-hover:text-amber-400 transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#D97706] transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="font-ui text-sm text-slate-600 leading-relaxed font-normal mb-6">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Bullets */}
                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      {pillar.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA Row (matching Home page) */}
            <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-[#090D16] hover:bg-[#D97706] text-white px-7 py-3.5 rounded-xl font-ui font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-500/20 group"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-4">
                <a
                  href="tel:+919932317334"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 hover:text-[#D97706] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D97706]" />
                  <span>+91 99323 17334</span>
                </a>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                  <span>ISO 9001:2015 CERTIFIED</span>
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

export default AboutUs;