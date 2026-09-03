"use client";

import React from "react";
import { Users, Sparkles, Heart, Home } from "lucide-react";

export default function FamilySection() {
  return (
    <section id="family" className="py-24 relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#C5A880]/40 text-xs font-cinzel font-semibold uppercase tracking-widest text-[#8C6B2D] mb-3">
            <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Honored Families</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D]">
            Family Lineage & Blessings
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
          </div>
          <p className="text-sm text-gray-600 max-w-xl mx-auto font-sans">
            Two noble families united by faith, love, and tradition coming together to celebrate the sacred union.
          </p>
        </div>

        {/* Family Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-center">
          {/* Bride's Family Card (Left - 5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FAF7F2] border border-[#C5A880]/40 shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#1B365D] to-[#D4AF37]" />

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-[#1B365D] text-white text-[11px] font-cinzel font-bold tracking-widest uppercase">
                Bride's Family
              </span>
              <Heart className="w-5 h-5 text-[#D4AF37]" />
            </div>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Beloved Daughter</span>
              <h3 className="font-serif-luxury text-3xl font-bold text-[#1B365D] mt-1">
                Swahiba
              </h3>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#C5A880]/30 text-sm">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#8C6B2D]">Father</span>
                <div className="font-serif-luxury text-lg font-bold text-gray-800">
                  Mr. Hamza
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#8C6B2D]">Family Residence</span>
                <div className="flex items-center gap-2 text-gray-700 mt-0.5">
                  <Home className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-medium">Elamkulam (H), Akkapparamba</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-xs italic text-gray-600 font-serif">
              “Praying for endless love, peace, and prosperity in her new chapter.”
            </div>
          </div>

          {/* Center Couple Portrait (1 col on large screens) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center my-4 lg:my-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B365D] to-[#0D1929] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl">
              <span className="font-script text-2xl">&</span>
            </div>
          </div>

          {/* Groom's Family Card (Right - 5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FAF7F2] border border-[#C5A880]/40 shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#D4AF37] to-[#1B365D]" />

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-[#1B365D] text-white text-[11px] font-cinzel font-bold tracking-widest uppercase">
                Groom's Family
              </span>
              <Heart className="w-5 h-5 text-[#D4AF37]" />
            </div>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Beloved Son</span>
              <h3 className="font-serif-luxury text-3xl font-bold text-[#1B365D] mt-1">
                Mohammed Raza
              </h3>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#C5A880]/30 text-sm">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#8C6B2D]">Father</span>
                <div className="font-serif-luxury text-lg font-bold text-gray-800">
                  Mr. Shaji
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#8C6B2D]">Family Residence</span>
                <div className="flex items-center gap-2 text-gray-700 mt-0.5">
                  <Home className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-medium">Karumannil (H), Kolathuparambu</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-xs italic text-gray-600 font-serif">
              “Welcoming our beloved new family member with immense joy and blessings.”
            </div>
          </div>
        </div>

        {/* Couple Illustration Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block p-3 rounded-full bg-[#FAF7F2] border-2 border-[#D4AF37]/50 shadow-md">
            <img
              src="/images/couple.jpg"
              alt="Swahiba & Mohammed Raza Wedding Portrait"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover shadow-inner"
            />
          </div>
          <div className="font-serif-luxury text-lg font-bold text-[#1B365D] mt-3">
            Swahiba & Mohammed Raza
          </div>
          <p className="text-xs text-[#8C6B2D] font-cinzel uppercase tracking-widest">
            Together Forever Insha'Allah
          </p>
        </div>
      </div>
    </section>
  );
}
