import firebase from "firebase";

try { // this will happen only once and thatis awesome
var config = {
  apiKey: "AIzaSyAm63yJ4bFkKtWZyZjiLUijIWR6qGqYO-I",
      authDomain: "verbattle-2b90c.firebaseapp.com",
      databaseURL: "https://verbattle-2b90c.firebaseio.com",
      storageBucket: "verbattle-2b90c.appspot.com",
      messagingSenderId: "936645570254"
};
firebase.initializeApp(config);

} catch(e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();
export var googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;
