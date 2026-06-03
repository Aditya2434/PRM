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
    link: '/products/refractory-materials',
    icon: Flame,
  },
  {
    id: 'equipments',
    title: 'Industrial Equipments',
    link: '/products/industrial-equipment',
    icon: Cpu,
  },
  {
    id: 'cast-iron',
    title: 'Cast Iron Parts',
    link: '/products/cast-iron-parts',
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
    <section className="py-24 relative overflow-hidden bg-[#fbfbfa] border-t border-b border-gray-100">
      {/* Subtle Blueprint Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e0_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />
      
      {/* Decorative Blueprint Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-gray-200 pointer-events-none opacity-40">
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-gray-400 tracking-wider">SEC-PRD v2.2</div>
      </div>
      
      <div className="w-full relative z-10">
        
        {/* Section Header (Sticks to Container Padding) */}
        <div className="container mx-auto px-6 lg:px-24 flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionTitle 
            subtitle="OUR CATALOG" 
            title="Featured Products & Components" 
            centered={false}
            className="mb-0"
          />
          <p className="text-gray-500 text-sm md:text-base max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Quickly browse our core industrial solutions. Select a category below or explore the sliding catalog of actual products.
          </p>
        </div>

        {/* --- 3 CATEGORY NAVIGATION BOXES --- */}
        <div className="container mx-auto px-6 lg:px-24 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  to={cat.link}
                  className="group relative flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_30px_-6px_rgba(30,58,95,0.08)] hover:border-[#e63946]/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Decorative background grid line */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gray-100 rounded-tr-2xl group-hover:border-[#e63946]/20 transition-colors pointer-events-none" />

                  {/* Icon Area */}
                  <div className="shrink-0 w-14 h-14 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center border border-[#1e3a5f]/10 group-hover:bg-[#e63946] group-hover:border-[#e63946] transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors" />
                  </div>

                  {/* Text Area */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-[#1e3a5f] group-hover:text-[#e63946] transition-colors duration-300 tracking-tight">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-medium tracking-wider uppercase mt-1.5 inline-flex items-center gap-1.5">
                      Browse Category
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
          before:absolute before:left-0 before:top-0 before:h-full before:w-16 md:before:w-32 before:bg-gradient-to-r before:from-[#fbfbfa] before:to-transparent before:z-20 
          after:absolute after:right-0 after:top-0 after:h-full after:w-16 md:after:w-32 after:bg-gradient-to-l after:from-[#fbfbfa] after:to-transparent after:z-20"
        >
          {/* Scrolling Row */}
          <div className="animate-marquee flex gap-6 px-4">
            {marqueeProducts.map((prd, index) => (
              <div
                key={`${prd.id}-${index}`}
                className="group flex flex-col w-[280px] md:w-[320px] shrink-0 bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(30,58,95,0.1)] hover:border-[#e63946]/30 overflow-hidden transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-44 md:h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={prd.image} 
                    alt={prd.title} 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

                  {/* Corner Accent Brackets */}
                  <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-[#e63946] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[#e63946] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#e63946] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#e63946] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Mini category badge */}
                  <div className="absolute top-4 left-4 bg-[#1e3a5f]/90 border border-white/10 text-[9px] font-bold text-[#e63946] tracking-widest uppercase px-2 py-0.5 rounded shadow z-15">
                    {prd.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#1e3a5f] group-hover:text-[#e63946] transition-colors duration-300 mb-2 tracking-tight line-clamp-1">
                      {prd.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed line-clamp-2">
                      {prd.description}
                    </p>
                  </div>

                  {/* Explore Button */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link 
                      to={prd.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e63946] hover:text-[#1e3a5f] transition-colors duration-300 group/btn"
                    >
                      Explore Details
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