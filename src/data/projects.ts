export interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    image: '/src/assets/images/project-1.jpg',
    title: 'Oil Refinery Project',
    category: 'OIL',
  },
  {
    id: 2,
    image: '/src/assets/images/project-2.jpg',
    title: 'Chemical Plant',
    category: 'MANUFACTURING',
  },
  {
    id: 3,
    image: '/src/assets/images/project-3.jpg',
    title: 'Industrial Warehouse',
    category: 'FACTORY',
  },
  {
    id: 4,
    image: '/src/assets/images/project-4.jpg',
    title: 'Pipeline System',
    category: 'GAS',
  },
  {
    id: 5,
    image: '/src/assets/images/project-5.jpg',
    title: 'Solar Energy Farm',
    category: 'ECO',
  },
  {
    id: 6,
    image: '/src/assets/images/project-6.jpg',
    title: 'Offshore Platform',
    category: 'OIL',
  },
  {
    id: 7,
    image: '/src/assets/images/project-7.jpg',
    title: 'Power Generation',
    category: 'INDUSTRY',
  },
  {
    id: 8,
    image: '/src/assets/images/project-8.jpg',
    title: 'Gas Processing',
    category: 'GAS',
  },
  {
    id: 9,
    image: '/src/assets/images/project-9.jpg',
    title: 'Wind Farm',
    category: 'ECO',
  },
];