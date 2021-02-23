import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  iconStyles: {
    color: (props) => (props.colorChange ? "blue" : "red")
  }
}));

const Header = (props) => {
  const classes = useStyles(props);
  console.log(classes);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Material-ui
          </Typography>
          <AppleIcon className={classes.iconStyles} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
