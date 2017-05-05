import React, {Component} from 'react';
import cell1 from '../../img/page-1.svg';
import cell2 from '../../img/page-2.svg';
import cell3 from '../../img/page-3.svg';
let Class = () => {
  return (
    <div className="container cells-container">
      <div className="row cells-row">

        <div className="col-md-4 cell">
          <img src={cell1} width="100" className="space1"/>
          <p className="heading">
            Create Order
          </p>
          <p className="description">
            Choose an influencer, package and add ons
          </p>
        </div>
        <div className="col-md-4 cell">
          <img src={cell2} className="space1"/>
          <p className="heading">
            Send Mockups & Pay
          </p>
          <p className="description">
            Send your designer payment and mockups.
          </p>
        </div>
        <div className="col-md-4 cell">
          <img src={cell3} className="space2"/>
          <p className="heading">
            Receive Files
          </p>
          <p className="description">
            If you love the work, accept it and receive source files
          </p>
        </div>

      </div>
    </div>
  )
}

export default Class;
