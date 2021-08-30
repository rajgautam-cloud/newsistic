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
        Bookmarks
      </Link>{" "}
      <Link className="option" to="/contact">
        Contact
      </Link>
      <Link className="option" to="/signin">
        Sign In
      </Link>
    </div>
  </div>
);

export default Header;
