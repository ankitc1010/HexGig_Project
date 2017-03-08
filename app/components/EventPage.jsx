import React, {Component} from "react";

class eventPage extends Component {
  render() {
    return (
      <div>
        <h1>The Events Page {this.props.params.eventId}</h1>
      </div>
    )
  }
}


export default eventPage;
