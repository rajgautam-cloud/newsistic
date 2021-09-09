import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import MemoryIcon from "@material-ui/icons/Memory";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import BusinessIcon from "@material-ui/icons/Business";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemIcon } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import useStyles from "./Header.styles.js";

export default function Header({ currentUser }) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ background: "#1DABFF" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
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
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          {currentUser ? (
            <>
              <Button
                component={Link}
                to="/bookmarks"
                className={classes.bookmark}
                color="inherit"
              >
                Bookmarks
                <BookmarkIcon />
              </Button>
              <Button
                className={classes.signin}
                color="inherit"
                className="option"
                onClick={() => auth.signOut()}
              >
                <ExitToAppIcon />
              </Button>
            </>
          ) : (
            <Button
              component={Link}
              to="/signin"
              className={classes.signin}
              color="inherit"
            >
              Sign In
              <AccountBoxIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              history.push({
                pathname: "/news",
                state: { value: "technology" },
              });
            }}
          >
            <ListItemIcon>
              <MemoryIcon />
            </ListItemIcon>
            <ListItemText primary="Technology" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push({
                pathname: "/news",
                state: { value: "health" },
              });
            }}
          >
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary="Health" />
          </ListItem>{" "}
          <ListItem
            button
            onClick={() => {
              history.push({
                pathname: "/news",
                state: { value: "sports" },
              });
            }}
          >
            <ListItemIcon>
              <SportsHandballIcon />
            </ListItemIcon>
            <ListItemText primary="Sports" />
          </ListItem>{" "}
          <ListItem
            button
            onClick={() => {
              history.push({
                pathname: "/news",
                state: { value: "science" },
              });
            }}
          >
            <ListItemIcon>
              <WbIncandescentIcon />
            </ListItemIcon>
            <ListItemText primary="Science" />
          </ListItem>{" "}
          <ListItem
            button
            onClick={() => {
              history.push({
                pathname: "/news",
                state: { value: "business" },
              });
            }}
          >
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Business" />
          </ListItem>{" "}
          <ListItem
            button
            onClick={() => {
              history.push({
                pathname: "/news",
                state: { value: "entertainment" },
              });
            }}
          >
            <ListItemIcon>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText primary="Entertainment" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
