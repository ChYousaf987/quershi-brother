// pages/Services.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Services = () => {
  const services = [
    {
      title: "Construction & Civil Engineering",
      desc: "Skilled & unskilled workforce for mega infrastructure projects: roads, bridges, airports, high-rise buildings, dams, and metro systems.",
    },
    {
      title: "Oil & Gas Sector",
      desc: "Certified engineers, technicians, rig workers, safety officers, and support staff for refineries, offshore platforms, and pipeline projects.",
    },
    {
      title: "Hospitality & Tourism",
      desc: "Professional chefs, hotel managers, housekeeping, front office staff, and service crews for 5-star hotels and resorts across the Gulf.",
    },
    {
      title: "Healthcare Professionals",
      desc: "Doctors, nurses, pharmacists, lab technicians, and paramedical staff for hospitals and medical centers.",
    },
    {
      title: "Manufacturing & Industrial",
      desc: "Welders, fabricators, electricians, mechanics, machine operators, and quality controllers for factories and industrial plants.",
    },
    {
      title: "IT & Administrative Staff",
      desc: "Software engineers, accountants, HR professionals, admin officers, and secretaries for corporate and government offices.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-green-400 to-green-900" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl uppercase font-black text-white drop-shadow-2xl">
            OUR SERVICES
          </h1>
        </div>
      </section>

      {/* HERO – Exact Replica of Your Services Brochure Cover */}

      {/* OUR SERVICES – Professional Grid */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Our <span className="text-[#CFA209]">Services</span>
            </h2>
            <p className="text-xl text-gray-700 mt-6 max-w-4xl mx-auto">
              We supply highly skilled, disciplined, and certified Pakistani
              workforce to leading companies in UAE, Saudi Arabia, Qatar, Oman,
              Bahrain, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-[#00FE00] hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#00FE00] to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl text-white font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#CFA209] mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#00FE00] to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300"
            >
              Request Manpower Now
            </a>
          </div>
        </div>
      </section>

      {/* QUAID’S VISION – Full Page Replica */}
     

      <Footer />
    </>
  );
};

export default Services;
