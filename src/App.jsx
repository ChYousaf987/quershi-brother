// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compounent/Home";
import About from "./compounent/About";
import Clint from "./compounent/Clint";
import Contact from "./compounent/Contact";
import Services from "./compounent/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clint" element={<Clint />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
