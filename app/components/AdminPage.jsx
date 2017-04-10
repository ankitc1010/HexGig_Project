import React from 'react';
var {connect} = require('react-redux');
var  actions = require ('actions');
import ClaimRow from 'ClaimRow';
import AdminCreateMember from 'AdminCreateMember';
import Loader from 'react-loaders';


export class AdminPage extends React.Component {
  componentWillMount(){
    this.props.dispatch(actions.LoadClaimsFromFirebase());

  }
  renderClaims(){
    var {claims} = this.props;
    if (claims === null) {
        return <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>;
    } else if(claims === false) {

      return "No Claims To Handle";
    } else {

      var parsedClaims = [];
      Object.keys(claims).forEach((id) => {
        parsedClaims.push({
          id,
          ...claims[id]
        });
      });
      console.log(parsedClaims);
        return parsedClaims.map((entity) => {

            return <ClaimRow claim={entity} key={entity.id}/>;
        })
    }
  }

  render() {
    return (
    <div className="container admin-page">
      <div className="row">
      <div className="col-md-3">

      </div>
      <div className="col-md-9 viewAdmin">
        <div className="container">
          <h1>Claims Section</h1>
        {this.renderClaims.bind(this)()}
      </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
      <AdminCreateMember/>
      </div>
      <div className="col-md-6">

      </div>
    </div>
  </div>
    )
  }
}

export default connect(state => {
    return {claims: state.claims}
})(AdminPage);
