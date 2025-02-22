import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Gallery from "./components/Pages/Gallery";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About/About";
import DirectorMessage from "./components/Pages/About/DirectorMessage";
import Vission from "./components/Pages/About/Vission";
import Mission from "./components/Pages/About/Mission";
import Admission from "./components/Pages/About/Admission";
import AcademicZone from "./components/Pages/AcedmicZone/AcademicZone";
import Activities from "./components/Pages/AcedmicZone/Activities";
import AnnualPlanner from "./components/Pages/AcedmicZone/AnnualPlanner";
import ExaminationSchedule from "./components/Pages/AcedmicZone/ExaminationSchedule";
import SessionInformation from "./components/Pages/SessionInformation/SessionInformation";
import SchoolTimimng from "./components/Pages/SessionInformation/SchoolTimimng";
import FreeRegualation from "./components/Pages/SessionInformation/FreeRegualation";
import Infrastructure from "./components/Pages/InfraStructure/Infrastructure";
import SchoolTransport from "./components/Pages/InfraStructure/SchoolTransport";
import SchoolCampus from "./components/Pages/InfraStructure/SchoolCampus";
import Laboratory from "./components/Pages/InfraStructure/Laboratory";
import SmartClasses from "./components/Pages/InfraStructure/SmartClasses";
import SportsGround from "./components/Pages/InfraStructure/SportsGround";
import Library from "./components/Pages/InfraStructure/Library";
import RulesAndTransport from "./components/Pages/SessionInformation/RulesAndTransport";
import AdmissionPage from "./components/Pages/AdmissionPage";
import AboutUs from "./components/Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "about/message",
        element: <DirectorMessage />,
      },
      { path: "/about/vision", element: <Vission /> },
      { path: "/about/mission", element: <Mission /> },
      {
        path: "admission",
        element: <Admission />,
      },

      {
        path: "academic-zone",
        element: <AcademicZone />,
      },
      {
        path: "admissionopen",
        element: <AdmissionPage />,
      },
      // acdemice nested routes
      { path: "/academic-zone/activities", element: <Activities /> },
      { path: "/academic-zone/annual-planner", element: <AnnualPlanner /> },
      {
        path: "/academic-zone/exam-schedule",
        element: <ExaminationSchedule />,
      },
      // sessional routes start
      { path: "/sessioni-info", element: <SessionInformation /> },
      //nested routes
      { path: "/sessioni-info/schooltiming", element: <SchoolTimimng /> },
      { path: "/sessioni-info/freeregulation", element: <FreeRegualation /> },
      { path: "/sessioni-info/rulecode-condt", element: <RulesAndTransport /> },
      // infrastructure dropdown started
      { path: "/infrastructure", element: <Infrastructure /> },
      // nested routes of infrastructure
      {
        path: "/infrastructure/transport-facilities",
        element: <SchoolTransport />,
      },
      { path: "/infrastructure/schoolcampus", element: <SchoolCampus /> },
      { path: "/infrastructure/laboratory", element: <Laboratory /> },
      { path: "/Infrastructure/smartclasses", element: <SmartClasses /> },
      { path: "/Infrastructure/library", element: <Library /> },
      { path: "/infrastructure/sportsground", element: <SportsGround /> },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      // service router
      {
        path: "/service/1",
        element: <Services />,
      },
    ],
  },
]);

export default router;
