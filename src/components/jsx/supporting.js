import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import Organise from '../../assets/images/organise.svg';
import Organisetwo from '../../assets/images/organise2.svg';
import Organisethree from '../../assets/images/organise3.svg';
import Organisefour from '../../assets/images/organise4.svg';

class Supporting extends Component {         
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    }; 
    return (   
        <div className="Supporting">       
            <Container> 
                    <div className="fw700 fs50 col10 col1 w-100">Supporting Organizations</div>
                    <div className="col14 fs20 fw500 w-100 pt-3 mb-5 pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>

                  <Slider {...settings}> 
                    <div className="organise_carousel">
                        <Image src={Organise} alt="Organise" />
                    </div>
                    <div className="organise_carousel">
                        <Image src={Organisetwo} alt="Organisetwo" />
                    </div>
                    <div className="organise_carousel">
                        <Image src={Organisethree} alt="Organisethree" />
                    </div>
                    <div className="organise_carousel">
                        <Image src={Organisefour} alt="Organisefour" />
                    </div> 
                    <div className="organise_carousel">
                        <Image src={Organise} alt="Organise" />
                    </div>
                    <div className="organise_carousel">
                        <Image src={Organisetwo} alt="Organisetwo" />
                    </div> 
                  </Slider> 
            </Container> 
        </div>
    )
  }
}

export default Supporting;
