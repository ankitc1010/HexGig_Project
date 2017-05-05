import cover from '../../img/bitmap.png';
import React, {Component} from 'react';

class Header extends Component {
componentDidMount() {
  document.getElementById("cool-header").style.background = "url('"+cover+"') no-repeat right bottom";
}
render() {


  return (
    <div className="container header">
      <div className="row header-row" id="cool-header">
        <div className="col-md-7">
          <h1 className="heading-section">
            GET TOP 5%<br/> DESIGNERS &<br/>
PAY PER SCREEN
          </h1>
          <button className="see-how">SEE HOW</button>
        </div>
      </div>

    </div>
  )
}
}

export default Header;
