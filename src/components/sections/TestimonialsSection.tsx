// src/components/sections/TestimonialsSection.tsx
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { testimonials } from '@/data/testimonials';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <SectionTitle title="CLIENT TESTIMONIALS" />
        
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#090D16] tracking-tight">
            Endorsed by Engineering Directors &amp; Plant Heads
          </h2>
          <p className="font-ui text-slate-500 text-sm sm:text-base mt-2">
            Verified performance reports from heavy steel manufacturing and thermal processing facilities across India.
          </p>
        </div>
        
        <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2 lg:basis-1/2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full group"
                >
                  <div className="relative h-full p-8 lg:p-10 rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:border-amber-500/40 shadow-xs flex flex-col">
                    <Quote className="absolute top-6 right-6 w-24 h-24 text-slate-100 -z-0 rotate-12 transition-transform duration-500 group-hover:scale-105" />
                    
                    <div className="flex items-center gap-1.5 mb-6 text-[#D97706]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-500 text-sm">★</span>
                      ))}
                    </div>

                    <p className="text-slate-700 font-ui leading-relaxed text-base mb-8 relative z-10 font-normal">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                      <div className="w-12 h-12 rounded-full border border-slate-200 overflow-hidden shrink-0 shadow-xs relative z-10">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-[#090D16] text-base tracking-tight">{testimonial.name}</h4>
                        <p className="font-mono text-[10px] text-[#D97706] font-bold uppercase tracking-[0.16em]">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center items-center gap-5 mt-12">
            <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-lg border-slate-200 bg-white shadow-xs hover:bg-[#090D16] hover:text-white hover:border-[#090D16] transition-all duration-200">
              <ChevronLeft className="w-5 h-5" />
            </CarouselPrevious>
            <div className="h-px w-8 bg-slate-200" />
            <CarouselNext className="static translate-y-0 h-11 w-11 rounded-lg border-slate-200 bg-white shadow-xs hover:bg-[#D97706] hover:text-white hover:border-[#D97706] transition-all duration-200">
              <ChevronRight className="w-5 h-5" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;