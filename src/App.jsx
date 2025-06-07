// Nutritica - App Principal (React + Tailwind mejorado)

import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import EmailCapture from "./components/EmailCapture";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Home />
      <About />
      <Testimonial />
      <Faq />
       <EmailCapture />
       <Footer /> 
    </div>
  );
}

export default App;
