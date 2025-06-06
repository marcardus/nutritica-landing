// Nutritica - App Principal (React + Tailwind mejorado)

import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import EmailCapture from "./components/EmailCapture";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Home />
      <Hero />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Features />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
            Asistente Inteligente
          </h2>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow text-center">
          <EmailCapture />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
