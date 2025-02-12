import React from "react";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
  ];

  return (
    <section id="course-part" className="pt-[115px] pb-[120px] bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-[45px]">
              <h5 className="text-lg font-medium text-gray-600">Our course</h5>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Featured courses
              </h2>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="row course-slied mt-[30px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="singel-course bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                  <div className="thum">
                    <div className="image">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                  <div className="cont p-6">
                    <a href={`/course/${course.id}`}>
                      <h4 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                        {course.title}
                      </h4>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;