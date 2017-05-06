import React, {Component} from 'react';
import OwlCarousel from './OwlCarousel';
import firebase, {firebaseRef} from 'firebaseCredentials';
import {connect} from 'react-redux';
import * as actions from 'actions';

class Seller extends Component {
  componentWillMount(){
    firebase.database().ref('seller').once("value", (snapshot)=> {
      console.log(snapshot.val());
      var sellers = snapshot.val() || {};
                  var parsedSellers = [];
                  Object.keys(sellers).forEach((id) => {
                      parsedSellers.push({
                          id,
                          ...sellers[id]
                      });
                  });
                  console.log(parsedSellers);
                  this.props.dispatch(actions.addSellers(parsedSellers));
    })
  }
  renderSellers(){
    var {sellers} = this.props;
       if (sellers === null) {
           return "Loading";
       } else {
           return sellers.map((entity) => {
             console.log(entity);
               return (
                 <div className="col-12 col-md-6 col-md-3 col-lg-3" key={entity.id}>
                     <div className="card">
                         <div className="caraousel">
                             <OwlCarousel/>
                         </div>
                         <div className="bottom-details d-flex flex-row">
                             <div className="orders">
                                 <p className="order">orders</p>
                                 <p className="value">{entity.orders}</p>
                             </div>
                             <div className="line"></div>
                             <div className="starting-at">
                                 <p className="order">starting at</p>
                                 <p className="value">${entity.startingAt}</p>
                             </div>
                             <div className="favourites ml-auto">
                                 <i className="fa fa-star blue" aria-hidden="true"></i>
                             </div>

                         </div>
                     </div>
                 </div>
               )
           })
       }
  }
    render() {
        return (
            <div className="container seller-container">
                <div className="row select-row">
                    <div className="col-12 col-sm-12 col-md-2 alignLeft">
                        <select className="select">
                            <option>File Format&nbsp;</option>
                        </select>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 alignLeft">
                        <select className="select">
                            <option>Services Included&nbsp;</option>
                        </select>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 alignRight">
                        <span className="sort-by">
                            Sort by:
                        </span>
                        <select className="select">
                            <option>Avg. Customer Rating &nbsp;</option>
                        </select>
                    </div>
                </div>
                <div className="row seller-row">
                  {this.renderSellers.bind(this)()}
                    <p className="btn btn-default load-more">LOAD MORE</p>
                </div>
            </div>
        );
    }
}

export default connect(state=>{
  return {sellers: state.sellers}
})(Seller);
