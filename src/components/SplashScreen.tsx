// src/components/SplashScreen.tsx
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const TOTAL_DURATION = 2200;
const PROGRESS_DURATION = 1700;

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const startTime = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const raw = elapsed / PROGRESS_DURATION;

      const eased = 1 - Math.pow(1 - Math.min(raw, 1), 3);
      setProgress(Math.min(eased * 100, 100));

      if (elapsed < PROGRESS_DURATION) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("exit"), PROGRESS_DURATION + 150);
    const doneTimer = setTimeout(onComplete, TOTAL_DURATION);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white"
        >
          {/* Subtle blueprint grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: "radial-gradient(rgba(15,23,42,0.08) 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center text-center px-4 sm:px-8 w-full max-w-xs sm:max-w-sm z-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-5 sm:mb-6"
            >
              <img
                src={logo}
                alt="Paragon Refractories and Minerals"
                className="h-14 sm:h-16 w-auto max-w-[150px] object-contain"
              />
            </motion.div>

            {/* Company name in Plus Jakarta Sans */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center gap-1 mb-3"
            >
              <span className="text-[#090D16] font-display font-extrabold text-sm sm:text-base uppercase tracking-[0.22em]">
                PARAGON REFRACTORIES
              </span>
              <span className="text-[#D97706] font-display font-bold text-xs uppercase tracking-[0.26em]">
                &amp; MINERALS
              </span>
            </motion.div>

            {/* Amber accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="w-16 h-[2px] bg-gradient-to-r from-[#D97706] to-[#F59E0B] mb-5 rounded-full"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold mb-8"
            >
              High-Temperature Thermal Engineering
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-full max-w-[200px]"
            >
              <div className="w-full h-[3px] rounded-full overflow-hidden bg-slate-100 border border-slate-200/80">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#D97706] to-[#F59E0B] shadow-xs"
                  style={{
                    width: `${progress}%`,
                    transition: "width 16ms linear",
                  }}
                />
              </div>

              <div className="flex justify-between items-center mt-2 font-mono text-[9.5px] text-slate-400 uppercase tracking-widest font-semibold">
                <span>Initializing</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SplashScreen;
