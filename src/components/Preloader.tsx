"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";

interface PreloaderProps {
  onOpen: () => void;
}

export default function Preloader({ onOpen }: PreloaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleOpenDoors = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Trigger golden celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#C5A880", "#1B365D", "#F4E8D3", "#FFFFFF"],
      });
    } catch {
      // Confetti fallback
    }

    onOpen();

    setTimeout(() => {
      setIsFadingOut(true);
    }, 1800);
  };

  if (isFadingOut) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        isOpen ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        transitionDelay: isOpen ? "1.5s" : "0s",
      }}
    >
      {/* Left Door */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#FCFBF9] border-r border-[#C5A880]/30 shadow-2xl transition-transform duration-[1600ms] ease-[cubic-bezier(0.65,0,0.15,1)] z-10 ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 100% 50%, rgba(27, 54, 93, 0.04) 0%, transparent 70%),
            repeating-linear-gradient(45deg, rgba(197, 168, 128, 0.06) 0, rgba(197, 168, 128, 0.06) 1px, transparent 0, transparent 32px),
            repeating-linear-gradient(-45deg, rgba(197, 168, 128, 0.06) 0, rgba(197, 168, 128, 0.06) 1px, transparent 0, transparent 32px)
          `,
        }}
      >
        <div className="door-corner tl" />
        <div className="door-corner bl" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
      </div>

      {/* Right Door */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#FCFBF9] border-l border-[#C5A880]/30 shadow-2xl transition-transform duration-[1600ms] ease-[cubic-bezier(0.65,0,0.15,1)] z-10 ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 50%, rgba(27, 54, 93, 0.04) 0%, transparent 70%),
            repeating-linear-gradient(45deg, rgba(197, 168, 128, 0.06) 0, rgba(197, 168, 128, 0.06) 1px, transparent 0, transparent 32px),
            repeating-linear-gradient(-45deg, rgba(197, 168, 128, 0.06) 0, rgba(197, 168, 128, 0.06) 1px, transparent 0, transparent 32px)
          `,
        }}
      >
        <div className="door-corner tr" />
        <div className="door-corner br" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
      </div>

      {/* Center Invitation Card Seal & Content */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center text-center p-6 max-w-lg w-[90%] mx-auto transition-all duration-700 ${
          isOpen ? "opacity-0 scale-90 translate-y-6" : "opacity-100 scale-100 translate-y-0"
        }`}
      >
        {/* Decorative Outer Glow Card */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-[#C5A880]/40 shadow-2xl relative w-full overflow-hidden">
          {/* Subtle Corner Florals */}
          <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-25">
            <svg viewBox="0 0 100 100" className="text-[#1B365D] fill-current">
              <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-25 rotate-180">
            <svg viewBox="0 0 100 100" className="text-[#1B365D] fill-current">
              <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" />
            </svg>
          </div>

          {/* Bismillah Calligraphy */}
          <div className="font-arabic text-2xl md:text-3xl text-[#1B365D] font-bold mb-3 tracking-wide">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </div>

          <div className="text-xs uppercase tracking-[0.25em] text-[#8C6B2D] font-semibold mb-6">
            In the Name of Allah, the Most Gracious, the Most Merciful
          </div>

          {/* Elegant Monogram */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#D4AF37]/60 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#F4EFE6] shadow-inner relative group">
              <div className="absolute inset-1 rounded-full border border-dashed border-[#C5A880]/40 animate-[spin_40s_linear_infinite]" />
              <div className="font-cinzel text-3xl font-bold tracking-tighter text-[#1B365D] flex items-center justify-center">
                <span>S</span>
                <span className="text-[#C5A880] text-xl font-light mx-0.5">&</span>
                <span>R</span>
              </div>
            </div>
          </div>

          {/* Couple Names */}
          <h1 className="font-serif-luxury text-3xl md:text-4xl text-[#1B365D] font-medium tracking-wide mt-2">
            Swahiba <span className="font-script text-3xl text-[#C5A880]">&</span> Mohammed Raza
          </h1>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-12 bg-[#C5A880]/60" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#8C6B2D]">
              Wedding Invitation
            </span>
            <div className="h-[1px] w-12 bg-[#C5A880]/60" />
          </div>

          <p className="text-sm font-medium text-[#2D4C73] mb-6">
            Sunday · 20 September 2026<br />
            <span className="text-xs text-gray-500">Jumeirah Hills Convention Center, Chattipparamba</span>
          </p>

          {/* Open Invitation Button */}
          <button
            onClick={handleOpenDoors}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1B365D] via-[#2D4C73] to-[#1B365D] text-white font-cinzel text-sm tracking-widest uppercase font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-[#D4AF37]/60 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] group-hover:rotate-180 transition-transform duration-500" />
            <span>Open Invitation</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37] group-hover:rotate-180 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12" />
          </button>
        </div>
      </div>
    </div>
  );
}
