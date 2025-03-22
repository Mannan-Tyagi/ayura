"use client";
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import ThemeCards from './components/ThemeCards';
import GamificationSection from './components/GamificationSection';
import CommunitySection from './components/CommunitySection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function HomePage() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <ThemeCards />
      <GamificationSection />
      <CommunitySection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default HomePage;