import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crwn.svg";

import "./Header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/bookmarks">
        <h3>Bookmarks</h3>
      </Link>{" "}
      <Link className="option" to="/signin">
        <h3>Sign In</h3>
      </Link>
    </div>
  </div>
);

export default Header;
