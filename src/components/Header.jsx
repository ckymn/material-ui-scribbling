import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import className from "classname";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  iconStyles: (props) => {
    return {
      color: props.colorChange ? "blue" : "black",
      [theme.breakpoints.down("sm")]: {
        color: "white",
        backgroundColor: "black"
      },
      backgroundColor: "white"
    };
  },
  titleColor: (props) => {
    return {
      color: props.colorChange ? "white" : "black",
      flexGrow: 1,
      [theme.breakpoints.up("sm")]: {
        color: "white"
      },
      backgroundColor: props.colorChange ? "orange" : "red"
    };
  },
  shareIconStyle: {
    color: "red"
  }
}));

const Header = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button className={className(classes.titleColor)}>
              Material-ui
            </Button>
          </Typography>
          <AppleIcon className={classes.iconStyles} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
