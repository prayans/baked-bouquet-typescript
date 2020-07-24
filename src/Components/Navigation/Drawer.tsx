import React from "react";
import Link from "@material-ui/core/Link";
import StoreIcon from "@material-ui/icons/Store";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import InfoIcon from "@material-ui/icons/Info";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

import "../css/AppBar.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
  })
);

export const Segment: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Link className="toolbar__logo" href="/">
          <img
            src="https://bakedbouquet.mithyalabs.com/img/logo-big.png"
            alt="The LOGO"
            width="143"
            height="80"
          ></img>
        </Link>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {["Shop Collection", "Mothers's Day", "Shop Occassion"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <StoreIcon /> : <CardGiftcardIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Events", "About Us", "Blog", "Franchies"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 1 ? <InfoIcon /> : undefined}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </React.Fragment>
  );
};
