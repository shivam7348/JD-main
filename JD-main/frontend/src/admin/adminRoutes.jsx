import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Ecommerce from "./pages/Dashboard/ECommerce";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Announcement from "./pages/Announcement";
import Activity from "./pages/ActivityMain";

export default function AdminRoutes() {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/admin/dashboard" element={<Ecommerce />} />
            {/* Others Page */}
            <Route path="/admin/annualplannerr" element={<UserProfiles />} />
            <Route path="/admin/activity" element={<Activity />} />
            <Route path="/admin/announcement" element={<Announcement />} />
          </Route>

          {/* Auth Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/admin" element={<SignIn />} />
            {/* <Route path="/admin/signup" element={<SignUp />} /> */}
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
