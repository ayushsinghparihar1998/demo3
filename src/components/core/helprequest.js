import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "./nav";
import Footer from "./footer";
import Sharebtnblue from "../../assets/images/sharebtnblue.svg";
import Ngoone from "../../assets/images/ngo1.svg"; 
import Faqgray from "../../assets/images/faq_gray.svg";
import Faqblue from "../../assets/images/faq_blue.svg"; 

class Helprequest extends Component {          
    render() {
        return (
            <div className="page__wrapper innerpage">                
                <div className="main_baner">
                    <NavBar {...this.props} /> 
                </div>  
                <div className="helpcenter helprequest">       
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
                            <div className="createblog">
                                <div className="blog_form"> 
                                    <div className="col10 fw600 fs32 mb-2">Submit a request</div>
                                    <div className="col14 fs18 fw400 mb-4 pb-2">Select your issue below and <strong className="fw600">EatLoveNPray will assist you.</strong></div> 
                                    <Form> 
                                    <Form.Group controlId="exampleForm.ControlSelect2">
                                        <Form.Label className="fw600 fs18">Select Issue</Form.Label>
                                        <div className="col27 mb-1 fs13 fw300">An email will be sent to verify your account. We won’t share your email address with anyone.</div>
                                        <Form.Control as="select" className="selectTyp1 request_select">    
                                        <option>Delete My Account</option>
                                        <option>Create My Account</option> 
                                        </Form.Control>
                                    </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className="col14 fw600 fs18">Email address</Form.Label>
                                            <div className="col27 mb-1 fs13 fw300">An email will be sent to verify your account. We won’t share your email address with anyone.</div> 
                                            <Form.Control type="email" className="inputTyp2" />
                                        </Form.Group> 

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className="col14 fw600 fs18">Subject</Form.Label>
                                            <Form.Control type="text" className="inputTyp2" />
                                        </Form.Group>
                                        
                                        <Form.Group controlId="exampleForm.ControlTextarea1" className="txtcomments"> 
                                            <Form.Label className="col14 fw600 fs18">Subject</Form.Label>
                                            <Form.Control as="textarea" className="inputTyp2 cate2" rows="3" />
                                        </Form.Group>
                                        <div className="col27 mb-1 fs13 fw300">An email will be sent to verify your account. We won’t share your email address with anyone.</div>

                                        <Form.Group>
                                            <Form.Label className="col14 fw600 fs18">
                                                Attachments <span className="col27 fs13 fw300">(Optional)</span>
                                            </Form.Label> 
                                            <Form.File
                                            id="exampleFormControlFile1" className="fileType2" />
                                            <div className="fs16 fw400 col14 tesxtfills">
                                                <strong className="col23">Add file</strong> or drop files here
                                            </div>
                                        </Form.Group>

                                        <Button className="btnTyp4 mt-4">Submit</Button>
                                        </Form>
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
export default Helprequest; 

