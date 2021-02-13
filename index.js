import { registerRootComponent } from "expo";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firebase";
import "firebase/auth";
import App from "./App";

firebase.initializeApp({
  apiKey: process.env.REACT_NATIVE_FIREBASE_API_KEY,
  authDomain: process.env.REACT_NATIVE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_NATIVE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_NATIVE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_NATIVE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_NATIVE_FIREBASE_APP_ID,
  measurementId: process.env.REACT_NATIVE_FIREBASE_MEASUREMENT_ID,
});

firebase.analytics();

registerRootComponent(App);
