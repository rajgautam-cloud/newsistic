import React, { useEffect, useState } from "react";
import { Grid, Grow } from "@material-ui/core";

import useStyles from "./NewsPageSidebar.styles.js";

import NewsCard from "../NewsCard/NewsCard.component";
const NewsPage = ({ location }) => {
  const [SideBarNews, setSideBarNews] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const news_api = `https://saurav.tech/NewsAPI/top-headlines/category/${location.state.value}/us.json`;
    console.log(news_api);
    const fetchData = async () => {
      const response = await fetch(news_api);
      const data = await response.json();
      const item = data.articles;
      setSideBarNews(item);
    };
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
