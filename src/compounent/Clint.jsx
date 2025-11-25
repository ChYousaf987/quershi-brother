import React from 'react'
import Navbar from './Navbar'
import TestimonialsSection from './TestimonialsSection'
import Footer from './Footer'

const Clint = () => {
  return (
    <>
      <Navbar />
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-green-400 to-green-900" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl uppercase font-black text-white drop-shadow-2xl">
            clints say
          </h1>
        </div>
      </section>
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default Clint