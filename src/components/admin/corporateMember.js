import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav"; 
import Footer from "../core/footer"; 
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Menuicon from "../../assets/images/menu_icon.svg";
import Menuiconblue from "../../assets/images/menu_icon_blue.svg";
import Deleteicon from "../../assets/images/delete_icon.svg"; 

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
                                     <div className="fs28 col10 mb-4">Become a Corporate Member</div> 
                                        <Form>  
                                            <Form.Group>
                                                <Form.Label className="fs20 fw600 col14">Email/ Domain address
                                                </Form.Label>
                                                <div className="col27 fs14 fw400 mb-2">An email will be sent to verify your account. We won’t share your email address with anyone.</div>
                                                <Form.Control type="email" className="inputTyp2" />     
                                                <div className="col27 fs14 fw400 mt-2">
                                                    If you already have a member account, you can use the same email and password for easy switching.
                                                </div>     
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label className="fs20 fw600 col14">Create a Password</Form.Label>
                                                <Form.Control type="password" className="inputTyp2" /> 
                                                <div className="col27 fs14 fw400 mt-2">
                                                    Password must contain at least 8 characters.
                                                </div>           
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label className="fs20 fw600 col14">Birthday</Form.Label>  
                                                <div className="col27 fs14 fw400 mb-2">
                                                    Applicants must be at least 18 years old or 15 years old with parental consent. 
                                                </div> 
                                                <Row>  
                                                    <Col md={4}>
                                                        <Form.Control as="select" className="selectTyp1">
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        </Form.Control>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Control as="select" className="selectTyp1">
                                                        <option>1990</option>
                                                        <option>1991</option>
                                                        <option>1992</option>
                                                        <option>1993</option>
                                                        </Form.Control>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Control as="select" className="selectTyp1">
                                                        <option>January</option>
                                                        <option>February</option>
                                                        <option>March</option>
                                                        <option>April</option>
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                                <div className="col27 fs14 fw400 mt-2">
                                                    Please make sure you enter the correct date. You will be unable to change this later.
                                                </div> 
                                            </Form.Group> 
                                            <Button variant="primary btnTyp5 mt-4" type="submit">
                                                search
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