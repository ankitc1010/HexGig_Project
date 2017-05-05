import firebase from "firebase";

try { // this will happen only once and thatis awesome
  var config = {
    apiKey: "AIzaSyAn9whepg4puoD9Tw9h4ftggpUMdkuHAsU",
   authDomain: "hexgig-f9694.firebaseapp.com",
   databaseURL: "https://hexgig-f9694.firebaseio.com",
   projectId: "hexgig-f9694",
   storageBucket: "hexgig-f9694.appspot.com",
   messagingSenderId: "907808814759"
    };
firebase.initializeApp(config);

} catch(e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();
export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export default firebase;
