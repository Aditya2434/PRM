export interface NewsItem {
  id: number;
  image: string;
  title: string;
  date: string;
  comments: number;
}

export const news: NewsItem[] = [
  {
    id: 1,
    image: '/src/assets/images/news-1.jpg',
    title: 'The Best in dolor sit amet consectetur adipisicing elit sed',
    date: 'Aug 24, 2017',
    comments: 0,
  },
  {
    id: 2,
    image: '/src/assets/images/news-2.jpg',
    title: 'The Best in dolor sit amet consectetur adipisicing elit sed',
    date: 'Aug 24, 2017',
    comments: 0,
  },
  {
    id: 3,
    image: '/src/assets/images/news-3.jpg',
    title: 'The Best in dolor sit amet consectetur adipisicing elit sed',
    date: 'Aug 24, 2017',
    comments: 0,
  },
  {
    id: 4,
    image: '/src/assets/images/news-4.jpg',
    title: 'The Best in dolor sit amet consectetur adipisicing elit sed',
    date: 'Aug 24, 2017',
    comments: 0,
  },
];
