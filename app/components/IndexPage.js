import React, {Component} from 'react';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Seller from './SellerComponent';


class IndexPage extends Component {
    render() {
        return (

                <div><Header/>
        <About />
        <Seller /> </div>


        )
    }
}
export default IndexPage;
