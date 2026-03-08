// src/pages/Contact.tsx
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactStrip from '../components/sections/ContactStrip';
import { ChevronRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#0f172a] py-32 md:py-48 overflow-hidden flex items-center min-h-[40vh]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920')" }}
          ></div>
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="container mx-auto px-12 lg:px-24 relative z-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg tracking-tight">
              Contact Us
            </h1>
            <div className="flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] text-white/80 uppercase bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
              <a href="/" className="hover:text-[#e63946] transition-colors duration-300">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Contact</span>
            </div>
          </div>
        </section>

        {/* This is the awesome form we just built! */}
        <ContactStrip />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;