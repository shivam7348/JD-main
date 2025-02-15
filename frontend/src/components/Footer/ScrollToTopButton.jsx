import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-4 bg-red-500 p-3 rounded-full flex items-center justify-center hover:bg-red-600 transition-all shadow-lg"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTopButton;