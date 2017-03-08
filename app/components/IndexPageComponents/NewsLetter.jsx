import React from 'react';

class NewsLetter extends React.Component {
  render() {
    return (
      <div className="container newsLetter">
        <center>
          <h1 className="heading">SUBSCRIBE TO NEWSLETTER</h1>
          <p className="text"> GET EMAILS OF OUR NOTIFICATIONS</p>
          <input className="input" type="text" placeholder="Enter Email"/><span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        </center>
      </div>
    )
  }
}

export default NewsLetter;
