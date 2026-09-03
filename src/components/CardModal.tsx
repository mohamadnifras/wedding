"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Sparkles } from "lucide-react";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CardModal({ isOpen, onClose }: CardModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: "Main Invitation Card",
      subtitle: "Swahiba & Mohammed Raza",
      image: "/images/cards/card_invitation.png",
      description: "Original physical wedding invitation with blue watercolor botanical artwork.",
    },
    {
      title: "Location Map & QR Code",
      subtitle: "Jumeirah Hills Convention Center, Chattipparamba",
      image: "/images/cards/card_map.png",
      description: "Route junction directions from Kottakkal, Malappuram, and Perinthalmanna.",
    },
    {
      title: "Cover & SR Monogram",
      subtitle: "Sunday, 20 Sept 2026",
      image: "/images/cards/card_monogram.png",
      description: "Luxury monogram emblem and signature save the date card.",
    },
  ];

  if (!isOpen) return null;

  const nextCard = () => setCurrentSlide((prev) => (prev + 1) % cards.length);
  const prevCard = () => setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]">
      {/* Modal Wrapper */}
      <div className="relative max-w-2xl w-full bg-[#FCFBF9] rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#C5A880]/30 bg-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="font-serif-luxury text-lg font-bold text-[#1B365D]">
              {cards[currentSlide].title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:text-[#1B365D] hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Card Viewer */}
        <div className="relative flex-1 p-6 flex items-center justify-center bg-[#FAF7F2] overflow-auto">
          <div className="relative max-h-[60vh] max-w-full flex items-center justify-center">
            <img
              src={cards[currentSlide].image}
              alt={cards[currentSlide].title}
              className="max-h-[60vh] w-auto object-contain rounded-xl shadow-2xl border border-[#C5A880]/40 transition-all duration-300"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-[#1B365D] border border-[#C5A880]/40 shadow-lg hover:bg-[#1B365D] hover:text-white transition-all duration-200"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-[#1B365D] border border-[#C5A880]/40 shadow-lg hover:bg-[#1B365D] hover:text-white transition-all duration-200"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer & Thumbnails */}
        <div className="px-6 py-4 bg-white border-t border-[#C5A880]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-xs font-bold text-[#1B365D]">
              {cards[currentSlide].subtitle}
            </div>
            <div className="text-[11px] text-gray-500">
              {cards[currentSlide].description}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {cards.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "w-8 bg-[#1B365D]" : "bg-[#C5A880]/40 hover:bg-[#C5A880]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Download / Open original */}
          <a
            href={cards[currentSlide].image}
            download={`swahiba-raza-${cards[currentSlide].title.toLowerCase().replace(/\s+/g, "-")}.png`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C5A880] text-xs font-semibold text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
}
