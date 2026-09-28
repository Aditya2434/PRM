export interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'S. K. Mukherjee',
    company: 'Director of Operations, Eastern Steel Works',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    text: 'Paragon Refractories has been our trusted supplier for high-alumina bricks and custom precast shapes for our 120 TPH reheat furnace. Outstanding thermal resilience and zero unplanned down-time over 18 months of campaign life.',
  },
  {
    id: 2,
    name: 'Rajesh Sharma',
    company: 'Chief Metallurgist, Apex Alloy & Power',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    text: 'Their low-cement castables and anchor bricks withstood severe thermal cycling during our rolling mill revamps. Timely dispatch, strict adherence to IS/ASTM standards, and remarkable metallurgical support.',
  },
  {
    id: 3,
    name: 'Amitabh Sen',
    company: 'Plant Head, Modern Re-Rolling Mills',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    text: 'Exceptional service and dimensional accuracy. The 70% and 80% alumina bricks delivered remarkable refractory life in our soaking zone. Highly recommended for heavy thermal applications.',
  },
];
