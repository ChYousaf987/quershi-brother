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
        <div className="flex justify-center order-1 ">
          <img
            src="/mains-artguru.png"
            alt="About Section"
            className="w-full max-w-md lg:max-w-full h-full  rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-7xl mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <strong>Mr. Tanweer Ahmed</strong> completed his graduation in
              software engineering in 2001 and thereafter decided to do his
              masters in human resources as his business was related to this
              field.
            </p>
            <p>
              He completed his{" "}
              <strong>
                masters in Human Resources from Brunel University London UK in
                2005
              </strong>
              .
            </p>
            <p>
              After completing his masters, he joined Qureshi Brothers as a HR
              director. Under his supervision Qureshi Brothers grew by leaps and
              bounds. He has vast knowledge and experience of management and
              therefore is leading his company internationally, competing with
              the best manpower consultant agencies in Pakistan.
            </p>
            <p className="text-xl font-bold text-[#CFA209] pt-6">
              Today, under his dynamic leadership, Qureshi Brothers stands as
              one of the most trusted and prestigious names in international
              manpower recruitment.
            </p>
          </div>

          <button className="px-7 py-3 bg-[#00d900] hover:bg-green-500 text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
            Discover Our Services
          </button>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="flex justify-center ">
          <img
            src="/tanver.png"
            alt="About Section"
            className="w-full max-w-md lg:max-w-full  rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
