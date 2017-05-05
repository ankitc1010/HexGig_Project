import * as redux from "redux";
import thunk from "redux-thunk";

import {userReducer, sellerReducer, sellersinfoReducer} from "reducers";

export var config = () => {
  var reducer = redux.combineReducers({
    user: userReducer,
    sellers: sellerReducer,
    sellerinfo: sellersinfoReducer
  });
  var store = redux.createStore(reducer, redux.compose(redux.applyMiddleware(thunk),
   window.devToolsExtension ? window.devToolsExtension() : f => f));
  return store;

}
