import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

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
            <Link href="/">Shop Collection</Link>
          </li>
          <li>
            <Link href="/">Mothers's Day</Link>
          </li>
          <li>
            <Link href="/">Shop Occasion</Link>
          </li>
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Franchies</Link>
          </li>
        </ul>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link href="/">Call us!973-450-8200</Link>
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
