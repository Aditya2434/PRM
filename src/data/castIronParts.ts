// src/data/castIronParts.ts

export interface CastIronPart {
  id: number;
  title: string;
  category: string;
  images: [string, string]; 
  desc: string;
  specs: {
    [key: string]: string;
  };
}

export const castIronData: CastIronPart[] = [
  { 
    id: 1, 
    title: 'C.I Furnace Charging Door', 
    category: 'FURNACE PARTS', 
    images: [
      '/images/ci/Charging door.webp',
      '/images/ci/Charging door 2.webp'
    ],
    desc: 'Heavy-duty cast iron charging doors engineered for industrial furnaces. Provides a precision-machined seal to eliminate heat loss and withstands extreme thermal cycling.',
    specs: { 
      'Material': 'High-Grade Cast Iron',
      'Max Temp': 'Up to 1200°C',
      'Application': 'Furnace Feeding',
      'Sealing': 'Precision Machined'
    }
  },
  { 
    id: 2, 
    title: 'C.I Hanger', 
    category: 'STRUCTURAL', 
    images: [
      '/images/ci/CI Hanger.webp',
      '/images/ci/CI Hanger 2.webp'
    ],
    desc: 'Durable cast iron hangers designed for secure suspension of refractory roof blocks in high-temperature environments.',
    specs: { 
      'Material': 'Cast Iron',
      'Max Temp': 'Up to 1200°C',
      'Application': 'Roof Suspension',
      'Durability': 'High Tensile'
    }
  },
  { 
    id: 3, 
    title: 'C.I Skid & Skid End', 
    category: 'STRUCTURAL', 
    images: [
      '/images/ci/CI Skid.webp',
      '/images/ci/CI Skid 2.webp'
    ],
    desc: 'Heavy-duty skid blocks ensuring smooth, continuous billet movement while resisting extreme abrasion and thermal shock.',
    specs: { 
      'Material': 'Cast Iron / Alloy',
      'Max Temp': 'Up to 1250°C',
      'Application': 'Billet Transport',
      'Resistance': 'High Abrasion'
    }
  },
  { 
    id: 4, 
    title: 'C.I Discharge Door Set', 
    category: 'FURNACE PARTS', 
    images: [
      '/images/ci/Discharge door.webp',
      '/images/ci/Discharge door 2.webp'
    ],
    desc: 'Robust discharge doors built for safe material removal, featuring precision sealing to minimize heat loss at the exit point.',
    specs: { 
      'Material': 'High-Grade Cast Iron',
      'Max Temp': 'Up to 1200°C',
      'Application': 'Furnace Discharge',
      'Operation': 'Smooth Action'
    }
  },
  { 
    id: 5, 
    title: 'C.I Inspection Door Set', 
    category: 'FURNACE PARTS', 
    images: [
      '/images/ci/Inspection Door.webp',
      '/images/ci/Inspection Door 2.webp'
    ],
    desc: 'Secure, quick-access doors allowing safe visual inspection of furnace interiors without compromising structural thermal integrity.',
    specs: { 
      'Material': 'Cast Iron',
      'Max Temp': 'Up to 1100°C',
      'Application': 'Visual Inspection',
      'Design': 'Quick-Release'
    }
  },
  { 
    id: 6, 
    title: 'S.S and C.I Damper', 
    category: 'CUSTOM CASTINGS', 
    images: [
      '/images/ci/Damper.webp',
      '/images/ci/Damper 2.webp'
    ],
    desc: 'Precision-engineered dampers for accurate airflow and flue gas regulation in high-temperature exhaust and chimney systems.',
    specs: { 
      'Material': 'SS / Cast Iron',
      'Max Temp': 'Up to 1000°C',
      'Application': 'Flow Regulation',
      'Control': 'Manual / Actuated'
    }
  }
];