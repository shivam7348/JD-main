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
        navigation
        pagination={{ clickable: true }}
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
              <div className="absolute inset-0 500 bg-opacity-50"></div>
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
      </Swiper>
    </section>
  );
};

export default Slider;