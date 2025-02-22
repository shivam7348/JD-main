import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "https://jdglobalschool.in/images/teachers/rachna.png",
    quote:
      "Let us remember: One book, one pen, one child and one teacher can change the world.",
    name: "Rohit Sharma",
    designation: "Bsc, Engineering",
  },
  {
    img: "https://jdglobalschool.in/images/teachers/rachna.png",
    quote:
      "It’s one of my favorite seasons of the year: Back to School. As a kid, I loved fresh school supplies, new outfits, the change of seasons, and the chance to crack open a new textbook.",
    name: "Sanjana Shegal",
    designation: "Bsc, Engineering",
  },
  {
    img: "https://jdglobalschool.in/images/teachers/rachna.png",
    quote: "This is a new year. A new beginning. And things will change.",
    name: "Sachin Sharma",
    designation: "Bsc, Engineering",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="relative py-28 bg-fit bg-center text-white"
      style={{ backgroundImage: "url(images)" }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>
      <div className="container mx-auto relative z-10 px-6">
        <div className="max-w-2xl">
          <h5 className="text-lg font-semibold text-gray-300">Testimonial</h5>
          <h2 className="text-4xl font-bold text-white">What they say</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-gray-800"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                />
                <div className="ml-4">
                  <h6 className="text-lg font-semibold">{testimonial.name}</h6>
                  <span className="text-sm text-gray-500">
                    {testimonial.designation}
                  </span>
                </div>
              </div>
              <p className="italic text-gray-700">“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
