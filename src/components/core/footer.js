import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import insta from "../../assets/images/insta.svg";
import fb from "../../assets/images/fb.svg";
import twit from "../../assets/images/twit.svg";
import linkedin from "../../assets/images/linkedin.svg"; 

class Footer extends Component {       
  render() {
    return (
        <div className="footer">      
            <Container fluid>
                <Row>
                    <Col md={7}>
                        <div className="d-flex flex-wrap">  
                            <div className="fs15 fw300 col17">© 2020 EatLoveNPray. All rights reserved. </div>
                            <div className="socials"> 
                                <Form inline>    
                                    <span>
                                        <Image src={insta} alt="" className="pointer" />
                                    </span>
                                    <span>
                                        <Image src={fb} alt="" className="pointer" />
                                    </span>
                                    <span>
                                        <Image src={twit} alt="" className="pointer" />
                                    </span>
                                    <span>
                                        <Image src={linkedin} alt="" className="pointer" />
                                    </span>
                                </Form>
                            </div>
                        </div>
                    </Col> 
                    <Col md={5}>
                        <ul class="social"> 
                            <li className="pointer">Privacy Policy</li>
                            <li className="pointer">Terms & Conditions</li>
                            <li className="pointer">Site Map</li> 
                        </ul>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
  }
}

export default Footer; 
