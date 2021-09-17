import React, { useState } from "react";
import { useHistory } from "react-router";
import SearchIcon from "@material-ui/icons/Search";
import { useTheme } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import useStyles from "./Searchbar.styles";
export default function SearchBar() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      history.push({
        pathname: "/newsearch",
        state: { value: term.toLowerCase() },
      });
      setTerm("");
    }
  };
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={handleChange}
        value={term}
        onKeyPress={handleKeyPress}
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
