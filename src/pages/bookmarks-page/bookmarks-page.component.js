import React, { useState, useEffect } from "react";
import { firestoreDB } from "../../firebase/firebase.utils";
import useStyles from "./bookmarks-page.styles";
import NewsCard from "../../components/NewsCard/NewsCard.component";
import { Grid, Grow } from "@material-ui/core";

const BookmarksPage = ({ currentUser }) => {
  const [uid, setUid] = useState(null);
  useEffect(() => {
    if (currentUser) {
      setUid(currentUser.id);
    }
  }, []);
  console.log(uid);
  const classes = useStyles();
  const [bookmarks, setBookmarks] = useState([]);

  (async function () {
    firestoreDB
      .collection("users")
      .doc(uid)
      .get()
      .then((data) => {
        if (data) {
          setBookmarks(data.data().bookmarks);
        }
      });
  })();

  return (
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
  );
};
export default BookmarksPage;
