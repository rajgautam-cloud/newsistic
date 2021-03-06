import React, { useState, useEffect } from "react";
import { Grid, Grow } from "@material-ui/core";

import useStyles from "./NewsCards.styles";
import NewsCard from "../NewsCard/NewsCard.component";
const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  const [LatestNews, setLatestNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/general/us.json`
      );
      const data = await response.json();
      const item = data.articles;
      setLatestNews(item);
    };
    fetchData();
  }, []);
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {LatestNews.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard article={article} activeArticle={activeArticle} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};
export default NewsCards;
