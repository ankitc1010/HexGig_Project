import React, {Component} from 'react';
import connect from 'react-redux';

class ButtonSwitch extends Component {
  logic(){
    var object = this.props.user;
    if(object){
      return (
        <span><a class="btn btn-primary">Register</a></span>
      )
    } else{
      return (
        <span><a class="btn btn-primary">LogIn to Register</a></span>

      )
    }
  }
  render(){
    return (
      <span>
      {this.logic()}
    </span>
    )
  }
}

export default connect(
  state => {
    return {
      user: state.user
    }
  }
)(ButtonSwitch);
