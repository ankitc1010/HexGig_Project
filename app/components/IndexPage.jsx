import React from 'react';
import OwlCarousel from 'OwlCarousel';
import {connect} from 'react-redux';
import * as actions from 'actions';
import EventsDiv from 'EventsDiv';
import About from 'About';
import SignInDiv from 'SignInDiv';
import NewsLetter from 'NewsLetter';
class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
          <OwlCarousel/>
          {/* <About/> */}
        {/* <EventsDiv/> */}
      {/* <NewsLetter/> */}
      <SignInDiv/>

        
        </div>
        )
    }
}

export default connect()(IndexPage);
