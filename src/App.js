import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/Header/Header.component";

const Bookmarks = () => (
  <div>
    <h1>Work for this page is in process</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bookmarks" component={Bookmarks} />
      </Switch>
    </div>
  );
}

export default App;
