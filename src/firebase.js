// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAaMCH1A7g7lhgj_ty9IvtsZjwg6py1fgg",
    authDomain: "facebook-clone-code.firebaseapp.com",
    databaseURL: "https://facebook-clone-code.firebaseio.com",
    projectId: "facebook-clone-code",
    storageBucket: "facebook-clone-code.appspot.com",
    messagingSenderId: "239021180583",
    appId: "1:239021180583:web:c3a5c03e43b1000d9a3d82",
    measurementId: "G-G6TWCJ2F7S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider};
  export default db;