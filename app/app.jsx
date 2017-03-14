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
import firebase, {firebaseRef} from "firebaseCredentials";
import AdminLoginPage from "AdminLoginPage";
import AdminPage from "AdminPage";
import EventPage from 'EventPage';
import UserPage from 'UserPage';
import UserPageTest from 'UserPageTest';
import EventList from 'EventList';
import EventPageTest from 'EventPageTest';
import 'imports-loader?jQuery=jquery!owl.carousel';
import * as actions from 'actions';
var store = require('store').config();
import {Provider} from 'react-redux';
store.subscribe(()=> {
  var state = store.getState();
  console.log("New State", state);
})

store.dispatch(actions.storeAction());

// firebaseRef.on("value", (snapshot) => {
//   store.dispatch(actions.startAddUser(snapshot.val().user.name, snapshot.val().user.uid))
// })

// store.dispatch(actions.startAddUser("Ankit Chauhan", 9304580349));
firebase.auth().onAuthStateChanged((user) => {
  if(user) {


  } else {

    hashHistory.push('/');
  }
})
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
      <Route path="/event/:eventId" component={EventPage} />
      <Route path="/userPage" component={UserPage}/>
      <Route path="/userPageTest" component={UserPageTest}/>
      <Route path="/eventTestPage" component={EventPageTest}/>
      <Route path="/eventList" component={EventList}/>
    </Route>
  </Router>
</Provider>,
  document.getElementById('app')
);
