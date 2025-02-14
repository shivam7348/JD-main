import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import jdSchoolStore from "./store/store";
import { Provider } from "react-redux";

import AdminApp from "./admin/AdminApp";
import adminRoutes from "./admin/adminRoutes";
import router from "./router";

const isAdminRoute = window.location.pathname.startsWith("/admin");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={jdSchoolStore}>
      {isAdminRoute ? (
        <AdminApp route={adminRoutes} />
      ) : (
        <RouterProvider router={router} />
      )}
    </Provider>
  </React.StrictMode>
);
