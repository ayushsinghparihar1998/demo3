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
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div className="Supporting">
        <Container>
          <div className="fw700 fs40 col10 col1 w-100">Supported Organizations</div>
          <div className="col14 fs18 fw500 w-100 pt-3 mb-5 pb-3">Eat Luv N Pray works with organisations in helping them increase productivity and mitigate delays by providing mental health support to their employees. Get started today.</div>

          <Slider {...settings}>
            {/* <div className="organise_carousel">
              <Image src={Organise} alt="Organise" />
            </div> */}
            {/* <div className="organise_carousel">
              <Image src={Organisetwo} alt="Organisetwo" />
            </div>
            <div className="organise_carousel">
              <Image src={Organisethree} alt="Organisethree" />
            </div> */}
            <div className="organise_carousel">
              <Image src={Organisefour} alt="Organisefour" />
            </div>
            <div className="organise_carousel">
              <Image src={Organise} alt="Organise" />
            </div>
            {/* <div className="organise_carousel">
              <Image src={Organisefour} alt="Organisefour" />
            </div> */}
            {/* <div className="organise_carousel">
              <Image src={Organisetwo} alt="Organisetwo" />
            </div> */}
          </Slider>
        </Container>
      </div>
    )
  }
}

export default Supporting;
