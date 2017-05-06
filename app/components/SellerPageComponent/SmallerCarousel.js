import React from 'react';
import $ from 'jquery';
import left from '../../img/left.svg';
import right from '../../img/right.svg';
import image1 from '../../img/superhero1.jpg';
import image2 from '../../img/superhero2.jpg';
import image3 from '../../img/superhero3.jpg';
import image4 from '../../img/superhero4.jpg';
import image5 from '../../img/superhero1.jpg';
import image6 from '../../img/superhero2.jpg';



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
             items:2
         },
         1000:{
             items:4
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



             <div className="item" style={{backgroundImage: `url(${image1})`, backgroundSize:'cover'}}>
                 <div className="caption">


                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image2})`, backgroundSize:'cover'}}>
                 <div className="caption">

                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image3})`, backgroundSize:'cover'}}>
                 <div className="caption">

                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image4})`, backgroundSize:'cover'}}>
                 <div className="caption">


                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image5})`, backgroundSize:'cover'}}>
                 <div className="caption">

                 </div>
             </div>
             <div className="item" style={{backgroundImage: `url(${image6})`, backgroundSize:'cover'}}>
                 <div className="caption">

                 </div>
             </div>

            </div>
        )
    }
}

export default OwlCarousel;
