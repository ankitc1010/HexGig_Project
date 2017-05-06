import React from 'react';
import $ from 'jquery';
import left from '../../img/left.svg';
import right from '../../img/right.svg';
import image1 from '../../img/page-1.svg';
import image2 from '../../img/page-2.svg';
import image3 from '../../img/page-3.svg';



class OwlCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        $(document).ready(function() {
            $('.owl-carousel').owlCarousel({
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
            <div id="owl-hero" className="owl-carousel owl-theme">



             <div className="item" style={{backgroundImage: `url(${image1})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundColor: 'white'}}>
                 <div className="caption">


                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image3})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundColor: 'white'}}>
                 <div className="caption">

                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image3})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundColor: 'white'}}>
                 <div className="caption">

                 </div>
             </div>

            </div>
        )
    }
}

export default OwlCarousel;
