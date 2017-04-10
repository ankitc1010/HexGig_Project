import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase, {firebaseRef} from 'firebaseCredentials';
import * as actions from 'actions';
import ListRow from 'ListRow';

class MainPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            claimType: "volvo"
        }
    }
    // componetWillMount(){
    //   this.props.dispatch(actions.LoadPointsFirebase());
    // }

    submitClaim(e) {
        e.preventDefault();
        this.props.dispatch(actions.LoadingChange());
        firebase.database().ref('/claims').push(this.state).then(() => {
            console.log("Hurray Claim Sent");
            this.props.dispatch(actions.LoadingChange());
        }).catch((error) => {
            console.log(error);
        })
    }
    componentDidMount() {
        this.setState({
            user:this.props.user.displayName,
            uid:this.props.user.uid
        });
        this.props.dispatch(actions.LoadPointsFirebase());
    }
    handleChange(event) {
        this.setState({claimType: event.target.value});
    }
    handledescriptionChange(event) {
        this.setState({description: event.target.value})
    }
    renderRankings() {
        var {points} = this.props;
        if (points === null) {

            return (
                <tr>
                    <th scope="row"></th>
                    <td>
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    </td>
                    <td></td>

                </tr>
            )
        } else if (points === false) {

            return "No User Came";
        } else {

            var parsedPoints = [];
            Object.keys(points).forEach((id) => {
                parsedPoints.push({
                    id,
                    ...points[id]
                });
            });
            var sortedPoints = parsedPoints.sort((a, b) => {
                return b.score - a.score;
            })
            var i = 0;
            return sortedPoints.map((list) => {
                i++;
                return <ListRow list={list} number={i} key={i}/>
            })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Main User Portal</h1>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <center>
                            <h4>Claim Points</h4>
                        </center>
                        <form>
                        Reason:
                        <select value={this.state.claimType} onChange={this.handleChange.bind(this)} required>
                            <option value="volvo">Reason-1
                            </option>
                            <option value="saab">Reason- 2</option>
                            <option value="fiat">Reason- 3</option>
                            <option value="audi">Reason- 4</option>
                        </select><br/>
                        <input type="text" className="form-control" onChange={this.handledescriptionChange.bind(this)} placeholder="Description" required/>
                        <input type="submit" className="btn-primary btn-lg" onClick={this.submitClaim.bind(this)}/>
                      </form>
                    </div>
                </div>
                <div className="row">
                    <h1>Current Rankings</h1>

                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Score</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRankings.bind(this)()}
                                </tbody>
                            </table>
                        </div>

                </div>
            </div>
        )
    }
}

export default connect(state => {
    return {user: state.user, points: state.points}
})(MainPortal);
