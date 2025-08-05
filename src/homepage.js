import React from 'react';
import HeroSection from './components/HeroSection';
import SpecialsSection from './components/SpecialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';

function Homepage() {
  return (
    <>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
}

export default Homepage;