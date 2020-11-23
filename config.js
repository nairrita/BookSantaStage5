import firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyAHmIXaWaMRMXBlXeGKaIrppxldU6aKWP4",
    authDomain: "booksantafinal-394d6.firebaseapp.com",
    databaseURL: "https://booksantafinal-394d6.firebaseio.com",
    projectId: "booksantafinal-394d6",
    storageBucket: "booksantafinal-394d6.appspot.com",
    messagingSenderId: "103384408114",
    appId: "1:103384408114:web:fd852a4837ce731d039c2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()