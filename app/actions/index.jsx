import firebase, {firebaseRef, googleProvider} from "firebaseCredentials";
import {hashHistory} from 'react-router';
//SignUP and SignIn Routes
//-------------------------------------------------------------------------
//Basic Redux Routes
export var addUser = (obj) => {
    return {type: "ADD_USER", obj}
}

export var removeUser = () => {
    return {type: "REMOVE_USER"}
}

export var changeAdminStatus = (status) => {
    return {type: "CHANGE_ADMIN_STATUS", status}
}


//MiddleWare for Logout

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then((result) => {
            console.log("Successfully Signed Out", result);
            dispatch(removeUser());
        }, (error) => {
            console.log("Some Error Occured");
        })
    };
};


//addEventsAction
export var checkEventsThereAction = () => {
  return(dispatch, getState) => {
    if(!getState().events) {
      dispatch(addEventToStore());
    }
  }
}

export var addEventToStore = () => {
  return(dispatch, getState) => {
    var EventRef = firebase.database().ref('events');
    return EventRef.once("value").then((snapshot)=> {
      var events = snapshot.val() || {};
      var parsedEvents = [];
      Object.keys(events).forEach((id) => {
        parsedEvents.push({
          id,
          ...events[id]
        });
      });
      dispatch(EventToStoreAdded(parsedEvents));
    })
  }
}

export var EventToStoreAdded = (events) =>{
  return {
    type: "ADD_EVENTS_TO_STORE",
    events
  }
}


//eventTOdISPLAY
export var fillInEvent = (eventId) => {
  return(dispatch, getState) => {
    return firebaseRef.child(`events/${eventId}`).once('value').then((snapshot)=>{
      dispatch(storeEventtoStore(snapshot.val()));
    })
  }
}

export var storeEventtoStore = (object) => {
  return {
    type:"ADD_EVENT_TO_DISPLAY_ON_PAGE",
    event: object
  }
}


//SignIn MiddleWares Awesome
export var changeRoute = () => {
    return(dispatch, getState) => {
      setTimeout(() => {
        return hashHistory.push('/userPage');
      }, 700);

  }
}

export var storeAction = () => {

    return (dispatch, getState) => {
        var user = firebase.auth().currentUser;

        if (user) {
            console.log(user);
            var userRef = firebase.database().ref(`user/${user.uid}`);
            return userRef.once("value").then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("The snapshot value", snapshot.val());
                    dispatch(addUser(snapshot.val()));
                } else {
                    var obj = {
                        name: user.displayName,
                        photoUrl: user.photoURL,
                        email: user.email,
                        uid: user.uid
                    };
                    userRef.set(obj);
                    dispatch(addUser(obj));
                }
            })

        } else {
            console.log("Not Signned In");
        }
    }
}

export var startSignInTheRealOne = () => {
    return (dispatch, getState) => {
        dispatch(signInOperation());
        dispatch(storeAction());
    }
}

export var signInOperation = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(result);
            console.log("signInOnClickRegisterEvent action dispatched successfully");
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(error);
            // ...
        });
    }
}

export var checkForEventAlreadyAdded = (uid, id) => {
    return (dispatch, getState) => {
        var eventRef = firebase.database().ref(`user/${uid}/events`);
        return eventRef.once("value").then((snapshot) => {
            if (snapshot.child(id).exists()) {
                console.log('Already Exist Event');
            } else {
                eventRef.child(id).set({transportRequired: false, going: true});

            }
        }).catch((error) => {
            console.log("Error Occured");
        })
    }
}

export var addUserToEventObject = (uid, id) => {
    return (dispatch, getState) => {
        var userRef = firebase.database().ref(`events/${id}/users`);
        return userRef.once("value").then((snapshot) => {
            if (snapshot.child(uid).exists()) {
                console.log("User Already Registered");
            } else {
                userRef.child(uid).set({haveAttended: false})
            }
        })
    }
}

export var EventRegistrationEvent = (id) => {
    return (dispatch, getState) => {
        var user = firebase.auth().currentUser;
        var userAfterAuth = null;
        if (user) {
            var userStore = getState().user;
            if (userStore) {
                dispatch(checkForEventAlreadyAdded(user.uid, id));
                dispatch(addUserToEventObject(user.uid, id)).then(()=>dispatch(changeRoute()));

            } else {
                dispatch(storeAction());
                dispatch(checkForEventAlreadyAdded(user.uid, id));
                dispatch(addUserToEventObject(user.uid, id)).then(()=>dispatch(changeRoute()));

            }
        } else {

            dispatch(signInOperation());
            dispatch(storeAction());
          
            dispatch(checkForEventAlreadyAdded(user.uid, id));
            dispatch(addUserToEventObject(user.uid, id)).then(()=>dispatch(changeRoute()));

        }

    }
}

//userPage MiddleWare actions
export var checkBeforeUserPage = () => {
  return(dispatch, getState) => {
    if(!getState().user) {
      hashHistory.push("/");
    }
  }
}
