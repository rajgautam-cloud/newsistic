import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./NewsCards.styles";
import NewsCard from "../NewsCard/NewsCard.component";

const NewsCards = ({ articles }) => {
  const classes = useStyles();
  return (
    <Grow in>
      <Grid
        classname={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid items xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};
export default NewsCards;
