import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const API_KEY = process.env.REACT_APP_FIREBASE;

const config = {
  apiKey: API_KEY,
  authDomain: "newsapp-bc811.firebaseapp.com",
  projectId: "newsapp-bc811",
  storageBucket: "newsapp-bc811.appspot.com",
  messagingSenderId: "1050329250931",
  appId: "1:1050329250931:web:8c088e06cb9edb2d337e06",
  measurementId: "G-WSWY5PYET5",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const user = firestoreDB.doc(`users/${userAuth.uid}`);
  const snapShot = await user.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await user.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return user;
};

export const auth = firebase.auth();
const firestoreDB = firebase.firestore();
export { firestoreDB };
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
