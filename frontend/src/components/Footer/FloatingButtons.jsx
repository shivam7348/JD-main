import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-33 right-4 space-y-3">
      <a
        href="https://wa.me/7678433751"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full flex items-center justify-center hover:bg-green-600 transition-all shadow-lg"
      >
        <FaWhatsapp className="text-4xl" />
      </a>

      <a
        href="tel:7678433751"
        className="bg-blue-500 p-3 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg"
      >
        <FaPhoneAlt className="text-xl" />
      </a>
    </div>
  );
};

export default FloatingButtons;