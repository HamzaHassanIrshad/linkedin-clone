import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_1UwKUed6AVOsFxn2MR0-YsQyri7gRZs",
  authDomain: "linkedin-clone-d90de.firebaseapp.com",
  projectId: "linkedin-clone-d90de",
  storageBucket: "linkedin-clone-d90de.appspot.com",
  messagingSenderId: "247264052878",
  appId: "1:247264052878:web:93e0ccdc7653f7ed44abdf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
