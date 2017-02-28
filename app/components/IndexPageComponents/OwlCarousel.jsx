import React from 'react';
import $ from 'jquery';
import back01 from 'img/back01.jpg';
import back02 from 'img/back02.jpg';
import back03 from 'img/back03.jpg';


class OwlCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    inhibit() {
        $(document).ready(function() {
            $('.owl-carousel').owlCarousel({navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,

        loop:true,
        transitionStyle: "fadeUp",
        autoplay: true,


        });

    })}
    render() {
        return (
            <div id="owl-hero" className="owl-carousel owl-theme">
                {this.inhibit()}


             <div className="item" style={{backgroundColor: "#BA68C8"}}>
                 <div className="caption">

                     <h1> <span>Verbattle</span></h1>
                    <h6>Democracy | Speech & Debates</h6>
                 </div>
             </div>
             <div className="item" style={{backgroundColor:"#F9A825"}}>
                 <div className="caption">
                   <h1> <span>Verbattle</span></h1>
                  <h6>Communication | Conflict Resolution</h6>
                 </div>
             </div>
             <div className="item" style={{backgroundColor:'#00897B'}}>
                 <div className="caption">
                   <h1> <span>Verbattle</span></h1>
                  <h6>Conflict Resolution | Leadership</h6>
                 </div>
             </div>

            </div>
        )
    }
}

export default OwlCarousel;
