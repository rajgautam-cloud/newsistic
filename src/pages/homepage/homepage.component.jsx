import React from "react";

import Directory from "../../components/Directory/Directory.component";

import "./homepage.styles.scss";

const HomePage = ({ currentUser }) => (
  <div className="homepage">
    <Directory currentUser={currentUser} />
  </div>
);

export default HomePage;
