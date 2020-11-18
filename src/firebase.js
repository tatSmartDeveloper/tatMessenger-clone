import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDSzM0K9hYAdUelcVq1WalaWaZtPi4kvwE",
  authDomain: "facebook-messenger-clone-a14cb.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-a14cb.firebaseio.com",
  projectId: "facebook-messenger-clone-a14cb",
  storageBucket: "facebook-messenger-clone-a14cb.appspot.com",
  messagingSenderId: "220440150319",
  appId: "1:220440150319:web:29bea4294e3c8c917c61da",
  measurementId: "G-GFD25SEHC6"
})

const db = firebaseApp.firestore();

export default db;