import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ShopCollection } from "./Components/ShopCollection";
import { Store } from "./Components/StoreCollection";
import mothersDay from "./Components/MothersDay";
import shopOccasion from "./Components/ShopOccasion";
import events from "./Components/Events";
import about from "./Components/About-Us";
import blog from "./Components/Blog";
import franchies from "./Components/Franchies";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Store {...props} url="https://bb-api.mithyalabs.com/api/stores" />
          )}
        />
        <Route path="/mothers-day" component={mothersDay} />
        <Route
          exact
          path="/shop-collection"
          render={(props) => (
            <ShopCollection
              {...props}
              url="https://bb-api.mithyalabs.com/api/categories"
            />
          )}
        />
        <Route path="/shop-occasion" component={shopOccasion} />
        <Route path="/events" component={events} />
        <Route path="/about-us" component={about} />
        <Route path="/blog" component={blog} />
        <Route path="/franchies" component={franchies} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
