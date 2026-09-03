"use client";

import React from "react";
import { Heart, Sparkles, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0D1929] via-[#09121D] to-black text-white pt-20 pb-12 overflow-hidden border-t border-[#D4AF37]/30">
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Arabic Closing Dua */}
        <div className="font-arabic text-2xl sm:text-3xl text-[#D4AF37] font-bold leading-relaxed mb-4">
          مَا شَاءَ اللَّهُ كَانَ وَمَا لَمْ يَشَأْ لَمْ يَكُنْ
        </div>

        <p className="text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase text-white/80 mb-6 font-semibold">
          May Allah Bless You Both and Unite You in Everlasting Goodness
        </p>

        {/* Monogram / Names */}
        <div className="my-6">
          <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] mx-auto flex items-center justify-center bg-[#1B365D] text-[#D4AF37] shadow-xl mb-4">
            <span className="font-cinzel text-xl font-bold">SR</span>
          </div>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Swahiba & Mohammed Raza
          </h3>
          <p className="text-xs font-cinzel text-[#C5A880] tracking-widest uppercase mt-2">
            Sunday · 20 September 2026 · Jumeirah Hills
          </p>
        </div>

        {/* Appreciation text */}
        <div className="max-w-md mx-auto my-8 text-xs text-white/60 leading-relaxed font-sans">
          With sincere gratitude from <strong className="text-white">Mr. Hamza</strong> (Elamkulam House) &amp; <strong className="text-white">Mr. Shaji</strong> (Karumannil House) and families.
        </div>

        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto my-8" />

        {/* Developer Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 border-t border-white/10">
          <div>
            &copy; 2026 Save The Date | All Rights Reserved
          </div>

          <div className="flex items-center gap-3">
            <span>Sharing The Happiness: <strong>Carrefresh Hypermart, Kottakkal</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
