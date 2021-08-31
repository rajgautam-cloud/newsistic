import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCxlGJ-nRRRbh-uofugxqw7cpO0dAA2u8w",
  authDomain: "newsapp-bc811.firebaseapp.com",
  projectId: "newsapp-bc811",
  storageBucket: "newsapp-bc811.appspot.com",
  messagingSenderId: "1050329250931",
  appId: "1:1050329250931:web:8c088e06cb9edb2d337e06",
  measurementId: "G-WSWY5PYET5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
