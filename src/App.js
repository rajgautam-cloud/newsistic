import React, { useEffect, useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.component";
import HomePage from "./pages/homepage/homepage.component";
import NewsPage from "./components/NewsPage/NewsPageSidebar.component";
import NewsSearch from "./components/NewsPage/NewsPageSearchbar.component";
import CommandCards from "./pages/commands-page/commands-page.component";
import BookmarksPage from "./pages/bookmarks-page/bookmarks-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const unsubscribeFromAuth = useRef(null);
  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bookmarks" component={BookmarksPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/newsearch" component={NewsSearch} />
        <Route path="/signin" component={SignInAndSignUpPage} />
        <Route path="/commands" component={CommandCards} />
      </Switch>
    </div>
  );
};

export default App;
