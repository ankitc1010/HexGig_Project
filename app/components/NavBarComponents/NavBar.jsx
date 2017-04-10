import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div>
      {/* <nav className="navbar navbar-inverse navbar-fixed-top" >
  <div className="container-fluid">
    <div className="navbar-header" >
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#"><img src="img/VBwhite2.png" alt="Verbattle Logo"/></a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav" >
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">Format</a></li>
		<li><a href="#">Register</a></li>
        <li><a href="#">Programs</a></li>
        <li><a href="#">Tournaments</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Support Us</a></li>
      </ul>
    </div>
  </div>
</nav> */}
<nav className="navbar navbar-toggleable-md navbar-inverse bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">AIESEC</a>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    
    </div>
  </div>
</nav>
</div>

    )
  }
}

export default NavBar;
