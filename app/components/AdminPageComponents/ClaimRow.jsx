import React, {Component} from 'react';
import * as actions from 'actions';
import {connect} from 'react-redux';

class ClaimRow extends Component {
  onAccept(e){
    e.preventDefault();
    this.props.dispatch(actions.addCreditToMember(this.props.claim.uid, this.props.claim.claimType, this.props.claim.id));
  }
  onReject(e) {
    e.preventDefault();
    this.props.dispatch(actions.removeClaimFromFirebase(this.props.claim.id));
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-8 col-8">
          <h5>{this.props.claim.user}</h5>
          <p>{this.props.claim.description}</p>
          <p>{this.props.claim.claimType}</p>
        </div>
        <div className="col-md-2 col-2" onClick={this.onAccept.bind(this)}>
          <i className="fa fa-check" aria-hidden="true"></i>
        </div>
        <div className="col-md-2 col-2" onClick={this.onReject.bind(this)}>

          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default connect()(ClaimRow);
