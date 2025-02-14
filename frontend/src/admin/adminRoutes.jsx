import React from "react";
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));

const Members = React.lazy(() => import("./views/members/members/Members"));

const adminRoutes = [
  { path: "/dashboard", exact: true, name: "Dashboard" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/theme", name: "Theme", element: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", element: Colors },
  { path: "/members", name: "Members", element: Members, exact: true },
  { path: "/admin/members", name: "Members", element: Members },
];

export default adminRoutes;
