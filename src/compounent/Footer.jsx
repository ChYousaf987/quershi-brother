import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo & Motto */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="rounded-xl shadow-2xl">
              <img
                src="logo.png"
                alt="QB"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                Qureshi <span className="text-[#CFA209]">Brothers</span>
              </h2>
              <p className="text-xs text-gray-400">Since 1988</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-[#CFA209]">The Unbeaten Name of</strong>
            <br />
            Faith, Facilities, Prestige,
            <br />
            Experience, Efficiency and Honesty.
          </p>

          <div className="flex gap-4">
            <img src="/iso-9001.png" alt="ISO 9001" className="h-12" />
            <img src="/rici.png" alt="RICI" className="h-12" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-[#CFA209] mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            {[
              "Home",
              "About Us",
              "Our Services",
              "Global Clients",
              "Testimonials",
              "Career",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-[#00FE00] transition flex items-center gap-2"
                >
                  <span className="text-[#CFA209]">→</span> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-[#CFA209] mb-6">
            Get In Touch
          </h3>
          <div className="space-y-5 text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#00FE00] mt-1" size={20} />
              <p className="text-sm">
                Plaza 2000, Plot No. 43,
                <br />
                I-8 Markaz, Islamabad, Pakistan
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#00FE00]" size={20} />
              <p className="text-sm">+92 (51) 4938080 / 4938000</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#00FE00]" size={20} />
              <p className="text-sm">info@qureshibrothers.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-[#00FE00]" size={20} />
              <a
                href="https://www.qureshibrothers.com"
                className="text-sm underline hover:text-[#CFA209]"
              >
                www.qureshibrothers.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Social & Vision */}
        <div>
          <h3 className="text-xl font-bold text-[#CFA209] mb-6">Follow Us</h3>
          <div className="flex gap-5 mb-8">
            <a href="#" className="text-[#00FE00] hover:scale-125 transition">
              <Facebook size={28} />
            </a>
            <a href="#" className="text-[#00FE00] hover:scale-125 transition">
              <Instagram size={28} />
            </a>
            <a href="#" className="text-[#00FE00] hover:scale-125 transition">
              <Linkedin size={28} />
            </a>
          </div>

          <div className="bg-gradient-to-r from-[#00FE00]/10 to-[#CFA209]/10 p-6 rounded-2xl border border-[#CFA209]/30">
            <p className="text-[#CFA209] font-bold text-lg mb-2">
              Quaid's Vision
            </p>
            <p className="text-xs italic text-gray-300 leading-relaxed">
              "Create enthusiasm and spirit and go forward with courage and
              hope..."
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Qureshi Brothers. All Rights Reserved. |
          OEP License No. 0696/RWP | Member POEPA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
