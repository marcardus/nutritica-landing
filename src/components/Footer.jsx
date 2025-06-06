// components/Footer.jsx

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-50 text-center py-6 mt-12 border-t">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Nutritica. Todos los derechos reservados.
      </p>
    </footer>
  );
}
