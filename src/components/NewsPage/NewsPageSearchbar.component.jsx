import React, { useEffect, useState } from "react";
import { Grid, Grow } from "@material-ui/core";

import useStyles from "./NewsPageSearchbar.styles";

import NewsCard from "../NewsCard/NewsCard.component";
const NewsSearch = ({ location }) => {
  const [searchBarNews, setSearchBarNews] = useState([]);
  const API_KEY = process.env.REACT_APP_NEWSAPI;

  const classes = useStyles();
  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${location.state.value}&apiKey=${API_KEY}`;

    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      const item = data.articles;
      setSearchBarNews(item);
    }
    fetchData();
  }, [location]);

  if (!searchBarNews.length) {
    return (
      <div className={classes.container}>
        <h1>Try for searching something else...</h1>
      </div>
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
        {searchBarNews.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};
export default NewsSearch;
