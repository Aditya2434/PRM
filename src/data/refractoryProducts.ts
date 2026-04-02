// src/data/refractoryProducts.ts

export interface RefractoryProduct {
  id: string; // Used for the URL slug (e.g., 'high-alumina-70')
  name: string;
  category: 'High Alumina' | 'Castables' | 'Insulating' | 'Basic';
  image: string;
  shortDescription: string;
  specs: {
    maxTemp: string;
    density: string;
    thermalConductivity?: string;
  };
}

export const refractoryProducts: RefractoryProduct[] = [
  {
    id: 'high-alumina-brick-70',
    name: 'High Alumina Bricks (70%)',
    category: 'High Alumina',
    image: '/src/assets/images/project-1.jpg', // Using existing assets as placeholders
    shortDescription: 'Premium grade high alumina bricks offering exceptional thermal resistance and structural integrity under extreme heat.',
    specs: {
      maxTemp: '1600°C',
      density: '2.65 g/cc',
    }
  },
  {
    id: 'high-alumina-brick-80',
    name: 'High Alumina Bricks (80%)',
    category: 'High Alumina',
    image: '/src/assets/images/project-2.jpg',
    shortDescription: 'Engineered for severe slag conditions and extreme abrasion in steel ladles and cement rotary kilns.',
    specs: {
      maxTemp: '1700°C',
      density: '2.80 g/cc',
    }
  },
  {
    id: 'conventional-castable-a',
    name: 'Dense Conventional Castable',
    category: 'Castables',
    image: '/src/assets/images/project-3.jpg',
    shortDescription: 'High-strength refractory concrete for general purpose lining in reheating furnaces and boilers.',
    specs: {
      maxTemp: '1500°C',
      density: '2.20 g/cc',
    }
  },
  {
    id: 'low-cement-castable',
    name: 'Low Cement Castable (LCC)',
    category: 'Castables',
    image: '/src/assets/images/project-4.jpg',
    shortDescription: 'Advanced castable with superior hot strength, low porosity, and excellent abrasion resistance.',
    specs: {
      maxTemp: '1650°C',
      density: '2.70 g/cc',
    }
  },
  {
    id: 'insulating-firebrick-23',
    name: 'Insulating Firebrick JM-23',
    category: 'Insulating',
    image: '/src/assets/images/project-5.jpg',
    shortDescription: 'Lightweight refractory brick designed for primary hot face lining or as back-up insulation behind dense refractories.',
    specs: {
      maxTemp: '1260°C',
      density: '0.60 g/cc',
    }
  },
  {
    id: 'magnesia-carbon-brick',
    name: 'Magnesia Carbon Brick',
    category: 'Basic',
    image: '/src/assets/images/project-6.jpg',
    shortDescription: 'Resin-bonded basic brick combining high refractoriness of magnesia with the superior slag resistance of carbon.',
    specs: {
      maxTemp: '1750°C',
      density: '2.95 g/cc',
    }
  }
];