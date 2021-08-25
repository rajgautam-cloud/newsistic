import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";

import NewsCard from "../NewsCard/NewsCard.component";

const NewsCards = ({ articles }) => {
  return (
    <div>
      <Grid container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid items xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default NewsCards;
