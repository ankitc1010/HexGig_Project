import React, {Component} from 'react';
import Header from 'Header';
import * as actions from 'actions';
import {connect} from 'react-redux';

class UserPage extends Component {
    componentWillMount() {
        this.props.dispatch(actions.checkBeforeUserPage());
        if (!this.props.user) {
            this.props.dispatch(actions.checkBeforeUserPage());
            this.render = () => {
                return false;
            }
        };

    }
    render() {
        return (
            <div><Header/></div>
        )
    }
}

export default connect(state => {
    return {user: state.user}
})(UserPage);
