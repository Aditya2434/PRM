// src/data/clients.ts
export interface Client {
  id: number;
  image: string;
  title: string;
  category: string;
}

export const clients: Client[] = [
  {
    id: 1,
    image: '/src/assets/images/project-1.jpg',
    title: 'Global Steel Co.',
    category: 'MANUFACTURING',
  },
  {
    id: 2,
    image: '/src/assets/images/project-2.jpg',
    title: 'Apex Refineries',
    category: 'OIL & GAS',
  },
  {
    id: 3,
    image: '/src/assets/images/project-3.jpg',
    title: 'BuildRight Const.',
    category: 'CONSTRUCTION',
  },
  {
    id: 4,
    image: '/src/assets/images/project-4.jpg',
    title: 'EcoPower Solutions',
    category: 'RENEWABLE ENERGY',
  },
  {
    id: 5,
    image: '/src/assets/images/project-5.jpg',
    title: 'HeavyForge Ind.',
    category: 'AUTOMOTIVE',
  },
  {
    id: 6,
    image: '/src/assets/images/project-6.jpg',
    title: 'Machina Corp.',
    category: 'ENGINEERING',
  },
];