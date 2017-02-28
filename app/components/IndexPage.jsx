import React from 'react';
import OwlCarousel from 'OwlCarousel';
import {connect} from 'react-redux';
import * as actions from 'actions';
import EventsDiv from 'EventsDiv';
import About from 'About';
import NewsLetter from 'NewsLetter';
class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
          <OwlCarousel/>
          <About/>
        <EventsDiv/>
      <NewsLetter/>

          <button className="btn btn-success" onClick={()=> {this.props.dispatch(actions.startSignIn())} }>SignIn</button>
          <button className="btn btn-warning" onClick={() => {this.props.dispatch(actions.startLogout())} }>LogOut</button>
        </div>
        )
    }
}

export default connect()(IndexPage);
