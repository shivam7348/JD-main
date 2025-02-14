import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { AppSidebarNav } from "./AppSidebarNav";
import { setSidebarShow } from "../../store/admin/adminAppSlice";
import { sygnet } from "../../admin/assets/admin/brand/sygnet";
import navigation from "../../admin/_adminNav";
const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.adminApp.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.adminApp.sidebarShow);

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(setSidebarShow(visible));
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/admin">
          <img
            className="sidebar-brand-full"
            src="https://jdglobalschool.in/images/logo.jpeg"
            height={24}
            alt="Logo"
          />

          <CIcon
            customClassName="sidebar-brand-narrow"
            icon={sygnet}
            height={32}
          />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch(setSidebarShow(false))}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() =>
            dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
          }
        />
      </CSidebarFooter>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
