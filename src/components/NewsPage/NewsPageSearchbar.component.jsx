import React, { useEffect, useState } from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./NewsPageSearchbar.styles";

import NewsCard from "../NewsCard/NewsCard.component";
const NewsSearch = ({ location }) => {
  const [searchBarNews, setSearchBarNews] = useState([]);
  const API_KEY = process.env.REACT_APP_NEWSAPI;

  const classes = useStyles();
  useEffect(() => {
    const url = `http://api.mediastack.com/v1/news?access_key=4f5d111d9fa4579660122b0712d928d5&keywords=${location.state.value}`;
    console.log(
      `http://api.mediastack.com/v1/news?access_key=4f5d111d9fa4579660122b0712d928d5&keywords=${location.state.value}`
    );
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const item = data.data;
      setSearchBarNews(item);
    };
    fetchData();
  }, [location]);

  if (!searchBarNews.length) {
    return (
      <div className={classes.container}>
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <>
      <Typography variant="h4" className={classes.text}>
        Here are recent Articles on {location.state.value}
      </Typography>
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
    </>
  );
};
export default NewsSearch;
