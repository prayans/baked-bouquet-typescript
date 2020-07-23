import React, { Component } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { NavLink } from "react-router-dom";

import "./AppBar.css";

export const ProminentAppBar: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Link className="toolbar__logo" href="/">
        <img
          src="https://bakedbouquet.mithyalabs.com/img/logo-big.png"
          alt="The LOGO"
          width="143"
          height="80"
        ></img>
      </Link>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink to="/shop-collection">Shop Collection</NavLink>
          </li>
          <li>
            <NavLink to="/mother">Mother's Day</NavLink>
          </li>
          <li>
            <NavLink to="/shop-occasion">Shop Occasion</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/franchies">Franchies</NavLink>
          </li>
        </ul>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink to="/call">Call us! 973-450-8200</NavLink>
          </li>
          <li>
            <Button>
              <ShoppingCartIcon />
            </Button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
