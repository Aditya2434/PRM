import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Cpu, Wrench } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

// Import data files to fetch exact names, descriptions, and images
import { equipmentsData } from '@/data/industrialEquipments';
import { refractoryProducts } from '@/data/refractoryProducts';
import { castIronData } from '@/data/castIronParts';

const categories = [
  {
    id: 'refractories',
    title: 'Refractory Products',
    link: '/products/refractory-materials#first-product',
    icon: Flame,
  },
  {
    id: 'equipments',
    title: 'Industrial Equipments',
    link: '/products/industrial-equipment#first-product',
    icon: Cpu,
  },
  {
    id: 'cast-iron',
    title: 'Cast Iron Parts',
    link: '/products/cast-iron-parts#first-product',
    icon: Wrench,
  },
];

const getSelectedProducts = () => {
  const selected = [];

  // 1. Pusher Type Reheating Furnace
  const pusherFurnace = equipmentsData.find(e => e.id === 'pusher-type-reheating-furnace');
  if (pusherFurnace) {
    selected.push({
      id: pusherFurnace.id,
      title: pusherFurnace.title,
      category: 'Industrial Furnace',
      description: pusherFurnace.desc,
      image: pusherFurnace.image,
      link: `/products/industrial-equipment/${pusherFurnace.id}`,
    });
  }

  // 2. High Alumina Bricks 80%
  const ha80 = refractoryProducts.find(r => r.id === 'high-alumina-brick-80');
  if (ha80) {
    selected.push({
      id: ha80.id,
      title: ha80.name,
      category: 'Refractory Bricks',
      description: ha80.shortDescription,
      image: ha80.image || '/images/refractory_hero.jpg',
      link: `/products/refractory-materials/${ha80.id}`,
    });
  }

  // 3. C.I Skid & Skid End
  const ciSkid = castIronData.find(c => c.id === 3);
  if (ciSkid) {
    selected.push({
      id: `ci-${ciSkid.id}`,
      title: ciSkid.title,
      category: 'Cast Iron Parts',
      description: ciSkid.desc,
      image: ciSkid.images[0],
      link: '/products/cast-iron-parts',
    });
  }

  // 4. Recuperator
  const recuperator = equipmentsData.find(e => e.id === 'recuperator');
  if (recuperator) {
    selected.push({
      id: recuperator.id,
      title: recuperator.title,
      category: 'Heat Recovery',
      description: recuperator.desc,
      image: recuperator.image,
      link: `/products/industrial-equipment/${recuperator.id}`,
    });
  }

  // 5. Super Castable
  const superCastable = refractoryProducts.find(r => r.id === 'super-castable');
  if (superCastable) {
    selected.push({
      id: superCastable.id,
      title: superCastable.name,
      category: 'Refractory Castables',
      description: superCastable.shortDescription,
      image: superCastable.image || '/images/refractory_hero.jpg',
      link: `/products/refractory-materials/${superCastable.id}`,
    });
  }

  // 6. Industrial Burner
  const burner = equipmentsData.find(e => e.id === 'industrial-burner');
  if (burner) {
    selected.push({
      id: burner.id,
      title: burner.title,
      category: 'Combustion Systems',
      description: burner.desc,
      image: burner.image,
      link: `/products/industrial-equipment/${burner.id}`,
    });
  }

  // 7. Refractory Burner Blocks
  const burnerBlocks = refractoryProducts.find(r => r.id === 'refractory-burner-blocks');
  if (burnerBlocks) {
    selected.push({
      id: burnerBlocks.id,
      title: burnerBlocks.name,
      category: 'Refractory Precast',
      description: burnerBlocks.shortDescription,
      image: burnerBlocks.image || '/images/refractory_hero.jpg',
      link: `/products/refractory-materials/${burnerBlocks.id}`,
    });
  }

  // 8. C.I Hanger
  const ciHanger = castIronData.find(c => c.id === 2);
  if (ciHanger) {
    selected.push({
      id: `ci-${ciHanger.id}`,
      title: ciHanger.title,
      category: 'Cast Iron Parts',
      description: ciHanger.desc,
      image: ciHanger.images[0],
      link: '/products/cast-iron-parts',
    });
  }

  // 9. Ceramic Fiber Blanket (64 & 96 Grade)
  const blanket = refractoryProducts.find(r => r.id === 'ceramic-fiber-blanket');
  if (blanket) {
    selected.push({
      id: blanket.id,
      title: blanket.name,
      category: 'Thermal Insulation',
      description: blanket.shortDescription,
      image: blanket.image || '/images/refractory_hero.jpg',
      link: `/products/refractory-materials/${blanket.id}`,
    });
  }

  // 10. Heating & Pumping Unit
  const pumpingUnit = equipmentsData.find(e => e.id === 'heating-pumping-unit');
  if (pumpingUnit) {
    selected.push({
      id: pumpingUnit.id,
      title: pumpingUnit.title,
      category: 'Combustion Systems',
      description: pumpingUnit.desc,
      image: pumpingUnit.image,
      link: `/products/industrial-equipment/${pumpingUnit.id}`,
    });
  }

  return selected;
};

