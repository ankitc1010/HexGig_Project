import React, {Component} from 'react';
import logo from '../../img/group.svg';
import { connect } from 'react-redux';
import * as actions from 'actions';
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
        <div>
        <button className="btn start-selling" type="submit">Start Selling</button>

        <button className="btn login" type="button" data-toggle="modal" data-target="#loginModal">Login</button>
      </div>
      )
    } else {
      return (
        <div>
        <button className="btn basic">Explore</button>
        <button className="btn basic">Order</button>
        <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
        <img src={this.props.user.photoURL} width="44" height="44" className="image"/>
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
      <div className="navbar-brand"><img src={logo} />
      <span className="name">HEXGIG</span>
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
        <a href="" className="ml-auto">Forget Password?</a>
        <p>or</p>
        <button className="form-control facebook" onClick={this.onClickFacebookSignIn.bind(this)}>CONTINUE WITH FACEBOOK</button>
        <button className="form-control google" onClick={this.onClickGoogleSignIn.bind(this)}>CONTINUE WITH GOOGLE</button>
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
