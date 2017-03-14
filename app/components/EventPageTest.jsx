import React, {Component} from 'react';

class EventPageTest extends Component {
  render() {
    return (
      <div className="container event-template">
        <div className="row">
            <div className="col-md-12 title-of-event">
            <h1>VERBATTLE 2017</h1>
          </div>

        <div className="col-md-5 details">
          <h4>
            Lorem ipsum dolor sit amet, <i className="fa fa-clock-o" aria-hidden="true"></i>consectetur adipiscing elit. Pellentesque pretium lacus vitae mi malesuada sodales. Praesent eu suscipit elit, at tristique enim.
          </h4>
        </div>
        <div className="col-md-7 imp-details">
            <div className="date-time">
                <span className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i>
</span>
                <span className="title">
                  HEADING
                </span><br/>
                <div className="other-details">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </div>
            </div>
            <div className="location">
              <span className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i>
</span>
              <span className="title">
                  HEADING
              </span><br/>
              <div className="other-details">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="reception">
              <span className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i>
</span>
              <span className="title">
                  HEADING
              </span><br/>
              <div className="other-details">
                Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
              </div>
            </div>
            <div className="button-segment">
              <button className="btn btn-success">Register</button>
            </div>
        </div>
      </div>
    </div>

    )
  }
}


export default EventPageTest;
