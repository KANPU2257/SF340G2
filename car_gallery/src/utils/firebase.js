import firebase from "./firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYVtuMfJzvmAmEHG0RFKG5fWwGYAqHmMk",
  authDomain: "car-gallery-70637.firebaseapp.com",
  databaseURL: "https://car-gallery-70637-default-rtdb.firebaseio.com",
  projectId: "car-gallery-70637",
  storageBucket: "car-gallery-70637.appspot.com",
  messagingSenderId: "162514844870",
  appId: "1:162514844870:web:84c73f539d2d5014b56bc7",
  measurementId: "G-8Q628WC8LS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
