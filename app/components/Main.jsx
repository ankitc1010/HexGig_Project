var React = require('react');
import {connect} from 'react-redux';
import NavBar from 'NavBar';
import LoaderScreen from 'LoaderScreen';


class Main extends React.Component {
    constructor(props, context) {
        super(props);
    }
    renderLoader() {
      if(this.props.loaderstate){
        return ( <div><LoaderScreen/></div>)
      } else {
        return (
        <div>
        <NavBar/>
        {this.props.children}
      </div>)
      }
    }

    render() {
        return (
          <div>
          {this.renderLoader.bind(this)()}
        </div>
        );
    }
}

export default connect(
  state => {
      return {loaderstate: state.loaderstate}
  }
)(Main);
