import firebase from "firebase";

try { // this will happen only once and thatis awesome
  var config = {
    apiKey:
   authDomain:
   databaseURL:
   projectId:
   storageBucket:
   messagingSenderId: 
    };
firebase.initializeApp(config);

} catch(e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();
export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export default firebase;
