import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { AppContent, AppFooter, AppHeader, AppSidebar } from "../../components/admin";

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
