import React, {Component} from 'react';
import firebase, {firebaseRef} from 'firebaseCredentials';
import * as actions from 'actions';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
class SignInDiv extends Component {
  onUsernameChange(event){
    this.setState({
      username:event.target.value
    })
  }

  onPasswordChange(event){
    this.setState({
      password:event.target.value
    })
  }

  onSubmit(event){

    event.preventDefault();
    this.props.dispatch(actions.LoadingChange());
    console.log(this.state);
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((snapshot)=>{
      console.log("Hurray Signed In");
      var user = firebase.auth().currentUser;
      this.props.dispatch(actions.addUser(user));
      this.props.dispatch(actions.LoadingChange());
      hashHistory.push('/mainPortal');

    }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("ErrorCode - ", errorCode);
  console.log("ErrorMessage - ", errorMessage);
});
  }
  render(){
    return (
      <div className="container">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6 border-index">
        <center><h1>SignIn</h1></center>
        <div className="form-group">
          <label>UserName</label>
          <input type="text" className="form-control" onChange={this.onUsernameChange.bind(this)}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" onChange={this.onPasswordChange.bind(this)}/>
        </div>
        <center>
        <button className="btn-lg btn-primary" onClick={this.onSubmit.bind(this)}>Submit</button></center>
      </div>
    </div></div>
  )
  }
}

export default connect()(SignInDiv);
