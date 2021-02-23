import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  const colorChange = false;
  return (
    <Grid container direction="column">
      <Header colorChange={colorChange} />
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
