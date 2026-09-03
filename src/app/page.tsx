"use client";

import React, { useState } from "react";
import Preloader from "@/components/Preloader";
import AudioPlayer from "@/components/AudioPlayer";
import FloatingPetals from "@/components/FloatingPetals";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NikahDetails from "@/components/NikahDetails";
import Countdown from "@/components/Countdown";
import DuasSection from "@/components/DuasSection";
import FamilySection from "@/components/FamilySection";
import VenueSection from "@/components/VenueSection";
import WishesWall from "@/components/WishesWall";
import Footer from "@/components/Footer";
import CardModal from "@/components/CardModal";

export default function Home() {
  const [hasOpenedInvitation, setHasOpenedInvitation] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative selection:bg-[#D4AF37] selection:text-white bg-[#FCFBF9]">
      {/* 3D Islamic Royal Door Opening Preloader */}
      <Preloader onOpen={() => setHasOpenedInvitation(true)} />

      {/* Floating Watercolor Petals & Gold Sparkles Engine */}
      <FloatingPetals />

      {/* Background Ambient Audio Harmonies */}
      <AudioPlayer autoPlayTrigger={hasOpenedInvitation} />

      {/* Glassmorphic Sticky Navigation */}
      <Navbar onOpenCardModal={() => setIsCardModalOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Countdown Timer */}
      <Countdown />

      {/* Nikah & Ceremony Details */}
      <NikahDetails />

      {/* Quranic Verses & Duas */}
      <DuasSection />

      {/* Family Lineage Cards */}
      <FamilySection />

      {/* Venue & Recreated Road Route Map */}
      <VenueSection />

      {/* Interactive Wishes Wall, Guestbook & RSVP */}
      <WishesWall />

      {/* Footer */}
      <Footer />

      {/* Interactive 3D Original Card Inspector Modal */}
      <CardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />
    </main>
  );
}