const productsList = getSelectedProducts();
const marqueeProducts = [...productsList, ...productsList];

const ProductsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-white border-t border-b border-slate-200">
      {/* Subtle Blueprint Dot Grid Background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      
      <div className="w-full relative z-10">
        
        {/* Section Header */}
        <div className="container mx-auto px-5 sm:px-6 lg:px-24 flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <SectionTitle 
            subtitle="ENGINEERED CATALOG" 
            title="Featured Products & Components" 
            centered={false}
            className="mb-0"
          />
          <p className="text-slate-500 text-sm md:text-base max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            High-temperature refractory materials, turnkey reheating furnace assemblies, and custom-machined cast iron parts.
          </p>
        </div>

        {/* --- 3 CATEGORY NAVIGATION BOXES --- */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 mb-8 sm:mb-16">
          {/* Mobile View (< md): Sleek 3-column quick-nav micro-cards (space-saving single row) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:hidden">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  to={cat.link}
                  className="group relative flex flex-col items-center justify-between p-2.5 sm:p-3 bg-slate-50/90 hover:bg-white active:bg-amber-50/40 rounded-xl border border-slate-200/90 active:border-amber-500/50 shadow-2xs transition-all text-center min-h-[105px]"
                >
                  {/* Subtle amber accent bar */}
                  <div className="w-6 h-0.5 rounded-full bg-amber-500/40 mb-1" />

                  {/* Icon Area */}
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-[#D97706] shadow-2xs group-active:scale-95 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-[11px] sm:text-xs font-bold text-slate-900 leading-snug tracking-tight line-clamp-2 my-1">
                    {cat.title}
                  </h4>

                  {/* Micro Catalog Link */}
                  <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-mono font-semibold text-[#D97706] uppercase tracking-wider">
                    Catalog
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Desktop View (md+): Original full horizontal cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  to={cat.link}
                  className="group relative flex items-center gap-5 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-amber-500/40 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Icon Area */}
                  <div className="shrink-0 w-13 h-13 bg-white rounded-lg flex items-center justify-center border border-slate-200 group-hover:bg-[#090D16] group-hover:border-[#090D16] transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6 text-[#D97706] group-hover:text-amber-400 transition-colors" />
                  </div>

                  {/* Text Area */}
                  <div>
                    <h4 className="font-display text-base font-bold text-slate-900 group-hover:text-[#D97706] transition-colors duration-300 tracking-tight">
                      {cat.title}
                    </h4>
                    <p className="font-mono text-[11px] text-slate-400 font-semibold tracking-wider uppercase mt-1 inline-flex items-center gap-1.5 group-hover:text-[#D97706] transition-colors">
                      View Catalog
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* --- INFINITE SCROLLING MARQUEE CONTAINER --- */}
        <div className="relative w-full overflow-hidden py-4
          before:absolute before:left-0 before:top-0 before:h-full before:w-16 md:before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent before:z-20 
          after:absolute after:right-0 after:top-0 after:h-full after:w-16 md:after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent after:z-20"
        >
          {/* Scrolling Row */}
          <div className="animate-marquee flex gap-6 px-4">
            {marqueeProducts.map((prd, index) => (
              <div
                key={`${prd.id}-${index}`}
                className="group flex flex-col w-[280px] md:w-[320px] shrink-0 bg-white rounded-xl border border-slate-200 hover:border-amber-500/40 hover:shadow-xl hover:shadow-slate-900/10 overflow-hidden transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-44 md:h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={prd.image} 
                    alt={prd.title} 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                  {/* Category badge */}
                  <div className="absolute top-3.5 left-3.5 bg-[#090D16]/90 border border-white/15 text-[9px] font-mono font-bold text-amber-400 tracking-wider uppercase px-2.5 py-1 rounded shadow-xs z-15 backdrop-blur-sm">
                    {prd.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-[#D97706] transition-colors duration-300 mb-2 tracking-tight line-clamp-1">
                      {prd.title}
                    </h3>
                    <p className="font-ui text-slate-500 text-xs md:text-sm font-normal leading-relaxed line-clamp-2">
                      {prd.description}
                    </p>
                  </div>

                  {/* Explore Button */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                      to={prd.link}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#D97706] hover:text-[#090D16] transition-colors duration-300 group/btn"
                    >
                      Technical Specs
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;