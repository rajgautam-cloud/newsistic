import React, { useEffect, useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import NewsPage from "./components/NewsPage/NewsPage.component";
import BookmarksPage from "./pages/bookmarks-page/bookmarks-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/Header/Header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Bookmarks } from "@material-ui/icons";

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
      console.log(userAuth);
      setCurrentUser(userAuth);
    });
    // return () => {
    //   unsubscribeFromAuth();
    // };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bookmarks" component={BookmarksPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
