import React, {Component} from 'react';
import {connect} from 'react-redux';
import RowComponent from 'RowComponent';

class EventsList extends Component {
    renderEventsFunction() {
        var {events} = this.props;
        if (events === null) {
            return "Loading";
        } else {
            return events.map((entity) => {
              console.log(entity);
                return <RowComponent event={entity} key={entity.id}/>;
            })
        }

    }
    render() {
        return (
            <div className="container events-list">
                <div className="col-md-12 heading">
                    <h1>Events</h1>
                </div>
                {this.renderEventsFunction()}

                {/* <div className="row event-component">
                    <div className="col-md-3 date">
                        <span>17</span><p> Feb</p>
                    </div>
                    <div className="col-md-8 content">
                      <h2>VERBATTLE LEAGUE 2017</h2>
                      <hr/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium lacus vitae mi malesuada sodales. Praesent eu suscipit elit, at tristique enim. Vestibulum facilisis congue libero, elementum dignissim diam consectetur nec. Curabitur euismod imperdiet iaculis.</p>
                    </div>
                    <div className="col-md-1 button"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>

                </div>
                <div className="row event-component">
                    <div className="col-md-3 date">
                        <span>17</span><p> Feb</p>
                    </div>
                    <div className="col-md-8 content">
                      <h2>VERBATTLE LEAGUE 2017</h2>
                      <hr/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium lacus vitae mi malesuada sodales. Praesent eu suscipit elit, at tristique enim. Vestibulum facilisis congue libero, elementum dignissim diam consectetur nec. Curabitur euismod imperdiet iaculis.</p>
                    </div>
                    <div className="col-md-1 button"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>

                </div>  <div className="row event-component">
                      <div className="col-md-3 date">
                          <span>17</span><p> Feb</p>
                      </div>
                      <div className="col-md-8 content">
                        <h2>VERBATTLE LEAGUE 2017</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium lacus vitae mi malesuada sodales. Praesent eu suscipit elit, at tristique enim. Vestibulum facilisis congue libero, elementum dignissim diam consectetur nec. Curabitur euismod imperdiet iaculis.</p>
                      </div>
                      <div className="col-md-1 button"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>

                  </div>  <div className="row event-component">
                        <div className="col-md-3 date">
                            <span>17</span><p> Feb</p>
                        </div>
                        <div className="col-md-8 content">
                          <h2>VERBATTLE LEAGUE 2017</h2>
                          <hr/>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium lacus vitae mi malesuada sodales. Praesent eu suscipit elit, at tristique enim. Vestibulum facilisis congue libero, elementum dignissim diam consectetur nec. Curabitur euismod imperdiet iaculis.</p>
                        </div>
                        <div className="col-md-1 button"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>

                    </div> */}
            </div>

        )
    }
}

export default connect(state => {
    return {events: state.events}
})(EventsList);
