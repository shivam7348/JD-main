import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./src/components/Header/Topheader";
import MainHeader from "./src/components/Header/MainHeader";
import Footer from "./src/components/Footer/Footer";
import MiddleHeader from "./src/components/Header/MiddleHeader";
import Header from "./src/components/Header/Header";


function Layout() {
  return (
    <>
      <TopHeader /> 
      {/* <MiddleHeader/>
      <MainHeader /> */}
      <Header/>

      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
