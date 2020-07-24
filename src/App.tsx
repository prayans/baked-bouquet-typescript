import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ShopCollection } from "./Components/ShopCollection";
import Stores from "./Components/StoreCollection";
import mothersDay from "./Components/MothersDay";
import ShopOccasions from "./Components/ShopOccasion";
import events from "./Components/Events";
import about from "./Components/About-Us";
import blog from "./Components/Blog";
import franchies from "./Components/Franchies";
import { NavigationBar } from "./Components/Navigation/NavigationBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Stores
                {...props}
                url="https://bb-api.mithyalabs.com/api/stores"
              />
            )}
          />
          <Route path="/mothers-day" component={mothersDay} />
          <Route
            exact
            path="/shop-collection/:name"
            component={ShopCollection}
          />
          <Route
            exact
            path="/shop-occasion"
            render={(props) => (
              <ShopOccasions
                {...props}
                url="https://bb-api.mithyalabs.com/api/occasions"
              />
            )}
          />

          <Route path="/shop-occasion/:name" component={ShopCollection} />

          <Route path="/events" component={events} />
          <Route path="/about-us" component={about} />
          <Route path="/blog" component={blog} />
          <Route path="/franchies" component={franchies} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
