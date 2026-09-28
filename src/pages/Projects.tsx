// src/pages/Projects.tsx
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ChevronRight, 
  Factory, 
  Flame, 
  CheckCircle2, 
  Building2, 
  Eye, 
  Send, 
  User, 
  Mail, 
  Phone, 
  ArrowUpRight,
  Sparkles,
  SlidersHorizontal,
  LayoutGrid,
  List
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactStrip from '@/components/sections/ContactStrip';
import { projects, type Project } from '@/data/projects';

type FilterCategory = 'all' | 'heavy' | 'mid' | 'compact' | 'global';

const Projects = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  // Helper to extract furnace capacity for high-contrast badge
  const extractCapacity = (detail?: string) => {
    if (!detail) return null;
    const match = detail.match(/(\d+\s*TPH)/i);
    return match ? match[1].toUpperCase() : null;
  };

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModalProject) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const ACCESS_KEY = "e0c4e386-1dea-4873-86d2-5edee06ea579";
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Project Inquiry: ${activeModalProject.title} from ${formData.company || formData.name}`,
          ...formData,
          project_name: activeModalProject.title,
          project_detail: activeModalProject.detail,
          from_name: "PRM Website Projects Page",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setActiveModalProject(null);
          setSubmitStatus('idle');
          setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        }, 2200);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to test furnace capacity tier
  const matchesFilter = (project: Project, filter: FilterCategory) => {
    const detail = (project.detail || '').toUpperCase();
    if (filter === 'all') return true;
    if (filter === 'global') return project.tag.toLowerCase() !== 'india';
    if (filter === 'heavy') {
      return detail.includes('25 TPH') || detail.includes('30 TPH') || detail.includes('40 TPH') || detail.includes('40TPH');
    }
    if (filter === 'mid') {
      return detail.includes('15 TPH') || detail.includes('18 TPH') || detail.includes('20 TPH');
    }
    if (filter === 'compact') {
      return detail.includes('8 TPH') || detail.includes('10 TPH') || detail.includes('12 TPH');
    }
    return true;
  };

  // Filtered and searched projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = matchesFilter(project, selectedFilter);
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const titleMatch = project.title.toLowerCase().includes(query);
      const detailMatch = project.detail ? project.detail.toLowerCase().includes(query) : false;
      const tagMatch = project.tag.toLowerCase().includes(query);
      return matchesCategory && (titleMatch || detailMatch || tagMatch);
    });
  }, [searchQuery, selectedFilter]);

  // Counts for tabs
  const categoryCounts = useMemo(() => {
    return {
      all: projects.length,
      heavy: projects.filter(p => matchesFilter(p, 'heavy')).length,
      mid: projects.filter(p => matchesFilter(p, 'mid')).length,
      compact: projects.filter(p => matchesFilter(p, 'compact')).length,
      global: projects.filter(p => matchesFilter(p, 'global')).length,
    };
  }, []);

  const projectsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.paragonrefractoriesandminerals.com/projects/#collectionpage",
        "url": "https://www.paragonrefractoriesandminerals.com/projects",
        "name": "Industrial Furnace & Refractory Projects | PRM",
        "description": "Portfolio of completed reheating furnace installations, refractory linings, and combustion system setup projects for steel plants across India by PRM.",
        "hasPart": projects.map((project) => ({
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.detail || project.category,
          "image": `https://www.paragonrefractoriesandminerals.com${project.image}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.paragonrefractoriesandminerals.com/projects/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.paragonrefractoriesandminerals.com/" },
          { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.paragonrefractoriesandminerals.com/projects" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-500 selection:text-white">
      <SEO 
        title="Industrial Reheating Furnace & Refractory Projects | Paragon Refractories and Minerals"
        description="Browse our portfolio of 100+ completed reheating furnace installations, refractory linings, and combustion system setup projects for premier steel plants across India and overseas."
        keywords="reheating furnace projects, steel plant furnace installation, refractory installation case studies, rolling mill setup India, industrial piping projects"
        url="/projects"
        schema={projectsSchema}
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
              src="/images/projects_hero.jpg"
              alt="Paragon Industrial Furnace & Refractory Projects"
              className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] opacity-20"
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
                <li className="text-[#D97706] font-semibold">Projects</li>
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
                <span>Industrial Commissioning &amp; Field Execution</span>
              </div>

              {/* Authoritative Display Headline (Center-Aligned) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-6 leading-[1.10] tracking-tight">
                Featured{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#B45309]">
                  Industrial Projects.
                </span>
              </h1>

              {/* Narrative Subtext (Center-Aligned) */}
              <p className="font-ui text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-8">
                A proven track record of turnkey reheating furnace installations, high-temperature refractory linings, and combustion engineering for premier steel plants across India and overseas.
              </p>

              {/* Verified Badges Strip (Center-Aligned) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Factory className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>PORTFOLIO: <strong>TURNKEY FURNACES &amp; RETROFITS</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Flame className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>CAPACITY: <strong>UP TO 100+ TPH ROLLING MILLS</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>RELIABILITY: <strong>ON-SCHEDULE COMMISSIONING</strong></span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Hairline Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. EXECUTIVE SCOPE SUMMARY RIBBON (ARCHITECTURAL ENTERPRISE)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-7 sm:py-8 bg-white border-b border-slate-200/70 relative">
          <div className="container mx-auto px-5 sm:px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 lg:gap-5">
              
              <div className="group relative bg-white border border-slate-200/90 hover:border-amber-400/90 rounded-xl py-4 px-3 sm:py-5 sm:px-4 text-center transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-400 via-[#D97706] to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-slate-900 mb-1.5 sm:mb-2 tracking-tight">
                  100<span className="text-[#D97706]">+</span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Installations
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-slate-500 hidden sm:block leading-relaxed">
                  Turnkey Pusher &amp; Walking Hearth Furnaces
                </div>
              </div>

              <div className="group relative bg-white border border-slate-200/90 hover:border-amber-400/90 rounded-xl py-4 px-3 sm:py-5 sm:px-4 text-center transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-400 via-[#D97706] to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-slate-900 mb-1.5 sm:mb-2 tracking-tight">
                  8–120<span className="text-[#D97706]">+ TPH</span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Furnace Capacity Range
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-slate-500 hidden sm:block leading-relaxed">
                  Billet, Ingot &amp; Heavy Structural Rolling
                </div>
              </div>

              <div className="group relative bg-white border border-slate-200/90 hover:border-amber-400/90 rounded-xl py-4 px-3 sm:py-5 sm:px-4 text-center transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-400 via-[#D97706] to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                <div className="text-base sm:text-xl lg:text-2xl xl:text-[26px] font-black font-display text-slate-900 mb-1.5 sm:mb-2 tracking-tight whitespace-nowrap">
                  Pan-India <span className="text-[#D97706]">&amp; Global</span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Geographic Footprint
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-slate-500 hidden sm:block leading-relaxed">
                  Major Steel Belts &amp; Overseas Projects
                </div>
              </div>

              <div className="group relative bg-white border border-slate-200/90 hover:border-amber-400/90 rounded-xl py-4 px-3 sm:py-5 sm:px-4 text-center transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-400 via-[#D97706] to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-slate-900 mb-1.5 sm:mb-2 tracking-tight">
                  100<span className="text-[#D97706]">%</span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Turnkey Execution
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-slate-500 hidden sm:block leading-relaxed">
                  Refractory Lining, Furnace installation &amp; Commissioning
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. PORTFOLIO CONTROL CENTER & SEARCH / FILTERS (OPTION 3)
        ══════════════════════════════════════════════════════════════ */}
        <section id="projects-grid" className="py-8 sm:py-12 lg:py-16 bg-slate-50/60 border-b border-slate-200/80 scroll-mt-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-20">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D97706] uppercase tracking-[0.2em] mb-2">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>PROJECT DIRECTORY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
                  Explore Field Installations
                </h2>
              </div>

              {/* Real-time Search Input */}
              <div className="relative w-full md:w-80 lg:w-96">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search plant, company, capacity..."
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 shadow-xs transition-all"
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
            </div>

            {/* Filter Category Tabs & View Mode Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200/60">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === 'all'
                      ? 'bg-[#090D16] text-white shadow-sm ring-2 ring-amber-400/40'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {selectedFilter === 'all' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.95)] shrink-0" />
                  )}
                  <span>All ({categoryCounts.all})</span>
                </button>

                <button
                  onClick={() => setSelectedFilter('heavy')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === 'heavy'
                      ? 'bg-[#090D16] text-white shadow-sm ring-2 ring-amber-400/40'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {selectedFilter === 'heavy' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.95)] shrink-0" />
                  )}
                  <span>Heavy (25–40 TPH) ({categoryCounts.heavy})</span>
                </button>

                <button
                  onClick={() => setSelectedFilter('mid')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === 'mid'
                      ? 'bg-[#090D16] text-white shadow-sm ring-2 ring-amber-400/40'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {selectedFilter === 'mid' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.95)] shrink-0" />
                  )}
                  <span>Mid (15–20 TPH) ({categoryCounts.mid})</span>
                </button>

                <button
                  onClick={() => setSelectedFilter('compact')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === 'compact'
                      ? 'bg-[#090D16] text-white shadow-sm ring-2 ring-amber-400/40'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {selectedFilter === 'compact' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.95)] shrink-0" />
                  )}
                  <span>Compact (8–12 TPH) ({categoryCounts.compact})</span>
                </button>

                <button
                  onClick={() => setSelectedFilter('global')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === 'global'
                      ? 'bg-[#090D16] text-white shadow-sm ring-2 ring-amber-400/40'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {selectedFilter === 'global' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.95)] shrink-0" />
                  )}
                  <span>Global / Cameroon ({categoryCounts.global})</span>
                </button>
              </div>

              {/* View Switcher & Result Count */}
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-xs font-mono text-slate-500 font-medium hidden md:inline">
                  Showing <strong className="text-slate-900">{filteredProjects.length}</strong> of {projects.length}
                </span>

                <div className="flex items-center gap-1 bg-white border border-slate-200/90 p-1 rounded-xl shadow-xs">
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Compact Grid View (4 Columns)"
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-[#090D16] text-amber-400 shadow-xs'
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('detailed')}
                    title="Detailed Spec View"
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      viewMode === 'detailed'
                        ? 'bg-[#090D16] text-amber-400 shadow-xs'
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Specs</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. PREMIUM ARCHITECTURAL PROJECTS GRID (OPTION 3)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="container mx-auto px-6 lg:px-20">
            
            {filteredProjects.length === 0 ? (
              <div className="text-center py-24 bg-slate-50 rounded-3xl border border-dashed border-slate-300 max-w-xl mx-auto">
                <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">No Matching Projects Found</h3>
                <p className="text-sm text-slate-500 mb-6">
                  No industrial projects match "{searchQuery}" under the selected category.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              /* GRID VIEW (4 COLUMNS) - SLEEK ARCHITECTURAL GALLERY */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7">
                {filteredProjects.map((project, index) => {
                  const detailLines = project.detail ? project.detail.split('\n') : [];
                  const capacityBadge = extractCapacity(project.detail);

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (index % 4) * 0.05 }}
                      className="group bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 flex flex-col overflow-hidden"
                    >
                      {/* High-Fidelity Project Photo Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        
                        {/* Soft Natural Shadow Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Single Elegant Floating Pill (Capacity & Location) */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-[10.5px] font-mono font-medium shadow-xs border border-white/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                            <span>{capacityBadge ? `${capacityBadge} • ` : ''}{project.tag}</span>
                          </span>
                        </div>

                        {/* Quick Inspection Lens on Hover */}
                        <button
                          onClick={() => setPreviewProject(project)}
                          aria-label={`View photo of ${project.title}`}
                          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xs hover:bg-slate-900 hover:text-white cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex flex-col flex-grow bg-white">
                        {/* Category Eyebrow */}
                        <div className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#D97706] mb-1.5">
                          {project.category}
                        </div>

                        {/* Client / Plant Title */}
                        <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-[#D97706] transition-colors line-clamp-2 leading-snug mb-3">
                          {project.title}
                        </h3>

                        {/* Horizontal Minimalist Technical Specs */}
                        <div className="space-y-1.5 mb-5 flex-grow">
                          {detailLines.length > 0 ? (
                            detailLines.map((line, lIdx) => (
                              <div key={lIdx} className="flex items-center text-xs text-slate-600 leading-relaxed font-ui">
                                <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 shrink-0" />
                                <span className="truncate">{line}</span>
                              </div>
                            ))
                          ) : (
                            <div className="flex items-center text-xs text-slate-600 leading-relaxed font-ui">
                              <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 shrink-0" />
                              <span className="truncate">{project.detail || 'Turnkey Installation'}</span>
                            </div>
                          )}
                        </div>

                        {/* Card Action Footer */}
                        <div className="pt-3.5 border-t border-slate-100 mt-auto flex items-center justify-between">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 group-hover:text-[#D97706] transition-colors uppercase tracking-wider cursor-pointer"
                          >
                            <span>Project RFQ</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#D97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>

                          <button
                            onClick={() => setPreviewProject(project)}
                            className="text-[11px] font-mono font-medium text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                          >
                            View Specs
                          </button>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </div>
            ) : (
              /* DETAILED SPEC VIEW (WIDE SPLIT CARDS) - SLEEK ARCHITECTURAL GALLERY */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {filteredProjects.map((project, index) => {
                  const detailLines = project.detail ? project.detail.split('\n') : [];
                  const capacityBadge = extractCapacity(project.detail);

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (index % 2) * 0.08 }}
                      className="group bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)] transition-all duration-500 flex flex-col sm:flex-row overflow-hidden"
                    >
                      {/* Left Photo Container */}
                      <div className="relative aspect-[16/10] sm:aspect-auto sm:w-72 shrink-0 bg-slate-100 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Floating Pill */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-[10.5px] font-mono font-medium shadow-xs border border-white/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                            <span>{capacityBadge ? `${capacityBadge} • ` : ''}{project.tag}</span>
                          </span>
                        </div>

                        <button
                          onClick={() => setPreviewProject(project)}
                          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xs hover:bg-slate-900 hover:text-white cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Right Details */}
                      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                        <div>
                          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#D97706] mb-1.5">
                            {project.category} • EPC EXECUTION
                          </div>

                          <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#D97706] transition-colors leading-snug mb-3">
                            {project.title}
                          </h3>

                          {/* Scope Breakdown */}
                          <div className="space-y-2 mb-5">
                            {detailLines.map((line, lIdx) => (
                              <div key={lIdx} className="flex items-center text-xs sm:text-sm text-slate-600 leading-relaxed font-ui">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2.5 shrink-0" />
                                <span>{line}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Row */}
                        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 group-hover:text-[#D97706] transition-colors uppercase tracking-wider cursor-pointer"
                          >
                            <span>Project RFQ</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#D97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>

                          <button
                            onClick={() => setPreviewProject(project)}
                            className="text-xs font-mono font-medium text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                          >
                            Full Lightbox
                          </button>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. TECHNICAL RFQ INQUIRY MODAL
        ══════════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
              >
                {/* Modal Header */}
                <div className="p-6 sm:p-7 border-b border-slate-100 bg-slate-50/70 flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#D97706] uppercase tracking-[0.2em] mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>DIRECT INDUSTRIAL RFQ</span>
                    </div>
                    <h3 className="text-xl font-display font-black text-slate-900 leading-tight">
                      {activeModalProject.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-1">
                      Scope: {activeModalProject.detail || activeModalProject.category}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors cursor-pointer shadow-xs shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Body / Form */}
                <div className="p-6 sm:p-7">
                  {submitStatus === 'success' ? (
                    <div className="py-8 text-center">
                      <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Inquiry Transmitted Successfully</h4>
                      <p className="text-xs text-slate-600 font-ui">
                        Our industrial furnace engineering desk will review your requirements and respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {submitStatus === 'error' && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                          Could not transmit form. Please call our direct hotline at +91 9932317334.
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            placeholder="Full Name *"
                            className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                          />
                        </div>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            placeholder="Company / Steel Plant *"
                            className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            placeholder="Official Work Email *"
                            className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            placeholder="Contact Number *"
                            className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          disabled={isSubmitting}
                          placeholder={`Specify furnace capacity requirements, lining repair scope, or technical questions regarding similar installations to ${activeModalProject.title}...`}
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white resize-none"
                        />
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400">
                          Direct Engineering Response
                        </span>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-2.5 rounded-xl bg-[#090D16] hover:bg-[#D97706] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>{isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ══════════════════════════════════════════════════════════════
            6. PHOTO PREVIEW LIGHTBOX MODAL
        ══════════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {previewProject && (
            <div 
              className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
              onClick={() => setPreviewProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                  <img
                    src={previewProject.image}
                    alt={previewProject.title}
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => setPreviewProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                      {previewProject.tag} • {previewProject.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {previewProject.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      {previewProject.detail}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const proj = previewProject;
                      setPreviewProject(null);
                      setActiveModalProject(proj);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                  >
                    Inquire on this Project
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ══════════════════════════════════════════════════════════════
            7. CONTACT STRIP DIRECT CALLOUT
        ══════════════════════════════════════════════════════════════ */}
        <ContactStrip />

      </main>

      <Footer />
    </div>
  );
};

export default Projects;