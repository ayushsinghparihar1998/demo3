import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import community from '../../assets/images/community.svg';
import freechat from '../../assets/images/free-chat.svg';
import therapy from '../../assets/images/therapy.svg';
import women from '../../assets/images/women.svg';
import user from '../../assets/images/user.svg';
import usercomment from '../../assets/images/user-comment.svg';
import usersend from '../../assets/images/user-send.svg';

class Banner extends Component { 
  render() {
    return (
        <Container> 
              <div className="fs44 pt-120 col1 fw700">Need someone to talk to?</div>  
              <div className="fw300 col2 fs25 mb-5">We connects you to caring listeners for free emotional support</div> 
                  <Row>    
                      <Col md={3}> 
                          <div className="baner1">
                              <Image src={community} alt="" className="pt-2" />
                              <div className="fs18 fw600 col5 pt-3">Community / CSR</div>
                              <div className="col14 fs14 fw300 pt-2 pl-4 pr-4">Lorem Ipsum is simply dummy text of the printing & typesetting industry.</div>
                              <Image src={user} alt="" className="pt-3 mt-3 pointer" />
                               
                          </div>
                      </Col>
                      <Col md={3}>
                          <div className="baner2">
                              <Image src={freechat} alt="" className="pt-2" />
                              <div className="fs18 fw600 col6 pt-3">Free 24/7 Chat</div>
                              <div className="col16 fs14 fw300 pt-2 pl-4 pr-4">Be heard by volunteer listeners & chat with others who understand in support chat rooms</div>
                              <Image src={usercomment} alt="" className="pt-3 pointer" /> 
                          </div>
                      </Col>
                      <Col md={3}>
                          <div className="baner3">
                              <Image src={therapy} alt="" className="pt-2" />
                              <div className="fs18 fw600 col7 pt-3">Affordable Online Therapy</div>
                              <div className="col14 fs14 fw300 pt-2 pl-4 pr-4">Confidential online therapy & counseling with licensed therapists, for $150 per month</div>
                              <Image src={usersend} alt="" className="pt-3 mt-3 pointer" />
                          </div>
                      </Col>
                      <Col md={3}>
                          <Image src={women} alt="" className="w-100" />  
                      </Col>
                  </Row>
                  
          </Container>
    )
  }
}

export default Banner;
