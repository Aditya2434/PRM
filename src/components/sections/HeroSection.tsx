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
    image: '/src/assets/images/hero-bg.jpg',
    title: 'Providing Innovative Solution',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  },
  {
    id: 2,
    image: '/src/assets/images/project-1.jpg',
    title: 'Excellence in Engineering',
    subtitle: 'Delivering world-class industrial solutions for global progress',
  },
  {
    id: 3,
    image: '/src/assets/images/project-7.jpg',
    title: 'Powering the Future',
    subtitle: 'Sustainable energy solutions for tomorrow\'s challenges',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      {/* Updated padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="relative z-10 container mx-auto px-12 lg:px-24 h-full flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <CustomButton variant="primary" size="lg">
                  LEARN MORE
                </CustomButton>
                <CustomButton variant="outline" size="lg">
                  CONTACT US
                </CustomButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      {/* Updated positioning: left-12/right-12 (48px) and lg:left-24/lg:right-24 (96px) */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-12 lg:left-24 z-20">
        <ArrowButton direction="left" onClick={prevSlide} />
      </div>
      <div className="absolute bottom-1/2 translate-y-1/2 right-12 lg:right-24 z-20">
        <ArrowButton direction="right" onClick={nextSlide} />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-[#e63946] w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;