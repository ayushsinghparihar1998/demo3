import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav"; 
import Footer from "../core/footer"; 

class CorporateMember extends Component {                                         
    render() {  
        return (
            <div className="page__wrapper innerpage"> 
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout adminProfessinal pt-4 pb-5">  
                    <Container>
                        <Row> 
                            <Col md={3} className="pr-1">
                                <div className="adminsidebar">
                                    <div className="inner_area">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Links</div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="">
                                                <div className="fs14 col28 fw500"> USER LISTING</div>
                                            </div>
                                        </div> 
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="">
                                                <div className="fs14 col28 fw500"> PROFESSIONAL LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className=""> 
                                                <div className="fs14 col23 fw500"> LISTENER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> LISTENER Q&A</div>
                                            </div>
                                        </div> 
                                        <div className="d-flex m-3 pb-3 border-bottom"> 
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> CATEGORY</div> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </Col>  
                            <Col md={9} className="pl-1">             
                                <div className="corporateMember">     
                                     <div className="fs28 col10 mb-4">Add Domain</div> 
                                        <Form>  
                                            <Form.Group>
                                                <Form.Label className="fs20 fw600 col14">Domain address
                                                </Form.Label>
                                                <div className="col27 fs14 fw400 mb-2">
                                                    An email will be sent to verify your account. We won’t share your email address with anyone.
                                                </div> 
                                                <Form.Control type="text" className="inputTyp2" />      
                                                <div className="col27 fs14 fw400 mt-2">
                                                    If you already have a member account, you can use the same email and password for easy switching.
                                                </div>     
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label className="fs20 fw600 col14">Total Audio/Video (hrs)</Form.Label>
                                                <Form.Control type="text" className="inputTyp2" /> 
                                                <div className="col27 fs14 fw400 mt-2">
                                                    Password must contain at least 8 characters.
                                                </div>           
                                            </Form.Group> 

                                            <Button variant="primary btnTyp5 mt-4" type="submit">
                                                ADD
                                            </Button> 
                                         </Form>  
                                </div> 
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default CorporateMember;



