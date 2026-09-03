"use client";

import React from "react";
import { X, Download, Sparkles } from "lucide-react";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CardModal({ isOpen, onClose }: CardModalProps) {
  const card = {
    title: "Official Invitation Card",
    subtitle: "Swahiba & Mohammed Raza",
    image: "/images/cards/card_invitation.png",
    description: "Official physical wedding invitation card.",
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]">
      {/* Modal Wrapper */}
      <div className="relative max-w-xl w-full bg-[#FCFBF9] rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#C5A880]/30 bg-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="font-serif-luxury text-lg font-bold text-[#1B365D]">
              {card.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:text-[#1B365D] hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Card Viewer */}
        <div className="relative flex-1 p-6 flex items-center justify-center bg-[#FAF7F2] overflow-auto">
          <div className="relative max-h-[62vh] max-w-full flex items-center justify-center">
            <img
              src={card.image}
              alt={card.title}
              className="max-h-[62vh] w-auto object-contain rounded-xl shadow-2xl border border-[#C5A880]/40 transition-all duration-300"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#C5A880]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-xs font-bold text-[#1B365D]">
              {card.subtitle}
            </div>
            <div className="text-[11px] text-gray-500">
              {card.description}
            </div>
          </div>

          {/* Download / Open original */}
          <a
            href={card.image}
            download="swahiba-raza-wedding-invitation.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C5A880] text-xs font-semibold text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Card</span>
          </a>
        </div>
      </div>
    </div>
  );
}
