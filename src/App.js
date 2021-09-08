import React, { useEffect, useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import NewsPage from "./components/NewsPage/NewsPage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/Header/Header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
const Bookmarks = () => (
  <div>
    <h1>Work for this page is in process</h1>
  </div>
);

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
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} currentUser={currentUser} />}
        />
        <Route path="/bookmarks" component={Bookmarks} />
        <Route path="/news" component={NewsPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
