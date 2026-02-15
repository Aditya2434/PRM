import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { testimonials } from '@/data/testimonials';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Updated padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="container mx-auto px-12 lg:px-24">
        <SectionTitle title="TESTIMONIALS" />
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2">
                <div className="bg-slate-50 p-10 h-full border border-slate-100 flex flex-col">
                  <Quote className="w-10 h-10 text-slate-200 mb-6 flex-shrink-0" />
                  
                  <p className="text-gray-600 leading-relaxed italic mb-8 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/150';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a5f] text-sm uppercase tracking-wider">
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] text-[#e63946] font-bold uppercase tracking-widest">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-none border-slate-200 hover:bg-[#e63946] hover:text-white transition-colors" />
            <CarouselNext className="static translate-y-0 h-12 w-12 rounded-none border-slate-200 hover:bg-[#e63946] hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;