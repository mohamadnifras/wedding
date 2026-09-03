"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink, Sparkles, Building, Compass } from "lucide-react";

export default function VenueSection() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Jumeirah+Hills+Convention+Centre+Chattipparamba+Perinthalmanna+Road+Kerala";

  return (
    <section id="venue" className="py-24 relative bg-gradient-to-b from-[#FAF4EB]/40 via-white to-[#FAF4EB]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#C5A880]/40 text-xs font-cinzel font-semibold uppercase tracking-widest text-[#8C6B2D] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Grand Venue</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D]">
            Venue & Route Guide
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
          </div>
          <p className="text-sm text-gray-600 max-w-xl mx-auto font-sans">
            We eagerly anticipate welcoming you and your family to celebrate our special day at this splendid auditorium.
          </p>
        </div>

        {/* Grand Venue Main Showcase Card */}
        <div className="glass-panel rounded-3xl border border-[#C5A880]/40 shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Venue Image (7 cols) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] overflow-hidden">
              <img
                src="/images/venue.jpg"
                alt="Jumeirah Hills Convention Center"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-cinzel tracking-widest uppercase text-[#D4AF37] font-semibold block">
                  Convention Centre & Banquet
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
                  Jumeirah Hills Convention Center
                </h3>
              </div>
            </div>

            {/* Venue Details (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1B365D] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-xl font-bold text-[#1B365D]">
                    Jumeirah Hills Convention Center
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Perinthalmanna Road, Chattipparamba, Malappuram District, Kerala
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C5A880]/30 space-y-2 text-xs text-gray-700">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1B365D]">Event Timing:</span>
                  <span className="font-bold text-[#8C6B2D]">10:00 AM – 3:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1B365D]">Event Date:</span>
                  <span className="font-bold text-[#8C6B2D]">Sunday, 20 Sept 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1B365D]">Parking:</span>
                  <span className="text-emerald-700 font-semibold">Spacious Valet / On-site Available</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#1B365D] via-[#2D4C73] to-[#1B365D] text-white font-cinzel text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all border border-[#D4AF37]/50"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>Get Live Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Replicated Hand-Drawn Route Diagram (from Image 2) */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-[#C5A880]/40 shadow-xl flex flex-col items-center text-center">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] text-xs font-cinzel font-semibold uppercase text-[#8C6B2D] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Route & Landmark Schematic</span>
            </div>
            <h4 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1B365D]">
              Road Route Schematic
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-lg mx-auto">
              Clear road access connecting Kottakkal, Malappuram, and Perinthalmanna to Chattipparamba.
            </p>
          </div>

          {/* SVG Interactive Road Map Diagram (Replicating Invitation Card Diagram) */}
          <div className="my-6 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border-2 border-dashed border-[#C5A880]/50 w-full flex flex-col items-center justify-center relative">
            <svg viewBox="0 0 600 320" className="w-full h-auto max-w-2xl">
              {/* Dashed outer border */}
              <rect x="10" y="10" width="580" height="300" rx="20" fill="#FCFBF9" stroke="#1B365D" strokeWidth="1.5" strokeDasharray="6 4" />

              {/* Main Horizontal Road (Kottakkal <-> Perinthalmanna) */}
              <line x1="80" y1="180" x2="520" y2="180" stroke="#1B365D" strokeWidth="4" />
              <line x1="80" y1="190" x2="520" y2="190" stroke="#1B365D" strokeWidth="2" />

              {/* Branch Road from Malappuram */}
              <line x1="260" y1="80" x2="295" y2="180" stroke="#1B365D" strokeWidth="4" />
              <line x1="275" y1="76" x2="310" y2="180" stroke="#1B365D" strokeWidth="2" />

              {/* Arrows */}
              {/* Kottakkal Arrow */}
              <path d="M 170 170 L 195 170 L 190 165 M 195 170 L 190 175" stroke="#1B365D" strokeWidth="2.5" fill="none" />
              {/* Malappuram Down Arrow */}
              <path d="M 285 110 L 295 140 L 288 135 M 295 140 L 300 132" stroke="#1B365D" strokeWidth="2.5" fill="none" />
              {/* Perinthalmanna Arrow */}
              <path d="M 430 170 L 405 170 L 410 165 M 405 170 L 410 175" stroke="#1B365D" strokeWidth="2.5" fill="none" />

              {/* Central Junction Dot */}
              <circle cx="295" cy="185" r="5" fill="#1B365D" />

              {/* Road Labels */}
              <text x="100" y="172" fill="#1B365D" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Kottakkal ➔</text>
              <text x="220" y="65" fill="#1B365D" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Malappuram</text>
              <text x="420" y="172" fill="#1B365D" fontSize="16" fontWeight="bold" fontFamily="sans-serif">⬅ Perinthalmanna</text>

              <text x="240" y="215" fill="#1B365D" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Chattipparamba</text>

              {/* Auditorium Landmark Building Icon */}
              <g transform="translate(320, 90)">
                {/* Temple / Pillars Building SVG */}
                <path d="M 40 20 L 70 0 L 100 20 Z" fill="#D4AF37" stroke="#1B365D" strokeWidth="1.5" />
                <rect x="42" y="20" width="56" height="5" fill="#1B365D" />
                <rect x="46" y="25" width="6" height="25" fill="#1B365D" />
                <rect x="58" y="25" width="6" height="25" fill="#1B365D" />
                <rect x="76" y="25" width="6" height="25" fill="#1B365D" />
                <rect x="88" y="25" width="6" height="25" fill="#1B365D" />
                <rect x="40" y="50" width="60" height="5" fill="#1B365D" />

                {/* Convention Center Text Box */}
                <text x="110" y="28" fill="#1B365D" fontSize="14" fontWeight="bold" fontFamily="sans-serif">JUMEIRAH HILLS</text>
                <text x="110" y="46" fill="#1B365D" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Convention Centre</text>
              </g>
            </svg>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 italic mb-6">
            Jumeirah Hills Convention Centre is situated conveniently on Perinthalmanna Road at Chattipparamba.
          </p>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1B365D] via-[#2D4C73] to-[#1B365D] text-white font-cinzel text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all border border-[#D4AF37]/50"
          >
            <Navigation className="w-4 h-4 text-[#D4AF37]" />
            <span>Open Location in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/70" />
          </a>
        </div>
      </div>
    </section>
  );
}
