import React, { useState, useEffect } from "react";
import firebase, { firestoreDB } from "../../firebase/firebase.utils";
import useStyles from "./bookmarks-page.styles";
import NewsCard from "../../components/NewsCard/NewsCard.component";
import { Grid, Grow, Typography } from "@material-ui/core";

const BookmarksPage = () => {
  const auth = firebase.auth().currentUser;
  let uid = null;
  if (auth) {
    uid = auth.uid;
  }

  const classes = useStyles();
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    firestoreDB
      .collection("users")
      .doc(uid)
      .get()
      .then((data) => {
        if (data) {
          setBookmarks(data.data().bookmarks);
        }
      });
  }, []);

  return (
    <>
      <Typography variant="h4" className={classes.text}>
        This is your Bookmared News...
      </Typography>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {bookmarks.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard article={article} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </>
  );
};
export default BookmarksPage;
