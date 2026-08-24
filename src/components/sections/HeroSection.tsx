// src/components/sections/HeroSection.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowButton } from "@/components/ui/ArrowButton";

interface Slide {
  id: number;
  image: string;
  mobileImage: string;
  title: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/Gallery/g29.webp",
    mobileImage: "/images/Gallery/g29 mob.webp",
    title: "Premium Refractory Solutions",
  },
  {
    id: 2,
    image: "/images/Gallery/g28.webp",
    mobileImage: "/images/Gallery/g28 mob.webp",
    title: "Custom Cast Iron Components",
  },
  {
    id: 3,
    image: "/images/Gallery/g17.webp",
    mobileImage: "/images/Gallery/g17 mob.webp",
    title: "Advanced Industrial Equipment",
  },
  {
    id: 4,
    image: "/images/Gallery/g18.webp",
    mobileImage: "/images/Gallery/g18 mob.webp",
    title: "Excellence in Engineering",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
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
    // Adjusted mobile height slightly (h-[500px]) for a better fit
    <section className="relative h-[500px] md:h-[700px] overflow-hidden bg-[#07111f]">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <picture className="w-full h-full">
            <source media="(max-width: 768px)" srcSet={slides[currentSlide].mobileImage} />
            {/* object-contain ensures the FULL image is visible on mobile without cropping. 
              md:object-cover ensures it fills the screen normally on desktops.
            */}
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-contain md:object-cover object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center">
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
                <span className="w-10 h-[2px] bg-[#c49a3c]"></span>
                <span className="text-[#c49a3c] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
                  Paragon Refractories & Minerals
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-10 leading-[1.1] tracking-tight">
                {slides[currentSlide].title}
              </h1>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <CustomButton className="bg-transparent border border-white/20 hover:border-[#c49a3c] hover:bg-[#c49a3c]/10 text-white px-8 py-4 rounded-sm font-bold tracking-widest text-xs transition-all duration-300">
                    CONTACT SALES
                  </CustomButton>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-2 md:left-12 lg:left-24 z-20">
        <ArrowButton direction="left" onClick={prevSlide} />
      </div>
      <div className="absolute bottom-1/2 translate-y-1/2 right-2 md:right-12 lg:right-24 z-20">
        <ArrowButton direction="right" onClick={nextSlide} />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "bg-[#c49a3c] w-8 shadow-[0_0_10px_rgba(196,154,60,0.8)]"
                : "bg-white/40 hover:bg-white/80 w-1.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;