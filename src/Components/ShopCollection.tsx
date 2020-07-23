import React, { useState, useEffect } from "react";
import { Component } from "react";
import axios from "axios";
import { NavigationBar } from "./NavigationBar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import "./AppBar.css";
import "./ShopCollection.css";
export default () => {
  const [Collections, setCollections] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://bb-api.mithyalabs.com/api/categories`,
    }).then((res) => {
      setCollections(res.data);
    });
  });
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="main">
        <div className="grid">
          {Collections.map((Collection: any) => {
            return (
              <Card className="card product-item">
                <CardActionArea>
                  <div className="card__image">
                    <img src={Collection._cover.url} alt={Collection.name} />
                  </div>
                  <h1 className="product__title">{Collection.name}</h1>
                  <h2 className="product__price">
                    Starting at ${Collection.startingPrice}
                  </h2>
                </CardActionArea>
                <CardActions>
                  <Button className="btn" variant="contained" color="primary">
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
