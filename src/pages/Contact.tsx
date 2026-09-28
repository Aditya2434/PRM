// src/pages/Contact.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  ExternalLink,
  MessageSquare,
  User,
  Tag,
  Building2,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Factory
} from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';

const QUICK_TOPICS = [
  'Reheating Furnaces EPC',
  'Refractory Bricks (40%-80%)',
  'Monolithic Castables',
  'Cast Iron Spares',
  'Emergency Relining'
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: QUICK_TOPICS[0],
    message: ''
  });

  const [selectedTopic, setSelectedTopic] = useState(QUICK_TOPICS[0]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setFormData(prev => ({
      ...prev,
      subject: topic
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('paragonrefractories22@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setResultMessage('');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e0c4e386-1dea-4873-86d2-5edee06ea579",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          subject: formData.subject,
          message: formData.message,
          from_name: "PRM Website Contact Form",
        }),
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setStatus('success');
        setResultMessage("Thank you! Your inquiry has been received. An engineering specialist will contact you within 24 hours.");
        setFormData({ name: '', email: '', phone: '', company: '', subject: QUICK_TOPICS[0], message: '' });
      } else {
        setStatus('error');
        setResultMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setResultMessage("Network error. Please check your connection or call +91 99323 17334.");
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.paragonrefractoriesandminerals.com/contact/#contactpage",
        "url": "https://www.paragonrefractoriesandminerals.com/contact",
        "name": "Contact Paragon Refractories and Minerals",
        "description": "Contact PRM for customized reheating furnace systems, refractory materials, and industrial equipment in Durgapur, West Bengal, India.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.paragonrefractoriesandminerals.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.paragonrefractoriesandminerals.com/contact" }
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.paragonrefractoriesandminerals.com/#localbusiness",
        "name": "Paragon Refractories and Minerals",
        "image": "https://www.paragonrefractoriesandminerals.com/images/about_us_hero.jpg",
        "url": "https://www.paragonrefractoriesandminerals.com/",
        "telephone": ["+919932317334", "+918158884204"],
        "email": "paragonrefractories22@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Durgapur Industrial Complex",
          "addressLocality": "Durgapur",
          "addressRegion": "West Bengal",
          "postalCode": "713206",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.5204,
          "longitude": 87.3119
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-900 selection:bg-amber-500 selection:text-white">
      <SEO 
        title="Contact Us | Reheating Furnace & Refractory Manufacturer | Paragon Refractories and Minerals"
        description="Get in touch with PRM India in Durgapur, West Bengal for customized reheating furnace systems, high-quality refractory bricks, and enterprise quotes."
        keywords="contact refractory supplier, furnace manufacturer Durgapur, refractory brick prices India, steel plant equipment quote, PRM contact number"
        url="/contact"
        schema={contactSchema}
      />
      <Navbar />

      <main className="flex-grow">
        
        {/* ══════════════════════════════════════════════════════════════
            1. SIGNATURE ARCHITECTURAL HERO SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-18 border-b border-slate-200/80 overflow-hidden bg-slate-50">
          
          {/* Subtle Background Image with Frosted Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/about_us_hero.jpg"
              alt="Paragon Refractories and Minerals Headquarters"
              className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-slate-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80" />
          </div>

          {/* Blueprint Grid & Warm Ambient Radial Glow */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none z-0" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[650px] h-[500px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="container mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="breadcrumb" className="mb-5 flex justify-center">
              <ol className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                <li>
                  <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                </li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <li className="text-[#D97706] font-semibold">Contact</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-center"
            >
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D97706] font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                <span>Get In Touch</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-5 leading-[1.10] tracking-tight">
                Let's Discuss Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-[#D97706] to-amber-600">
                  Industrial Requirements.
                </span>
              </h1>

              {/* Subtext */}
              <p className="font-ui text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto mb-7">
                Connect directly with our engineering and procurement team for custom refractory formulations, turnkey reheating furnace EPC, or emergency plant overhaul.
              </p>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-700 text-xs font-mono font-medium shadow-2xs">
                  <Zap className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>&lt; 24h Response SLA</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-700 text-xs font-mono font-medium shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>NDA Protected &amp; ISO 9001</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-700 text-xs font-mono font-medium shadow-2xs">
                  <Factory className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>3 Direct Works in Durgapur</span>
                </span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Hairline Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. ATTRACTIVE & POLISHED SPLIT CONTACT SHOWCASE
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 relative">
          <div className="container mx-auto px-4 sm:px-5 lg:px-12 max-w-6xl">
            
            {/* The Unified Card Container with Ambient Halo Border */}
            <motion.div 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="p-[1.5px] rounded-[32px] bg-gradient-to-br from-amber-400/35 via-slate-200 to-amber-500/25 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.08)]"
            >
              <div className="bg-white rounded-[30px] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                
                {/* ──────────────────────────────────────────────────────────
                    LEFT PANEL: REFINED CONTACT FORM (7 COLS)
                ────────────────────────────────────────────────────────── */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-13">
                  <div className="mb-7">
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-[#D97706] block mb-1.5">
                      Direct Dispatch
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Send Us an Inquiry
                    </h2>
                    <p className="font-ui text-slate-500 text-sm mt-1.5">
                      Fill out your details below and a senior technical representative will reach out promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Interactive Topic Selector Chips */}
                    <div>
                      <Label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Requirement Category
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {QUICK_TOPICS.map((topic) => {
                          const isSelected = selectedTopic === topic;
                          return (
                            <button
                              type="button"
                              key={topic}
                              onClick={() => handleTopicClick(topic)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-ui font-medium transition-all duration-200 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#090D16] text-amber-400 shadow-sm'
                                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                              }`}
                            >
                              {topic}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                        Full Name <span className="text-[#D97706]">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input 
                          id="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                          placeholder="e.g. Rajesh Banerjee"
                          className="pl-11 h-12 bg-slate-50/70 border-slate-200 hover:border-slate-300 focus:bg-white focus:border-[#D97706] focus:ring-4 focus:ring-amber-500/10 rounded-xl text-sm font-ui transition-all" 
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                          Corporate Email <span className="text-[#D97706]">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input 
                            id="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            placeholder="name@steelplant.com"
                            className="pl-11 h-12 bg-slate-50/70 border-slate-200 hover:border-slate-300 focus:bg-white focus:border-[#D97706] focus:ring-4 focus:ring-amber-500/10 rounded-xl text-sm font-ui transition-all" 
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                          Phone / WhatsApp
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input 
                            id="phone" 
                            type="tel" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            placeholder="+91 99323 17334"
                            className="pl-11 h-12 bg-slate-50/70 border-slate-200 hover:border-slate-300 focus:bg-white focus:border-[#D97706] focus:ring-4 focus:ring-amber-500/10 rounded-xl text-sm font-ui transition-all" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company / Plant Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                        Company / Steel Plant Name
                      </Label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input 
                          id="company" 
                          value={formData.company} 
                          onChange={handleChange} 
                          placeholder="e.g. Modern Steel &amp; Rolling Mill Ltd."
                          className="pl-11 h-12 bg-slate-50/70 border-slate-200 hover:border-slate-300 focus:bg-white focus:border-[#D97706] focus:ring-4 focus:ring-amber-500/10 rounded-xl text-sm font-ui transition-all" 
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                        Subject Reference <span className="text-[#D97706]">*</span>
                      </Label>
                      <div className="relative">
                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input 
                          id="subject" 
                          value={formData.subject} 
                          onChange={handleChange} 
                          required 
                          className="pl-11 h-12 bg-slate-50/70 border-slate-200 hover:border-slate-300 focus:bg-white focus:border-[#D97706] focus:ring-4 focus:ring-amber-500/10 rounded-xl text-sm font-ui transition-all" 
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                        Technical Requirements / Scope <span className="text-[#D97706]">*</span>
                      </Label>
                      <Textarea 
                        id="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        rows={4}
                        placeholder="Please describe furnace capacity (TPH), brick grades, operating temperature, delivery schedule, or site location..."
                        className="bg-slate-50/70 border-slate-200 hover:border-slate-300 focus:bg-white focus:border-[#D97706] focus:ring-4 focus:ring-amber-500/10 rounded-xl p-4 text-sm font-ui resize-none transition-all" 
                      />
                    </div>

                    {/* Alerts */}
                    {status === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-sm font-ui"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>{resultMessage}</span>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-800 text-sm font-ui"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                        <span>{resultMessage}</span>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-[#090D16] hover:bg-[#D97706] text-white h-13 text-xs font-mono tracking-[0.16em] uppercase font-bold rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-xl hover:shadow-amber-500/25 group cursor-pointer"
                      >
                        {status === 'submitting' ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Transmitting Inquiry...</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <span>Submit Engineering Request</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>

                {/* ──────────────────────────────────────────────────────────
                    RIGHT PANEL: LUMINOUS FROSTED CORPORATE HUB (5 COLS)
                ────────────────────────────────────────────────────────── */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-white to-amber-50/20 border-t lg:border-t-0 lg:border-l border-slate-200/80 p-6 sm:p-10 lg:p-13 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle Blueprint Ambient */}
                  <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

                  <div className="relative z-10 space-y-7">
                    
                    {/* Header */}
                    <div>
                      <span className="font-mono text-[10.5px] text-[#D97706] font-bold uppercase tracking-[0.2em] block mb-1.5">
                        Works &amp; Headquarters
                      </span>
                      <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight mb-2">
                        Paragon Refractories &amp; Minerals
                      </h3>
                      <p className="font-ui text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Continuous reheating furnace EPC, high-alumina refractory brick production, and metallurgical foundry castings.
                      </p>
                    </div>

                    {/* Information Cards Stack */}
                    <div className="space-y-4">
                      
                      {/* Phone Card */}
                      <div className="bg-white/80 backdrop-blur-sm border border-slate-200/90 hover:border-amber-400/80 rounded-2xl p-4 transition-all duration-200 shadow-2xs">
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                            <Phone className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">Direct Engineering Lines</p>
                            <a href="tel:+919932317334" className="block text-sm font-bold text-slate-900 hover:text-[#D97706] transition-colors">
                              +91 99323 17334
                            </a>
                            <a href="tel:+918158884204" className="block text-xs font-semibold text-slate-600 hover:text-[#D97706] transition-colors mt-0.5">
                              +91 81588 84204
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Email Card */}
                      <div className="bg-white/80 backdrop-blur-sm border border-slate-200/90 hover:border-amber-400/80 rounded-2xl p-4 transition-all duration-200 shadow-2xs">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-3.5 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                              <Mail className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email Desk</p>
                              <a href="mailto:paragonrefractories22@gmail.com" className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-[#D97706] transition-colors truncate">
                                paragonrefractories22@gmail.com
                              </a>
                            </div>
                          </div>
                          <button 
                            onClick={handleCopyEmail}
                            title="Copy Email Address"
                            className="text-[11px] font-mono font-semibold px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-[#D97706] flex items-center gap-1 transition-all shrink-0 cursor-pointer"
                          >
                            {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Location Card */}
                      <div className="bg-white/80 backdrop-blur-sm border border-slate-200/90 hover:border-amber-400/80 rounded-2xl p-4 transition-all duration-200 shadow-2xs">
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">Works &amp; Stockyard</p>
                            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                              Durgapur Industrial Complex
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              West Bengal, India — 713206 (NH-19)
                            </p>
                            <a 
                              href="https://maps.google.com/?q=Durgapur+Industrial+Area+West+Bengal+713206" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#D97706] hover:underline mt-1.5"
                            >
                              <span>View on Google Maps</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Hours Card */}
                      <div className="bg-white/80 backdrop-blur-sm border border-slate-200/90 hover:border-amber-400/80 rounded-2xl p-4 transition-all duration-200 shadow-2xs">
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">Operational Desk</p>
                            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                              Monday – Saturday
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              08:30 AM – 08:30 PM IST (Emergency 24/7)
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* WhatsApp Action Button */}
                    <a 
                      href="https://wa.me/917363993193?text=Hello%20Paragon%20Refractories%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>

                  {/* Status Indicator */}
                  <div className="relative z-10 pt-5 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-2 text-slate-700 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Engineering Desk Active
                    </span>
                    <span>ISO 9001:2015</span>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;