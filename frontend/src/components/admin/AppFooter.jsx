import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="#" rel="noopener noreferrer" target="_blank">
          Copyrights &copy; {new Date().getFullYear()} JDSchool .
        </a>

        <span className="ml-1">All rights reserved. </span>
      </div>
      <div className="ml-auto">
        <span className="mr-1">POWERED BY </span>
        <a
          href="https://liveindiatech.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          liveindiatech
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
