import React from "react";
import { NavigationBar } from "./Navigation/NavigationBar";

const about: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="main">
        <div>About Us</div>;
      </div>
    </React.Fragment>
  );
};

export default about;
