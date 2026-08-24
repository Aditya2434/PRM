// src/components/SplashScreen.tsx
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

// Duration constants (ms)
const TOTAL_DURATION = 2600;
const PROGRESS_DURATION = 2000;

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const startTime = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // Smooth progress animation via requestAnimationFrame
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const raw = elapsed / PROGRESS_DURATION;

      // Ease-out cubic for a natural deceleration
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

  // Orchestrate phases
  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("exit"), PROGRESS_DURATION + 200);
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
          exit={{ y: "-100%", transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#0d1f35" }}
        >
          {/* ── Blueprint dot-grid texture ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(196,154,60,0.12) 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* ── Top-left engineering corner accent ── */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 pointer-events-none"
            style={{
              borderTop: "2px solid rgba(196,154,60,0.5)",
              borderLeft: "2px solid rgba(196,154,60,0.5)",
            }}
          />

          {/* ── Bottom-right engineering corner accent ── */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 pointer-events-none"
            style={{
              borderBottom: "2px solid rgba(196,154,60,0.5)",
              borderRight: "2px solid rgba(196,154,60,0.5)",
            }}
          />

          {/* ── Center content ── */}
          <div className="relative flex flex-col items-center text-center px-4 xs:px-6 sm:px-8 w-full max-w-xs sm:max-w-sm">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mb-5 sm:mb-7"
            >
              <img
                src={logo}
                alt="Paragon Refractories and Minerals"
                className="h-12 xs:h-14 sm:h-16 md:h-20 w-auto max-w-[120px] sm:max-w-[160px] object-contain bg-transparent drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
              />
            </motion.div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.35 }}
              className="flex flex-col items-center gap-1 mb-2"
            >
              <span
                className="text-white font-bold uppercase"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "clamp(0.6rem, 3vw, 0.875rem)",
                  letterSpacing: "clamp(0.12em, 1.5vw, 0.28em)",
                }}
              >
                PARAGON REFRACTORIES
              </span>
              <span
                className="font-bold uppercase"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "clamp(0.5rem, 2.5vw, 0.75rem)",
                  letterSpacing: "clamp(0.12em, 1.5vw, 0.3em)",
                  background: "linear-gradient(90deg, #c49a3c, #9a7530)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                & MINERALS
              </span>
            </motion.div>

            {/* Gold accent rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              style={{
                originX: 0,
                background: "linear-gradient(90deg, #c49a3c, #9a7530)",
              }}
              className="w-16 sm:w-24 h-[2px] mb-5 sm:mb-8 rounded-full"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-[#8a9ab0] tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold mb-10 sm:mb-14"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(0.55rem, 2vw, 0.75rem)",
              }}
            >
              Excellence in Engineering
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="w-full max-w-[160px] xs:max-w-[192px] sm:max-w-[256px]"
            >
              {/* Track */}
              <div
                className="w-full h-[2px] rounded-full overflow-hidden"
                style={{ background: "rgba(13,31,53,0.9)" }}
              >
                {/* Fill */}
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #c49a3c, #9a7530)",
                    boxShadow: "0 0 8px rgba(196,154,60,0.6)",
                    transition: "width 16ms linear",
                  }}
                />
              </div>

              {/* Progress label */}
              <div className="flex justify-between items-center mt-2">
                <span
                  className="text-[#4a6080] uppercase font-bold tabular-nums"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "clamp(0.5rem, 2vw, 0.5625rem)",
                    letterSpacing: "0.2em",
                  }}
                >
                  Loading
                </span>
                <span
                  className="text-[#4a6080] font-bold tabular-nums"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "clamp(0.5rem, 2vw, 0.5625rem)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── Bottom steel-rule — gold → navy → transparent ── */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{
              background: "linear-gradient(90deg, #c49a3c 0%, #0d1f35 40%, transparent 100%)",
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SplashScreen;
