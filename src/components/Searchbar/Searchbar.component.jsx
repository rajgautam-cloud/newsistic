import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useTheme } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import useStyles from "./Searchbar.styles";
export default function SearchBar() {
  const classes = useStyles();
  const theme = useTheme();
  return (
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
  );
}
