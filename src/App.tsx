import React from "react";
import { ProminentAppBar } from "./Components/AppBar";
import { NevBar } from "./Components/NevBar";
import "./App.css";

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return <NevBar />;
}

export default App;
