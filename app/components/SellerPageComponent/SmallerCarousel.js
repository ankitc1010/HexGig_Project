import React from 'react';
import $ from 'jquery';
import left from '../../img/left.svg';
import right from '../../img/right.svg';
import image1 from '../../img/page-1.svg';
import image2 from '../../img/page-2.svg';
import image3 from '../../img/page-3.svg';
import image4 from '../../img/page-1.svg';
import image5 from '../../img/page-2.svg';
import image6 from '../../img/page-3.svg';



class OwlCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        $(document).ready(function() {
            $('#owl-hero-smaller').owlCarousel({
              loop:true,
     margin:10,
     nav:true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:3
         },
         1000:{
             items:5
         }
     },
        transitionStyle: "fadeUp",
        autoplay: true,
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
            <div id="owl-hero-smaller" className="owl-carousel owl-theme smaller">



             <div className="item" style={{backgroundImage: `url(${image1})`}}>
                 <div className="caption">


                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image2})`}}>
                 <div className="caption">

                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image3})`}}>
                 <div className="caption">

                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image4})`}}>
                 <div className="caption">


                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image5})`}}>
                 <div className="caption">

                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image6})`}}>
                 <div className="caption">

                 </div>
             </div>

            </div>
        )
    }
}

export default OwlCarousel;
