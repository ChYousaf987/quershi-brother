import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import AboutSection from './AboutSection';
import PerksSection from './PerksSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <PerksSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default Home