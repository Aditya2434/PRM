// src/data/refractoryProducts.ts

export interface RefractoryProduct {
  id: string; 
  name: string;
  subtitle?: string;
  category: 'High Alumina' | 'Castables' | 'Insulating' | 'Special';
  image?: string;          // Made optional for products without images
  gallery?: string[];      // NEW: Added to support 2nd, 3rd, 4th images
  shortDescription: string;
  longDescription?: string[];
  detailedSpecs?: { label: string; value: string }[];
  tableSpecs?: { headers: string[]; rows: string[][] }; 
  features?: string[];
  applications?: string[];
  specs: {
    maxTemp: string;
    density: string;
    thermalConductivity?: string;
  };
}

export const refractoryProducts: RefractoryProduct[] = [
  // --- HIGH ALUMINA CATEGORY --- //
  {
    id: 'high-alumina-brick-80',
    name: 'High Alumina Bricks 80%',
    subtitle: 'Standard',
    category: 'High Alumina',
    image: '/images/refractory/High Alumina.webp',
    shortDescription: 'Ultra high-performance refractory bricks engineered for extreme temperature applications requiring superior strength and resistance.',
    longDescription: [
      "High Alumina Bricks 80% are ultra high-performance refractory bricks engineered for extreme temperature applications requiring superior strength, thermal stability, and resistance to chemical attack. With very high alumina content, these bricks deliver exceptional durability and long service life in critical furnace zones.",
      "We are a trusted High Alumina Bricks manufacturer and supplier in India, offering premium-grade refractory solutions at competitive factory pricing with bulk supply and customization."
    ],
    specs: { maxTemp: '1800°C', density: '2.6 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ Content", value: "≥ 80%" },
      { label: "Fe₂O₃", value: "≤ 1.5%" },
      { label: "Bulk Density", value: "≥ 2.6 – 2.7 g/cm³" },
      { label: "Apparent Porosity", value: "≤ 21%" },
      { label: "Cold Crushing Strength", value: "≥ 55 – 60 MPa" },
      { label: "Refractoriness", value: "≥ 1800°C" },
      { label: "RUL @ 0.2 MPa", value: "≥ 1520°C" },
      { label: "Standard Size", value: "230 × 115 × 65 mm" },
      { label: "Shapes", value: "Standard, Arch, Wedge, Key, Custom shapes available" },
    ],
    features: [
      "Excellent performance in ultra high temperatures (1800°C+)",
      "High resistance to slag, corrosion, and chemical attack",
      "Superior mechanical strength and load-bearing capacity",
      "Low porosity for enhanced durability",
      "Long service life in critical furnace zones",
      "Consistent quality and dimensional accuracy"
    ],
    applications: [
      "Steel & Iron Industry Furnaces",
      "Blast Furnace & Hot Blast Stove",
      "Cement Rotary Kilns (burning zone)",
      "Glass Furnaces",
      "Petrochemical & Chemical Industries",
      "High-temperature industrial linings"
    ]
  },
  {
    id: 'high-alumina-brick-70',
    name: 'High Alumina Bricks 70%',
    subtitle: 'Standard',
    category: 'High Alumina',
    image: '/images/refractory/High Alumina.webp',
    gallery: ['/images/refractory/70 Stock.webp'],
    shortDescription: 'Premium-quality refractory bricks designed for superior performance in high-temperature industrial applications.',
    longDescription: [
      "High Alumina Bricks 70% are premium-quality refractory bricks designed for superior performance in high-temperature industrial applications. With high alumina content, these bricks provide excellent thermal stability, high mechanical strength, and long service life under extreme operating conditions.",
      "We are a leading High Alumina Bricks manufacturer and supplier in India, offering high-performance refractory solutions at competitive factory pricing with consistent quality and customization options."
    ],
    specs: { maxTemp: '1770°C', density: '2.3 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ Content", value: "≥ 70%" },
      { label: "Fe₂O₃", value: "≤ 2.0%" },
      { label: "Bulk Density", value: "≥ 2.3 g/cm³" },
      { label: "Apparent Porosity", value: "≤ 23%" },
      { label: "Cold Crushing Strength", value: "≥ 45 MPa" },
      { label: "Refractoriness", value: "≥ 1770°C" },
      { label: "RUL @ 0.2 MPa", value: "≥ 1480°C" },
      { label: "Standard Size", value: "230 × 115 × 65 mm" },
      { label: "Shapes", value: "Standard, Arch, Wedge, Key, Custom shapes available" },
    ],
    features: [
      "High temperature resistance up to 1700°C+",
      "Excellent thermal shock resistance",
      "Strong mechanical strength and load-bearing capacity",
      "High resistance to slag and abrasion",
      "Long operational life in industrial furnaces",
      "Uniform composition and precise dimensions"
    ],
    applications: [
      "Reheating Furnace Linings",
      "Steel & Iron Industry Furnaces",
      "Cement Rotary Kilns",
      "Glass Furnaces",
      "Petrochemical Plants",
      "Boilers & High Temperature Zones"
    ]
  },
  {
    id: 'high-alumina-brick-60',
    name: 'High Alumina Bricks 60%',
    subtitle: 'Standard',
    category: 'High Alumina',
    image: '/images/refractory/High Alumina.webp',
    shortDescription: 'High-quality refractory bricks designed for medium to high-temperature applications, offering a balance of thermal stability and strength.',
    longDescription: [
      "High Alumina Bricks 60% are high-quality refractory bricks designed for medium to high-temperature applications, offering a balance of thermal stability, strength, and cost efficiency. These bricks are widely used in industrial furnaces requiring reliable performance and durability.",
      "We are a reliable High Alumina Bricks manufacturer and supplier in India, delivering consistent quality refractory products at competitive pricing."
    ],
    specs: { maxTemp: '1750°C', density: '2.2 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ Content", value: "≥ 60%" },
      { label: "Fe₂O₃", value: "≤ 2.0%" },
      { label: "Bulk Density", value: "≥ 2.2 g/cm³" },
      { label: "Apparent Porosity", value: "≤ 23%" },
      { label: "Cold Crushing Strength", value: "≥ 40 – 45 MPa" },
      { label: "Refractoriness", value: "≥ 1750°C" },
      { label: "RUL @ 0.2 MPa", value: "≥ 1450°C" },
      { label: "Standard Size", value: "230 × 115 × 65 mm" },
      { label: "Shapes", value: "Standard, Arch, Wedge, Key, Custom shapes available" },
    ],
    features: [
      "Good thermal stability and heat resistance",
      "Reliable strength under continuous operation",
      "Cost-effective refractory solution",
      "Resistance to thermal shock and abrasion",
      "Suitable for general-purpose furnace applications",
      "Uniform composition and quality"
    ],
    applications: [
      "Reheating Furnaces",
      "Steel & Iron Industries",
      "Cement Plants",
      "Boilers & Kilns",
      "Glass & Ceramic Industries",
      "General industrial furnace linings"
    ]
  },
  {
    id: 'high-alumina-brick-50',
    name: 'High Alumina Bricks 50%',
    subtitle: 'Standard',
    category: 'High Alumina',
    image: '/images/refractory/High Alumina.webp',
    shortDescription: 'Durable and cost-effective refractory bricks designed for moderate temperature applications providing reliable performance.',
    longDescription: [
      "High Alumina Bricks 50% are durable and cost-effective refractory bricks designed for moderate temperature applications. These bricks provide good thermal resistance, structural strength, and reliable performance in standard industrial furnace conditions.",
      "We are a trusted High Alumina Bricks manufacturer and supplier in India, offering quality refractory products suitable for a wide range of industrial uses."
    ],
    specs: { maxTemp: '1700°C', density: '2.0 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ Content", value: "≥ 50%" },
      { label: "Fe₂O₃", value: "≤ 2.5%" },
      { label: "Bulk Density", value: "≥ 2.0 – 2.1 g/cm³" },
      { label: "Apparent Porosity", value: "≤ 24%" },
      { label: "Cold Crushing Strength", value: "≥ 35 – 40 MPa" },
      { label: "Refractoriness", value: "≥ 1700°C" },
      { label: "RUL @ 0.2 MPa", value: "≥ 1400°C" },
      { label: "Standard Size", value: "230 × 115 × 65 mm" },
      { label: "Shapes", value: "Standard, Arch, Wedge, Key, Custom shapes available" },
    ],
    features: [
      "Economical refractory solution",
      "Good resistance to moderate temperatures",
      "Stable performance in standard applications",
      "Decent mechanical strength and durability",
      "Suitable for backup and general lining use",
      "Consistent quality and supply"
    ],
    applications: [
      "Reheating Furnaces",
      "Backup Lining Applications",
      "Steel & Foundry Industries",
      "Boilers and Kilns",
      "Ceramic Industries",
      "General-purpose refractory use"
    ]
  },
  {
    id: 'is-8-fire-bricks',
    name: 'IS-8 Fire Bricks',
    subtitle: 'Standard',
    category: 'High Alumina',
    image: '', // Image removed
    shortDescription: 'High-grade super duty refractory bricks designed for high-temperature applications requiring superior strength and stability.',
    longDescription: [
      "IS-8 Fire Bricks are high-grade super duty refractory bricks manufactured as per Indian Standards, designed for high-temperature industrial applications requiring superior strength, thermal stability, and resistance to slag and abrasion. These bricks are ideal for critical zones in furnaces where performance and durability are essential.",
      "We are a leading IS-8 Fire Bricks manufacturer and supplier in India, offering consistent quality, competitive pricing, and bulk supply capabilities."
    ],
    specs: { maxTemp: '1750°C', density: '2.0 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ Content", value: "~38 – 40%" },
      { label: "Fe₂O₃", value: "≤ 2.5%" },
      { label: "Bulk Density", value: "≥ 2.0 g/cm³" },
      { label: "Apparent Porosity", value: "≤ 22%" },
      { label: "Cold Crushing Strength", value: "≥ 40 MPa" },
      { label: "Refractoriness", value: "≥ 1750°C" },
      { label: "RUL @ 0.2 MPa", value: "≥ 1400°C" },
      { label: "Standard Size", value: "230 × 115 × 65 mm" },
      { label: "Shapes", value: "Standard, Arch, Wedge, Key, Custom shapes available" },
    ],
    features: [
      "Suitable for high-temperature applications",
      "Good resistance to slag and abrasion",
      "Strong mechanical strength",
      "Stable performance under load conditions",
      "Long service life in industrial furnaces",
      "Uniform quality and dimensional accuracy"
    ],
    applications: [
      "Reheating Furnaces",
      "Steel & Iron Industry",
      "Cement Kilns",
      "Glass Furnaces",
      "Boilers and High Temperature Zones",
      "General furnace lining applications"
    ]
  },
  {
    id: 'is-6-fire-bricks',
    name: 'IS-6 Fire Bricks',
    subtitle: 'Standard',
    category: 'High Alumina',
    image: '', // Image removed
    shortDescription: 'High duty refractory bricks designed for medium to high-temperature applications providing reliable thermal performance.',
    longDescription: [
      "IS-6 Fire Bricks are high duty refractory bricks designed for medium to high-temperature industrial applications. These bricks provide reliable thermal performance, good strength, and cost-effective furnace lining solutions for a wide range of industries.",
      "We are a reliable IS-6 Fire Bricks manufacturer and supplier in India, delivering consistent quality refractory products suitable for industrial use."
    ],
    specs: { maxTemp: '1700°C', density: '1.9 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ Content", value: "~30 – 35%" },
      { label: "Fe₂O₃", value: "≤ 2.5%" },
      { label: "Bulk Density", value: "≥ 1.9 – 2.0 g/cm³" },
      { label: "Apparent Porosity", value: "≤ 24%" },
      { label: "Cold Crushing Strength", value: "≥ 30 – 35 MPa" },
      { label: "Refractoriness", value: "≥ 1700°C" },
      { label: "RUL @ 0.2 MPa", value: "≥ 1350°C" },
      { label: "Standard Size", value: "230 × 115 × 65 mm" },
      { label: "Shapes", value: "Standard, Arch, Wedge, Key, Custom shapes available" },
    ],
    features: [
      "Reliable performance in medium-temperature applications",
      "Cost-effective refractory solution",
      "Good thermal stability and resistance to wear",
      "Adequate strength for general furnace use",
      "Consistent quality and supply",
      "Suitable for backup and working linings"
    ],
    applications: [
      "Reheating Furnaces",
      "Boilers and Kilns",
      "Steel & Foundry Industries",
      "Ceramic Industries",
      "Backup lining applications",
      "General industrial furnace use"
    ]
  },
  {
    id: 'hanger-bricks',
    name: 'High Alumina Hanger Bricks',
    category: 'High Alumina',
    image: '/images/refractory/Hanger Brick.webp',
    gallery: [
      '/images/refractory/Hanger Shoulder.webp', 
      '/images/refractory/Hanger Stock.webp'
    ],
    shortDescription: 'Specially designed refractory bricks used in suspended furnace roofs and lining systems.',
    longDescription: [
      "Hanger Bricks are specially designed refractory bricks used in suspended furnace roofs and lining systems, where bricks are supported by metallic anchors or hanger systems. These bricks are engineered for high mechanical strength, thermal stability, and resistance to deformation under suspended load conditions.",
      "We are a leading Hanger Bricks manufacturer and supplier in India, offering 50%, 60%, and 70% High Alumina Hanger Bricks suitable for various temperature ranges and furnace conditions.",
      "Shapes & Customization: Available in standard and customized hanger shapes with slot/groove designs as per the anchor system. We provide tailor-made, pre-engineered bricks based on exact furnace drawings to ensure seamless installation."
    ],
    specs: { maxTemp: '1770°C', density: '2.3 g/cm³' },
    tableSpecs: {
      headers: ["Properties", "50% Grade", "60% Grade", "70% Grade"],
      rows: [
        ["Al₂O₃ (%)", "≥ 50", "≥ 60", "≥ 70"],
        ["Fe₂O₃ (%)", "≤ 2.5", "≤ 2.0", "≤ 2.0"],
        ["Bulk Density (g/cm³)", "≥ 2.0", "≥ 2.2", "≥ 2.3"],
        ["Apparent Porosity (%)", "≤ 24", "≤ 23", "≤ 23"],
        ["Cold Crushing Strength (MPa)", "≥ 35", "≥ 40", "≥ 45"],
        ["Refractoriness (°C)", "≥ 1700", "≥ 1750", "≥ 1770"],
        ["RUL @ 0.2 MPa (°C)", "≥ 1400", "≥ 1450", "≥ 1480"]
      ]
    },
    features: [
      "High load-bearing capacity in suspended conditions",
      "Resistance to thermal shock and mechanical stress",
      "Excellent dimensional accuracy for proper anchoring",
      "Low deformation at high temperatures",
      "Long operational life in continuous furnace operations",
      "Suitable for critical roof applications"
    ],
    applications: [
      "Reheating Furnace Roofs",
      "Walking Beam Furnaces",
      "Heat Treatment Furnaces",
      "Steel & Iron Industry Furnaces",
      "Petrochemical Furnaces",
      "Industrial Kilns and Suspended Linings"
    ]
  },
  {
    id: 'shoulder-bricks',
    name: 'High Alumina Shoulder Bricks',
    category: 'High Alumina',
    image: '/images/refractory/shoulder.webp',
    gallery: [
      '/images/refractory/Hanger Shoulder.webp', 
      '/images/refractory/Shoulder Stock.webp'
    ],
    shortDescription: 'Engineered for furnace arches and transition zones to provide critical structural support and load distribution.',
    longDescription: [
      "Shoulder Bricks are specially designed refractory bricks used in furnace arches, roofs, and transition zones, where structural support and load distribution are critical. These bricks help maintain the integrity of furnace linings by supporting adjacent refractory shapes and ensuring stability under high-temperature conditions.",
      "We are a leading Shoulder Bricks manufacturer and supplier in India, offering 50%, 60%, and 70% High Alumina Shoulder Bricks suitable for various industrial furnace applications.",
      "Shapes & Customization: Standard shoulder brick designs including arch support and interlocking shapes. Custom-engineered and manufactured strictly as per your furnace layout and engineering specifications."
    ],
    specs: { maxTemp: '1770°C', density: '2.3 g/cm³' },
    tableSpecs: {
      headers: ["Properties", "50% Grade", "60% Grade", "70% Grade"],
      rows: [
        ["Al₂O₃ (%)", "≥ 50", "≥ 60", "≥ 70"],
        ["Fe₂O₃ (%)", "≤ 2.5", "≤ 2.0", "≤ 2.0"],
        ["Bulk Density (g/cm³)", "≥ 2.0", "≥ 2.2", "≥ 2.3"],
        ["Apparent Porosity (%)", "≤ 24", "≤ 23", "≤ 23"],
        ["Cold Crushing Strength (MPa)", "≥ 35", "≥ 40", "≥ 45"],
        ["Refractoriness (°C)", "≥ 1700", "≥ 1750", "≥ 1770"],
        ["RUL @ 0.2 MPa (°C)", "≥ 1400", "≥ 1450", "≥ 1480"]
      ]
    },
    features: [
      "High load-bearing capacity for arch and roof structures",
      "Excellent resistance to thermal stress and cracking",
      "Maintains structural integrity under continuous operation",
      "Accurate dimensions for tight jointing and stability",
      "Long service life in high-temperature environments",
      "Suitable for critical furnace zones"
    ],
    applications: [
      "Furnace Arches and Roof Structures",
      "Reheating Furnaces",
      "Steel & Iron Industry Furnaces",
      "Cement Kilns",
      "Glass Furnaces",
      "Industrial Kilns and High Temperature Zones"
    ]
  },
  {
    id: 'side-arch-bricks',
    name: 'Side Arch Bricks',
    category: 'High Alumina',
    image: '', // Image removed
    shortDescription: 'Refractory shapes used in furnace side walls to support curved linings and distribute arch loads.',
    longDescription: [
      "Side Arch Bricks are specially engineered refractory shapes used in furnace side walls and arch structures, designed to support curved linings and maintain structural integrity under high-temperature conditions. These bricks play a critical role in distributing load and ensuring stability in arch formations of industrial furnaces.",
      "We are a leading Side Arch Bricks manufacturer and supplier in India, offering a complete range of IS-6, IS-8, 50%, 60%, and 70% High Alumina Side Arch Bricks, suitable for various temperature zones and furnace designs.",
      "Shapes & Customization: Featuring wedge-shaped and side arch taper designs with precise angles. We offer custom manufacturing compatible with various arch radii and layouts based on your architectural drawings."
    ],
    specs: { maxTemp: '1770°C', density: '2.3 g/cm³' },
    tableSpecs: {
      headers: ["Properties", "IS-6", "IS-8", "50% Grade", "60% Grade", "70% Grade"],
      rows: [
        ["Al₂O₃ (%)", "30–35", "38–42", "≥ 50", "≥ 60", "≥ 70"],
        ["Fe₂O₃ (%)", "≤ 2.5", "≤ 2.5", "≤ 2.5", "≤ 2.0", "≤ 2.0"],
        ["Bulk Density (g/cm³)", "1.9 – 2.0", "2.0 – 2.2", "≥ 2.0", "≥ 2.2", "≥ 2.3"],
        ["Apparent Porosity (%)", "22 – 26", "20 – 24", "≤ 24", "≤ 23", "≤ 23"],
        ["Cold Crushing Strength (MPa)", "25 – 35", "35 – 45", "≥ 35", "≥ 40", "≥ 45"],
        ["Refractoriness (°C)", "≥ 1700", "≥ 1750", "≥ 1700", "≥ 1750", "≥ 1770"],
        ["RUL @ 0.2 MPa (°C)", "1300 – 1350", "1350 – 1400", "≥ 1400", "≥ 1450", "≥ 1480"]
      ]
    },
    features: [
      "Designed for stable arch construction and load distribution",
      "High resistance to thermal stress and deformation",
      "Excellent dimensional accuracy for tight arch fitting",
      "Strong mechanical strength for long-term durability",
      "Suitable for both moderate and high-temperature zones",
      "Reliable performance in continuous furnace operations"
    ],
    applications: [
      "Reheating Furnace Side Arches",
      "Furnace Roof & Wall Arch Sections",
      "Steel & Iron Industry Furnaces",
      "Cement Kilns",
      "Glass Furnaces",
      "Industrial Kilns and Thermal Processing Units"
    ]
  },
  {
    id: 'end-arch-bricks',
    name: 'End Arch Bricks',
    category: 'High Alumina',
    image: '', // Image removed
    shortDescription: 'Used at the end sections of furnace arches where structural locking and load transfer are vital.',
    longDescription: [
      "End Arch Bricks are specially designed refractory shapes used at the end sections of furnace arches, where structural locking, load transfer, and stability are critical. These bricks play a key role in maintaining the integrity of arch formations by properly distributing stress and ensuring tight interlocking at arch ends.",
      "We are a leading End Arch Bricks manufacturer and supplier in India, offering a complete range of IS-6, IS-8, 50%, 60%, and 70% High Alumina End Arch Bricks, suitable for different furnace temperatures and operating conditions.",
      "Shapes & Customization: End wedge and locking brick designs cut at precise angles. Designed for proper stress distribution and fitment, custom manufactured strictly to your architectural requirements."
    ],
    specs: { maxTemp: '1770°C', density: '2.3 g/cm³' },
    tableSpecs: {
      headers: ["Properties", "IS-6", "IS-8", "50% Grade", "60% Grade", "70% Grade"],
      rows: [
        ["Al₂O₃ (%)", "30–35", "38–42", "≥ 50", "≥ 60", "≥ 70"],
        ["Fe₂O₃ (%)", "≤ 2.5", "≤ 2.5", "≤ 2.5", "≤ 2.0", "≤ 2.0"],
        ["Bulk Density (g/cm³)", "1.9 – 2.0", "2.0 – 2.2", "≥ 2.0", "≥ 2.2", "≥ 2.3"],
        ["Apparent Porosity (%)", "22 – 26", "20 – 24", "≤ 24", "≤ 23", "≤ 23"],
        ["Cold Crushing Strength (MPa)", "25 – 35", "35 – 45", "≥ 35", "≥ 40", "≥ 45"],
        ["Refractoriness (°C)", "≥ 1700", "≥ 1750", "≥ 1700", "≥ 1750", "≥ 1770"],
        ["RUL @ 0.2 MPa (°C)", "1300 – 1350", "1350 – 1400", "≥ 1400", "≥ 1450", "≥ 1480"]
      ]
    },
    features: [
      "Critical for arch end locking and stability",
      "High load-bearing capacity under thermal stress",
      "Excellent resistance to deformation and cracking",
      "Accurate dimensions for proper arch alignment",
      "Long service life in high-temperature operations",
      "Suitable for both medium and high-duty furnace zones"
    ],
    applications: [
      "Reheating Furnace End Arches",
      "Furnace Roof Arch Termination Zones",
      "Steel & Iron Industry Furnaces",
      "Cement Kilns",
      "Glass Furnaces",
      "Industrial Kilns and Thermal Units"
    ]
  },
  {
    id: 'refractory-burner-blocks',
    name: 'Refractory Burner Blocks',
    category: 'High Alumina',
    image: '', // Image removed
    shortDescription: 'Specially engineered refractory shapes designed to withstand direct flame exposure and severe operating conditions.',
    longDescription: [
      "Burner Blocks are specially engineered refractory shapes designed to withstand direct flame exposure, high thermal shock, and severe operating conditions in industrial furnaces. These blocks are installed around burner nozzles to ensure proper flame shaping, heat distribution, and protection of furnace linings.",
      "We are a leading Burner Block manufacturer and supplier in India, offering all sizes and custom-designed burner blocks made from high alumina and low cement castable (LCC) materials for superior performance.",
      "Sizes & Customization: We manufacture Burner Blocks in all standard and customized sizes, including round opening, square/rectangular, multi-hole, and tunnel/nozzle designs. Custom-engineered blocks are precision-cast as per your drawings to perfectly match your burner nozzle size and flame shape."
    ],
    specs: { maxTemp: '1600°C+', density: '2.5 - 3.0 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ (%)", value: "70 – 90" },
      { label: "Bulk Density (g/cm³)", value: "2.5 – 3.0" },
      { label: "Apparent Porosity (%)", value: "12 – 18" },
      { label: "Cold Crushing Strength (MPa)", value: "60 – 100" },
      { label: "PLC (%) @ 1500°C", value: "±0.2 – 0.5" },
      { label: "Max Service Temperature (°C)", value: "1400 – 1600+" },
      { label: "Material Type", value: "High Alumina / LC Castable" },
      { label: "Shapes", value: "Round, Square, Rectangular, Custom" }
    ],
    features: [
      "Withstands direct flame impingement",
      "High resistance to thermal shock and rapid temperature changes",
      "Strong mechanical integrity under high load and velocity",
      "Resistant to erosion, abrasion, and chemical attack",
      "Precast design ensures quick installation and minimal downtime",
      "Long service life in critical burner zones"
    ],
    applications: [
      "Reheating Furnaces",
      "Steel & Rolling Mill Furnaces",
      "Heat Treatment Furnaces",
      "Cement Kilns",
      "Petrochemical Furnaces",
      "Industrial Boilers and Thermal Units"
    ]
  },

  // --- CASTABLES CATEGORY --- //
  {
    id: 'super-castable',
    name: 'Super Castable',
    category: 'Castables',
    image: '', // Image removed
    shortDescription: 'High-performance refractory castable designed for high-temperature, high-strength, and abrasion-resistant applications.',
    longDescription: [
      "Super Castable is a high-performance refractory castable designed for high-temperature, high-strength, and abrasion-resistant applications in industrial furnaces. Engineered using advanced refractory aggregates and bonding systems, this castable provides excellent thermal stability, mechanical strength, and long service life in demanding environments.",
      "We are a leading Super Castable manufacturer and supplier in India, offering premium-quality refractory castables suitable for critical furnace zones and heavy-duty industrial applications.",
      "Grades Available: Medium Alumina Super Castable, High Alumina Super Castable, Low Cement / Conventional Castable options. We also provide custom compositions as per your specific application needs."
    ],
    specs: { maxTemp: '1600°C', density: '2.3 - 2.8 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ (%)", value: "60 – 80" },
      { label: "Bulk Density (g/cm³)", value: "2.3 – 2.8" },
      { label: "Apparent Porosity (%)", value: "16 – 22" },
      { label: "Cold Crushing Strength (MPa)", value: "50 – 90" },
      { label: "PLC (%) @ 1400°C", value: "±0.2 – 0.5" },
      { label: "Max Service Temperature (°C)", value: "1400 – 1600" },
      { label: "Installation Method", value: "Casting / Gunning" }
    ],
    features: [
      "High mechanical strength for heavy-duty applications",
      "Excellent resistance to abrasion and erosion",
      "Good thermal stability under fluctuating temperatures",
      "Low maintenance and long service life",
      "Suitable for both new installations and repair work",
      "Reliable performance in continuous operations"
    ],
    applications: [
      "Reheating Furnaces",
      "Burner and Impact Zones",
      "Steel & Rolling Mill Furnaces",
      "Cement Plants (Cyclones, Coolers)",
      "Boilers and Kilns",
      "Petrochemical and Chemical Industries"
    ]
  },
  {
    id: 'whytheat-castable',
    name: 'Whytheat Castable',
    category: 'Castables',
    image: '', // Image removed
    shortDescription: 'High-quality refractory castable widely used for furnace linings, repair work, and general high-temperature applications.',
    longDescription: [
      "Whytheat Castable is a high-quality refractory castable widely used for furnace linings, repair work, and general high-temperature applications. Known for its reliable performance, good strength, and ease of installation, Whytheat is available in different grades such as K Grade and A Grade, depending on temperature and application requirements.",
      "We are a trusted Whytheat Castable manufacturer and supplier in India, offering consistent quality materials suitable for industrial furnace operations.",
      "Grade Difference (K vs A): Whytheat K Grade features lower alumina and is more economical, suitable for moderate temperature zones & repair work. Whytheat A Grade features higher alumina and better strength, suitable for higher temperature zones & longer service life."
    ],
    specs: { maxTemp: '1400°C', density: '2.0 - 2.4 g/cm³' },
    tableSpecs: {
      headers: ["Properties", "K Grade", "A Grade"],
      rows: [
        ["Al₂O₃ (%)", "35 – 40", "45 – 50"],
        ["Bulk Density (g/cm³)", "2.0 – 2.2", "2.2 – 2.4"],
        ["Apparent Porosity (%)", "20 – 26", "18 – 24"],
        ["Cold Crushing Strength (MPa)", "25 – 35", "30 – 45"],
        ["Max Service Temperature (°C)", "1200 – 1300", "1300 – 1400"],
        ["Installation Method", "Casting / Patching", "Casting / Patching"]
      ]
    },
    features: [
      "Good strength for general furnace applications",
      "Reliable thermal performance under moderate temperatures",
      "Easy mixing, casting, and repair application",
      "Suitable for quick maintenance jobs",
      "Cost-effective compared to high-end castables",
      "Stable performance in industrial environments"
    ],
    applications: [
      "Reheating Furnaces",
      "Boiler Linings",
      "Kilns and Ovens",
      "Steel & Foundry Industries",
      "Furnace Repair and Maintenance",
      "General Refractory Lining Applications"
    ]
  },
  {
    id: 'insolite-castable',
    name: 'Insolite Castable',
    category: 'Castables',
    image: '', // Image removed
    shortDescription: 'Lightweight insulating refractory castable designed to provide excellent thermal insulation, low heat loss, and energy efficiency.',
    longDescription: [
      "Insolite Castable is a lightweight insulating refractory castable designed to provide excellent thermal insulation, low heat loss, and energy efficiency in high-temperature industrial applications. It is widely used as a backup insulation layer behind dense refractory linings to reduce fuel consumption and improve furnace efficiency.",
      "We are a leading Insolite Castable manufacturer and supplier in India, offering high-quality insulating castables suitable for furnaces, kilns, and thermal processing units.",
      "Types Available: Standard Insolite Castable, Medium Temperature Insulating Castable, High Temperature Insulating Castable. We also offer custom formulations as per your requirement."
    ],
    specs: { maxTemp: '1300°C', density: '0.8 - 1.2 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ (%)", value: "30 – 40" },
      { label: "Bulk Density (g/cm³)", value: "0.8 – 1.2" },
      { label: "Apparent Porosity (%)", value: "60 – 75" },
      { label: "Cold Crushing Strength (MPa)", value: "2 – 6" },
      { label: "Thermal Conductivity (W/m·K)", value: "0.20 – 0.40" },
      { label: "Max Service Temperature (°C)", value: "1000 – 1300" },
      { label: "Installation Method", value: "Casting / Gunning" }
    ],
    features: [
      "Excellent insulation and energy-saving properties",
      "Lightweight → reduces structural load",
      "Low heat storage → faster heating cycles",
      "Easy handling and installation",
      "Suitable for backup lining applications",
      "Cost-effective insulation solution"
    ],
    applications: [
      "Furnace Backup Insulation",
      "Reheating Furnaces",
      "Boilers and Kilns",
      "Steel & Iron Industry",
      "Petrochemical Plants",
      "Thermal Processing Units"
    ]
  },

  // --- INSULATING CATEGORY --- //
  {
    id: 'ceramic-fiber-blanket',
    name: 'Ceramic Fiber Blanket (64 & 96 Grade)',
    category: 'Insulating',
    image: '', // Image removed
    shortDescription: 'Lightweight, high-temperature insulating material made from high-purity ceramic fibers, designed for excellent thermal insulation.',
    longDescription: [
      "Ceramic Fiber Blanket is a lightweight, high-temperature insulating material made from high-purity ceramic fibers, designed for excellent thermal insulation, flexibility, and resistance to thermal shock. Available in 64 and 96 density grades, these blankets are widely used for furnace insulation, heat containment, and energy-saving applications.",
      "We are a leading Ceramic Fiber Blanket manufacturer and supplier in India, offering high-quality insulation solutions for industrial furnaces, kilns, and thermal systems.",
      "Grade Difference (64 vs 96): 64 Density Blanket is lightweight and economical, suitable for backup insulation and low-load areas. 96 Density Blanket offers higher density and better insulation performance, suitable for hot face lining and critical insulation zones."
    ],
    specs: { maxTemp: '1260°C', density: '64 - 96 kg/m³' },
    tableSpecs: {
      headers: ["Properties", "64 Density", "96 Density"],
      rows: [
        ["Density (kg/m³)", "64", "96"],
        ["Al₂O₃ (%)", "42 – 46", "42 – 46"],
        ["SiO₂ (%)", "52 – 56", "52 – 56"],
        ["Max Service Temp (°C)", "1260", "1260"],
        ["Thermal Conductivity (W/m·K)", "0.12 – 0.18", "0.10 – 0.16"],
        ["Thickness (mm)", "25 / 50", "25 / 50"],
        ["Standard Width", "610 mm", "610 mm"],
        ["Form", "Roll", "Roll"]
      ]
    },
    features: [
      "Excellent insulation performance with low thermal conductivity",
      "High resistance to thermal shock and rapid heating/cooling",
      "Flexible and easy to cut, wrap, and install",
      "Low heat storage → improves energy efficiency",
      "Chemical stability and resistance to most industrial environments",
      "Long service life with minimal maintenance"
    ],
    applications: [
      "Furnace and Kiln Insulation",
      "Reheating Furnaces",
      "Boiler Insulation",
      "Expansion Joints and Seals",
      "Pipe and Duct Insulation",
      "Heat Treatment Furnaces",
      "Petrochemical and Power Plants"
    ]
  },
  {
    id: 'hysil-block',
    name: 'Hysil Block 1" & 2"',
    category: 'Insulating',
    image: '', // Image removed
    shortDescription: 'High-performance calcium silicate insulation blocks designed for superior thermal insulation, low heat loss, and energy efficiency.',
    longDescription: [
      "Hysil Blocks are high-performance calcium silicate insulation blocks designed for superior thermal insulation, low heat loss, and energy efficiency in industrial and commercial applications. Available in 1 inch and 2 inch thickness, these blocks are widely used for furnace backup insulation, boiler insulation, and high-temperature equipment.",
      "We are a leading Hysil Block manufacturer and supplier in India, offering high-quality insulation blocks with excellent strength, durability, and thermal performance.",
      "Thickness Options: 1 Inch (25 mm) is suitable for light insulation and space-restricted areas. 2 Inch (50 mm) provides better insulation performance for higher heat loss zones."
    ],
    specs: { maxTemp: '1000°C', density: '220 - 280 kg/m³' },
    detailedSpecs: [
      { label: "Material", value: "Calcium Silicate" },
      { label: "Bulk Density (kg/m³)", value: "220 – 280" },
      { label: "Compressive Strength (MPa)", value: "1.0 – 1.5" },
      { label: "Thermal Conductivity (W/m·K)", value: "0.05 – 0.10" },
      { label: "Max Service Temperature (°C)", value: "650 – 1000" },
      { label: "Thickness Available", value: "25 mm (1”), 50 mm (2”)" },
      { label: "Standard Size", value: "1000 × 500 mm (typical)" }
    ],
    features: [
      "Excellent thermal insulation with low heat loss",
      "Higher mechanical strength than ceramic fiber products",
      "Non-combustible and fire-resistant",
      "Good resistance to moisture and chemical attack",
      "Easy machining and installation",
      "Long service life with stable performance"
    ],
    applications: [
      "Furnace Backup Insulation",
      "Boilers and Steam Lines",
      "Industrial Ovens and Kilns",
      "Petrochemical Plants",
      "Power Plants",
      "Pipe and Equipment Insulation"
    ]
  },
  {
    id: 'insulation-bricks-hot-cold-face',
    name: 'Hot Face & Cold Face Insulation Bricks',
    category: 'Insulating',
    image: '/images/refractory/Insulation brick.webp',
    shortDescription: 'Lightweight refractory materials designed to reduce heat loss, improve thermal efficiency, and enhance energy savings.',
    longDescription: [
      "Insulation Bricks are lightweight refractory materials designed to reduce heat loss, improve thermal efficiency, and enhance energy savings in high-temperature industrial applications. These bricks are categorized into Hot Face Insulation Bricks (direct exposure to heat) and Cold Face Insulation Bricks (backup insulation layers).",
      "We are a leading Insulation Bricks manufacturer and supplier in India, offering high-quality Hot Face and Cold Face Insulating Fire Bricks for furnaces, kilns, and thermal processing units.",
      "HOT FACE INSULATION BRICKS: Used in direct contact with heat. Features higher strength and advanced temperature resistance.",
      "COLD FACE INSULATION BRICKS: Used as a backup insulation layer. Features lower density and higher insulation efficiency."
    ],
    specs: { maxTemp: '1400°C', density: '0.6 - 1.2 g/cm³' },
    tableSpecs: {
      headers: ["Properties", "Hot Face Bricks", "Cold Face Bricks"],
      rows: [
        ["Al₂O₃ (%)", "35 – 45", "30 – 40"],
        ["Bulk Density (g/cm³)", "0.8 – 1.2", "0.6 – 1.0"],
        ["Apparent Porosity (%)", "60 – 70", "65 – 75"],
        ["Cold Crushing Strength (MPa)", "3 – 6", "2 – 4"],
        ["Thermal Conductivity (W/m·K)", "0.25 – 0.45", "0.15 – 0.30"],
        ["Maximum Service Temp (°C)", "1200 – 1400", "900 – 1100"],
        ["Standard Size", "230 × 115 × 65 mm", "230 × 115 × 65 mm"]
      ]
    },
    features: [
      "Excellent heat insulation and energy saving",
      "Lightweight reduces furnace load and fuel consumption",
      "Good resistance to thermal shock",
      "Low heat storage for faster heating cycles",
      "Easy handling and installation",
      "Improves overall furnace efficiency"
    ],
    applications: [
      "Furnace Backup Insulation",
      "Kilns and Boilers",
      "Reheating Furnaces",
      "Steel & Iron Industry",
      "Ceramic and Glass Industries",
      "Petrochemical Plants",
      "Thermal Processing Units"
    ]
  },

  // --- SPECIAL CATEGORY --- //
  {
    id: 'magnesite-mgr-bricks',
    name: 'Magnesite MGR Bricks',
    category: 'Special', 
    image: '/images/refractory/Chrome MGR.webp',
    shortDescription: 'High-performance basic refractory bricks made from high-purity magnesia for extreme temperature applications.',
    longDescription: [
      "Magnesite MGR Bricks (Magnesia Bricks) are high-performance basic refractory bricks made from high-purity magnesia, designed for extreme temperature applications and highly basic slag environments. These bricks offer excellent resistance to chemical attack, high refractoriness, and superior mechanical strength, making them ideal for steel and metallurgical industries.",
      "We are a leading Magnesite MGR Bricks manufacturer and supplier in India, providing reliable, high-quality refractory solutions for critical high-temperature operations."
    ],
    specs: { maxTemp: '2000°C', density: '2.8 - 3.0 g/cm³' },
    detailedSpecs: [
      { label: "MgO (%)", value: "≥ 85 – 90" },
      { label: "Fe₂O₃ (%)", value: "≤ 2.0" },
      { label: "Bulk Density (g/cm³)", value: "≥ 2.8 – 3.0" },
      { label: "Apparent Porosity (%)", value: "≤ 18" },
      { label: "Cold Crushing Strength (MPa)", value: "≥ 50 – 70" },
      { label: "Refractoriness (°C)", value: "≥ 2000" },
      { label: "RUL @ 0.2 MPa (°C)", value: "≥ 1600" },
      { label: "Standard Size", value: "230 × 115 × 65 mm" },
      { label: "Shapes", value: "Standard, Key, Arch, Custom shapes" }
    ],
    features: [
      "Excellent resistance to basic slag and lime-rich environments",
      "High temperature stability and structural integrity",
      "Low reactivity with basic fluxes",
      "Strong resistance to abrasion and chemical wear",
      "Suitable for critical high-temperature zones",
      "Consistent quality and long operational life"
    ],
    applications: [
      "Steel Making Furnaces",
      "Electric Arc Furnaces (EAF)",
      "Ladles and Converters",
      "Cement Rotary Kilns (burning zone)",
      "Non-Ferrous Metal Industries",
      "Glass and Chemical Industries"
    ]
  },
  {
    id: 'lc-90-blocks',
    name: 'LC 90 Blocks',
    category: 'Special', 
    image: '', // Image removed
    shortDescription: 'High-performance precast refractory blocks made from low cement castable formulations with high alumina content.',
    longDescription: [
      "LC 90 Blocks (Low Cement 90% Alumina Blocks) are high-performance precast refractory blocks made from low cement castable formulations with high alumina content. These blocks are designed for extreme temperature applications, offering superior strength, low porosity, and excellent resistance to thermal shock, abrasion, and chemical attack.",
      "We are a leading LC 90 Block manufacturer and supplier in India, providing precast refractory solutions for critical furnace zones with consistent quality and reliable performance."
    ],
    specs: { maxTemp: '1850°C', density: '2.8 - 3.0 g/cm³' },
    detailedSpecs: [
      { label: "Al₂O₃ (%)", value: "≥ 90" },
      { label: "CaO (%)", value: "≤ 1.5" },
      { label: "Bulk Density (g/cm³)", value: "≥ 2.8 – 3.0" },
      { label: "Apparent Porosity (%)", value: "≤ 14 – 16" },
      { label: "Cold Crushing Strength (MPa)", value: "≥ 80 – 100" },
      { label: "PLC (%) @ 1500°C", value: "±0.2 – 0.5" },
      { label: "Refractoriness (°C)", value: "≥ 1850" },
      { label: "Max Service Temperature (°C)", value: "1600+" },
      { label: "Shapes", value: "Precast blocks, custom shapes" }
    ],
    features: [
      "Superior mechanical strength and structural stability",
      "Low cement content → higher density and performance",
      "Excellent resistance to thermal shock and spalling",
      "High abrasion and corrosion resistance",
      "Reduced installation time with precast blocks",
      "Long service life in extreme operating conditions"
    ],
    applications: [
      "Reheating Furnaces (Burner Blocks, Impact Zones)",
      "Steel Plants & Rolling Mills",
      "Cement Plants (High Wear Zones)",
      "Petrochemical Furnaces",
      "Heat Treatment Furnaces",
      "Kilns and High Temperature Units"
    ]
  },
  {
    id: 'fire-clay',
    name: 'Fire Clay',
    category: 'Special',
    image: '', // Image removed
    shortDescription: 'High-quality refractory raw material widely used in the manufacturing of fire bricks, castables, mortars, and other refractory products.',
    longDescription: [
      "Fire Clay is a high-quality refractory raw material widely used in the manufacturing of fire bricks, castables, mortars, and other refractory products. Known for its excellent plasticity, thermal resistance, and binding properties, fire clay plays a critical role in high-temperature industrial applications.",
      "We are a leading Fire Clay manufacturer and supplier in India, offering consistent quality material suitable for refractory, ceramic, and construction industries.",
      "Types Available: Raw Fire Clay (Lumps), Processed Fire Clay Powder, Calcined Fire Clay (Grog), and Customized grading as per your requirement."
    ],
    specs: { maxTemp: '1700°C', density: 'Bulk / Powder' },
    detailedSpecs: [
      { label: "Al₂O₃ (%)", value: "25 – 40" },
      { label: "SiO₂ (%)", value: "50 – 65" },
      { label: "Fe₂O₃ (%)", value: "≤ 2.5 – 3.0" },
      { label: "Loss on Ignition (%)", value: "8 – 12" },
      { label: "Refractoriness (°C)", value: "1500 – 1700" },
      { label: "Form Available", value: "Lumps / Powder" }
    ],
    features: [
      "High refractoriness and heat resistance",
      "Good plasticity for shaping and molding",
      "Excellent binding properties for refractory applications",
      "Good thermal stability in high-temperature environments",
      "Cost-effective raw material for refractory production",
      "Easy processing and handling"
    ],
    applications: [
      "Manufacturing of Fire Bricks",
      "Refractory Castables and Mortars",
      "Ceramic Industry",
      "Furnace and Kiln Linings",
      "Foundry Applications",
      "Cement and Steel Industries"
    ]
  },
  {
    id: 'set-50-refractory-mortar',
    name: 'Set-50 Refractory Mortar',
    category: 'Special',
    image: '', // Image removed
    shortDescription: 'High-quality heat-resistant bonding material specially formulated for laying and jointing of fire bricks and refractory linings.',
    longDescription: [
      "Set-50 Refractory Mortar is a high-quality heat-resistant bonding material specially formulated for laying and jointing of fire bricks and refractory linings. With approximately 50% alumina content, this mortar provides excellent bonding strength, thermal stability, and resistance to high temperatures.",
      "We are a leading Set-50 refractory mortar manufacturer and supplier in India, offering consistent quality mortar suitable for furnace construction and maintenance applications."
    ],
    specs: { maxTemp: '1500°C', density: 'Powder' },
    detailedSpecs: [
      { label: "Al₂O₃ (%)", value: "≥ 50" },
      { label: "Fe₂O₃ (%)", value: "≤ 2.5" },
      { label: "Refractoriness (°C)", value: "≥ 1700" },
      { label: "Max Service Temperature (°C)", value: "1400 – 1500" },
      { label: "Joint Thickness", value: "2 – 3 mm recommended" },
      { label: "Form", value: "Powder" }
    ],
    features: [
      "High bonding strength for durable brick lining",
      "Excellent adhesion with refractory bricks",
      "Good thermal expansion compatibility",
      "Smooth application and easy handling",
      "Reduces joint failure and heat leakage",
      "Suitable for both new construction and repair work"
    ],
    applications: [
      "Fire Brick Laying (IS Bricks & High Alumina Bricks)",
      "Reheating Furnaces",
      "Steel & Rolling Mill Furnaces",
      "Cement Kilns",
      "Boilers and Kilns",
      "General Refractory Construction"
    ]
  }
];