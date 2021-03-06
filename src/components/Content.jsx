import React from "react";
import SabCard from "./SabCard";
import { Grid } from "@material-ui/core";
import store from "./store";

const Content = () => {
  const getStore = (storeObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <SabCard {...storeObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {store.map((list) => getStore(list) )}
    </Grid>
  );
};

export default Content;
