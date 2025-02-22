import React from 'react';
import { Link } from 'react-router-dom';
import SmallBanner from './../../Banner/SmallBanner';

const Mission = () => {
  return (
    <>
      
      {/* Page Banner Section */}
     <SmallBanner title="Mission"
      image=""

     />

      {/* Mission Content Section */}
      <section className="pt-16 pb-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="col-lg-8 w-full lg:w-2/3">
              <div className="section-title">
                <h3 className="text-3xl font-bold">OUR Mission</h3>
                <h5 className="pt-2 text-xl">Welcome to JD GLOBAL SCHOOL</h5>
              </div>
              <p className="text-justify mt-4">
                We will provide students an environment that challenges them into discovering their talent and skills. We will inspire the joy of learning by fostering a culture of creativity & technology. Our students will be ethical, respectful, happy, and purposeful citizens of society.
              </p>
            </div>
            <div className="col-lg-4 w-full lg:w-1/3 mt-8 lg:mt-0">
              <img src="https://jdglobalschool.in/images/about/mission.png" alt="Mission" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Mission;