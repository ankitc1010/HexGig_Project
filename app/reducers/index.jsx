


export var userReducer = (state = null, actions) => {
  switch(actions.type) {
    case "ADD_USER": return {
      ...actions.obj};
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


export var eventsReducer = (state=null, actions) => {
  switch(actions.type) {
    case "ADD_EVENTS_TO_STORE": return actions.events;
    default: return state;
  }
}


export var eventReducer = (state=null, actions) => {
    switch(actions.type) {
      case "ADD_EVENT_TO_DISPLAY_ON_PAGE": return actions.event;
      default: return state;
    }
}
