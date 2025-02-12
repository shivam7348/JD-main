import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./src/components/Header/Topheader";
import MainHeader from "./src/components/Header/MainHeader";
import Footer from "./src/components/Footer/Footer";
import MiddleHeader from "./src/components/Header/MiddleHeader";


function Layout() {
  return (
    <>
      <TopHeader />
      <MiddleHeader/>
      <MainHeader />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
