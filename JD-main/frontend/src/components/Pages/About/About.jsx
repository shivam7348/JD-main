import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 mx-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Text Content */}
          <div className="lg:w-2/3">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">About Us</h3>
              <h5 className="text-2xl font-semibold text-green-600 mb-8">
                WELCOME TO J.D GLOBAL SCHOOL
              </h5>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p className="text-justify">
                Our school motto stands for the school's belief that knowledge
                leads to enlightenment and prosperity.
              </p>  
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  Our mission: "Every great dream begins with a dreamer."
                </li>
                <li>
                  Established in 2018, under the aegis of Leading Business
                  Houses, JD Global School, Ghaziabad is a CBSE affiliated,
                  Progressive school. Within a short span, this accredited
                  school has earned a reputation as one of NCR's high potential
                  senior secondary schools.
                </li>
                <li>
                  We forge ahead with our vision of preparing students to
                  encounter a rapidly changing world by equipping them with
                  critical thinking skills, a global perspective, and respect
                  for core values.
                </li>
                <li>
                  We are committed to a unique learning approach and an
                  effortless learning environment that helps children become
                  lifelong learners. The school is led and guided by able
                  navigators of national and international repute.
                </li>
                <li>
                  The hallmark of JD Global School is the special "Indianness"
                  curriculum, put in place for inculcating values in students
                  that are designed to connect to real life and affect the lives
                  of students. After all, the aim of education is to create good
                  human beings.
                </li>
              </ul>
              <button className="mt-6 bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
                Read More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/3 w-full">
            <img
              src="/src/components/Slider/sliderImg/slider1.jpg"
              alt="About JD Global School"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;