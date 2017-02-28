import React from 'react';
var {connect} = require('react-redux');
var  actions = require ('actions');

export class AdminPage extends React.Component {
  

  render() {
    return (
    <div>Admin Page</div>
    )
  }
}

export default connect()(AdminPage);
