import { cn } from '@/lib/utils';
import { Calendar, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  comments: number;
  className?: string;
}

export const NewsCard = ({ 
  image, 
  title, 
  date, 
  comments,
  className 
}: NewsCardProps) => {
  return (
    <article className={cn('group cursor-pointer', className)}>
      <div className="overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-sm font-semibold text-[#1e3a5f] mb-3 leading-snug group-hover:text-[#e63946] transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3 text-[#00b4d8]" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <MessageCircle className="w-3 h-3 text-[#00b4d8]" />
          {comments} Comments
        </span>
      </div>
    </article>
  );
};

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  className 
}: ServiceCardProps) => {
  return (
    <div className={cn(
      'bg-white p-8 text-center border border-gray-200 group hover:shadow-lg transition-shadow duration-300',
      className
    )}>
      <div className="mb-4 flex justify-center">
        <Icon 
          className="w-10 h-10 text-[#1e3a5f] group-hover:text-[#e63946] transition-colors" 
          strokeWidth={1.5} 
        />
      </div>
      <h3 className="text-sm font-bold mb-3 tracking-wide text-[#1e3a5f]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
};

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  className?: string;
}

export const ProjectCard = ({ 
  image, 
  title, 
  category,
  className 
}: ProjectCardProps) => {
  return (
    <div className={cn('group relative overflow-hidden cursor-pointer', className)}>
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#1e3a5f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h4 className="text-lg font-semibold mb-1">{title}</h4>
          <span className="text-sm text-gray-300">{category}</span>
        </div>
      </div>
    </div>
  );
};
