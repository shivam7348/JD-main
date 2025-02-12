import React from "react";
import AppSidebar from "../../component/admin/AppSidebar";
import { AppFooter, AppHeader } from "../../component/admin";
import AppContent from "../../component/admin/AppContent";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const DefaultLayout = () => {
  const sidebarShow = useSelector((state) => state.adminApp.sidebarShow);

  return (
    <div className={sidebarShow ? "sidebar-visible" : "sidebar-hidden"}>
      <AppSidebar />
      <div
        className={`wrapper d-flex flex-column min-vh-100 ${
          sidebarShow ? "with-sidebar" : "full-width"
        }`}
      >
        <AppHeader />
        <Container
          fluid
          className="body flex-grow-1"
          style={{ padding: "1rem" }}
        >
          <Row>
            <AppContent />
          </Row>
        </Container>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
