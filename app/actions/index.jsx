import firebase, {firebaseRef, googleProvider, facebookProvider} from "firebaseCredentials";
import {hashHistory} from 'react-router';
//SignUP and SignIn Routes
//-------------------------------------------------------------------------
export var addUser = (user) => {
    return {type: "ADD_USER", user};
}
export var addSellers = (sellers) => {
  return{type: "ADD_SELLERS", sellers};
}
export var FacebookLogin = () => {
    return (dispatch, getState) => {
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            console.log(result);
            dispatch(addUser(result.user));
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
};

export var GoogleLogin = () => {
  return(dispatch, getState) => {
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
      dispatch(addUser(result.user));
    });
  }
}
