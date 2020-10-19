import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Sharebtnblue from "../../assets/images/sharebtnblue.svg";
import Ngoone from "../../assets/images/ngo1.svg"; 
import Faqgray from "../../assets/images/faq_gray.svg";
import Faqblue from "../../assets/images/faq_blue.svg"; 

class Helpcenter extends Component {        
    render() {
        return (
            <div className="page__wrapper innerpage">                
                <div className="main_baner">
                    <NavBar {...this.props} /> 
                </div>  
                <div className="helpcenter">   
                    <Container>
                        <div className="helpfirst mt-4 mb-4"> 
                            <div className="helpbaner"> 
                                <div className="w-100"> 
                                    <div className="fw500 col18 fs28 mb-3">Hello! How can we help?</div> 
                                    <div className="help_question">  
                                        <Form className="w-100">  
                                            <Form.Group controlId="formBasicEmail"> 
                                                <Form.Control type="email" placeholder="Enter Your Questions" className="inputType5" />  
                                                <Button variant="primary" type="submit" className="btnTyp4 serchone">  
                                                    SEARCH 
                                                </Button>
                                            </Form.Group> 
                                        </Form> 
                                    </div> 
                                </div>
                            </div> 
                            <div className="choose_help"> 
                                <div className="helpbaner users">     
                                    <div className="w-100"> 
                                        <div className="help_question">  
                                            <Form className="w-100">  
                                                <Form.Group controlId="formBasicEmail">    
                                                    <Form.Control type="email" placeholder="Enter Your Questions" className="inputType5" />  
                                                    <Button variant="primary" type="submit" className="btnTypmedia">  
                                                        SEARCH 
                                                    </Button>
                                                </Form.Group> 
                                            </Form>
                                        </div> 
                                    </div>
                                </div> 

                                <div className="memberships mb-5 pb-5">  
                                    <div className="col11 fs18 fw400 mb-3">Choose a section:</div> 
                                    <Row>
                                        <Col lg={4} col={12}>
                                            <div className="memberone">
                                                  <div>  
                                                    <Image src={Faqgray} alt="icon" />  
                                                    <div className="fw400 fs22 col11 mt-4 mb-2">General FAQ</div>
                                                    <div className="col90 fw300 fs16">See all 10 articles</div>
                                                  </div> 
                                            </div>
                                        </Col>
                                        <Col lg={4} col={12}>
                                            <div className="memberone active">  
                                                  <div>  
                                                    <Image src={Faqblue} alt="icon" />  
                                                    <div className="fw400 fs22 col40 mt-4 mb-2">Members FAQ</div>
                                                    <div className="col90 fw300 fs16">See all 10 articles</div>
                                                  </div> 
                                            </div>
                                        </Col>
                                        <Col lg={4} col={12}>
                                            <div className="memberone">
                                                  <div>  
                                                    <Image src={Faqgray} alt="icon" />  
                                                    <div className="fw400 fs22 col11 mt-4 mb-2">General FAQ</div>
                                                    <div className="col90 fw300 fs16">See all 10 articles</div>
                                                  </div> 
                                            </div>
                                        </Col>
                                    </Row>
                                </div> 

                            </div>
                        </div>  
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Helpcenter; 

