import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Contact from "./src/components/Pages/Contact";
import Services from "./src/components/Pages/Services";
import Gallery from "./src/components/Pages/Gallery";
import Home from "./src/components/Pages/Home";
import About from "./src/components/Pages/About/About";
import DirectorMessage from "./src/components/Pages/About/DirectorMessage";
import Vission from "./src/components/Pages/About/Vission";
import Mission from "./src/components/Pages/About/Mission";
import Admission from "./src/components/Pages/About/Admission";
import AcademicZone from "./src/components/Pages/AcedmicZone/AcademicZone";
import Activities from "./src/components/Pages/AcedmicZone/Activities";
import TCEnquiry from "./src/components/Pages/AcedmicZone/TCEnquiry";
import AnnualPlanner from "./src/components/Pages/AcedmicZone/AnnualPlanner";
import ExaminationSchedule from "./src/components/Pages/AcedmicZone/ExaminationSchedule";
import SessionInformation from "./src/components/Pages/SessionInformation/SessionInformation";
import SchoolTimimng from "./src/components/Pages/SessionInformation/SchoolTimimng";
import FreeRegualation from "./src/components/Pages/SessionInformation/FreeRegualation";
import RuleOfCodeAndConduct from "./src/components/Pages/SessionInformation/RuleOfCodeAndConduct";
import Infrastructure from "./src/components/Pages/InfraStructure/Infrastructure";
import TransportFacility from "./src/components/Pages/InfraStructure/TransportFacility";
import SchoolCampus from "./src/components/Pages/InfraStructure/SchoolCampus";
import Laboratory from "./src/components/Pages/InfraStructure/Laboratory";
import SmartClasses from "./src/components/Pages/InfraStructure/SmartClasses";
import SportsGround from "./src/components/Pages/InfraStructure/SportsGround";
import Library from "./src/components/Pages/InfraStructure/Library";



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
        element: <About />,
      },
      {
        path: "about/message",
        element: <DirectorMessage />
      },
      { path: "/about/vision", element: <Vission /> },
      { path: "/about/mission", element: <Mission /> },
      {
        path: "admission",
        element: <Admission />
      },

      {
        path: "academic-zone",
        element: <AcademicZone />
      },
      // acdemice nested routes 
      { path: "/academic-zone/activities", element: <Activities /> },
      { path: "/academic-zone/tc-enquiry", element: <TCEnquiry /> },
      { path: "/academic-zone/annual-planner", element: <AnnualPlanner /> },
      { path: "/academic-zone/exam-schedule", element: <ExaminationSchedule /> },
      // sessional routes start
      { path: "/sessioni-info", element: <SessionInformation /> },
      //nested routes
      { path: "/sessioni-info/schooltiming", element: <SchoolTimimng /> },
      { path: "/sessioni-info/freeregulation", element: <FreeRegualation /> },
      { path: "/sessioni-info/rulecode-condt", element: <RuleOfCodeAndConduct /> },
      // infrastructure dropdown started 
      { path: "/infrastructure", element: <Infrastructure /> },
      // nested routes of infrastructure
      { path: "/infrastructure/transport-facilities", element: <TransportFacility /> },
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
