// components/Features.jsx

import React from "react";

const features = [
  {
    title: "Asistente por voz y avatar",
    description: "Interacción natural y continua, guiada por un avatar personalizado.",
  },
  {
    title: "Recomendaciones personalizadas",
    description: "Basadas en síntomas, dieta, y datos de dispositivos portables.",
  },
  {
    title: "Simulaciones predictivas",
    description: "Explora escenarios '¿qué pasaría si?' para optimizar tu salud.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
        ¿Cómo funciona?
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
