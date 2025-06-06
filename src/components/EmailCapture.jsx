// components/EmailCapture.jsx

import React from "react";

export default function EmailCapture() {
  return (
    <section className="w-full py-16 px-6 bg-blue-50 text-center" id="contact">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        ¿Quieres recibir novedades de Nutritica?
      </h2>
      <form
        action="https://gmail.us11.list-manage.com/subscribe/post?u=f41d87bcda450b8c817e0401a&id=796ce18d0d&f_id=0014b0e1f0"
        method="POST"
        target="_blank"
        className="max-w-md mx-auto flex flex-col gap-4 items-center"
        noValidate
      >
        <input
          type="email"
          name="EMAIL"
          required
          placeholder="Tu correo electrónico"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Suscribirme
        </button>
      </form>
    </section>
  );
}
