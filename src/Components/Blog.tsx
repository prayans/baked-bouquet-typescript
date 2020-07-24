import React from "react";
import { NavigationBar } from "./Navigation/NavigationBar";

const blog: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="main">
        <div>Blog</div>;
      </div>
    </React.Fragment>
  );
};

export default blog;
