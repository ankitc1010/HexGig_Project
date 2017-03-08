


export var userReducer = (state = null, actions) => {
  switch(actions.type) {
    case "ADD_USER": return {
      name: actions.name,
      uid: actions.uid,
      photoUrl: actions.photoUrl,
      email: actions.email
    };
    case "REMOVE_USER": return {
      name: null,
      uid: null
    };
    default: return state;
  }
}






export var adminReducer = (state = null, actions) => {
  switch(actions.type) {
    case "CHANGE_ADMIN_STATUS": return actions.status
    default: return state;
  }
}
