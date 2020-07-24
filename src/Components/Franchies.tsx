import React from "react";
import { NavigationBar } from "./Navigation/NavigationBar";

const franchies: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="main">
        <div>Franchies</div>
      </div>
    </React.Fragment>
  );
};

export default franchies;
