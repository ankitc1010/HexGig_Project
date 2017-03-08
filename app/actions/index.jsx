import firebase, {firebaseRef, googleProvider} from "firebaseCredentials";
import {hashHistory} from 'react-router';

export var addUser = (name, uid, email, photoUrl) => {
    return {type: "ADD_USER", name, uid, email, photoUrl}
}

export var startAddUser = (name, uid, email, photoUrl) => {
    return (dispatch, getState) => {
        var obj = {
            name,
            email,
            photoUrl
        }
        var userDef = firebaseRef.child(`user/${uid}`).update(obj);
        return userDef.then(() => {
            dispatch(addUser(name, uid,email,photoUrl));
        })
    }
}

export var removeUser = () => {
    return {type: "REMOVE_USER"}
}

export var changeAdminStatus = (status) => {
    return {type: "CHANGE_ADMIN_STATUS", status}
}

export var startSignIn = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(result);
            dispatch(startAddUser(result.user.displayName, result.user.uid, result.user.email, result.user.photoURL)).then(()=>{
              console.log("ready");
            });
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
}

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then((result) => {
            console.log("Successfully Signed Out", result);
        }, (error) => {
            console.log("Some Error Occured");
        })
    };
};

// export var SignInRegistration = () => {
//   return(dispatch, getState) => {
//     dispatch
//   }
// }
var changeRoute = () => {
    return hashHistory.push('/userPage');
}


//actions for handling the event registration and that will be awesome

export var registerEvent = (id) => {
  return (dispatch, getState) => {
    if(getState().user === null) {
      dispatch(startSignIn()).then(()=> {
        console.log("Ready");
        setTimeout(()=>{  return firebaseRef.child(`user/${getState().user.uid}/events/${id}`).set({
            going:true,
            transportRequired: true
          }).then(()=> {
            console.log("Event Successfully Added");
            hashHistory.push('/userPage');
          });}, 1000)

      });
    } else {
      return firebaseRef.child(`user/${getState().user.uid}/events/${id}`).set({
          going:true,
          transportRequired: true
        }).then(()=> {
          hashHistory.push('/userPage');
        });
    }

  }
}
