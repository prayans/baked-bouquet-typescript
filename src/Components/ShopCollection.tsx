import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavigationBar } from "./Navigation/NavigationBar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import getAllCollections from "./ShopCollectionsServiceWorkers";
import http from "./http-common";

import "./css/AppBar.css";
import "./css/ShopCollection.css";

interface ShopCollectionProps {
  match: any;
  location: any;
}

export const ShopCollection: React.FC<ShopCollectionProps> = ({
  match,
  location,
}) => {
  const [Collections, setCollections] = useState([]);
  console.log(match);
  console.log(location);

  // useEffect(() => {
  //   fetchitems();
  // }, []);

  // const fetchitems = async () => {
  //   axios({
  //     method: "GET",
  //     url: `${url}`,
  //   }).then((res) => {
  //     console.log(res);
  //     setCollections(res.data);
  //   });
  // };
  let name = match.params.name + location.search;
  console.log(name);
  useEffect(() => {
    http
      .get(match.params.name + location.search)
      .then((res) => {
        console.log(res);
        setCollections(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className="main">
        <div className="grid">
          {Collections.map((Collection: any) => {
            return (
              <Card key={Collection.name} className="card product-item">
                <CardActionArea>
                  <div className="card__image">
                    <img src={Collection._cover.url} alt={Collection.name} />
                  </div>
                  <h1 className="product__title">{Collection.name}</h1>
                  <h2 className="product__price">
                    Starting at ${Collection.startingPrice}
                  </h2>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button variant="contained" color="primary">
                    Order Now!
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
