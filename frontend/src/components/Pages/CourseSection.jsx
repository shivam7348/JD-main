import React from "react";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CourseSection = () => {
  // Dummy data for courses
  const courses = [
    {
      id: 1,
      title: "Arts Class",
      image: "https://jdglobalschool.in/images/course/cu-1.jpg",
    },
    {
      id: 2,
      title: "Music Class",
      image: "https://jdglobalschool.in/images/course/cu-2.jpg",
    },
    {
      id: 3,
      title: "Dance Class",
      image: "https://jdglobalschool.in/images/course/cu-3.jpg",
    },
    {
      id: 4,
      title: "Sports Class",
      image: "https://jdglobalschool.in/images/course/cu-4.jpg",
    },
    {
      id: 5,
      title: "Sports Class",
      image: "https://jdglobalschool.in/images/course/cu-4.jpg",
    },
    {
      id: 6,
      title: "Sports Class",
      image: "https://jdglobalschool.in/images/course/cu-4.jpg",
    },
    {
      id: 7,
      title: "Sports Class",
      image: "https://jdglobalschool.in/images/course/cu-4.jpg",
    },
  ];

  return (
    <section className="py-28 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="pb-12">
            <h5 className="text-lg mb-2">Our course</h5>
            <h2 className="text-3xl font-bold">Featured courses</h2>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="px-4"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={course.image} 
                      alt="Course" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <a href="#" className="block">
                    <h4 className="text-xl font-semibold hover:text-blue-600 transition-colors">
                      {course.title}
                    </h4>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
  );
};

export default CourseSection;