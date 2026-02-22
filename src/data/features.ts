export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: 'Flame',
    title: 'Industrial Refractory Materials',
    description: 'Protects furnaces, kilns, and boilers from thermal and chemical damage—reducing shutdowns and maintenance costs.',
  },
  {
    id: 2,
    icon: 'Cog',
    title: 'Mechanical Equipment',
    description: 'Robust heavy-duty mechanical equipment designed for reliable performance in industrial furnaces.',
  },
  {
    id: 3,
    icon: 'PaintBucket', // Changed from Bucket to Anvil
    title: 'Cast Iron Parts',
    description: 'Durable and high-quality cast iron components fabricated to withstand severe industrial environments and continuous stress.',
  },
];