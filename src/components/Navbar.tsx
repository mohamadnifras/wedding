"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Heart, Sparkles, Image as ImageIcon } from "lucide-react";

interface NavbarProps {
  onOpenCardModal: () => void;
}

export default function Navbar({ onOpenCardModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Nikah Details", href: "#details" },
    { name: "Countdown", href: "#countdown" },
    { name: "Duas & Prayers", href: "#duas" },
    { name: "Family", href: "#family" },
    { name: "Venue & Route", href: "#venue" },
    { name: "Wishes Wall", href: "#wishes" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FCFBF9]/90 backdrop-blur-md shadow-md py-3 border-b border-[#C5A880]/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          aria-label="Swahiba & Mohammed Raza Home"
        >
          <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-gradient-to-br from-[#1B365D] to-[#0D1929] text-[#D4AF37] shadow-md group-hover:scale-105 transition-transform duration-300">
            <span className="font-cinzel text-sm font-bold tracking-tight">SR</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-base md:text-lg font-bold text-[#1B365D] tracking-wide leading-none group-hover:text-[#8C6B2D] transition-colors">
              Swahiba & Raza
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-[#8C6B2D] mt-0.5">
              20 Sept 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-[#1B365D] hover:text-[#D4AF37] relative py-1 transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA: View Original Card */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCardModal}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37] text-xs font-cinzel tracking-wider uppercase font-semibold text-[#1B365D] bg-white/80 hover:bg-[#1B365D] hover:text-white hover:border-[#1B365D] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>View Card</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCardModal}
            className="p-2 text-[#1B365D] hover:text-[#D4AF37] rounded-full border border-[#C5A880]/40"
            title="View Original Card"
          >
            <ImageIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1B365D] hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFBF9]/95 backdrop-blur-xl border-b border-[#C5A880]/40 px-6 py-6 shadow-2xl animate-[fadeIn_0.3s_ease-out]">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-[#1B365D] hover:text-[#D4AF37] py-2 border-b border-gray-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#C5A880]">✦</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCardModal();
              }}
              className="mt-2 w-full py-3 rounded-full bg-[#1B365D] text-white text-xs font-cinzel tracking-widest uppercase font-semibold flex items-center justify-center gap-2"
            >
              <ImageIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>Inspect Original Cards</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
