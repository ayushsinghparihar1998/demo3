import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";

import Donationheart from "../../assets/images/donation_heart.png"; 

class Foundation extends Component { 
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="foundation">         
                    <div className="myprofile w-100">  
                        <div className="foundtwo">  
                            <div className="inner_found">   
                                <div className="col18 fw400 fs48 mb-2"> 
                                    Help Make the World a <br /> Better Place 
                                </div>  
                                <div className="fw300 col18 fs18 mb-4">     
                                    You can help hundreds of thousands of people in need of emotional support when you join Team 7 Cups and back us with a:
                                </div>
                                <div>
                                <Form> 
                                    <Form.Group as={Row}>
                                        <div className="firstbtn active"> 
                                            <Form.Check
                                            type="radio"
                                            label="Monthly Donation"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            />
                                        </div>

                                        <div className="firstbtn"> 
                                            <Form.Check
                                            type="radio"
                                            label="One-Time Donation"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            />
                                        </div> 
                                    </Form.Group>

                                    <div className="input_price">  
                                        <Form.Group className="d-flex" controlId="formBasicPassword">
                                            <Form.Control type="text" />
                                            <span className="dollors">$</span>  
                                            <Button variant="primary" type="submit">
                                                Back Us
                                            </Button>
                                        </Form.Group>  
                                    </div> 
                                </Form> 
                                </div>
                            </div> 
                        </div>
                    </div> 
                       <div className="educations"> 
                            <Row>
                                <Col lg={6} col={12}> 
                                    <div className="foundthree">  
                                        <div className="inner_second">    
                                            <div className="fs22 fw500 col18">Because everyone deserves compassion</div>
                                            <div className="col18 fw300 fs16 mt-3">There is a massive compassion deficit in the world and you can make a big difference in closing that gap. Make care, love, and belonging a reality for everyone around the world. We provide support in 140 languages, across 180 countries, to over 100,000 people each week. Your backing will help us reach millions.</div> 
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} col={12}>
                                    <div className="iframe_video">    
                                        <iframe width="100%" height="250px" src="https://www.youtube.com/embed/ZwYkbsyN6OY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div> 
                                </Col>
                            </Row>
                        </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Foundation;  



