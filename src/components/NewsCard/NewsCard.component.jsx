import React, { useState, useEffect, createRef } from "react";

import firebase from "../../firebase/firebase.utils";
import FavoriteIcon from "@material-ui/icons/Favorite";
import handleAddToBookmark from "../../firestore/addToBookmark";
import handleDeleteBookmark from "../../firestore/deleteBookmark";

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import useStyles from "./NewsCard.styles";
import classNames from "classnames";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) => {
  const auth = firebase.auth().currentUser;
  let uid = null;
  if (auth) {
    uid = auth.uid;
  }
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);   
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);
  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <Card
      ref={elRefs[i]}
      className={classNames(
        classes.card,
        activeArticle === i ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        />

        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            if (
              window.location.pathname === "/" ||
              window.location.pathname === "/news" ||
              window.location.pathname === "/newsearch"
            ) {
              handleAddToBookmark(
                description,
                publishedAt,
                source,
                title,
                url,
                urlToImage,
                uid
              );
            } else {
              handleDeleteBookmark(description, uid);
            }
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
