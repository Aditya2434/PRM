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

const testimonialStyles = [
  {
    gradient: "from-white via-white to-blue-50/40",
    accent: "bg-[#1e3a5f]",
    iconColor: "text-blue-100",
    borderColor: "border-blue-100/30"
  },
  {
    gradient: "from-white via-white to-red-50/40",
    accent: "bg-[#e63946]",
    iconColor: "text-red-100",
    borderColor: "border-red-100/30"
  },
  {
    gradient: "from-white via-white to-indigo-50/40",
    accent: "bg-indigo-600",
    iconColor: "text-indigo-100",
    borderColor: "border-indigo-100/30"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white -skew-x-12 translate-x-1/4 -z-10" />
      </div>

      <div className="container mx-auto px-12 lg:px-24 relative z-10">
        <SectionTitle title="TESTIMONIALS" />
        
        <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => {
              const style = testimonialStyles[index % testimonialStyles.length];
              return (
                <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2 lg:basis-1/2">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full group"
                  >
                    <div className={`relative h-full p-10 rounded-2xl border ${style.borderColor} bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] shadow-sm`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} -z-10`} />
                      <Quote className={`absolute top-6 right-6 w-32 h-32 ${style.iconColor} opacity-40 -z-10 rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0`} />
                      <div className={`absolute top-0 left-0 w-1.5 h-full ${style.accent} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                      <Quote className={`w-10 h-10 ${style.accent} mb-8 opacity-80`} />
                      <p className="text-gray-600 leading-relaxed italic text-lg mb-10 relative z-10 font-medium">"{testimonial.text}"</p>
                      <div className="flex items-center gap-5 mt-auto border-t border-black/5 pt-8">
                        <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shrink-0 shadow-md relative z-10">
                          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-[#1e3a5f] text-base tracking-tight mb-0.5">{testimonial.name}</h4>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-[1px] bg-[#e63946]" />
                            <p className="text-[10px] text-[#e63946] font-bold uppercase tracking-[0.2em]">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          
          <div className="flex justify-center items-center gap-6 mt-16">
            <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-full border-slate-200 bg-white shadow-sm hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all duration-300">
              <ChevronLeft className="w-6 h-6" />
            </CarouselPrevious>
            <div className="h-px w-12 bg-slate-300" />
            <CarouselNext className="static translate-y-0 h-14 w-14 rounded-full border-slate-200 bg-white shadow-sm hover:bg-[#e63946] hover:text-white hover:border-[#e63946] transition-all duration-300">
              <ChevronRight className="w-6 h-6" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;