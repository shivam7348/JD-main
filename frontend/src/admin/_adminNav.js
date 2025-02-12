import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cibBitcoin,
  cilMoney,
  cilNewspaper,
  cilSpeedometer,
  cilUser,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _adminNav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },

  {
    component: CNavGroup,
    name: "Members",
    to: "/admin/members",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Members",
        to: "/admin/members",
      },
    ],
  },

  {
    component: CNavGroup,
    name: "Press Release",
    to: "/admin/press-release",
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Add Post",
        to: "/admin/press-release/add-post",
      },

      {
        component: CNavItem,
        name: "Approved Post",
        to: "/admin/press-release/approved",
      },
      {
        component: CNavItem,
        name: " Waiting For Approval",
        to: "/admin/press-release/unapproved",
      },
      {
        component: CNavItem,
        name: "Rejected Post",
        to: "/admin/press-release/rejected",
      },
      {
        component: CNavItem,
        name: "Drafted Post",
        to: "/admin/press-release/draft",
      },
      {
        component: CNavItem,
        name: "Deleted Post",
        to: "/admin/press-release/deleted",
      },
      // {
      //   component: CNavItem,
      //   name: "Analytics",
      //   to: "/admin/press-release/analytics",
      // },
    ],
  },
  {
    component: CNavGroup,
    name: "Ads",
    to: "/admin/ads",
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Create Ads",
        to: "/admin/ads/createAds",
      },
      {
        component: CNavItem,
        name: "Manage Ads",
        to: "/admin/ads/manage-ads",
      },
    ],
  },

  // {
  //   component: CNavTitle,
  //   name: "Theme",
  // },
  // {
  //   component: CNavItem,
  //   name: "Colors",
  //   to: "/admin/theme/colors",
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: "Typography",
  //   to: "/theme/typography",
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: "Components",
  // },

  // {
  //   component: CNavItem,
  //   name: "Docs",
  //   href: "https://coreui.io/react/docs/templates/installation/",
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
];

export default _adminNav;
