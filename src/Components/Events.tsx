import React from "react";
import { NavigationBar } from "./Navigation/NavigationBar";

const events: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="main">
        <div>Events</div>;
      </div>
    </React.Fragment>
  );
};

export default events;
