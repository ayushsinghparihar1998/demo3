import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Organise from '../../assets/images/organise.svg';
import Organisetwo from '../../assets/images/organise2.svg';
import Organisethree from '../../assets/images/organise3.svg';
import Organisefour from '../../assets/images/organise4.svg';
import Organisefive from '../../assets/images/Zoapi_io.png';
import Organisesix from '../../assets/images/Karabi_Art_Community.png';
import Organiseone from '../../assets/images/Lorem_Insights.png';

class Supporting extends Component {
  render() {
    
    return (
      <div className="Supporting">
        <Container>
          <div className="fw700 fs40 col10 col1 w-100">Supported Organizations</div>
          <div className="col14 fs18 fw500 w-100 pt-3 mb-5 pb-3">Eat Luv N Pray works with organisations in helping them increase productivity and mitigate delays by providing mental health support to their employees. Get started today.</div>
          <Row className="m-auto supportives">       
               <Col md={3} md={6} lg={4} col={12}>   
                <div className="organise_carousel">
                  <Image src={Organise} alt="Organise" /> 
                </div>
               </Col>
                {/* <div className="organise_carousel">
                  <Image src={Organisetwo} alt="Organisetwo" />
                </div>
                <div className="organise_carousel">
                  <Image src={Organisethree} alt="Organisethree" />
                </div> */}
                <Col md={3} md={6} lg={4} col={12}>  
                  <div className="organise_carousel">
                    <Image src={Organisefour} alt="Organisefour" />    
                  </div>
                </Col>
                <Col md={3} md={6} lg={4} col={12}>  
                  <div className="organise_carousel">
                    <Image src={Organisesix} alt="Organisefour" />    
                  </div>
                </Col>
                <Col md={3} md={6} lg={4} col={12}>  
                  <div className="organise_carousel">
                    <Image src={Organiseone} alt="Organisefour" />    
                  </div>
                </Col>
                <Col md={3} md={6} lg={4} col={12}>  
                  <div className="organise_carousel">
                    <Image src={Organisefive} alt="Organisefour" />    
                  </div>
                </Col>
                {/* <div className="organise_carousel">
                  <Image src={Organise} alt="Organise" />
                </div>
                <div className="organise_carousel">
                  <Image src={Organisefour} alt="Organisefour" />
                </div> */} 
            </Row>
        </Container>
      </div>
    )
  }
}

export default Supporting;
