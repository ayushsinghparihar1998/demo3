import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import insta from "../../assets/images/insta.svg";
import fb from "../../assets/images/fb.svg";
import twit from "../../assets/images/twit.svg";
import linkedin from "../../assets/images/linkedin.svg";
import {NavLink} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container fluid>
                    <Row>
                        <Col md={7}>
                            <div className="d-flex flex-wrap">
                                <div className="fs15 fw300 col17">© 2020 Eat Luv N Pray. All rights reserved. </div>
                                <div className="socials">
                                    <Form inline>
                                        <span>
                                            <a href="https://www.instagram.com/eatluvnpray/" target="_blank"> <Image src={insta} alt="" className="pointer" /></a>
                                        </span>
                                        <span>
                                            <a href="https://www.facebook.com/eatluvnpray2020/" target="_blank"><Image src={fb} alt="" className="pointer" /></a>
                                        </span>
                                        <span>
                                            <a href="https://twitter.com/eat_luvnpray?s=08" target="_blank"><Image src={twit} alt="" className="pointer" /></a>
                                        </span>
                                        <span>
                                            <a href="https://www.linkedin.com/company/eatluvnpray" target="_blank"> <Image src={linkedin} alt="" className="pointer" /></a>
                                        </span>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <ul class="social">
                                <li className="pointer"><NavLink style={{color:'white'}} to="/privacypolicy">Privacy Policy</NavLink></li>
                                <li  className="pointer"><NavLink style={{color:'white'}} to="/termcondition">Terms & Conditions</NavLink></li>
                                {/* <li className="pointer">Site Map</li> */}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer; 
