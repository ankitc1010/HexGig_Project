import React, { Component } from 'react';
import NavBar from './NavBarComponents';
import Footer from './FooterComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      {this.props.children}
      <Footer/>
    </div>
    )
  }
}
export default Main;
