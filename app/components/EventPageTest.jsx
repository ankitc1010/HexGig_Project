import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class EventPageTest extends Component {
  constructor(props){
    super(props);
    var {dispatch,params} = this.props;
    dispatch(actions.fillInEvent(params.eventId));
  }

  thinkingtoRender(){
    if(this.props.event === null){
      return "Loading";
    } else {
      return (
        <div className="row">
            <div className="col-md-12 title-of-event">
            <h1>{this.props.event.name}</h1>
          </div>

        <div className="col-md-5 details">
          <h4>
            {this.props.event.details}
          </h4>
        </div>
        <div className="col-md-7 imp-details">
            <div className="date-time">
                <span className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i>
</span>
                <span className="title">
                  SCHEDULE
                </span><br/>
                <div className="other-details">
                {this.props.event.schedule}
                </div>
            </div>
            <div className="location">
              <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i>
</span>
              <span className="title">
                  LOCATION
              </span><br/>
              <div className="other-details">
                {this.props.event.address}
              </div>
            </div>
            <div className="reception">
              <span className="icon"><i className="fa fa-comments" aria-hidden="true"></i>
</span>
              <span className="title">
                  CONTACT
              </span><br/>
              <div className="other-details">
                {this.props.event.contact}
              </div>
            </div>
            <div className="button-segment">
              <button className="btn btn-success" onClick={()=> this.props.dispatch(actions.EventRegistrationEvent(this.props.params.eventId))}>Register</button>
            </div>
        </div>
      </div>
      )
    }
  }

  render() {
    var {event, params} = this.props;
    return (
      <div className="container event-template">
        {this.thinkingtoRender()}

    </div>

    )
  }
}


export default connect(
  state => {
    return {
      event: state.event
    }
  }
)(EventPageTest);
