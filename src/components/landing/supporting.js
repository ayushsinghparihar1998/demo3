import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Organise from '../../assets/images/organise.svg';
import Organisetwo from '../../assets/images/organise2.svg';
import Organisethree from '../../assets/images/organise3.svg';
import Organisefour from '../../assets/images/organise4.svg';
import CommunityFirst from '../../assets/images/Karabi_Art_Community.png';
import CommunitySecond from '../../assets/images/community_second.png';
import CommunityThird from '../../assets/images/community_three.png';

class Supporting extends Component {
  render() {
    
    return (
      <div className="Supporting">      
        <Container>
          <div className="fw600 fs40 col14 col1 w-100">Supported Organizations</div> 
          <div className="col14 fs18 fw500 w-100 pt-3 mb-5 pb-3">Eat Luv N Pray works with organisations in helping them increase productivity and mitigate delays by providing mental health support to their employees. Get started today.</div>
          <Row className="m-auto supportives">       
               <Col md={3} md={6} lg={4} col={12}>    
                  <div className="organise_carousel"> 
                    {/* <Image src={Organise} alt="Organise" /> */}
                    <Image src={CommunityFirst} alt="Organise" />
                  </div>
               </Col>
               <Col md={3} md={6} lg={4} col={12}>
                  <div className="organise_carousel">
                    <Image src={CommunitySecond} alt="Organise" />
                  </div>
                </Col>
                <Col md={3} md={6} lg={4} col={12}>
                  <div className="organise_carousel">
                    <Image src={CommunityThird} alt="Organise" />             
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
