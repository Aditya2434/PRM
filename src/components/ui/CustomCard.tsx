import { cn } from '@/lib/utils';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
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
      <div className="overflow-hidden mb-4 rounded-sm">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <h3 className="text-sm font-bold text-[#1e3a5f] mb-3 leading-snug group-hover:text-[#e63946] transition-colors uppercase tracking-tight">
        {title}
      </h3>
      <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-[#e63946]" />
          {date}
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle className="w-3 h-3 text-[#e63946]" />
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
      'group relative bg-white p-10 text-center border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2',
      className
    )}>
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#e63946] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
      
      {/* Icon Container */}
      <div className="mb-6 flex justify-center">
        <div className="relative w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-500 group-hover:bg-[#1e3a5f]">
          <Icon 
            className="w-8 h-8 text-[#1e3a5f] group-hover:text-white transition-colors duration-500" 
            strokeWidth={1.5} 
          />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-base font-bold mb-4 tracking-widest text-[#1e3a5f] uppercase group-hover:text-[#e63946] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500 font-medium mb-6">
        {description}
      </p>

      {/* Hover "Read More" link effect */}
      <div className="flex justify-center items-center gap-2 text-[10px] font-bold text-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.2em] uppercase">
        Read More <ArrowRight className="w-3 h-3" />
      </div>
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
    <div className={cn('group relative overflow-hidden cursor-pointer rounded-sm shadow-md', className)}>
      <img 
        src={image} 
        alt={title}
        className="w-full h-72 object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#0f172a]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
        <span className="text-[10px] font-bold text-[#e63946] uppercase tracking-[0.3em] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {category}
        </span>
        <h4 className="text-xl font-serif font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {title}
        </h4>
        <div className="mt-6 w-10 h-1 bg-[#e63946] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150" />
      </div>
    </div>
  );
};