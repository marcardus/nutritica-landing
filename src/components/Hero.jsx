// components/Hero.jsx

import React from "react";

export default function Hero() {
  return (
    <section className="w-full text-center py-12 px-6 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
        Bienvenida a Nutritica
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        Tu compañero predictivo de salud que utiliza IA para ayudarte a optimizar tu nutrición y bienestar día a día.
      </p>
      <a
        href="#features"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Descubre cómo funciona
      </a>
    </section>
  );
}
