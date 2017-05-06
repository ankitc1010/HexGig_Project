import React, {Component} from 'react';
import logo from '../../img/group.svg';
import { connect } from 'react-redux';
import * as actions from 'actions';
import facebook from '../../img/facebook.svg';
import google from '../../img/btn-google-light-pressed-ios.svg';
import cart from '../../img/ic-shopping-cart.svg';

class NavBar extends Component {
  onClickFacebookSignIn() {
    this.props.dispatch(actions.FacebookLogin());
  }
  onClickGoogleSignIn() {
    this.props.dispatch(actions.GoogleLogin());
  }
  renderRightCorner() {
    if(this.props.user === null) {
      return (
        <div >
          <center className="cool">
        <button className="btn btn-default start-selling" type="submit">Start Selling</button>

        <button className="btn login" type="button" data-toggle="modal" data-target="#loginModal">Login</button>
      </center>
      </div>
      )
    } else {
      return (
        <div>
        <button className="btn basic">Explore</button>
        <button className="btn basic">Order</button>
        <img src={cart} width="24" height="24" className="image2"/>
        <img src={this.props.user.photoURL} width="40" height="40" className="image"/>
      </div>
      )
    }
  }
  render() {
    return (
      <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

      <div className="navbar-brand"><center><img src={logo} />
      <span className="name">HEXGIG</span></center>
    </div>

      <form className="ml-auto button-content">
        {this.renderRightCorner.bind(this)()}
      </form>
    </div>
  </nav>
  <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">

      <div className="modal-body">
        <h1>Login to HexGig</h1>
        <input type="text" className="form-control email" placeholder="Email/UserName"/>
        <input type="password" className="form-control" placeholder="Password"/>
        <button className="form-control continue">CONTINUE</button>
        <div className="forgot"><p>Forget Password?</p></div>
        <div className="flex-box-or">
          <hr/>
          <p>or</p>
          <hr/>
        </div>
        <button className="form-control facebook" onClick={this.onClickFacebookSignIn.bind(this)}><img src={facebook}/>CONTINUE WITH FACEBOOK</button>
        <button className="form-control google" onClick={this.onClickGoogleSignIn.bind(this)}><img src={google}/>CONTINUE WITH GOOGLE</button>
          <center><a className="not-member">Not a Member?</a></center>

      </div>

    </div>
  </div>
</div>
</div>
    )
  }
}

export default connect(state => {
    return {user: state.user}
})(NavBar);
