// src/components/sections/StatsStrip.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Globe, Flame, Award, Building2 } from 'lucide-react';

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ to, suffix = '', duration = 2.2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, to, duration]);

  const formatted = to >= 1000 && suffix.includes('°C') ? `${count}` : count.toLocaleString();

  return (
    <span ref={nodeRef} className="tabular-nums inline-flex items-baseline select-none">
      <span>{formatted}</span>
      {suffix && (
        <span
          className="ml-1 font-bold text-[0.65em] tracking-normal"
          style={{
            background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 60%, #D97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {suffix}
        </span>
      )}
    </span>
  );
};

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sub: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  {
    id: 'mastery',
    target: 25,
    suffix: '+',
    label: 'Years Industrial Mastery',
    sub: 'Est. 2000 in Durgapur',
    icon: Award,
  },
  {
    id: 'furnaces',
    target: 100,
    suffix: '+',
    label: 'Re-heating Furnaces Built',
    sub: 'Pan-India & Global',
    icon: Flame,
  },
  {
    id: 'countries',
    target: 20,
    suffix: '+',
    label: 'Countries Reached',
    sub: 'Global Project Footprint',
    icon: Globe,
  },
  {
    id: 'clients',
    target: 100,
    suffix: '+',
    label: 'Clients in Iron & Steel',
    sub: 'Metallurgy Giants',
    icon: Building2,
  },
];

const StatsStrip: React.FC = () => {
  return (
    <div className="relative z-30 -mt-7 sm:-mt-9 lg:-mt-11 px-5 sm:px-8 lg:px-16 pointer-events-auto">
      <div className="max-w-6xl mx-auto">
        {/* Continuous soft floating motion wrapper */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative group/floating"
        >
          {/* Ambient Multi-layer Drop Glow Behind Card */}
          <div
            className="absolute -inset-1 rounded-2xl sm:rounded-3xl opacity-60 group-hover/floating:opacity-80 transition-opacity duration-700 blur-xl pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,0.22), rgba(15,23,42,0.6) 80%, transparent)',
            }}
          />

          {/* Floating Dock Container */}
          <div
            className="relative rounded-2xl sm:rounded-3xl backdrop-blur-2xl transition-all duration-500 overflow-hidden"
            style={{
              background:
                'linear-gradient(145deg, rgba(13,18,30,0.92) 0%, rgba(8,12,22,0.95) 50%, rgba(15,23,42,0.9) 100%)',
              border: '1px solid rgba(251,191,36,0.22)',
              boxShadow:
                '0 20px 50px -10px rgba(0,0,0,0.65), 0 0 25px -4px rgba(245,158,11,0.18), inset 0 1px 1px 0 rgba(255,255,255,0.12)',
            }}
          >
            {/* Top Amber Shimmer Laser Line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(251,191,36,0.1) 15%, rgba(251,191,36,0.9) 50%, rgba(251,191,36,0.1) 85%, transparent 100%)',
              }}
            />

            {/* Inner Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative px-3 sm:px-4 lg:px-5 py-4 sm:py-5 flex items-start gap-3 sm:gap-3.5 transition-all duration-300 hover:bg-white/[0.025]"
                  >
                    {/* Hover Glow Pill */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(circle 80px at 50% 50%, rgba(245,158,11,0.08) 0%, transparent 80%)',
                      }}
                    />

                    {/* Left Icon Accent Box */}
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(15,23,42,0.8) 100%)',
                        border: '1px solid rgba(245,158,11,0.25)',
                        boxShadow: '0 4px 12px -2px rgba(245,158,11,0.12)',
                      }}
                    >
                      <IconComponent className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-amber-400 group-hover:text-amber-300 transition-colors" />
                    </div>

                    {/* Metric Details */}
                    <div className="flex-1 min-w-0 text-left">
                      {/* Counter Number on its own clean line */}
                      <div
                        className="font-display font-black leading-none tracking-tight transition-all duration-300"
                        style={{
                          fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
                          background:
                            'linear-gradient(160deg, #FFFFFF 0%, #F1F5F9 45%, #CBD5E1 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 16px rgba(245,158,11,0.12))',
                        }}
                      >
                        <Counter to={stat.target} suffix={stat.suffix} duration={2.2} />
                      </div>

                      {/* Title below the number */}
                      <div
                        className="font-mono font-bold uppercase tracking-[0.1em] mt-1.5 leading-snug transition-colors duration-300"
                        style={{
                          fontSize: 'clamp(0.6rem, 0.78vw, 0.7rem)',
                          color: '#F59E0B',
                        }}
                      >
                        {stat.label}
                      </div>

                      {/* Context Subtitle below title */}
                      <div
                        className="text-[10px] sm:text-[11px] leading-tight text-slate-400 font-normal mt-0.5 group-hover:text-slate-300 transition-colors"
                      >
                        {stat.sub}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsStrip;
