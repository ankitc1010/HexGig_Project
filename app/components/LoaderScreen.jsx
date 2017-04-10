import React, {Component} from 'react';
import  {Loader} from 'react-loaders';
import $ from 'jquery';

class LoaderScreen extends Component {
  componentDidMount() {
    var slideHeight = $(window).height();

    $('.loader').css('height', slideHeight);
    $(window).resize(function () {
        $('.loader').css('height', slideHeight);
    });
  }
  render() {
    return (
      <div className="loader-screen">
        <Loader type="pacman" active />
      </div>
    )
  }
}

export default LoaderScreen;
