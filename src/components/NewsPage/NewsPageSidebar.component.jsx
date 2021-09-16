import React, { useEffect, useState } from "react";
import { Grid, Grow } from "@material-ui/core";

import useStyles from "./NewsPageSidebar.styles.js";

import NewsCard from "../NewsCard/NewsCard.component";
const NewsPage = ({ location }) => {
  const [SideBarNews, setSideBarNews] = useState([]);
  const API_KEY = process.env.REACT_APP_NEWSAPI;
  const classes = useStyles();
  useEffect(() => {
    const news_api = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us&category=${location.state.value}`;
    function fetchData() {
      fetch(news_api)
        .then((data) => data.json())
        .then((res) => {
          const item = res.articles;
          setSideBarNews(item);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, [location]);

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {SideBarNews.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};
export default NewsPage;
