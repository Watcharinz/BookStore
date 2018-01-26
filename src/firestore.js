import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCE7Ax5lQ9XLjvkV583brJraOqsK_cXP0s",
    authDomain: "book-store-53daf.firebaseapp.com",
    databaseURL: "https://book-store-53daf.firebaseio.com",
    projectId: "book-store-53daf",
    storageBucket: "book-store-53daf.appspot.com",
    messagingSenderId: "70769530243"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db; 