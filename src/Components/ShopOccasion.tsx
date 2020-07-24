import React from "react";
import { NavigationBar } from "./Navigation/NavigationBar";

const shopOccasion: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="main">
        <div>Shop Occasion</div>;
      </div>
    </React.Fragment>
  );
};

export default shopOccasion;
