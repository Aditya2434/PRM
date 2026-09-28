// src/components/ui/CustomCard.tsx
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Calendar, MessageCircle, ArrowRight, Send, X, 
  User, Building2, AtSign, PhoneCall, MessageSquare, CheckCircle2, AlertCircle 
} from 'lucide-react';
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
      <h3 className="text-sm font-bold text-[#090D16] mb-3 leading-snug group-hover:text-[#D97706] transition-colors uppercase tracking-tight">
        {title}
      </h3>
      <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-[#D97706]" />
          {date}
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle className="w-3 h-3 text-[#D97706]" />
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
      'group relative bg-white p-10 text-center border border-slate-200/80 rounded-lg transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(9,13,22,0.08)] hover:-translate-y-1',
      className
    )}>
      <div className="absolute top-0 left-0 w-full h-1 bg-[#D97706] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
      
      <div className="mb-6 flex justify-center">
        <div className="relative w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-500 group-hover:bg-[#090D16]">
          <Icon 
            className="w-8 h-8 text-[#090D16] group-hover:text-amber-400 transition-colors duration-500" 
            strokeWidth={1.5} 
          />
        </div>
      </div>

      <h3 className="text-base font-bold mb-4 tracking-widest text-[#090D16] uppercase group-hover:text-[#D97706] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500 font-medium mb-6">
        {description}
      </p>

      <div className="flex justify-center items-center gap-2 text-[10px] font-bold text-[#D97706] opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.2em] uppercase">
        Read More <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
};

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  detail?: string;
  tag?: string; 
  className?: string;
  showEnquiry?: boolean;
}

export const ProjectCard = ({ 
  image, 
  title, 
  category,
  detail,
  tag,
  className,
  showEnquiry = false 
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const ACCESS_KEY = "e0c4e386-1dea-4873-86d2-5edee06ea579"; 
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Product Inquiry: ${title} from ${formData.company || formData.name}`,
          ...formData,
          from_name: "PRM Website Projects Inquiry",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus('idle');
          setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        }, 2500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* 3D Flip Card Container */}
      <div className={cn('group relative h-60 sm:h-72 w-full [perspective:1000px] cursor-pointer', className)}>
        {/* Flipping Inner Container */}
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md rounded-xl sm:rounded-sm overflow-hidden">
          
          {/* Front Face (Image + Title Below) */}
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] flex flex-col overflow-hidden bg-white border border-gray-100 z-10">
            <div className="relative flex-1 w-full overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
              {/* Correct Location Tag on Front Face Only */}
              {tag && (
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#D97706]/95 backdrop-blur-sm border border-white/20 text-white text-[8.5px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider sm:tracking-widest z-20 shadow-md pointer-events-none select-none">
                  {tag}
                </div>
              )}
            </div>
            <div className="h-14 sm:h-[72px] w-full flex items-center justify-center px-2 sm:px-4 bg-white border-t border-slate-100">
              <h4 className="text-xs sm:text-sm font-bold text-[#090D16] text-center line-clamp-2 leading-snug">
                {title}
              </h4>
            </div>
          </div>

          {/* Back Face (Text with dark film - NO tag here to prevent mirror inversion) */}
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
            {/* Background image slightly blurred for the back face */}
            <img 
              src={image} 
              alt={`${title} background`}
              className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-110"
            />
            {/* Dark film overlay and content */}
            <div className="absolute inset-0 bg-[#090D16]/80 flex flex-col items-center justify-center p-3 sm:p-6 text-center z-10">

              <span className="text-[8.5px] sm:text-[10px] font-bold text-amber-400 uppercase tracking-widest sm:tracking-[0.25em] mb-1 sm:mb-3 font-mono">
                {category}
              </span>
              
              {detail && (
                <h4 className="text-xs sm:text-sm font-sans font-semibold text-gray-100 mt-1 sm:mt-3 leading-snug sm:leading-relaxed px-1 sm:px-2 whitespace-pre-line line-clamp-3 sm:line-clamp-none">
                  {detail}
                </h4>
              )}
              
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Enquiry Modal */}
      {showEnquiry && isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#090D16]/80 backdrop-blur-sm transition-opacity">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
              <div>
                <span className="text-[#D97706] text-xs font-mono font-bold tracking-[0.2em] uppercase mb-1 block">
                  Product Enquiry
                </span>
                <h3 className="text-2xl font-display font-bold text-[#090D16]">{title}</h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#D97706] hover:border-[#D97706] transition-colors shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400 group-focus-within:text-[#D97706] transition-colors" />
                    </div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-[#D97706]/20 focus:border-[#D97706] block pl-11 p-3.5 transition-all outline-none" placeholder="Full Name *" />
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-slate-400 group-focus-within:text-[#D97706] transition-colors" />
                    </div>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} disabled={isSubmitting}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-[#D97706]/20 focus:border-[#D97706] block pl-11 p-3.5 transition-all outline-none" placeholder="Company Name" />
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <AtSign className="h-5 w-5 text-slate-400 group-focus-within:text-[#D97706] transition-colors" />
                    </div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-[#D97706]/20 focus:border-[#D97706] block pl-11 p-3.5 transition-all outline-none" placeholder="Email Address *" />
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <PhoneCall className="h-5 w-5 text-slate-400 group-focus-within:text-[#D97706] transition-colors" />
                    </div>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required disabled={isSubmitting}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-[#D97706]/20 focus:border-[#D97706] block pl-11 p-3.5 transition-all outline-none" placeholder="Phone Number *" />
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400 group-focus-within:text-[#D97706] transition-colors" />
                  </div>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={3} disabled={isSubmitting}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-[#D97706]/20 focus:border-[#D97706] block pl-11 p-3.5 transition-all outline-none resize-none" placeholder="Additional requirements..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#090D16] hover:bg-[#D97706] disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-ui font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/20 disabled:shadow-none cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Request'}</span>
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center justify-center gap-2 text-green-700 bg-green-50 p-4 rounded-lg border border-green-200 mt-4 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle2 className="w-5 h-5" /> 
                    <p className="text-sm font-semibold">Success! We will contact you shortly.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center justify-center gap-2 text-red-700 bg-red-50 p-4 rounded-lg border border-red-200 mt-4 animate-in fade-in slide-in-from-bottom-2">
                    <AlertCircle className="w-5 h-5" /> 
                    <p className="text-sm font-semibold">Failed to send. Please try again.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};