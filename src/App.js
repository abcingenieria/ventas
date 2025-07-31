import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedBooks from './components/FeaturedBooks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <HeroSection />
      <FeaturedBooks />
      <CallToAction />
      <Footer />
    </div>
  );
}