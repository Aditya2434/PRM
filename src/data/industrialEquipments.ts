// src/data/industrialEquipments.ts

export interface EquipmentSpec {
  [key: string]: string | number;
}

export interface IndustrialEquipment {
  id: number;
  title: string;
  category: string;
  image: string;
  gallery?: string[]; 
  desc: string;
  specs: EquipmentSpec;
  highlights?: string[];
  features?: string[];
  applications?: string[];
  components?: string[];
  typesAvailable?: string[];
}

export const equipmentsData: IndustrialEquipment[] = [
  { 
    id: 1, 
    title: 'Pusher Type Reheating Furnace', 
    category: 'FURNACES', 
    image: '/images/equipments/RHF.webp',
    gallery: [
      '/images/equipments/RHF 2.webp'
    ],
    desc: 'Pusher Type Reheating Furnace is a continuous-type industrial furnace designed for efficient and uniform heating of steel billets, blooms, and slabs before rolling or forging. These furnaces use a pushing mechanism to move material through different heating zones, ensuring consistent temperature and high productivity. We are a leading Pusher Type Reheating Furnace manufacturer and supplier in India, offering custom-designed furnaces with high efficiency, low fuel consumption, and robust construction for steel and rolling mill industries.',
    highlights: [
      'Continuous operation for high production output',
      'Uniform heating across billets and slabs',
      'Suitable for coal, oil, or gas firing systems',
      'Heavy-duty pushing mechanism for material movement',
      'Optimized design for fuel efficiency and heat recovery',
      'Custom-built as per plant layout and capacity'
    ],
    specs: { 
      'Type': 'Continuous Pusher Type Furnace',
      'Capacity': '5 TPH to 100+ TPH (customizable)',
      'Fuel Type': 'Coal / Oil / Gas',
      'Max Temperature': 'Up to 1300°C',
      'Charging Type': 'Front Charging (Billets / Slabs)',
      'Discharge Type': 'End Discharge',
      'Control System': 'Manual / Semi-Automatic / PLC',
      'Refractory Lining': 'High Alumina Bricks / Castables / Insulation',
      'Heat Zones': 'Preheating / Heating / Soaking Zones'
    },
    features: [
      'High production efficiency with continuous operation',
      'Uniform temperature distribution for quality output',
      'Robust pusher mechanism with long service life',
      'Reduced fuel consumption with optimized design',
      'Easy maintenance and operation',
      'Suitable for medium to large rolling mills'
    ],
    applications: [
      'Steel Rolling Mills', 
      'Billet & Ingot Heating', 
      'Forging Industries',
      'Alloy Steel Processing',
      'Non-Ferrous Metal Heating',
      'Industrial Heat Treatment'
    ]
  },
  { 
    id: 2, 
    title: 'Recuperator', 
    category: 'ACCESSORIES', 
    image: '/images/equipments/Recuperator.webp',
    gallery: [
      '/images/equipments/Recuperator 2.webp'
    ],
    desc: 'A Recuperator is a heat recovery device used in industrial furnaces to recover waste heat from flue gases and preheat combustion air, significantly improving fuel efficiency and reducing operating costs. It is an essential component in modern furnaces for energy saving and performance optimization. We are a leading Recuperator manufacturer and supplier in India, offering high-efficiency heat recovery systems.',
    highlights: [
      'Recovers waste heat from exhaust/flue gases',
      'Preheats combustion air to improve efficiency',
      'Reduces fuel consumption by 20%–40%',
      'Improves furnace performance and output quality',
      'Robust construction for high-temperature operation',
      'Custom-designed as per furnace capacity and layout'
    ],
    specs: { 
      'Type': 'Metallic / Ceramic Recuperator',
      'Max Temp': 'Up to 1100°C (Metallic) / 1400°C (Ceramic)',
      'Heat Recovery Efficiency': '30% – 70%',
      'Air Preheat Temp': 'Up to 300 – 800°C',
      'Material': 'SS / Alloy Steel / Ceramic Tubes',
      'Fuel Compatibility': 'Gas / Oil / Coal',
      'Mounting': 'External / Integrated with Furnace'
    },
    features: [
      'Significant fuel savings and energy efficiency',
      'Reduces exhaust heat loss',
      'Improves combustion efficiency',
      'Lowers operational cost and emissions',
      'Durable and long service life',
      'Easy integration with existing furnaces'
    ],
    applications: [
      'Reheating Furnaces',
      'Rolling Mill Furnaces',
      'Cement Kilns',
      'Glass Furnaces',
      'Boilers and Thermal Systems',
      'Petrochemical Industries'
    ]
  },
  { 
    id: 3, 
    title: 'Heating & Pumping Unit', 
    category: 'SYSTEMS', 
    image: '/images/equipments/Heating Pumping Unit.webp',
    gallery: [
      '/images/equipments/Heating Unit 2.webp',
      '/images/equipments/Heating unit.webp'
    ],
    desc: 'Heating & Pumping Unit is an integrated system designed to heat and pump fuel (mainly furnace oil / LDO / heavy oil) at the required temperature and pressure for efficient combustion in industrial furnaces and burners. This unit ensures smooth fuel flow, proper atomization, and consistent furnace performance.',
    highlights: [
      'Integrated system for fuel heating and pumping',
      'Ensures proper fuel viscosity for efficient combustion',
      'Maintains consistent pressure and flow rate',
      'Suitable for FO, LDO, and heavy oil systems',
      'Compact design with easy installation',
      'Custom-built as per furnace and burner requirements'
    ],
    specs: { 
      'Fuel Type': 'Furnace Oil (FO) / LDO / Heavy Oil',
      'Heating System': 'Electrical / Thermic Fluid / Steam',
      'Operating Temp': '80°C – 140°C (adjustable)',
      'Pump Type': 'Gear Pump / Screw Pump',
      'Flow Rate': 'As per requirement (customized)',
      'Pressure Range': '5 – 20 bar',
      'Tank Capacity': 'Custom-built',
      'Control System': 'Manual / Automatic / PLC'
    },
    components: [
      'Fuel Storage Tank',
      'Heating System (Electric / Coil / Steam)',
      'Pumping Unit (Gear / Screw Pump)',
      'Filters and Strainers',
      'Control Panel',
      'Piping and Valves'
    ],
    features: [
      'Ensures proper fuel heating for better atomization',
      'Improves combustion efficiency and fuel utilization',
      'Prevents clogging and inconsistent fuel flow',
      'Heavy-duty pumps for continuous operation',
      'Easy monitoring and control',
      'Low maintenance and reliable performance'
    ],
    applications: [
      'Reheating Furnaces',
      'Rolling Mill Furnaces',
      'Industrial Burners',
      'Boilers and Thermic Fluid Heaters',
      'Cement and Steel Plants',
      'Petrochemical Industries'
    ]
  },
  { 
    id: 4, 
    title: 'Industrial Blower', 
    category: 'ACCESSORIES', 
    image: '/images/equipments/Blower 1.webp',
    gallery: [
      '/images/equipments/Blower 2.webp',
      '/images/equipments/Blower 3.webp',
      '/images/equipments/Blower 4.webp'
    ],
    desc: 'Industrial Blowers are high-performance air handling systems designed to deliver controlled airflow and pressure for combustion, ventilation, and cooling applications in industrial environments. These blowers play a critical role in supplying combustion air to furnaces and burners, ensuring efficient and stable operation.',
    highlights: [
      'High airflow and pressure performance',
      'Suitable for combustion air supply systems',
      'Energy-efficient and robust design',
      'Low noise and vibration operation',
      'Available in multiple capacities and configurations',
      'Custom-built as per application requirements'
    ],
    specs: { 
      'Type': 'Centrifugal / Axial Flow Blower',
      'Air Flow Capacity': '500 – 50,000+ m³/hr',
      'Pressure Range': '100 – 1500 mmWC',
      'Power Rating': '1 HP – 100 HP',
      'Drive Type': 'Direct / Belt Driven',
      'Material': 'MS / SS / Alloy Steel',
      'Temperature Handling': 'Up to 300°C (custom higher)',
      'Mounting': 'Floor / Base Mounted'
    },
    features: [
      'Provides consistent airflow for combustion systems',
      'High efficiency with low power consumption',
      'Heavy-duty construction for industrial use',
      'Stable performance under continuous operation',
      'Low maintenance and long service life',
      'Designed for high-pressure and high-flow applications'
    ],
    applications: [
      'Reheating Furnaces',
      'Industrial Burners',
      'Boilers and Kilns',
      'Steel & Rolling Mills',
      'Cement Plants',
      'Ventilation and Dust Collection Systems'
    ]
  },
  { 
    id: 5, 
    title: 'Industrial Pulverizer', 
    category: 'SYSTEMS', 
    image: '/images/equipments/pulvurizer.webp',
    desc: 'Industrial Pulverizer (Coal Pulverizer) is a heavy-duty crushing and grinding machine used for pulverizing coal into fine powder for efficient combustion in furnaces, boilers, and kilns. It ensures uniform particle size, better fuel burning, and improved thermal efficiency.',
    highlights: [
      'Designed for coal crushing and fine grinding',
      'Ensures uniform particle size for better combustion',
      'High output with low power consumption',
      'Heavy-duty construction for continuous operation',
      'Easy maintenance and long service life',
      'Available in multiple capacities'
    ],
    specs: { 
      'Type': 'Hammer Mill / Impact Pulverizer',
      'Capacity': '500 kg/hr – 10 TPH',
      'Output Size': '0 – 3 mm (adjustable)',
      'Motor Power': '10 HP – 100 HP',
      'Feeding Size': 'Up to 50 mm',
      'Material': 'MS Body / Hardened Steel Parts',
      'Drive Type': 'Direct / Belt Driven'
    },
    features: [
      'High crushing efficiency with uniform output',
      'Suitable for dry coal grinding applications',
      'Adjustable output size as per requirement',
      'Low vibration and stable performance',
      'Easy replacement of wear parts',
      'Continuous operation capability'
    ],
    applications: [
      'Reheating Furnaces (Coal Firing Systems)',
      'Brick Kilns and Refractory Plants',
      'Boilers and Thermal Power Units',
      'Cement Plants',
      'Steel & Rolling Mills',
      'Industrial Fuel Processing Units'
    ]
  },
  { 
    id: 6, 
    title: 'Billet Ejector', 
    category: 'HANDLING', 
    image: '/images/equipments/Ejector.webp',
    gallery: [
      '/images/equipments/Ejector 2.webp',
      '/images/equipments/Ejector 3.webp'
    ],
    desc: 'Billet Ejector is a mechanical or hydraulic system used for pushing heated billets out of the furnace discharge end onto roller tables or conveyors. It ensures smooth, safe, and controlled discharge of billets at high temperatures, improving productivity and reducing manual handling.',
    highlights: [
      'Designed for high-temperature billet discharge',
      'Smooth and controlled ejection mechanism',
      'Suitable for continuous furnace operations',
      'Heavy-duty construction for long service life',
      'Reduces manual handling and improves safety',
      'Custom-built as per furnace design and billet size'
    ],
    specs: { 
      'Type': 'Mechanical / Hydraulic Ejector',
      'Operation': 'Automatic / Semi-Automatic',
      'Billet Size': 'As per requirement (customizable)',
      'Ejection Stroke': 'Custom-designed',
      'Drive System': 'Motorized / Hydraulic Cylinder',
      'Temp Handling': 'Up to 1200°C+',
      'Material': 'Heat-resistant steel / Alloy components',
      'Mounting': 'Furnace discharge end'
    },
    typesAvailable: [
      'Mechanical Billet Ejector',
      'Hydraulic Billet Ejector',
      'Pneumatic Ejector (on request)'
    ],
    features: [
      'Ensures smooth billet discharge without jamming',
      'High strength to handle hot billets',
      'Precise control of ejection movement',
      'Low maintenance and durable design',
      'Improves production efficiency',
      'Compatible with automation systems'
    ],
    applications: [
      'Reheating Furnaces',
      'Rolling Mills',
      'Steel Processing Plants',
      'Forging Units',
      'Continuous Heating Systems'
    ]
  },
  { 
    id: 7, 
    title: 'Billet Pusher', 
    category: 'HANDLING', 
    image: '/images/equipments/H Pusher.webp',
    gallery: [
      '/images/equipments/H Pusher 2.webp',
      '/images/equipments/H Pusher 3.webp'
    ],
    desc: 'Billet Pusher is a heavy-duty mechanical or hydraulic system used to push billets, blooms, or slabs into the reheating furnace in a controlled and continuous manner. It is a key component in pusher-type furnaces, ensuring smooth material flow and uniform heating.',
    highlights: [
      'Designed for continuous billet charging into furnace',
      'Ensures smooth and uniform material movement',
      'Heavy-duty construction for high-temperature operations',
      'Suitable for automatic and semi-automatic systems',
      'Custom-built based on billet size and furnace design',
      'Improves furnace efficiency and productivity'
    ],
    specs: { 
      'Type': 'Mechanical / Hydraulic Pusher',
      'Operation': 'Automatic / Semi-Automatic',
      'Billet Size': 'As per requirement',
      'Stroke Length': 'Custom-designed',
      'Pushing Capacity': 'Depends on furnace size',
      'Drive System': 'Motorized / Hydraulic',
      'Temp Handling': 'Up to 1200°C+',
      'Material': 'Heat-resistant steel / Alloy'
    },
    typesAvailable: [
      'Mechanical Billet Pusher',
      'Hydraulic Billet Pusher',
      'Electro-Mechanical Pusher',
      'Customized systems as per furnace layout'
    ],
    features: [
      'Smooth and controlled billet charging',
      'High load-bearing capacity for heavy billets',
      'Reliable performance under continuous operation',
      'Accurate stroke control for uniform pushing',
      'Low maintenance and long service life',
      'Compatible with PLC-based automation systems'
    ],
    applications: [
      'Pusher Type Reheating Furnaces',
      'Rolling Mills',
      'Steel Processing Plants',
      'Forging Units',
      'Continuous Heating Systems'
    ]
  },
  { 
    id: 8, 
    title: 'Industrial Burner', 
    category: 'BURNERS', 
    image: '/images/equipments/Burner.webp',
    gallery: [
      '/images/equipments/Burner2.webp',
      '/images/equipments/Burner3.webp',
      '/images/equipments/Burner4.webp'
    ],
    desc: 'Industrial Burners are high-performance combustion systems designed to deliver controlled flame, efficient fuel burning, and uniform heat distribution in industrial furnaces and boilers. Available in sizes 2A to 6A, these burners are suitable for a wide range of heating capacities and fuel types.',
    highlights: [
      'Available in 2A, 3A, 4A, 5A, and 6A sizes',
      'Suitable for Furnace Oil (FO), LDO, and Gas firing',
      'High combustion efficiency with proper atomization',
      'Stable flame with uniform heat distribution',
      'Easy installation and low maintenance',
      'Custom-built for different furnace capacities'
    ],
    specs: { 
      'Size Range': '2A to 6A',
      'Fuel Type': 'FO / LDO / Gas',
      'Firing Capacity': '1 LPH – 100+ LPH',
      'Air Supply': 'Blower operated',
      'Operating Pressure': '5 – 20 bar',
      'Flame Type': 'Long / Short Flame (customizable)',
      'Material': 'MS / SS / Heat-resistant alloy',
      'Mounting': 'Furnace wall mounted'
    },
    typesAvailable: [
      'Oil Fired Burners (FO / LDO)',
      'Gas Fired Burners',
      'Dual Fuel Burners',
      'High Velocity Burners (on request)',
      'Customized burner systems'
    ],
    features: [
      'Efficient fuel atomization for better combustion',
      'Stable flame control with adjustable firing',
      'High thermal efficiency and low fuel consumption',
      'Suitable for continuous industrial operation',
      'Durable construction for high-temperature environments',
      'Compatible with automation systems'
    ],
    applications: [
      'Reheating Furnaces',
      'Rolling Mills',
      'Boilers and Kilns',
      'Heat Treatment Furnaces',
      'Steel & Foundry Industries',
      'Petrochemical Plants'
    ]
  },
  { 
    id: 9, 
    title: 'Butterfly Valve', 
    category: 'VALVES', 
    image: '/images/equipments/butterfly valv.webp',
    gallery: [
      '/images/equipments/butterfly valv 2.webp',
      '/images/equipments/butterfly valv 3.webp'
    ],
    desc: 'Butterfly Valve is a quarter-turn flow control valve used to regulate or isolate the flow of liquids, gases, and air in industrial pipelines. It is widely used in furnace systems, fuel lines, air ducts, and process industries due to its compact design, quick operation, and reliable sealing.',
    highlights: [
      'Compact design with quick quarter-turn operation',
      'Suitable for air, gas, oil, and water applications',
      'Low pressure drop and efficient flow control',
      'Durable construction with long service life',
      'Available in multiple sizes and materials',
      'Easy installation and maintenance'
    ],
    specs: { 
      'Type': 'Wafer / Lug / Flanged',
      'Size Range': '1” to 24” (DN25 – DN600)',
      'Operation': 'Manual / Gear / Pneumatic / Electric',
      'Body Material': 'Cast Iron / Ductile Iron / SS / MS',
      'Disc Material': 'SS / CI / Alloy Steel',
      'Seat Material': 'EPDM / PTFE / Metal Seat',
      'Pressure Rating': 'PN10 / PN16 / PN25',
      'Temp Range': 'Up to 200°C (higher for metal)'
    },
    typesAvailable: [
      'Wafer Type Butterfly Valve',
      'Lug Type Butterfly Valve',
      'Flanged Butterfly Valve',
      'High Temperature Metal Seat Valve',
      'Actuated Valves (Pneumatic / Electric)'
    ],
    features: [
      'Fast opening and closing (quarter-turn operation)',
      'Lightweight and space-saving design',
      'Excellent sealing performance',
      'Low torque requirement',
      'Suitable for high flow applications',
      'Cost-effective compared to other valve types'
    ],
    applications: [
      'Furnace Air & Fuel Lines',
      'Blower and Duct Systems',
      'Gas Pipelines',
      'Water Treatment Plants',
      'Chemical and Petrochemical Industries',
      'Boilers and Thermal Systems'
    ]
  }
];