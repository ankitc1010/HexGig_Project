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
// import CertificateGeneration from "CertificateGeneration";
// import EventCreation from "EventCreation";
// import IndexAdminPage from "IndexAdminPage";
// import VolunteerAddAdminPage from "VolunteerAddAdminPage";
// import VolunteerDisplayPage from "VolunteerDisplayPage";
// import EventPage from 'EventPage';
// import UserPage from 'UserPage';
// import UserPageTest from 'UserPageTest';
// import EventList from 'EventList';
// import EventPageTest from 'EventPageTest';
// import 'react-dates/lib/css/_datepicker.css';
// import 'cropperjs/dist/cropper.css';
import 'loaders.css/loaders.min.css';
import MainPortal from 'MainPortal';

import 'imports-loader?jQuery=jquery!owl.carousel';
import * as actions from 'actions';
var store = require('store').config();
import {Provider} from 'react-redux';
store.subscribe(()=> {
  var state = store.getState();
  console.log("New State", state);
})



// firebaseRef.child('events').push({
//   address:"Room 67 \n 14 Tottenham Court Road \n London \n ksdkso",
//   contact:"Email: verbattle@verb.com\\n Twitter: @verbattle",
//  details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium lacus vitae mi malesuada sodales. Praesent eu suscipit elit, at tristique enim. Vestibulum facilisis congue libero, elementum dignissim diam consectetur nec. Curabitur euismod imperdiet iaculis.",
//  name: "AWESOME COOL EVENT",
//  schedule: "Thursday 29 August 2017 \n Presentation 12am to 9am \n Results 8pm",
//  startDate: 23,
//  startMonth: "FEB",
//  tick: "featured",
//  type: "premium"
//
// });
//
firebase.database().ref('user').on("child_changed", ()=>{
  store.dispatch(actions.LoadPointsFirebase());
});
firebase.database().ref().child('claims').on("child_added", ()=>{
  store.dispatch(actions.LoadClaimsFromFirebase());
})
var isAdmin = (nextState, replace, next) => {
  if(store.getState().admin === null) {
    replace('/adminLogin');
  } next();
}
var isUser = (nextState, replace, next) => {
  if(store.getState().user === null) {
    replace('/');
  } next();
}


ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={IndexPage}/>
      <Route path="mainPortal" component={MainPortal} onEnter={isUser}></Route>
      <Route path="adminPage" component={AdminPage} onEnter={isAdmin} ></Route>
      <Route path="adminLogin" component={AdminLoginPage}></Route>
      {/* <Route path="/adminLogin" component={AdminLoginPage}></Route>
      <Route path="/event/:eventId" component={EventPage}></Route>
      <Route path="/userPage" component={UserPage}></Route>
      <Route path="/userPageTest" component={UserPageTest}></Route>
      <Route path="/eventTestPage" component={EventPageTest}></Route>
      <Route path="/eventList" component={EventList}></Route>
      <Route path="adminPage" component={AdminPage} >
        <IndexRoute component={IndexAdminPage}/>
        <Route path="/adminPage/certificategenerate" component={CertificateGeneration}></Route>
        <Route path="/adminPage/volunteeraddadminpage" component={VolunteerAddAdminPage}></Route>
        <Route path="/adminPage/eventcreate" component={EventCreation}></Route>
        <Route path="/adminPage/volunteerdisplaypage" component={VolunteerDisplayPage}></Route>
      </Route> */}
    </Route>
  </Router>
</Provider>,
  document.getElementById('app')
);
