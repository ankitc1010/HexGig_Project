var React = require('react');
var ReactDOM = require('react-dom');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import 'bootstrapJs';
import 'bootstrapCss';
import 'applicationStyles';
import Main from 'Main';
import IndexPage from 'IndexPage';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import {firebaseRef} from "firebaseCredentials";
import AdminLoginPage from "AdminLoginPage";
import AdminPage from "AdminPage";

import 'imports-loader?jQuery=jquery!owl.carousel';
import * as actions from 'actions';
var store = require('store').config();
import {Provider} from 'react-redux';
store.subscribe(()=> {
  var state = store.getState();
  console.log("New State", state);
})

firebaseRef.on("value", (snapshot) => {
  store.dispatch(actions.addUser(snapshot.val().user.name, snapshot.val().user.uid))
})

store.dispatch(actions.startAddUser("Ankit Chauhan", 9304580349));

var isAdmin = (nextState, replace, next) => {
  if(store.getState().admin === null) {
    replace('/adminLogin');
  } next();
}

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={IndexPage}/>
      <Route path="/adminLogin" component={AdminLoginPage}/>
      <Route path="/adminPage" component={AdminPage} onEnter={isAdmin}/>
    </Route>
  </Router>
</Provider>,
  document.getElementById('app')
);
