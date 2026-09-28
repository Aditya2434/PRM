// src/components/WhatsAppButton.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, ShieldCheck } from 'lucide-react';
import logo from '@/assets/logo.png';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

const QUICK_CHIPS = [
  { label: '🔥 Reheating Furnaces EPC', message: 'Hello PRM Team, I would like to inquire about Reheating Furnace EPC and turnkey engineering.' },
  { label: '🧱 Refractory Bricks & Castables', message: 'Hello PRM Team, I need pricing and specifications for High-Alumina Bricks and Castables.' },
  { label: '⚙️ Cast Iron & Foundry Parts', message: 'Hello PRM Team, I am looking for heat-resistant Cast Iron spares and foundry castings.' },
  { label: '⚡ Emergency Plant Relining', message: 'Hello PRM Team, We need urgent emergency shutdown refractory relining support.' },
];

const WhatsAppButton = ({
  phoneNumber = '7363993193',
  defaultMessage = 'Hello Paragon Refractories and Minerals, I would like to inquire about your products and services.'
}: WhatsAppButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');
  const [hasPromptDismissed, setHasPromptDismissed] = useState(false);
  const [showFloatingBubble, setShowFloatingBubble] = useState(false);

  // Clean phone number for WhatsApp URL
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const fullNumber = cleanNumber.startsWith('91') ? cleanNumber : `91${cleanNumber}`;

  // Show a polite floating prompt after 2.5 seconds if modal hasn't been opened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasPromptDismissed) {
        setShowFloatingBubble(true);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [hasPromptDismissed]);

  const openWhatsApp = (msgToSend: string) => {
    const text = msgToSend.trim() || defaultMessage;
    const url = `https://wa.me/${fullNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(customText);
    setCustomText('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none print:hidden">
      
      {/* ──────────────────────────────────────────────────────────
          1. INTERACTIVE WHATSAPP CHAT POPUP DRAWER
      ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-[90vw] sm:w-[395px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)] border border-slate-200/90 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white p-4 sm:p-5 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="w-11 h-11 rounded-full bg-white shadow-md border border-white/40 p-1.5 flex items-center justify-center overflow-hidden">
                      <img
                        src={logo}
                        alt="Paragon Refractories and Minerals"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm sm:text-base leading-tight flex items-center gap-1.5">
                      <span>Paragon Refractories and Minerals</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                    </div>
                    <div className="text-[11px] text-white/80 font-ui flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                      <span>Online • Direct Engineering Desk</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/25 flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                  aria-label="Close WhatsApp chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body (WhatsApp Light Pattern Backdrop) */}
            <div className="p-4 sm:p-5 bg-[#ECE5DD]/40 bg-blueprint-grid space-y-3.5 max-h-[360px] overflow-y-auto">
              
              {/* Message Bubble from PRM */}
              <div className="bg-white rounded-2xl rounded-tl-xs p-3.5 shadow-xs border border-slate-200/70 max-w-[90%]">
                <div className="text-xs font-semibold text-[#075E54] mb-0.5">
                  Paragon Refractories and Minerals
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-ui">
                  Namaste &amp; Hello! 👋 How can our metallurgical specialists assist you today?
                </p>
                <div className="text-[10px] text-slate-400 text-right mt-1 font-mono">
                  Typically replies in &lt; 15 mins
                </div>
              </div>

              {/* Quick Action Chips */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[10.5px] font-mono font-bold text-slate-500 uppercase tracking-wider px-1">
                  Choose a topic to chat:
                </div>
                <div className="flex flex-col gap-1.5">
                  {QUICK_CHIPS.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => openWhatsApp(chip.message)}
                      className="text-left px-3.5 py-2.5 rounded-xl bg-white hover:bg-emerald-50/80 border border-slate-200 hover:border-emerald-400/80 text-xs font-ui text-slate-800 hover:text-emerald-900 transition-all duration-200 flex items-center justify-between group shadow-2xs cursor-pointer"
                    >
                      <span className="font-medium">{chip.label}</span>
                      <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer Input Area */}
            <form onSubmit={handleSendCustomMessage} className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 h-10 px-3.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-ui text-slate-900 focus:outline-none focus:border-[#25D366] focus:bg-white transition-all"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95 cursor-pointer"
                title="Send message on WhatsApp"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ──────────────────────────────────────────────────────────
          2. FLOATING GREETING SPEECH BUBBLE (BEFORE CLICK)
      ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!isOpen && showFloatingBubble && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-3 flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl py-2.5 px-4 shadow-[0_12px_35px_rgba(0,0,0,0.12)] max-w-[280px] sm:max-w-xs"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-[#25D366] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div 
              onClick={() => {
                setIsOpen(true);
                setShowFloatingBubble(false);
              }}
              className="text-xs font-ui text-slate-800 cursor-pointer"
            >
              <span className="font-bold block leading-tight text-slate-900">Need quick answers?</span>
              <span className="text-[11px] text-slate-500">Chat directly on WhatsApp 👋</span>
            </div>
            <button
              onClick={() => {
                setShowFloatingBubble(false);
                setHasPromptDismissed(true);
              }}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ──────────────────────────────────────────────────────────
          3. MAIN GLOWING WHATSAPP LAUNCHER BUTTON
      ────────────────────────────────────────────────────────── */}
      <motion.button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowFloatingBubble(false);
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.45)] hover:shadow-[0_18px_45px_rgba(37,211,102,0.65)] transition-all duration-300 cursor-pointer"
        aria-label="Open WhatsApp Chat"
      >
        {/* Soft Radiating Pulse Halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping -z-10 pointer-events-none" />

        {/* Dynamic Icon Switch: Close 'X' if open, WhatsApp Icon if closed */}
        {isOpen ? (
          <X className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform group-hover:rotate-90" />
        ) : (
          <div className="relative flex items-center justify-center">
            {/* WhatsApp SVG Icon */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-7 h-7 sm:w-8 sm:h-8 fill-white transition-transform duration-300 group-hover:rotate-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 border-2 border-[#128C7E]" />
            </span>
          </div>
        )}
      </motion.button>

    </div>
  );
};

export default WhatsAppButton;
