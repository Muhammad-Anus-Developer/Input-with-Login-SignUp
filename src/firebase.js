import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBjM5nFrxaCq6pXePLpDJ2kHl7GOaf_rtY",
  authDomain: "inputdatas.firebaseapp.com",
  databaseURL: "https://inputdatas-default-rtdb.firebaseio.com",
  projectId: "inputdatas",
  storageBucket: "inputdatas.appspot.com",
  messagingSenderId: "1056710307820",
  appId: "1:1056710307820:web:f3028bb1b40e52ed75dac9",
  measurementId: "G-0HC7FE3SZ2"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();