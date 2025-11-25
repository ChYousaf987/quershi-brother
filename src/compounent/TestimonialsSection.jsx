import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section
      className="py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #f8fdf8 0%, #ecffec 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* QB Logo + Certifications */}
        <div className="mb-12">
          <img
            src="/logo.png" // Your official cover logo with eagle & globe
            alt="Qureshi Brothers - Established 1988"
            className="h-32 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span style={{ color: "#CFA209" }}>What Our Global Clients</span>
          <br />
          <span className="text-[#00FE00]">Are Saying</span>
        </h2>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          For over 35 years, leading companies from UAE, Saudi Arabia, Qatar,
          Oman & Bahrain have trusted Qureshi Brothers to deliver skilled,
          reliable, and disciplined Pakistani workforce.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-[#00FE00] hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-gray-900">
                Eng. Ahmed Al-Mansoori
              </h4>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#CFA209] text-[#CFA209]"
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed text-left">
              “Qureshi Brothers supplied 450 skilled workers for our Dubai Metro
              Extension project. Their selection process is scientific,
              documentation flawless, and workers highly disciplined. Truly a
              partner we trust completely.”
            </p>
            <p className="text-right text-sm font-semibold text-[#00FE00] mt-4">
              — Project Director, UAE
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-[#CFA209] hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-gray-900">
                Mr. Faisal Bin Salman
              </h4>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#CFA209] text-[#CFA209]"
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed text-left">
              “We have been hiring technicians and engineers through QB since
              2018. Their pre-departure orientation and cultural training make
              integration seamless. The best manpower consultant in Pakistan —
              bar none.”
            </p>
            <p className="text-right text-sm font-semibold text-[#CFA209] mt-4">
              — HR Manager, Riyadh, KSA
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-[#00FE00] hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-gray-900">
                Dr. Omar Al-Khalidi
              </h4>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#CFA209] text-[#CFA209]"
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed text-left">
              “Recruited 120 hospitality staff for our 5-star Doha property.
              QB’s attention to detail, visa processing speed, and worker
              quality exceeded expectations. They live up to their motto: Faith,
              Prestige, and Honesty.”
            </p>
            <p className="text-right text-sm font-semibold text-[#00FE00] mt-4">
              — General Manager, Qatar
            </p>
          </div>
        </div>

        {/* Quaid's Vision Quote */}
        <div className="mt-20 bg-[#005909] text-white py-12 px-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/quaid-bg.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 text-[#CFA209] drop-shadow-lg">
              Quaid's Vision – Our Inspiration
            </h3>
            <p className="text-xl italic leading-relaxed">
              “Create enthusiasm and spirit and go forward with your task with
              courage and hope... Let it not be said that we did not prove equal
              to our task.”
            </p>
            <p className="text-right mt-4 font-bold text-2xl">
              — Quaid-e-Azam Muhammad Ali Jinnah
            </p>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-4 mt-12">
          <div className="w-12 h-2 bg-[#CFA209] rounded-full"></div>
          <div className="w-3 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
