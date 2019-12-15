import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyBZqNFlg3JRJ8rqx6mMfmve5-xy0H7N1vg",
  authDomain: "skycars-e37ee.firebaseapp.com",
  databaseURL: "https://skycars-e37ee.firebaseio.com",
  projectId: "skycars-e37ee",
  storageBucket: "skycars-e37ee.appspot.com",
  messagingSenderId: "694924203624",
  appId: "1:694924203624:web:bc2ade68de98d5c28ecddd",
  measurementId: "G-Z6R2X9GR34"
};

const devConfig = {
  apiKey: "AIzaSyBZqNFlg3JRJ8rqx6mMfmve5-xy0H7N1vg",
  authDomain: "skycars-e37ee.firebaseapp.com",
  databaseURL: "https://skycars-e37ee.firebaseio.com",
  projectId: "skycars-e37ee",
  storageBucket: "skycars-e37ee.appspot.com",
  messagingSenderId: "694924203624",
  appId: "1:694924203624:web:bc2ade68de98d5c28ecddd",
  measurementId: "G-Z6R2X9GR34"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
