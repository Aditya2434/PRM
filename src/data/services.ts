// src/data/services.ts
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: 'Settings',
    title: 'RE-HEATING FURNACE INSTALLATION',
    description: 'Expert installation of high-efficiency re-heating furnaces, ensuring optimal thermal performance, uniform heating, and extended refractory lifespan for industrial applications.',
  },
  {
    id: 2,
    icon: 'Flame',
    title: 'BOILER REFRACTORY INSTALLATION',
    description: 'Professional boiler refractory installation services designed to enhance thermal efficiency and minimize heat loss. We utilize premium-grade materials for long-lasting durability in high-temperature environments.',
  },
  {
    id: 3,
    icon: 'Wrench',
    title: 'BOILER FURNACE MAINTENANCE',
    description: 'Comprehensive boiler furnace maintenance to prevent costly downtime and extend equipment lifespan. Our expert team ensures peak performance, operational safety, and maximum energy efficiency.',
  },
  {
    id: 4,
    icon: 'Activity',
    title: 'RE-HEATING FURNACE MAINTENANCE',
    description: 'Reliable re-heating furnace maintenance solutions to optimize heat distribution and reduce fuel consumption. We seamlessly troubleshoot and repair refractory linings to maintain uninterrupted production cycles.',
  },
  {
    id: 5,
    icon: 'Factory',
    title: 'KILN MAINTENANCE',
    description: 'Specialized kiln maintenance services for rotary and vertical operations. We provide expert refractory brick lining repair and replacement to maximize thermal stability and operational uptime for heavy industries.',
  },
  {
    id: 6,
    icon: 'Hexagon',
    title: 'MATERIAL ENGINEERING',
    description: 'Advanced material engineering focused on high-performance refractories and cast iron parts. We develop custom thermal solutions proven to withstand extreme industrial wear and severe chemical corrosion.',
  },
];