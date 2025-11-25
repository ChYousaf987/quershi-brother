// pages/Contact.jsx
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, connect to Formspree, EmailJS, or your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-green-400 to-green-900" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* HERO – Exact Brochure Cover Replica */}
      <section className="relative my-12 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900">
            Qureshi Brothers
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Established in <span className="text-[#CFA209]">1988</span>
          </p>

          <p className="text-4xl font-bold text-[#00FE00] mt-12 flex items-center justify-center gap-4">
            MANPOWER CONSULTANT
          </p>
          <p className="text-xl md:text-2xl text-gray-800 mt-4 max-w-4xl mx-auto font-medium">
            <strong>THE UNBEATEN NAME OF</strong>
            <br />
            FAITH, FACILITIES, PRESTIGE, EXPERIENCE, EFFICIENCY AND HONESTY.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + QUAID'S VISION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border-t-8 border-[#00FE00]">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-[#00FE00] mx-auto mb-4" />
                <p className="text-2xl font-bold text-[#CFA209]">Thank You!</p>
                <p className="text-gray-600 mt-2">
                  We will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-[#00FE00] focus:outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-[#00FE00] focus:outline-none transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-[#00FE00] focus:outline-none transition"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-[#00FE00] focus:outline-none transition"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message *"
                  required
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-[#00FE00] focus:outline-none transition resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00FE00] to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold text-xl py-5 rounded-xl shadow-xl hover:shadow-[#00FE00]/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send size={24} />
                  Send Message
                </button>
              </form>
            )}

            {/* Contact Info */}
            <div className="mt-10 space-y-4 text-gray-700">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#CFA209]" size={24} />
                <p>Plaza 2000, Plot No. 43, I-8 Markaz, Islamabad, Pakistan</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#CFA209]" size={24} />
                <p>+92 (51) 4938080 / 4938000</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#CFA209]" size={24} />
                <p>info@qureshibrothers.com</p>
              </div>
            </div>
          </div>

          {/* Right: Quaid’s Vision – Exact Brochure Page */}
          <div className="bg-[#004d00] rounded-3xl shadow-2xl overflow-hidden">
            <img
              src="/quaid.png" // Your exact Quaid page image
              alt="Quaid's Vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
