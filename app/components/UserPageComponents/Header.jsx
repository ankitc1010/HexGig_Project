import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <div>
        <div className="container paddingTop">
          <div className="row">
            <div className="col-md-6">
              <center>  <img src={String(this.props.user.photoUrl)} className="img-responsive img-circle" width="300"/></center>
            </div>
            <div className="col-md-6">
              <div className="row">
                <center><h1>{String(this.props.user.name)}</h1></center>
              </div>
              <div className="row">
                <center><h2>34 Events Registered</h2></center>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      user: state.user
    }
  }
)(Header);
