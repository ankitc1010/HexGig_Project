import React, {Component} from 'react';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Seller from './SellerComponent';
import GiantCarousel from './SellerPageComponent/GiantCarousel';
import SmallerCarousel from './SellerPageComponent/SmallerCarousel';


import Card from './SellerPageComponent/Card';

class IndexPage extends Component {
    render() {
        return (
          <div>
         <Header/>
        <About />
        <Seller />

            </div>
        )
    }
}
export default IndexPage;
