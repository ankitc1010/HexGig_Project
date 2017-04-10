import firebase from "firebase";

try { // this will happen only once and thatis awesome
  var config = {
      apiKey: "AIzaSyCujwELv4s-wYrP4RdfUa7uSdP6BUjYkWU",
      authDomain: "aiesec-nob.firebaseapp.com",
      databaseURL: "https://aiesec-nob.firebaseio.com",
      projectId: "aiesec-nob",
      storageBucket: "aiesec-nob.appspot.com",
      messagingSenderId: "630442297142"
    };
firebase.initializeApp(config);

} catch(e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();
export var googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;
