import React from "react";
import AutoSlider from "../Slider/AutoSlider";
import Slider from "../Slider/Slider";
import AboutUs from "./About/About";
import ApplicationSection from "./ApplicationSection";
import CategorySection from "./CategorySection";
import Contact from "./Contact";
import CourseSection from "./CourseSection";
import Testimonials from "./Testimonials";
import VicePrincipalSection from "./VicePrincipalSection";
import VideoFeatureSection from "./VideoFeatureSection";
import ImageUplaod from './../../../ImageUplaod';

function Home() {
  return (
    <>
      {/* <AutoSlider/> */}
      <Slider/>
      <CategorySection />
      <AboutUs />
      <ApplicationSection />
      <CourseSection />
      <VideoFeatureSection />
      <VicePrincipalSection />
      <Testimonials />
      <Contact />
      {/* <ImageUplaod/> */}
    </>
  );
}

export default Home;
