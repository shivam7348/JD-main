import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import { motion } from 'framer-motion';

import slider1 from '../Slider/sliderImg/slider1.jpg';
import slider2 from '../Slider/sliderImg/slider2.jpeg';
import slider3 from '../Slider/sliderImg/slider3.jpg';
import slider4 from '../Slider/sliderImg/slider4.jpeg';

const slides = [
  { image: slider1, title: 'Welcome to JD Global School', subtitle: 'ENGLISH MEDIUMS' },
  { image: slider2, title: 'Welcome To J.D Global School', subtitle: '(A Co-Educational Group Of Schools)' },
  { image: slider3, title: 'Welcome To J.D Global School', subtitle: '(A Co-Educational Group Of Schools)' },
];

const Slider = () => {
  return (
    <section id="slider-part" className="w-full">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination, Keyboard]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        keyboard={{ enabled: true }}
        lazy={{ loadPrevNext: true }}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex items-center justify-center h-screen bg-cover bg-center text-green-500"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-10 text-center max-w-2xl mx-auto px-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{slide.title}</h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl">{slide.subtitle}</p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-next !text-white !opacity-70 hover:!opacity-100 !transition-opacity !duration-300"></div>
        <div className="swiper-button-prev !text-white !opacity-70 hover:!opacity-100 !transition-opacity !duration-300"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-8 !left-1/2 !transform !-translate-x-1/2 !flex !justify-center !items-center !gap-2"></div>
      </Swiper>

      {/* Styles for Swiper Navigation and Pagination */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          transition: opacity 0.3s ease;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: background-color 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: white;
        }
      `}</style>
    </section>
  );
};

export default Slider;