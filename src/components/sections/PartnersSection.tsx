// src/components/sections/PartnersSection.tsx
import { clients } from '@/data/clients';

const PartnersSection = () => {
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white border-y border-slate-200/80 overflow-hidden relative">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-24 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
          Industrial Client Network
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#090D16] tracking-tight">
          Trusted by India's Premier Steel &amp; Metallurgical Leaders
        </h3>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden mask-horizontal-fade group">
        <div className="flex w-max animate-partners-marquee items-center">
          {marqueeClients.map((client, idx) => (
            <div 
              key={`${client.id}-${idx}`}
              className="w-36 md:w-52 mx-6 md:mx-10 shrink-0 flex items-center justify-center p-3 rounded-lg bg-white border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
            >
              <img 
                src={client.image} 
                alt={client.name} 
                className="max-w-full h-12 md:h-14 object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mask-horizontal-fade {
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
        }
        @keyframes marqueePartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partners-marquee {
          animation: marqueePartners 85s linear infinite;
        }
        .animate-partners-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;