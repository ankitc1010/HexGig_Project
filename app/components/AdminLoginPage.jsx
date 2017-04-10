import React from 'react';
import {connect} from 'react-redux';
var actions = require('actions');
import {hashHistory} from 'react-router';

class AdminLoginPage extends React.Component {
    resolveLogin() {
        var id = this.refs.email.value;
        var password = this.refs.password.value;
        if (id === "admin" && password === "shubham") {
            this.props.dispatch(actions.changeAdminStatus(true));
            hashHistory.push('/adminPage');

        } else {
            alert("Not Valid Id and Password");
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Admin Login Page
                </h1>
                <form onSubmit={this.resolveLogin.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="LoginID">LoginID</label>
                        <input type="text" ref='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="LoginId" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" ref="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary">LogInAsAdmin</button>
                </form>
            </div>
        )
    }
}

export default connect()(AdminLoginPage);
