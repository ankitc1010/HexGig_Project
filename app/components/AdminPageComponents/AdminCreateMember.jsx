import React, {Component} from 'react';
import * as actions from 'actions';
import {connect} from 'react-redux';

class AdminCreateMember extends Component {
  onNameChange(event){
    this.setState({
      displayName:event.target.value
    })
  }
  onPasswordChange(event){
    this.setState({
      password:event.target.value
    })
  }
  onEmailChange(event){
    this.setState({
      email:event.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    console.log(this.params);
    this.props.dispatch(actions.LoadingChange());
    this.props.dispatch(actions.createMemberFirebase(this.state));
  }
  render(){
    return (
      <div>
      <h1>Create Member</h1>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" onChange={this.onNameChange.bind(this)}/>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" onChange={this.onEmailChange.bind(this)}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" onChange={this.onPasswordChange.bind(this)}/>
      </div>
      <center>
      <button className="btn-lg btn-primary" onClick={this.onSubmit.bind(this)}>Submit</button></center>
    </div>
    )
  }
}
export default connect()(AdminCreateMember);
