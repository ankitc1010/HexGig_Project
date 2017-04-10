import * as redux from "redux";
import thunk from "redux-thunk";

import {userReducer, adminReducer, eventsReducer, loaderReducer, eventReducer, pointsReducer, claimsReducer} from "reducers";

export var config = () => {
  var reducer = redux.combineReducers({
    user: userReducer,
    admin: adminReducer,
    events: eventsReducer,
    event: eventReducer,
    loaderstate: loaderReducer,
    claims: claimsReducer,
    points: pointsReducer
  });
  var store = redux.createStore(reducer, redux.compose(redux.applyMiddleware(thunk)));
  return store;

}
