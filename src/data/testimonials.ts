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
    name: 'Robert Lav',
    company: 'Gaspol ltd',
    image: '/src/assets/images/testimonial-1.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Nulla interdum dapibus erat nec elementum.',
  },
  {
    id: 2,
    name: 'Paul Juwaal',
    company: 'Gasman ltd',
    image: '/src/assets/images/testimonial-2.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Nulla interdum dapibus erat nec elementum.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    company: 'PetroMax Inc',
    image: '/src/assets/images/testimonial-1.jpg',
    text: 'Exceptional service and outstanding results. The team delivered beyond our expectations. Highly recommended for any industrial project needs.',
  },
];
