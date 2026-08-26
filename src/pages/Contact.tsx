// src/pages/Contact.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CheckCircle2, AlertCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');

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
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          from_name: "PRM Website",
        }),
      });

      const result = await response.json();

      if (response.status === 200) {
        setStatus('success');
        setResultMessage("Thank you! Your message has been sent successfully.");
        setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setResultMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setResultMessage("Network error. Please check your connection and try again.");
    }
  };

  // ContactPage + LocalBusiness Schema
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
        "image": "https://www.paragonrefractoriesandminerals.com/images/refractory_hero.jpg",
        "url": "https://www.paragonrefractoriesandminerals.com/",
        "telephone": ["+919932317334", "+918158884204"],
        "email": "paragonrefractories22@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Durgapur",
          "addressLocality": "Durgapur",
          "addressRegion": "West Bengal",
          "postalCode": "713201",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.5204,
          "longitude": 87.3119
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Bank Transfer"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f9] font-sans">
      <SEO 
        title="Contact Us | Reheating Furnace & Refractory Manufacturer | Paragon Refractories and Minerals"
        description="Get in touch with PRM India in Durgapur, West Bengal for customized reheating furnace systems, high-quality refractory bricks, and enterprise quotes."
        keywords="contact refractory supplier, furnace manufacturer Durgapur, refractory brick prices India, steel plant equipment quote, PRM contact number"
        url="/contact"
        schema={contactSchema}
      />
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow relative">
        
        {/* --- ULTRA PREMIUM HERO SECTION --- */}
        <section className="relative bg-[#020617] pt-32 pb-48 lg:pt-40 lg:pb-72 overflow-hidden flex items-center justify-center">
          {/* Deep Abstract Gradients */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          
          {/* Glowing Orbs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#c49a3c] rounded-full blur-[150px] pointer-events-none" 
          />
          <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-[#0d1f35] rounded-full blur-[150px] pointer-events-none" />

          {/* Giant Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
            <h1 className="text-[150px] md:text-[250px] lg:text-[350px] font-black text-white/5 tracking-tighter leading-none">
              PRM
            </h1>
          </div>

          <div className="container mx-auto px-6 lg:px-24 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center justify-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#c49a3c] animate-pulse"></span>
                <span className="text-white/80 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
                  Global Industrial Support
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1] tracking-tight">
                Let's Build <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c49a3c] to-[#ff8fa3] italic">
                  Something Great.
                </span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
                Our main expertise is in reheating furnace manufacturing and installation. Connect with our engineering team for customized refractory solutions, detailed product specifications, and enterprise quotes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- SPLIT PANEL CONTACT SECTION --- */}
        {/* Adheres strictly to the site's container padding (px-6 lg:px-24) */}
        <section className="container mx-auto px-6 lg:px-24 relative z-20 -mt-24 lg:-mt-44 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-7xl mx-auto flex flex-col lg:flex-row bg-white rounded-[2rem] lg:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100"
          >
            
            {/* LEFT SIDE: THE FORM (Renders Top on Mobile) */}
            <div className="w-full lg:w-3/5 p-6 sm:p-10 lg:p-16 order-1">
              <div className="mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0d1f35] tracking-tight mb-2">Send a Message</h3>
                <p className="text-gray-500 text-sm md:text-base">Fill out the form below and we will get back to you promptly.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                      First Name <span className="text-[#c49a3c]">*</span>
                    </Label>
                    <Input 
                      id="firstName" value={formData.firstName} onChange={handleChange} required 
                      className="h-14 bg-gray-50/80 border-gray-200 hover:border-gray-300 focus:bg-white focus:border-[#c49a3c] focus:ring-4 focus:ring-[#c49a3c]/10 transition-all duration-300 rounded-xl px-5 text-[15px]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                      Last Name <span className="text-[#c49a3c]">*</span>
                    </Label>
                    <Input 
                      id="lastName" value={formData.lastName} onChange={handleChange} required 
                      className="h-14 bg-gray-50/80 border-gray-200 hover:border-gray-300 focus:bg-white focus:border-[#c49a3c] focus:ring-4 focus:ring-[#c49a3c]/10 transition-all duration-300 rounded-xl px-5 text-[15px]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                      Email Address <span className="text-[#c49a3c]">*</span>
                    </Label>
                    <Input 
                      id="email" type="email" value={formData.email} onChange={handleChange} required 
                      className="h-14 bg-gray-50/80 border-gray-200 hover:border-gray-300 focus:bg-white focus:border-[#c49a3c] focus:ring-4 focus:ring-[#c49a3c]/10 transition-all duration-300 rounded-xl px-5 text-[15px]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" type="tel" value={formData.phone} onChange={handleChange} 
                      className="h-14 bg-gray-50/80 border-gray-200 hover:border-gray-300 focus:bg-white focus:border-[#c49a3c] focus:ring-4 focus:ring-[#c49a3c]/10 transition-all duration-300 rounded-xl px-5 text-[15px]" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                    Subject <span className="text-[#c49a3c]">*</span>
                  </Label>
                  <Input 
                    id="subject" value={formData.subject} onChange={handleChange} required 
                    className="h-14 bg-gray-50/80 border-gray-200 hover:border-gray-300 focus:bg-white focus:border-[#c49a3c] focus:ring-4 focus:ring-[#c49a3c]/10 transition-all duration-300 rounded-xl px-5 text-[15px]" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                    Message <span className="text-[#c49a3c]">*</span>
                  </Label>
                  <Textarea 
                    id="message" value={formData.message} onChange={handleChange} required 
                    className="min-h-[150px] bg-gray-50/80 border-gray-200 hover:border-gray-300 focus:bg-white focus:border-[#c49a3c] focus:ring-4 focus:ring-[#c49a3c]/10 transition-all duration-300 rounded-xl px-5 py-4 text-[15px] resize-y"
                  />
                </div>

                {/* Status Notifications */}
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-emerald-700 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium">{resultMessage}</span>
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-100">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-sm font-medium">{resultMessage}</span>
                  </motion.div>
                )}

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-[#c49a3c] hover:bg-[#a67d28] text-white h-16 text-[15px] tracking-[0.1em] uppercase font-bold rounded-xl transition-all duration-500 flex items-center justify-center shadow-[0_10px_20px_rgba(196,154,60,0.2)] hover:shadow-[0_10px_30px_rgba(196,154,60,0.3)] hover:-translate-y-1 group"
                  >
                    {status === 'submitting' ? 'Processing...' : 'Submit Request'}
                    {status !== 'submitting' && <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </div>
              </form>
            </div>

            {/* RIGHT SIDE: CONTACT INFO (Renders Bottom on Mobile) */}
            <div className="w-full lg:w-2/5 p-6 sm:p-10 lg:p-16 bg-[#0d1f35] relative overflow-hidden order-2">
              
              {/* Decorative Geometric Patterns */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c49a3c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-12">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">Contact Information</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Prefer to speak directly? Reach out to our headquarters using the details below.
                  </p>
                </div>

                <div className="space-y-10 flex-grow">
                  {/* Phone */}
                  <div className="flex items-start gap-5 group">
                    <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#c49a3c] group-hover:border-[#c49a3c] transition-all duration-500">
                      <Phone className="w-5 h-5 text-[#c49a3c] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">Direct Lines</p>
                      <p className="text-lg font-medium text-white hover:text-[#c49a3c] transition-colors">
                        <a href="tel:+919932317334">+91 9932317334</a>
                      </p>
                      <p className="text-lg font-medium text-white hover:text-[#c49a3c] transition-colors mt-1">
                        <a href="tel:+918158884204">+91 8158884204</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-5 group">
                    <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#c49a3c] group-hover:border-[#c49a3c] transition-all duration-500">
                      <Mail className="w-5 h-5 text-[#c49a3c] group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email Support</p>
                      <p className="text-[15px] sm:text-[17px] font-medium text-white break-all sm:break-normal hover:text-[#c49a3c] transition-colors cursor-pointer">
                        <a href="mailto:paragonrefractories22@gmail.com">paragonrefractories22@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-5 group">
                    <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#c49a3c] group-hover:border-[#c49a3c] transition-all duration-500">
                      <MapPin className="w-5 h-5 text-[#c49a3c] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">Headquarters</p>
                      <p className="text-base font-medium text-white leading-relaxed">
                        Durgapur, West Bengal<br/>
                        <span className="text-gray-400">India</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Bottom Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12 mb-6"></div>
                <p className="text-xs text-center text-gray-500 uppercase tracking-widest font-bold">
                  Operating Worldwide
                </p>
              </div>
            </div>

          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;