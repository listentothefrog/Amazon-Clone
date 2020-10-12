// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDTwx3spTB48pZQoRWN8J8Od--xZ0tDPlU",
  authDomain: "amzon-web-clone.firebaseapp.com",
  databaseURL: "https://amzon-web-clone.firebaseio.com",
  projectId: "amzon-web-clone",
  storageBucket: "amzon-web-clone.appspot.com",
  messagingSenderId: "549869679027",
  appId: "1:549869679027:web:ab3032fd5018735be21bc6",
  measurementId: "G-LDX627NNCE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
