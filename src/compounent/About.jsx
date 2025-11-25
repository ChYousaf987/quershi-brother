import React from "react";
import AboutSection from "./AboutSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* HERO BANNER – "ABOUT US" with Rollercoaster Image */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-green-400 to-green-900" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-widest drop-shadow-2xl">
            ABOUT US
          </h1>
        </div>
      </section>
      <AboutSection />
      <Footer />
    </>
  );
};

export default About;
