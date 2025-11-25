import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video or Image */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Logo */}

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide drop-shadow-2xl">
          Welcome to Qureshi Brothers
        </h1>

        <p className="mt-6 text-2xl md:text-3xl font-light text-[#CFA209] tracking-wider">
          Established in 1988
        </p>

        <p className="mt-4 text-xl md:text-2xl text-white max-w-4xl">
          The Unbeaten Name of Faith, Facilities, Prestige, Experience,
          Efficiency and Honesty
        </p>

        <button className="mt-12 px-12 py-5 bg-[#00d900] hover:bg-green-500 text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
          Explore Manpower Solutions
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-10 h-14 border-2 border-[#CFA209] rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-[#CFA209] rounded-full mt-3 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
