import React from "react";
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));

const Members = React.lazy(() => import("./views/members/members/Members"));

const PressRelease = React.lazy(() =>
  import("./views/press-release/add-post/AddPost")
);
const ApprovedPost = React.lazy(() =>
  import("./views/press-release/approved-post/ApprovedPost")
);

const UnapprovedPost = React.lazy(() =>
  import("./views/press-release/unapproved-post/UnapprovedPost")
);
const Rejected = React.lazy(() =>
  import("./views/press-release/rejected/Rejected")
);
const Draft = React.lazy(() => import("./views/press-release/draft/Draft"));

const Deleted = React.lazy(() =>
  import("./views/press-release/deleted/Deleted")
);

const Ads = React.lazy(() => import("./views/ads/createAds/CreateAds"));
const ManageAds = React.lazy(() => import("./views/ads/manage-ads/ManageAds"));

const adminRoutes = [
  { path: "/dashboard", exact: true, name: "Dashboard" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/theme", name: "Theme", element: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", element: Colors },
  { path: "/members", name: "Members", element: Members, exact: true },
  { path: "/admin/members", name: "Members", element: Members },

  {
    path: "/press-release",
    name: "Post",
    element: PressRelease,
    exact: true,
  },

  {
    path: "/press-release/add-post",
    name: "Add Post",
    element: PressRelease,
  },

  {
    path: "/press-release/edit/:slug",
    name: "Edit Post",
    element: PressRelease,
  },

  {
    path: "/press-release/approved",
    name: "Approved post",
    element: ApprovedPost,
  },

  {
    path: "/press-release/unapproved",
    name: "Manage Market News",
    element: UnapprovedPost,
  },
  {
    path: "/press-release/rejected",
    name: "Manage Rejected",
    element: Rejected,
  },
  {
    path: "/press-release/draft",
    name: "Manage Draft",
    element: Draft,
  },
  
  {
    path: "/press-release/deleted",
    name: "Manage delete",
    element: Deleted,
  },

  {
    path: "/ads",
    name: "Ads",
    element: Ads,
    exact: true,
  },
  {
    path: "/ads/createAds",
    name: " Create Ads",
    element: Ads,
  },

  {
    path: "/ads/edit/:id",
    name: "Edit Ads",
    element: Ads,
  },

  {
    path: "/ads/manage-ads",
    name: "Manage Ads",
    element: ManageAds,
  },
];

export default adminRoutes;
