// src/data/galleryData.ts

export type GalleryCategory = 'all' | 'furnaces' | 'refractories' | 'foundry' | 'automation';

export interface GalleryItem {
  id: number;
  imageNumber: number;
  url: string;
  mobileUrl?: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  badge: string;
  location: string;
  description: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export const galleryCategories: { id: GalleryCategory; label: string; count: number }[] = [
  { id: 'all', label: 'All Archives', count: 29 },
  { id: 'furnaces', label: 'Furnaces & Turnkey EPC', count: 8 },
  { id: 'refractories', label: 'Refractories & Kilns', count: 13 },
  { id: 'foundry', label: 'Foundry & Castings', count: 4 },
  { id: 'automation', label: 'SCADA & Electrical Panels', count: 4 },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageNumber: 1,
    url: '/images/Gallery/g1.webp',
    title: 'SCADA Automation Switchgear & Breaker Cabinet',
    category: 'automation',
    categoryLabel: 'Automation & SCADA',
    badge: 'Industrial Automation',
    location: 'Electrical Engineering Wing, Durgapur',
    description: 'Schneider Electric TeSys contactors, heavy-duty copper busbars, and automated protection circuitry for continuous reheat furnace operations.',
    aspect: 'portrait'
  },
  {
    id: 2,
    imageNumber: 2,
    url: '/images/Gallery/g2.webp',
    title: 'Multi-Zone PID Temperature Controller Console',
    category: 'automation',
    categoryLabel: 'Automation & SCADA',
    badge: 'Thermal Control',
    location: 'Instrumentation Control Lab',
    description: 'High-precision multi-loop digital temperature controllers and manual override switches for furnace zone heating regulation.',
    aspect: 'portrait'
  },
  {
    id: 3,
    imageNumber: 3,
    url: '/images/Gallery/g3.webp',
    title: 'Main Power Distribution & Busbar Chamber',
    category: 'automation',
    categoryLabel: 'Automation & SCADA',
    badge: 'Power Distribution',
    location: 'Electrical Switchyard Facility',
    description: 'Heavy 3-phase insulated copper busbar trunking and interlock control panels engineered for continuous industrial manufacturing duty.',
    aspect: 'portrait'
  },
  {
    id: 4,
    imageNumber: 4,
    url: '/images/Gallery/g4.webp',
    title: 'Industrial Motor Control Center (MCC) Panel',
    category: 'automation',
    categoryLabel: 'Automation & SCADA',
    badge: 'MCC Instrumentation',
    location: 'Factory Automation Floor',
    description: 'Centralized motor control center switchboard regulating combustion blower fans, pusher hydraulics, and mill feeding drives.',
    aspect: 'landscape'
  },
  {
    id: 5,
    imageNumber: 5,
    url: '/images/Gallery/g5.webp',
    title: 'Palletized High-Alumina Fire Bricks & Shapes',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Refractory Warehouse',
    location: 'Finished Goods Bay, Durgapur Plant',
    description: 'High-density Al₂O₃ refractory bricks strapped and shrink-wrapped on heavy wooden pallets ready for dispatch to steel rolling mills.',
    aspect: 'landscape'
  },
  {
    id: 6,
    imageNumber: 6,
    url: '/images/Gallery/g6.webp',
    title: 'Export-Grade Refractory Mortars (Make In India)',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Export Packaging',
    location: 'Global Logistics Hub',
    description: 'Reinforced corrugated carton packaging for international container dispatch, complying with DGFT and Bureau Veritas export standards.',
    aspect: 'portrait'
  },
  {
    id: 7,
    imageNumber: 7,
    url: '/images/Gallery/g7.webp',
    title: 'Refractory Brick Stacking & Curing Yard',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Production Staging',
    location: 'Primary Brick Kiln Yard',
    description: 'Sun-cured and kilned dense refractory shapes stacked for final batch hardness and thermal tolerance quality checks.',
    aspect: 'landscape'
  },
  {
    id: 8,
    imageNumber: 8,
    url: '/images/Gallery/g8.webp',
    title: 'Finished Refractory Blocks & Pallet Staging',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Dispatch Staging',
    location: 'Heavy Storage Bay',
    description: 'Bulk order staging of standard 9-inch straight bricks and precast refractory blocks for continuous reheat furnace maintenance.',
    aspect: 'landscape'
  },
  {
    id: 9,
    imageNumber: 9,
    url: '/images/Gallery/g9.webp',
    title: 'Main Refractory Plant & Production Floor',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Manufacturing Hub',
    location: 'Paragon Refractories Main Plant',
    description: 'Comprehensive view of our refractory production floor featuring hydraulic friction presses, pallet staging bays, and brick stacks.',
    aspect: 'landscape'
  },
  {
    id: 10,
    imageNumber: 10,
    url: '/images/Gallery/g10.webp',
    title: 'Precision Arch & Wedge Refractory Assembly',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Bespoke Shapes',
    location: 'Quality Inspection Section',
    description: 'Tapered wedge and key bricks engineered for curved furnace roofs, reheat furnace discharge doors, and ladle linings.',
    aspect: 'landscape'
  },
  {
    id: 11,
    imageNumber: 11,
    url: '/images/Gallery/g11.webp',
    title: 'Dense Fireclay & High-Alumina Brick Inventory',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Raw Material & Stock',
    location: 'Storage Yard 2',
    description: 'Stockpile of high-duty fireclay bricks engineered for 1450°C to 1750°C operating envelopes in reheating furnaces.',
    aspect: 'landscape'
  },
  {
    id: 12,
    imageNumber: 12,
    url: '/images/Gallery/g12.webp',
    title: 'Specialty Refractory Runner Shapes & Inserts',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Foundry Refractories',
    location: 'Molding Section',
    description: 'Engineered bottom-pouring runner tiles, trumpet bricks, and nozzle refractory assemblies for molten steel casting.',
    aspect: 'portrait'
  },
  {
    id: 13,
    imageNumber: 13,
    url: '/images/Gallery/g13.webp',
    title: 'Interlocking Tongue-and-Groove Runner Inspection',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Quality Control',
    location: 'Metrology & QA Bay',
    description: 'Dimensional verification with precision tape measure on interlocking tongue-and-groove refractory runner tiles ensuring exact joint tightness.',
    aspect: 'portrait'
  },
  {
    id: 14,
    imageNumber: 14,
    url: '/images/Gallery/g14.webp',
    title: 'Precast Burner Blocks & Monolithic Shapes',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Precast Engineering',
    location: 'Monolithic Casting Department',
    description: 'Pre-fired burner quarl blocks formulated with low-cement castables for high-velocity gas burners in reheat furnaces.',
    aspect: 'landscape'
  },
  {
    id: 15,
    imageNumber: 15,
    url: '/images/Gallery/g15.webp',
    title: 'High-Temperature Monolithic Castables Pallets',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Castable Inventory',
    location: 'Dry Mixing Facility',
    description: 'Bags of dense and insulating castables packaged with moisture-barrier film for on-site refractory monolithic furnace relining.',
    aspect: 'landscape'
  },
  {
    id: 16,
    imageNumber: 16,
    url: '/images/Gallery/g16.webp',
    title: 'Refractory Furnace Lining Bricks Batch',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Batch Certification',
    location: 'Outbound Logistics Yard',
    description: 'Pre-inspected consignment of high-alumina bricks tagged with heat numbers and laboratory test certificates for steel mill clients.',
    aspect: 'portrait'
  },
  {
    id: 17,
    imageNumber: 17,
    url: '/images/Gallery/g17.webp',
    mobileUrl: '/images/Gallery/g17 mob.webp',
    title: 'Walking Beam Reheating Furnace Burner Manifold',
    category: 'furnaces',
    categoryLabel: 'Furnaces & Turnkey EPC',
    badge: 'Continuous Furnace',
    location: 'Steel Rolling Mill Project Site',
    description: 'Multi-burner continuous walking beam reheating furnace featuring automated combustion air piping, fuel gas headers, and mechanical skid drives.',
    aspect: 'landscape'
  },
  {
    id: 18,
    imageNumber: 18,
    url: '/images/Gallery/g18.webp',
    mobileUrl: '/images/Gallery/g18 mob.webp',
    title: 'Turnkey Reheat Furnace & Gas Piping Installation',
    category: 'furnaces',
    categoryLabel: 'Furnaces & Turnkey EPC',
    badge: 'Turnkey EPC',
    location: 'Integrated Rolling Mill Facility',
    description: 'Fully commissioned industrial reheat furnace complete with yellow-coded fuel gas lines, silver air preheaters, and automated billet delivery roll table.',
    aspect: 'landscape'
  },
  {
    id: 19,
    imageNumber: 19,
    url: '/images/Gallery/g19.webp',
    title: 'Billet Charging Table & Hydraulic Pusher Section',
    category: 'furnaces',
    categoryLabel: 'Furnaces & Turnkey EPC',
    badge: 'Mechanical Engineering',
    location: 'Rolling Mill Charging End',
    description: 'Heavy structural steel charging bed and hydraulic pusher mechanism engineered for continuous 24/7 billet feeding into reheat furnace.',
    aspect: 'landscape'
  },
  {
    id: 20,
    imageNumber: 20,
    url: '/images/Gallery/g20.webp',
    title: 'Metallic Recuperator & Flue Gas Ducting System',
    category: 'furnaces',
    categoryLabel: 'Furnaces & Turnkey EPC',
    badge: 'Energy Recovery',
    location: 'Waste Heat Recovery Unit',
    description: 'High-efficiency thermal recuperator exchanging waste flue heat to preheat combustion air up to 450°C, cutting fuel consumption by ~18%.',
    aspect: 'landscape'
  },
  {
    id: 21,
    imageNumber: 21,
    url: '/images/Gallery/g21.webp',
    title: 'Bureau Veritas Certified Export Shipment (Shoulder Bricks)',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Global Certification',
    location: 'Export Quarantine & QA Bay',
    description: 'Bureau Veritas inspected pallet of 115mm shoulder bricks tagged with official security seal tape for international maritime shipment.',
    aspect: 'landscape'
  },
  {
    id: 22,
    imageNumber: 22,
    url: '/images/Gallery/g22.webp',
    title: 'Furnace Hearth Refractory Relining in Progress',
    category: 'furnaces',
    categoryLabel: 'Furnaces & Turnkey EPC',
    badge: 'Field Engineering',
    location: 'Client Plant Overhaul Site',
    description: 'On-site execution of high-alumina refractory brick masonry and low-cement castable ramming across the furnace soaking zone.',
    aspect: 'landscape'
  },
  {
    id: 23,
    imageNumber: 23,
    url: '/images/Gallery/g23.webp',
    title: 'Heavy Structural Steel Furnace Shell Fabrication',
    category: 'furnaces',
    categoryLabel: 'Furnaces & Turnkey EPC',
    badge: 'Heavy Fabrication',
    location: 'Structural Workshop',
    description: 'Fabrication of heavy reinforced steel furnace casing with stiffeners, expansion joints, and burner mounting flanges.',
    aspect: 'portrait'
  },
  {
    id: 24,
    imageNumber: 24,
    url: '/images/Gallery/g24.webp',
    title: 'Heavy Mill Machinery Fabrication & Slag Hopper',
    category: 'furnaces',
    categoryLabel: 'Furnaces & Turnkey EPC',
    badge: 'Plant Equipment',
    location: 'Heavy Engineering Bay',
    description: 'Shop fabrication and dimensional inspection of thermal expansion tanks and steel mill slag handling components.',
    aspect: 'portrait'
  },
  {
    id: 25,
    imageNumber: 25,
    url: '/images/Gallery/g25.webp',
    title: 'Heat-Resistant Cast Iron Skid Riders & Wear Plates',
    category: 'foundry',
    categoryLabel: 'Foundry & Metallurgy',
    badge: 'Foundry Castings',
    location: 'Foundry Machine Shop',
    description: 'High-chromium nickel alloy skid riders engineered to withstand extreme sliding friction and furnace temperatures exceeding 1250°C.',
    aspect: 'portrait'
  },
  {
    id: 26,
    imageNumber: 26,
    url: '/images/Gallery/g26.webp',
    title: 'Walking Beam Furnace Skid Pipe & Roller Assembly',
    category: 'furnaces',
    categoryLabel: 'Furnaces & Turnkey EPC',
    badge: 'Hearth Assembly',
    location: 'Mechanical Assembly Yard',
    description: 'Water-cooled skid pipe headers insulated with refractory rider blocks for continuous walking beam billet transport.',
    aspect: 'landscape'
  },
  {
    id: 27,
    imageNumber: 27,
    url: '/images/Gallery/g27.webp',
    title: 'High-Cr Ni Alloy Furnace Rollers & Dampers',
    category: 'foundry',
    categoryLabel: 'Foundry & Metallurgy',
    badge: 'Alloy Metallurgy',
    location: 'Foundry Finishing Department',
    description: 'Precision-machined heat-resistant cast iron rollers, combustion dampers, and charging doors for reheating furnaces.',
    aspect: 'portrait'
  },
  {
    id: 28,
    imageNumber: 28,
    url: '/images/Gallery/g28.webp',
    mobileUrl: '/images/Gallery/g28 mob.webp',
    title: 'Heavy Foundry Yard & Cupola Furnace Facility',
    category: 'foundry',
    categoryLabel: 'Foundry & Metallurgy',
    badge: 'Foundry Division',
    location: 'Paragon Foundry Division, West Bengal',
    description: 'Open foundry yard displaying our melting cupola furnace tower, overhead gantry crane, and piles of heavy heat-resistant cast iron components.',
    aspect: 'landscape'
  },
  {
    id: 29,
    imageNumber: 29,
    url: '/images/Gallery/g29.webp',
    mobileUrl: '/images/Gallery/g29 mob.webp',
    title: 'Down-Draft Beehive Kilns for High-Fired Refractories',
    category: 'refractories',
    categoryLabel: 'Refractory Materials',
    badge: 'Thermal Kilns',
    location: 'Paragon Kiln Operations, Durgapur',
    description: 'Traditional down-draft round beehive kilns with central brick exhaust chimney used for high-temperature soaking of dense refractory fire bricks.',
    aspect: 'landscape'
  }
];
