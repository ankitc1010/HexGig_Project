import React from 'react';
import {connect} from 'react-redux';
import cover from 'img/debate.jpg';
import * as actions from 'actions';
import Progress from 'react-progressbar';
import {hashHistory} from 'react-router';

class EventsDiv extends React.Component {
  constructor() {
    super();
    this.state= {
      progress: 0
    }
      this.changeProgress.bind(this)();
  }

  changeProgress() {
  this.state.good = setInterval(()=>{

    this.setState({
      progress: (this.state.progress+0.5)
    })
      if(this.state.progress==100)
      this.setState({
        progress: 0
      })

    }, 100)
  }
  componentWillUnmount() {
    clearInterval(this.state.good);
  }

  render() {




    return(
      <div className="container events">

        <div className="row">
          <div className="col-md-6 photo" style={{backgroundImage: 'url('+cover+')'}}>

          </div>
          <div className="col-md-6 content">
            <Progress completed={this.state.progress} style={{backgroundColor: '#f16f7c', color: 'black', marginBottom: '5%'}}/>
            <h5 className="upcoming">UPCOMING EVENT</h5>
            <h1 className="event-title">VERBATTLE 2017 DEBATING CHAMPIONSHIP</h1>
            <h5 className="event-date">June 26 - July 27, 2017</h5>
            <button className="btn register" onClick={()=>{hashHistory.push(`event/-KedtkU7XR-EkFWeyO9G`)} }>More Details</button>
          </div>
        </div>
        <div className="row all-events">
          <div className="col-md-8 text">
            <h3>View all Events, that you can take join</h3>
          </div>
          <div className="col-md-4 button">
          <a className="btn change" onClick={()=>{hashHistory.push('/eventList')}}>VIEW ALL EVENTS</a>
        </div>
        </div>
      </div>
    )
  }
}


export default connect()(EventsDiv);
