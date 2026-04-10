// src/components/sections/HeroSection.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomButton from '@/components/ui/CustomButton';
import { ArrowButton } from '@/components/ui/ArrowButton';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/Gallery/Refractory.webp',
    title: 'Premium Refractory Solutions',
    subtitle: 'Engineered for extreme temperatures and ultimate thermal stability in demanding industrial environments.',
  },
  {
    id: 2,
    image: '/images/Gallery/CI.webp',
    title: 'Bespoke Cast Iron Components',
    subtitle: 'High-grade metallurgical castings forged for maximum durability and severe mechanical stress.',
  },
  {
    id: 3,
    image: '/images/Gallery/g17.webp', 
    title: 'Advanced Industrial Equipment',
    subtitle: 'Turnkey heating and material handling systems tailored to your precise manufacturing requirements.',
  },
  {
    id: 4,
    image: '/images/Gallery/g18.webp', // Fixed to .webp
    title: 'Excellence in Engineering',
    subtitle: 'Delivering performance-driven industrial solutions and sustainable progress for global partners.',
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Sped up from 6000 (6s) to 4000 (4s) so the auto-slide is much more noticeable
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); 
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-[#030508]">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* object-cover and object-center ensures it fills the screen perfectly */}
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover object-center"
          />
          {/* Premium Dark Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030508]/95 via-[#030508]/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-12 lg:px-24 h-full flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-[2px] bg-[#e63946]"></span>
                <span className="text-[#e63946] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
                  Paragon Refractories & Minerals
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-10 font-light leading-relaxed max-w-xl">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/products/refractory-material">
                  <CustomButton className="bg-[#e63946] hover:bg-[#c1121f] text-white px-8 py-4 rounded-sm font-bold tracking-widest text-xs transition-all duration-300 shadow-xl">
                    EXPLORE CATALOG
                  </CustomButton>
                </a>
                <a href="/contact">
                  <CustomButton className="bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-sm font-bold tracking-widest text-xs transition-all duration-300">
                    CONTACT SALES
                  </CustomButton>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 md:left-12 lg:left-24 z-20">
        <ArrowButton direction="left" onClick={prevSlide} />
      </div>
      <div className="absolute bottom-1/2 translate-y-1/2 right-4 md:right-12 lg:right-24 z-20">
        <ArrowButton direction="right" onClick={nextSlide} />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? 'bg-[#e63946] w-8 shadow-[0_0_10px_rgba(230,57,70,0.8)]'
                : 'bg-white/40 hover:bg-white/80 w-1.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;