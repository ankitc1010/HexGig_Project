import React, {Component} from 'react';
import image from 'img/hoho.jpg';
class UserPageTest extends Component {
    render() {
        return (
            <div className="container user-page">
                <div className="row">
                    <div className="col-md-6 profile-segment">
                        <img src={image} className="img-fluid rounded-circle profile-pic"/><br/>
                        <h3 className="profile-name">Rosita Chauhan</h3>
                    </div>
                    <div className="col-md-6 xp-segment">
                        <p className="xp-count">23</p>
                        <p className="xp-point">POINTS</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 event-registered-segment">
                        <p className="event-registered">16</p>
                        <p className="event">EVENTS<br/>REGISTERED</p>

                    </div>
                    <div className="col-md-6 id-segment">
                        <p className="id">23klsdfjioweo</p>
                        <p className="id-text">VERBATTLE ID</p>

                    </div>
                </div>
                <div className="row profile-completion">
                    <div className="col-md-8 move-right">
                        <span className="circle ">23%</span>
                        Profile Completed
                    </div>
                    <div className="col-md-4">
                        <button className="btn buttonExpand">Edit Profile</button>
                    </div>
                </div>
                <div className="row event-segment">
                    <div className="col-md-8 move-right">
                        View All Events
                    </div>
                    <div className="col-md-4">
                        <button className="btn buttonExpand">Take me there!</button>
                    </div>
                </div>
                <div className="row event-black-white">
                    <div className="col-md-12 show-all-events-registered">
                        <p className="letter-spacing-up">Events Registered</p>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-block">
                                <h3 className="card-title">VERBATTLE 2017</h3>
                                <p className="card-text">Event is on 25 June.</p>
                                <a href="#" className="btn btn-primary">Download Resources</a>
                                <a href="#" className="btn btn-success">Download Certificate</a>
                                <a href="#" className="btn btn-danger">Unregister</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-block">
                                <h3 className="card-title">School Event 2017</h3>
                                <p className="card-text">Event is on 23 July.</p>
                                <a href="#" className="btn btn-primary">Download Resources</a>
                                <a href="#" className="btn btn-success">Download Certificate</a>
                                <a href="#" className="btn btn-danger">Unregister</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default UserPageTest;
