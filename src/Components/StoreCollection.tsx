import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavigationBar } from "./Navigation/NavigationBar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./css/AppBar.css";
import "./css/ShopCollection.css";

interface IStores {
  name: string;
  contact: string;
  email: string;
  address1: string;
  address2: string;
  zipcode: string;
  state: string;
  city: string;
  location: {
    lat: number;
    lng: number;
  };
  tax: 0;
  auth_net_settings: {
    api_key: string;
    transaction_key: string;
  };
  hana_pos_settings: {
    username: string;
    password: string;
    storeMatch: string;
  };
  store_hours: {
    mon_fri: string;
    sat: string;
    sun: string;
    special: string;
  };
  isShipping: boolean;
  created: string;
  updated: string;
  id: string;
  managerId: string;
  userId: string;
  _cover: {
    url: string;
    created: string;
    updated: string;
    id: string;
  };
  cardOpen: boolean;
}

interface StoreProps {
  url: string;
}

const Stores: React.FC<StoreProps> = ({ url }) => {
  const [Stores, setStores] = useState<IStores[]>([]);
  useEffect(() => {
    fetchitems();
  }, []);

  const fetchitems = async () => {
    axios({
      method: "GET",
      url: `${url}`,
    }).then((res) => {
      console.log(res);
      setStores(res.data);
    });
  };
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="main">
        <h1 style={{ textAlign: "center" }}>Store Locations</h1>
        <h2 style={{ textAlign: "center" }}>
          <p>
            Click on the card to view contact information, address and open
            days/timing
          </p>
        </h2>
        <div className="grid">
          {Stores.map((store: any) => {
            return (
              <Card key={store.name} className="card product-item">
                <CardActionArea>
                  <div className="card__image">
                    <img src={store._cover.url} alt={store.name} />
                  </div>
                  <h1 className="product__title">{store.name}</h1>
                  <h2 className="product__price">{store.contact}</h2>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stores;
