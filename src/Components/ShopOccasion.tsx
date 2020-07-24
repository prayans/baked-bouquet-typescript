import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavigationBar } from "./Navigation/NavigationBar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "@material-ui/core/Link";
import "./css/AppBar.css";
import "./css/ShopCollection.css";

interface ShopOccasionProps {
  url: string;
}

const ShopOccasions: React.FC<ShopOccasionProps> = ({ url }) => {
  const [ShopOccassions, setShopOccassions] = useState([]);
  useEffect(() => {
    fetchitems();
  }, []);

  const fetchitems = async () => {
    axios({
      method: "GET",
      url: `${url}`,
    }).then((res) => {
      console.log(res);
      setShopOccassions(res.data);
    });
  };
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="main">
        <div className="grid">
          {ShopOccassions.map((ShopOccasion: any) => {
            return (
              <Link
                key={ShopOccasion.name}
                href={`/shop-occasion/products?filter={"where":{"occasionIds":"${ShopOccasion.id}","isPublished":true}}`}
              >
                <Card className="card product-item">
                  <CardActionArea>
                    <h1 className="product__title">{ShopOccasion.name}</h1>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopOccasions;
