import React from 'react';
import $ from 'jquery';
import left from '../../img/left.svg';
import right from '../../img/right.svg';
import image1 from '../../img/webdesign.jpg';
import image2 from '../../img/webdesign2.jpg';
import image3 from '../../img/webdesign3.jpg';



class OwlCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        $(document).ready(function() {
            $('#owl-hero-bigger').owlCarousel({
              nav: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        loop:true,
        transitionStyle: "fadeUp",
        autoplay: false,
        navText: ["<img src='"+left+"'/>", "<img src='"+right+"'/>"]
      //   navigation: true, // Show next and prev buttons
      //  slideSpeed: 300,
      //  paginationSpeed: 400,
      //  singleItem: true,
      //  transitionStyle: "fadeUp",
      //  autoPlay: true,
      //  navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]


        });
        // var slideHeight = $(window).height();
        //
        // $('#owl-hero .item').css('height', slideHeight);
        //
        // $(window).resize(function () {
        //     $('#owl-hero .item').css('height', slideHeight);
        // });
    })}
    render() {
        return (
            <div id="owl-hero-bigger" className="owl-carousel owl-theme">



             <div className="item" style={{backgroundImage: `url(${image1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center'}}>
                 <div className="caption">


                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center'}}>
                 <div className="caption">

                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center'}}>
                 <div className="caption">

                 </div>
             </div>

            </div>
        )
    }
}

export default OwlCarousel;
