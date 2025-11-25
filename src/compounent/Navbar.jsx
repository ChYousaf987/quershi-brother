import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b-4 border-[#00FE00]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Qureshi Brothers"
              className="h-16 w-16 object-contain"
            />
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Qureshi <br /> <span className="text-[#CFA209]">Brothers</span>
            </h1>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "CLIENTS", path: "/clint" },
              { name: "TESTIMONIALS", path: "/testimonials" },
              { name: "CONTACT", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-bold text-sm tracking-wider transition-all duration-300 px-5 py-3 rounded-3xl ${
                    isActive
                      ? "bg-[#CFA209] text-white shadow-xl scale-105"
                      : "text-gray-700 hover:text-[#CFA209] hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Contact Button (Desktop Only) */}
          <button className="hidden lg:block px-7 py-3 bg-[#00d900] hover:bg-green-500 text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-gray-900 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-md transition-all overflow-hidden ${
          open ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-6">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT US", path: "/about" },
            { name: "CLIENTS", path: "/clint" },
            { name: "TESTIMONIALS", path: "/testimonials" },
            { name: "CONTACT", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block font-bold text-sm tracking-wider px-4 py-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#CFA209] text-white shadow-lg"
                    : "text-gray-700 hover:text-[#CFA209] hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Contact Button */}
          <button className="mt-3 px-7 py-3 bg-[#00d900] hover:bg-green-500 text-white font-bold text-lg rounded-full shadow-xl transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
