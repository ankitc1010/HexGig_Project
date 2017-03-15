import React, {Component} from 'react';
import {hashHistory} from 'react-router';


class RowComponent extends Component {
  render() {
    var {event} = this.props;
    return (
      <div className="row event-component">
          <div className="col-md-3 date">
              <span className="dateinSpan">{event.startDate}</span><p> {event.startMonth}</p>
          </div>
          <div className="col-md-8 content">
            <h2>{event.name}</h2>
            <hr/>
            <p>{event.details}</p>
          </div>
          <div className="col-md-1 button"><i className="fa fa-chevron-right" onClick={()=> hashHistory.push(`event/${event.id}`)} aria-hidden="true"></i></div>

      </div>
    )
  }
}

export default RowComponent;
