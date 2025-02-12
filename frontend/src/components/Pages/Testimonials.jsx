import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    text: "It's one of my favorite seasons of the year: Back to School. As a kid, I loved fresh school supplies, new outfits, the change of seasons, and the chance to crack open a new book.",
    author: "Sachin Sharma",
  },
  {
    id: 2,
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    id: 3,
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
  },
];

const Testimonials = () => {
  return (
    <div 
      className="py-16 bg-cover bg-center relative"
      style={{ 
        backgroundImage: "url('https://jdglobalschool.in/images/course/cu-2.jpg')", 
        minHeight: "80vh", 
        width: "100%", 
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "overlay" 
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Testimonials</h2>
        <p className="text-lg text-center text-gray-300 mb-10">What they say</p>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="max-w-lg mx-auto bg-white bg-opacity-95 rounded-2xl shadow-xl p-8 text-center border border-gray-300 transform hover:scale-105 transition-transform duration-300">
                <p className="text-lg text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="text-xl font-semibold text-gray-900">{testimonial.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;