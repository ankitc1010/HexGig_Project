export var sellersinfoReducer = (state = {}, actions) => {
  switch(actions.type) {
    case "FEED_IN": return actions.seller;
    default: return state;
  }
}

export var sellerReducer = (state = [], actions) => {
  switch(actions.type) {
    case 'FEED_IN': return actions.sellers;
    default: return state;
  }
}
export var userReducer = (state = null, actions) => {
  switch(actions.type) {
    case "ADD_USER": return actions.user;
    case "REMOVE_USER": return null;
    default: return state;
  }
}
