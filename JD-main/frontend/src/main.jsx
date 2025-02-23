import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { RouterProvider } from "react-router-dom";
import jdSchoolStore from "./store/store";
import { Provider } from "react-redux";
import router from "./router";
import AdminApp from "./admin/AdminApp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import AdminRoutes from "./admin/adminRoutes";
import { AppWrapper } from "./admin/components/common/PageMeta";
import { ThemeProvider } from "./admin/context/ThemeContext";

const isAdminRoute = window.location.pathname.startsWith("/admin");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={jdSchoolStore}>
      <ToastContainer autoClose={3000} />

      {isAdminRoute ? (
        <AppWrapper>
          <ThemeProvider>
            {/* <AdminApp router={adminRoutes} /> */}
            <AdminRoutes />
          </ThemeProvider>
        </AppWrapper>
      ) : (
        <RouterProvider router={router} />
      )}
    </Provider>
  </React.StrictMode>
);
