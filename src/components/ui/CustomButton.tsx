import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineDark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  onClick,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-sm';
  
  const variants = {
    primary: 'bg-[#c49a3c] text-white hover:bg-[#9a7530]',
    secondary: 'bg-[#0d1f35] text-white hover:bg-[#07111f]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#0d1f35]',
    outlineDark: 'border-2 border-[#0d1f35] text-[#0d1f35] hover:bg-[#0d1f35] hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
