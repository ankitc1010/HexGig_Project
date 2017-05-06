import React, {Component} from 'react';
import GiantCarousel from './SellerPageComponent/GiantCarousel';
import SmallerCarousel from './SellerPageComponent/SmallerCarousel';


import Card from './SellerPageComponent/Card';
import profile1 from '../img/profile1.jpg';
import profile2 from '../img/profile2.jpg';
import profile3 from '../img/profile3.jpg';
import profile4 from '../img/profile4.jpg';
import profilePic from '../img/profile-pic.jpg';


class SellerPage extends Component {
    render() {
        return (
            <div className="container sellerPage">
                <div className="row">
                    <div className="col-md-8 carousel-column">
                      <p className="package">Works Done</p>
                      <div className="giant-carousel">
                        <GiantCarousel/>
                      </div>
                      <div className="small-carousel">
                        <SmallerCarousel/>
                      </div>
                      <Card>
                        <div className="rating-section">
                        <div className="rating">
                          <span className="total-ratings">23232 Reviews</span>
                          <span className="stars">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                          </span><span className="number">4.7</span>
                        </div>
                        <hr/>
                        <div className="container comment">
                          <div className="row">
                            <div className="col-5 col-md-2">
                                <img src={profile1} className="img-fluid"/>
                            </div>
                            <div className="col-7 col-md-7">
                                <div className="header">
                                  <span className="name">
                                    Tomstars
                                  </span>
                                  <span className="line"></span>
                                  <span className="stars">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                  </span>

                                </div>
                                <div className="comment-info">
                                  Good Experience.
                                </div>
                            </div>
                            <div className="col-md-3 time">
                              5 minutes ago
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-5 col-md-2">
                                <img src={profile2} className="img-fluid"/>
                            </div>
                            <div className="col-7 col-md-7">
                                <div className="header">
                                  <span className="name">
                                    Tomstars
                                  </span>
                                  <span className="line"></span>
                                  <span className="stars">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                  </span>

                                </div>
                                <div className="comment-info">
                                  Good Experience.
                                </div>
                            </div>
                            <div className="col-md-3 time">
                              5 minutes ago
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-5 col-md-2">
                                <img src={profile3} className="img-fluid"/>
                            </div>
                            <div className="col-7 col-md-7">
                                <div className="header">
                                  <span className="name">
                                    Tomstars
                                  </span>
                                  <span className="line"></span>
                                  <span className="stars">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                  </span>

                                </div>
                                <div className="comment-info">
                                  Good Experience.
                                </div>
                            </div>
                            <div className="col-md-3 time">
                              5 minutes ago
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-5 col-md-2">
                                <img src={profile4} className="img-fluid"/>
                            </div>
                            <div className="col-7 col-md-7">
                                <div className="header">
                                  <span className="name">
                                    Tomstars
                                  </span>
                                  <span className="line"></span>
                                  <span className="stars">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                  </span>

                                </div>
                                <div className="comment-info">
                                  Good Experience.
                                </div>
                            </div>
                            <div className="col-md-3 time">
                              5 minutes ago
                            </div>
                          </div>
                          <hr/>
                          <div className="container">
                          <div className="row load-more">
                            <div className="col-md-4 col-12 col-sm-12"></div>
                            <div className="col-md-4 col-12 col-sm-12">
                                <center><p>  Show All Reviews</p></center>
                            </div>

                          </div>
                        </div>

                        </div>

                      </div>
                      </Card>
                    </div>
                    <div className="col-md-4 profile-column">
                        <p className="package">Package</p>
                        <Card>
                            <p className="dropdown-toggle" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                $80 Illustration
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="container-collapse">
                                    <hr/>
                                    <div className="container">
                                      <div className="row clock">
                                        <div className="col-6">
                                          <i className="fa fa-clock-o" aria-hidden="true"></i> 3 days delivery
                                        </div>
                                        <div className="col-6">
                                          <i className="fa fa-refresh" aria-hidden="true"></i> 2 Max Revisions
                                        </div>
                                      </div>
                                        <div className="row">
                                          <div className="col-12 info-padding">
                                            <div className="info">
                                              Mobile Screen in Sketch or PSD
                                            </div>
                                            <div className="info-des">
                                              Includes : Sketch, PSD, PNG, PDF, SVG, AI<br/>
                                              Min: 3 screens<br/>
                                              <i className="fa fa-check" aria-hidden="true"></i> 1 Logo Included<br/>
                                              <i className="fa fa-check" aria-hidden="true"></i> Source Files<br/>
                                            </div>
                                              <button className="btn btn-default">Proceed to Order $40</button>
                                              <p className="compare">Compare Package</p>


                                          </div>
                                        </div>
                                      </div>

                            </div>
                          </div>
                        </Card>
                        <Card>
                            <p className="dropdown-toggle" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                $80 Mobile Screen
                            </p>
                            <div className="collapse notopborder" id="collapseExample2">
                              <div className="container-collapse">
                                  <hr/>
                                  <div className="container">
                                    <div className="row clock">
                                      <div className="col-6">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 3 days delivery
                                      </div>
                                      <div className="col-6">
                                        <i className="fa fa-refresh" aria-hidden="true"></i> 2 Max Revisions
                                      </div>
                                    </div>
                                      <div className="row">
                                        <div className="col-12 info-padding">
                                          <div className="info">
                                            Mobile Screen in Sketch or PSD
                                          </div>
                                          <div className="info-des">
                                            Includes : Sketch, PSD, PNG, PDF, SVG, AI<br/>
                                            Min: 3 screens<br/>
                                            <i className="fa fa-check" aria-hidden="true"></i> 1 Logo Included<br/>
                                            <i className="fa fa-check" aria-hidden="true"></i> Source Files<br/>
                                          </div>
                                            <button className="btn btn-default">Proceed to Order $40</button>
                                            <p className="compare">Compare Package</p>


                                        </div>
                                      </div>
                                    </div>

                          </div>
                            </div>
                        </Card>
                        <Card>
                            <p className="dropdown-toggle" data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                $100 Web Screen
                            </p>
                            <div className="collapse notopborder" id="collapseExample3">
                              <div className="container-collapse">
                                  <hr/>
                                  <div className="container">
                                    <div className="row clock">
                                      <div className="col-6">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 3 days delivery
                                      </div>
                                      <div className="col-6">
                                        <i className="fa fa-refresh" aria-hidden="true"></i> 2 Max Revisions
                                      </div>
                                    </div>
                                      <div className="row">
                                        <div className="col-12 info-padding">
                                          <div className="info">
                                            Mobile Screen in Sketch or PSD
                                          </div>
                                          <div className="info-des">
                                            Includes : Sketch, PSD, PNG, PDF, SVG, AI<br/>
                                            Min: 3 screens<br/>
                                            <i className="fa fa-check" aria-hidden="true"></i> 1 Logo Included<br/>
                                            <i className="fa fa-check" aria-hidden="true"></i> Source Files<br/>
                                          </div>
                                            <button className="btn btn-default">Proceed to Order $40</button>
                                            <p className="compare">Compare Package</p>


                                        </div>
                                      </div>
                                    </div>

                          </div>
                            </div>
                        </Card>
                        <p className="profile package">Profile</p>
                        <Card>
                            <center><img src={profilePic} className="img-fluid profile-image" width="180"/></center>
                            <p className="name">Best_Design51</p>
                            <p className="level">Level 2 Seller</p>
                            <hr/>
                            <div className="skills">
                              <div className="language"><span className="skillhead">Speaks</span><br/> <span className="skillvalue">English</span></div>
                              <div className="rating"><span className="skillhead">Positive Rating</span><br/> <span className="skillvalue">98%</span></div>
                            </div>

                            <hr/>
                            <div className="aboutseller">Internal Designer for HexGig based in the Netherlands. Looking to provide buyers with a high quality experience and service. </div>
                            <hr/>
                            <button className="btn btn-default button">Contact</button>
                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}
export default SellerPage;
