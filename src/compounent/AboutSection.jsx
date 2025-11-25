import React from "react";

const AboutSection = () => {
  return (
    <section
      className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-green-50"
      style={{
        background: "linear-gradient(135deg, #f8fdf8 0%, #ecffec 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE — TEXT */}
        <div className="space-y-8 order-2 lg:order-1">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Manpower Consultant of{" "}
            <span className="text-[#CFA209]">Prestige</span>
          </h2>

          <p className="text-3xl font-bold">
            Since <span className="text-green-700">1988</span>
          </p>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>Qureshi Brothers</strong> was founded in 1988 by{" "}
              <strong>Late Mr. Muhammad Akram Qureshi</strong> with a vision to
              become Pakistan's most trusted name in international manpower
              recruitment.
            </p>

            <p>
              ISO 9001 Certified and Government Licensed (OEP No. 0696/RWP), we
              specialize in supplying highly skilled and dedicated workforce to
              Gulf countries including UAE, Saudi Arabia, Qatar, Oman, and
              Bahrain.
            </p>

            <p>
              With over <strong>35 years of excellence</strong>, we proudly
              stand as a symbol of faith, integrity, and unmatched efficiency —
              delivering manpower solutions that power mega projects worldwide.
            </p>
          </div>

          <button className="px-7 py-3 bg-[#00d900] hover:bg-green-500 text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
            Discover Our Services
          </button>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="flex justify-center order-1 lg:order-2">
          <img
            src="https://clubtravalia.club/wp-content/uploads/2025/05/Home-Cover.png"
            alt="About Section"
            className="w-full max-w-md lg:max-w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
