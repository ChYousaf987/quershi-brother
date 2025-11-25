import React from "react";

const PerksSection = () => {
  return (
    <section className="bg-[#0f172a] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Why Top Companies <span className="text-[#CFA209]">Trust</span> Us
        </h2>
        <p className="text-xl text-gray-300 mb-16">
          Delivering Excellence in Manpower Recruitment for Over 35 Years
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Construction & Engineering",
              desc: "Skilled workers for mega infrastructure projects",
              icon: "Construction",
            },
            {
              title: "Oil & Gas Sector",
              desc: "Technicians, engineers, and support staff for refineries & rigs",
              icon: "Oil",
            },
            {
              title: "Hospitality & Healthcare",
              desc: "Trained professionals for 5-star hotels and medical facilities",
              icon: "Hospitality",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-[#CFA209]/30 hover:border-[#CFA209] transition-all group"
            >
              <div className="mx-auto mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#CFA209] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
