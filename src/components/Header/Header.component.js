import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import useStyles from "./Header.styles.js";

export default function SearchAppBar({ currentUser }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#97CAEF" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            Newsistic
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <Button
            component={Link}
            to="/bookmarks"
            className={classes.bookmark}
            color="inherit"
          >
            Bookmark
            <BookmarkIcon />
          </Button>
          {currentUser ? (
            <Button
              className={classes.signin}
              color="inherit"
              className="option"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </Button>
          ) : (
            <Button
              component={Link}
              to="/signin"
              className={classes.signin}
              color="inherit"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
