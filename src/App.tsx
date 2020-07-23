import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import shopCollection from "./Components/ShopCollection";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NavigationBar} />
        <Route exact path="/shop-collection" component={shopCollection} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
