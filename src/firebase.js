import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGf0fKA3xkykDYQ8rrcR2XxNY-UZ3eSSs",
  authDomain: "linkedin-clone-ab6d0.firebaseapp.com",
  projectId: "linkedin-clone-ab6d0",
  storageBucket: "linkedin-clone-ab6d0.appspot.com",
  messagingSenderId: "764000709151",
  appId: "1:764000709151:web:2a623758f2273e5602832a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
