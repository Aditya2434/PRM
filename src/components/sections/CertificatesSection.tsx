// src/components/sections/CertificatesSection.tsx
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogTitle, 
  DialogDescription, 
  DialogHeader,
  DialogClose
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { 
  Eye, 
  ChevronRight, 
  ShieldCheck, 
  Globe2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  FileCheck2, 
  X, 
  Layers, 
  ChevronLeft,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CertificateItem {
  id: string;
  tabLabel: string;
  tabNumber: string;
  title: string;
  badge: string;
  category: string;
  subtitle: string;
  issuer: string;
  validity: string;
  status: string;
  certNo: string;
  act: string;
  jurisdiction: string;
  imageUrl: string;
}

const certificates: CertificateItem[] = [
  {
    id: "trade-license",
    tabNumber: "01",
    tabLabel: "PRM Trade License",
    title: "Permanent Certificate of Enrolment",
    badge: "Municipal Record",
    category: "Commercial & Industrial Licensing",
    subtitle: "Municipal & Industrial Operation Credential (2026–2029)",
    issuer: "Government Commercial Licensing Authority, Durgapur, West Bengal",
    validity: "Active Period: 2026 – 2029",
    status: "Active & 100% Compliant",
    certNo: "0917P2181322161938",
    act: "WB Municipal Corporation Act, 2006 (Sec 141)",
    jurisdiction: "Durgapur Municipal Corporation",
    imageUrl: "/certificates/PRM tradelicense 2026-2029.png"
  },
  {
    id: "iec-certificate",
    tabNumber: "02",
    tabLabel: "DGFT IEC Certificate",
    title: "Importer-Exporter Code (IEC)",
    badge: "Govt of India Record",
    category: "Cross-Border Foreign Trade Permit",
    subtitle: "Official Registration with DGFT, Ministry of Commerce & Industry",
    issuer: "Ministry of Commerce and Industry, Government of India",
    validity: "Permanent Government Authorization (Active)",
    status: "DGFT Verified Active",
    certNo: "AHVPC4398K",
    act: "Foreign Trade (Dev & Reg) Act, 1992",
    jurisdiction: "DGFT Kolkata Zonal Office",
    imageUrl: "/certificates/IEC 2026.png"
  }
];

const CertificatesSection = () => {
  const [modalMode, setModalMode] = useState<'both' | 'trade-license' | 'iec-certificate'>('both');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const activeSoloCert = certificates.find((c) => c.id === modalMode) || certificates[0];
  const partnerCert = certificates.find((c) => c.id !== activeSoloCert.id) || certificates[1];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-amber-500 selection:text-white relative overflow-hidden">
      
      {/* ══════════════════════════════════════════════════════════════
          1. CLEAN ARCHITECTURAL HERO HEADER
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 border-b border-slate-200/70 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
        
        {/* Subtle Industrial Background Image with Frosted Gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/certificates_hero.jpg"
            alt="Paragon Refractories and Minerals Quality Accreditations"
            className="w-full h-full object-cover object-center opacity-15 filter brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#F8FAFC]" />
        </div>

        {/* Blueprint Grid & Warm Glow */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none z-0" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="container mx-auto px-6 lg:px-20 relative z-10 text-center">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-5 flex justify-center">
            <ol className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
              <li>
                <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#D97706] font-semibold">Certificates</span>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D97706] font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)] animate-pulse" />
              <span>Official Accreditations &amp; Compliance</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-black text-slate-900 mb-4 leading-[1.12] tracking-tight">
              Quality Accreditations &amp;{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] via-amber-600 to-[#B45309]">
                Legal Credentials.
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-ui text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
              Validated statutory compliance and government-issued credentials upholding our 25-year commitment to thermal engineering integrity, quality manufacturing, and export-grade reliability.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          2. FLOATING GLASS DUAL-CERTIFICATE SHOWCASE (MAIN PAGE)
      ══════════════════════════════════════════════════════════════ */}
      <section id="certificates-grid" className="py-12 lg:pt-16 lg:pb-24 relative scroll-mt-28">
        
        {/* Soft Ambient Radial Glass Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-amber-200/20 via-sky-100/30 to-amber-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 max-w-6xl relative z-10">
          
          <Dialog>
            {/* Dual Certificate Cards Grid (Fills Horizontal Viewport Harmoniously) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/95 shadow-[0_15px_45px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_60px_rgba(217,119,6,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* Card Header Bar */}
                  <div className="px-6 py-4 bg-white/90 backdrop-blur-md flex items-center justify-between border-b border-slate-200/60">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse" />
                      <span className="font-display font-bold text-sm text-slate-900">
                        {cert.title}
                      </span>
                    </div>

                    <span className="font-mono text-[10.5px] text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full font-semibold">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Document Display Frame */}
                  <div className="p-6 sm:p-8 flex flex-col items-center justify-center flex-1 bg-gradient-to-b from-slate-50/40 to-white/70">
                    <div className="relative w-full max-w-[380px] aspect-[1/1.38] rounded-2xl bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] border border-slate-200/80 p-3 sm:p-4 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-contain object-top select-none pointer-events-none filter contrast-[1.02]"
                        onContextMenu={(e) => e.preventDefault()}
                      />

                      {/* Corner Badge */}
                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-mono px-2.5 py-1 rounded-full border border-slate-200/90 pointer-events-none flex items-center gap-1.5 shadow-xs font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>VERIFIED</span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                        <DialogTrigger asChild>
                          <button
                            onClick={() => {
                              setModalMode(cert.id as any);
                              setZoomLevel(1);
                            }}
                            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-ui font-black text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Inspect Document</span>
                          </button>
                        </DialogTrigger>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Toolbar */}
                  <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate max-w-[220px]">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-xs font-ui text-slate-600 font-medium truncate">
                        {cert.jurisdiction}
                      </span>
                    </div>

                    <DialogTrigger asChild>
                      <button
                        onClick={() => {
                          setModalMode(cert.id as any);
                          setZoomLevel(1);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-800 hover:text-[#D97706] transition-colors cursor-pointer"
                      >
                        <span>Inspect HD</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </DialogTrigger>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Global View Both in Fullscreen Button */}
            <div className="mt-10 flex justify-center">
              <DialogTrigger asChild>
                <button
                  onClick={() => {
                    setModalMode('both');
                    setZoomLevel(1);
                  }}
                  className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-[#D97706] text-white px-8 py-3.5 rounded-full font-ui font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>Inspect Both Certificates (Side-by-Side)</span>
                </button>
              </DialogTrigger>
            </div>

            {/* ══════════════════════════════════════════════════════════
                PANORAMIC LIGHT FROSTED GLASS FULLSCREEN MODAL
                (NO DARK MODE, NO BLANK SPACE, BALANCED WIDESCREEN)
            ══════════════════════════════════════════════════════════ */}
            <DialogContent 
              showCloseButton={false}
              overlayClassName="bg-slate-900/20 backdrop-blur-md"
              className="fixed inset-0 top-0 left-0 translate-x-0 translate-y-0 w-screen h-screen max-w-none max-h-none sm:max-w-none p-0 m-0 rounded-none border-0 gap-0 z-50 bg-[#F1F5F9]/95 backdrop-blur-3xl flex flex-col justify-between overflow-hidden text-slate-900 duration-200"
            >
              
              {/* Luminous Ambient Background Glows */}
              <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-sky-300/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

              {/* ──────────────────────────────────────────────────────────
                  TOP FLOATING GLASS HEADER
              ────────────────────────────────────────────────────────── */}
              <DialogHeader className="pt-2.5 sm:pt-4 pb-1.5 sm:pb-2 px-2 sm:px-8 flex items-center justify-center shrink-0 z-30 w-full relative">
                <div className="bg-white/95 backdrop-blur-xl border border-white/95 shadow-[0_10px_35px_rgba(0,0,0,0.06)] rounded-full px-2.5 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between sm:justify-center gap-2 sm:gap-6 max-w-[98vw] sm:max-w-[94vw]">
                  
                  {/* Title & Badge */}
                  <div className="flex items-center gap-1.5 sm:gap-2.5 truncate max-w-[120px] sm:max-w-[220px] md:max-w-xs shrink-0">
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] shrink-0" />
                    <div className="truncate text-left">
                      <DialogTitle className="font-display font-bold text-[11px] sm:text-xs md:text-sm text-slate-900 truncate leading-tight">
                        {modalMode === 'both' ? 'Accreditations' : activeSoloCert.tabLabel}
                      </DialogTitle>
                      <DialogDescription className="text-[9.5px] font-mono text-slate-500 truncate hidden md:block">
                        Paragon Refractories and Minerals
                      </DialogDescription>
                    </div>
                  </div>

                  {/* In-Modal Switcher Pills */}
                  <div className="flex items-center gap-0.5 sm:gap-1 bg-slate-100/90 p-0.5 sm:p-1 rounded-full border border-slate-200/70 shrink-0">
                    <button
                      onClick={() => {
                        setModalMode('both');
                        setZoomLevel(1);
                      }}
                      className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-ui text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                        modalMode === 'both'
                          ? 'bg-white text-slate-900 shadow-xs border border-slate-200/90 text-amber-900'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Layers className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#D97706]" />
                      <span className="hidden sm:inline">Both (Side-by-Side)</span>
                      <span className="sm:hidden">Both</span>
                    </button>

                    {certificates.map((cert) => {
                      const isCurrent = modalMode === cert.id;
                      return (
                        <button
                          key={cert.id}
                          onClick={() => {
                            setModalMode(cert.id as any);
                            setZoomLevel(1);
                          }}
                          className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-ui text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-white text-slate-900 shadow-xs border border-slate-200/90'
                              : 'text-slate-500 hover:text-slate-900'
                          }`}
                        >
                          <span className="hidden sm:inline">{cert.tabLabel}</span>
                          <span className="sm:hidden">{cert.id === 'trade-license' ? 'Trade' : 'IEC'}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Floating Close Button */}
                  <DialogClose asChild>
                    <button 
                      title="Close Fullscreen (Esc)"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-500 text-slate-600 flex items-center justify-center transition-all cursor-pointer border border-slate-200/80 shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </DialogClose>

                </div>
              </DialogHeader>

              {/* ──────────────────────────────────────────────────────────
                  CENTRAL CANVAS VIEWPORT (FILLS SCREEN WITHOUT VOIDS)
              ────────────────────────────────────────────────────────── */}
              <div 
                className="flex-1 w-full min-h-0 overflow-auto flex items-center justify-center px-4 sm:px-6 lg:px-10 py-1 relative z-20"
                onContextMenu={(e) => e.preventDefault()}
              >
                
                {/* 1. DUAL CERTIFICATES SIDE-BY-SIDE MODE (WIDESCREEN SPREAD) */}
                {modalMode === 'both' && (
                  <div 
                    className="transition-transform duration-200 ease-out origin-center flex items-center justify-center w-full max-w-[1360px] mx-auto"
                    style={{ transform: `scale(${zoomLevel})` }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch justify-center">
                      {certificates.map((cert) => (
                        <div 
                          key={cert.id}
                          className="relative p-3.5 sm:p-4 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] ring-1 ring-black/5 flex flex-col items-center justify-between"
                        >
                          {/* Plaque Header */}
                          <div className="w-full flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100 text-xs font-mono">
                            <div className="flex items-center gap-2 truncate">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)]" />
                              <span className="font-bold text-slate-900 truncate">{cert.tabLabel}</span>
                            </div>
                            <span className="text-[#D97706] font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/70 text-[10px]">
                              {cert.badge}
                            </span>
                          </div>

                          {/* Image Canvas */}
                          <div className="relative w-full aspect-[1/1.38] max-h-[63vh] flex items-center justify-center overflow-hidden rounded-xl bg-white border border-slate-200/80 shadow-xs">
                            <img
                              src={cert.imageUrl}
                              alt={cert.title}
                              className="w-full h-full object-contain object-top select-none pointer-events-none filter contrast-[1.02]"
                            />
                          </div>

                          {/* Quick Inspect Solo Link */}
                          <button
                            onClick={() => {
                              setModalMode(cert.id as any);
                              setZoomLevel(1);
                            }}
                            className="mt-3 text-xs font-mono font-bold text-slate-700 hover:text-[#D97706] flex items-center gap-1.5 cursor-pointer transition-colors py-1 px-3 rounded-full hover:bg-amber-50"
                          >
                            <span>Inspect {cert.tabLabel} in Solo Focus</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#D97706]" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. SOLO CERTIFICATE MODE (EXPANDED HD PLAQUE WITH PREV/NEXT NAVIGATION, RESPONSIVE FOR ALL DEVICES) */}
                {modalMode !== 'both' && (
                  <div className="flex items-center justify-center w-full max-w-[1360px] mx-auto px-2 sm:px-4 relative">
                    
                    {/* Previous Document Floating Button (Desktop & Tablet) */}
                    <button
                      onClick={() => {
                        const otherCert = certificates.find((c) => c.id !== modalMode);
                        if (otherCert) {
                          setModalMode(otherCert.id as any);
                          setZoomLevel(1);
                        }
                      }}
                      title={`Switch to ${partnerCert.tabLabel}`}
                      className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all cursor-pointer shrink-0 group hover:scale-110 mr-4 lg:mr-8"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#D97706] group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    {/* ──── CENTER STAGE: FOCUSED CERTIFICATE HD PLAQUE ──── */}
                    <div 
                      className="transition-transform duration-200 ease-out origin-center flex flex-col items-center justify-center relative z-10 w-full max-w-[760px]"
                      style={{ transform: `scale(${zoomLevel})` }}
                    >
                      <div className="relative p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/95 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.14)] ring-1 ring-black/5 w-full flex flex-col items-center">
                        
                        {/* Compact In-Plaque Status Bar */}
                        <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-100/90 text-xs font-mono px-1">
                          <div className="flex items-center gap-2 truncate">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)] animate-pulse shrink-0" />
                            <span className="font-bold text-slate-900 truncate text-[11px] sm:text-xs">
                              {activeSoloCert.tabLabel}
                            </span>
                          </div>
                          <span className="text-[#D97706] font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/70 text-[9.5px] sm:text-[10px] shrink-0">
                            {activeSoloCert.badge}
                          </span>
                        </div>

                        {/* High-Resolution Document Canvas */}
                        <div className="relative w-full aspect-[1/1.38] max-h-[66vh] sm:max-h-[70vh] lg:max-h-[73vh] flex items-center justify-center overflow-hidden rounded-xl bg-white border border-slate-200/80 shadow-xs">
                          <img
                            src={activeSoloCert.imageUrl}
                            alt={activeSoloCert.title}
                            className="w-full h-full object-contain object-top select-none pointer-events-none filter contrast-[1.02]"
                          />
                        </div>

                        {/* Mobile Quick Switch Bar (Visible only on small screens) */}
                        <div className="w-full flex md:hidden items-center justify-between pt-2.5 mt-2 border-t border-slate-100/90 text-xs">
                          <button
                            onClick={() => {
                              setModalMode(partnerCert.id as any);
                              setZoomLevel(1);
                            }}
                            className="font-mono text-[11px] font-bold text-slate-700 hover:text-[#D97706] flex items-center gap-1 cursor-pointer"
                          >
                            <span>Switch to {partnerCert.tabLabel}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#D97706]" />
                          </button>
                          
                          <button
                            onClick={() => {
                              setModalMode('both');
                              setZoomLevel(1);
                            }}
                            className="font-mono text-[11px] font-bold text-[#D97706] flex items-center gap-1 cursor-pointer"
                          >
                            <Layers className="w-3 h-3" />
                            <span>Both</span>
                          </button>
                        </div>

                      </div>
                    </div>

                    {/* Next Document Floating Button (Desktop & Tablet) */}
                    <button
                      onClick={() => {
                        const otherCert = certificates.find((c) => c.id !== modalMode);
                        if (otherCert) {
                          setModalMode(otherCert.id as any);
                          setZoomLevel(1);
                        }
                      }}
                      title={`Switch to ${partnerCert.tabLabel}`}
                      className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all cursor-pointer shrink-0 group hover:scale-110 ml-4 lg:ml-8"
                    >
                      <ChevronRight className="w-5 h-5 text-[#D97706] group-hover:translate-x-0.5 transition-transform" />
                    </button>

                  </div>
                )}

              </div>

              {/* ──────────────────────────────────────────────────────────
                  FLOATING GLASS BOTTOM ACTION DOCK
              ────────────────────────────────────────────────────────── */}
              <div className="pb-3 sm:pb-4 flex items-center justify-center shrink-0 z-30 w-full relative">
                <div className="bg-white/90 backdrop-blur-xl border border-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-full px-4 py-1.5 flex items-center gap-2 sm:gap-3">
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5 pr-2 border-r border-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700 font-ui hidden sm:inline">Active &amp; Compliant</span>
                  </div>

                  {/* Zoom Controls */}
                  <button
                    onClick={handleZoomOut}
                    title="Zoom Out (-)"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={handleResetZoom}
                    title="Click to Reset (100%)"
                    className="px-2 py-0.5 text-xs font-mono font-bold text-slate-900 hover:text-[#D97706] cursor-pointer"
                  >
                    {Math.round(zoomLevel * 100)}%
                  </button>

                  <button
                    onClick={handleZoomIn}
                    title="Zoom In (+)"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleResetZoom}
                    title="Reset View"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                </div>
              </div>

            </DialogContent>
          </Dialog>

          {/* ══════════════════════════════════════════════════════════════
              3. FLOATING GLASS TRUST PILLS
          ══════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-[#D97706]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xs uppercase tracking-wide text-slate-900">
                  100% Statutory Compliant
                </h3>
                <p className="font-ui text-xs text-slate-500 mt-0.5">
                  GST, Factory Act, Labor Laws &amp; Municipal Enrolment
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-[#D97706]">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xs uppercase tracking-wide text-slate-900">
                  DGFT Approved Exporter
                </h3>
                <p className="font-ui text-xs text-slate-500 mt-0.5">
                  Pan-India &amp; Global Maritime Logistics Clearances
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-[#D97706]">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xs uppercase tracking-wide text-slate-900">
                  Full MTC &amp; Lab Reports
                </h3>
                <p className="font-ui text-xs text-slate-500 mt-0.5">
                  Mill Test Certificates &amp; Third-Party Inspection
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CertificatesSection;