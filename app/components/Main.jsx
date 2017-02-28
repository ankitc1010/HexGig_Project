var React = require('react');
import {connect} from 'react-redux';
import NavBar from 'NavBar';

class Main extends React.Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        return (
          <div>
          <NavBar/>
          {this.props.children}
        </div>
        );
    }
}

export default connect()(Main);
