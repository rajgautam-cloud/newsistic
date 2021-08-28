import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const Bookmarks = () => (
  <div>
    <h1>Bookmarks </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bookmarks" component={Bookmarks} />
      </Switch>
    </div>
  );
}

export default App;
