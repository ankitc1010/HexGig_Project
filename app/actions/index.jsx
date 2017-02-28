import firebase, {firebaseRef, googleProvider} from "firebaseCredentials";

export var addUser = (name, uid) => {
    return {type: "ADD_USER", name, uid}
}

export var startAddUser = (name, uid) => {
    return (dispatch, getState) => {
        var obj = {
            name,
            uid
        }
        var userDef = firebaseRef.child('user').set(obj);
        return userDef.then(() => {
            dispatch(addUser(name, uid));
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
