// src/components/sections/PartnersSection.tsx
import { clients } from '@/data/clients';

const PartnersSection = () => {
  // We duplicate the clients array once to create the seamless infinite scrolling track
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200 overflow-hidden relative">
      
      {/* Section Title */}
      <div className="container mx-auto px-12 lg:px-24 mb-12 text-center">
        <h4 className="text-2xl md:text-3xl font-serif font-bold text-[#1e3a5f] relative inline-block">
          Our Trusted Clients
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e63946]" />
        </h4>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden mask-horizontal-fade group">
        
        {/* The track containing all logos. 
          'w-max' allows it to stretch as far as it needs.
          The animation moves it left exactly 50% of its width (one full set of logos) before instantly resetting. 
        */}
        <div className="flex w-max animate-marquee items-center">
          {marqueeClients.map((client, idx) => (
            <div 
              key={`${client.id}-${idx}`}
              className="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img 
                src={client.image} 
                alt={client.name} 
                className="max-w-full h-16 md:h-20 object-contain drop-shadow-sm"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Embedded CSS for the infinite scroll and beautiful fading edges */}
      <style>{`
        /* Creates a gradient mask that fades out the left and right edges */
        .mask-horizontal-fade {
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
        }
        
        /* Translates exactly 50% of the container's width.
          Since the container holds two identical arrays, 50% shifts it perfectly back to the start.
        */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Adjust the 50s duration to make it scroll faster or slower */
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;