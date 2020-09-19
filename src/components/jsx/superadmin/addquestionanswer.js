import React, { Component } from "react";
import { connect } from "react-redux";
import {
    actionGetListnerListing,
    actionGetUserListing,
    actionGetProfessionalListing
} from "../../../common/redux/actions";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Modal } from "react-bootstrap";

import NavBar from "../../core/nav"; 
import Footer from "../../core/footer";
import Requestdetails from "../../../assets/images/register2.svg";
import Deleteicon from "../../../assets/images/delete_icon.svg";
import Crossbtn from '../../../assets/images/blue_cross.svg';
import Questiontwo from '../../../assets/images/question2.svg';             

class Addquestionanswer extends Component {   
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
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
                                        <div className="d-flex m-3 pb-3 border-bottom" onCl>
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
                                <div className="adminlistener categorys addQa p-3 mb-3">
                                    <div className="d-flex justify-content-between mt-2">
                                        <div className="col10 fw600 fs28">Question Answer</div>
                                        <div>
                                            <Button className="btnTyp13">ADD QUESTION</Button>  
                                        </div>
                                    </div>
                                    <div className="text-center questiontwo d-none">  
                                        <Image src={Questiontwo} alt="" /> 
                                        <div className="col66 fw300 fs25 mt-4 text-capitalize">please add questions for listener</div>
                                    </div>

                                    <div className="mt-4 questiondata">
                                                <Col lg={6} md={12} className="pl-0 pr-0 mb-4">      
                                                    <div className="w-100">
                                                        <Form.Label className="fs20 fw600 col14">
                                                            Categories:   
                                                        </Form.Label> 
                                                        <Form.Control as="select" className="selectTyp1 selectnew"> 
                                                            <option>Depression</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </Form.Control> 
                                                    </div> 
                                                </Col>
                                                <div className="w-100"> 
                                                <Form.Group controlId="exampleForm.ControlSelect1"> 
                                                <Form.Label className="fs20 fw600 col14">
                                                        Question:
                                                        </Form.Label> 
                                                        <Form.Control as="textarea" rows="3" className="inputTyp2 cate2" /> 
                                                        <div className="text-right mt-3"> 
                                                            <Button className="btnTyp11 cbttyp2 fs20 pointer btn btn-primary">ADD</Button>  
                                                        </div>

                                                </Form.Group> 
                                                </div>

                                                <div className="w-100">  
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">  
                                                    <Form.Label className="fs20 fw600 col14">
                                                        Answer:
                                                        </Form.Label> 
                                                        <div className="fs20 fw600 col14 mb-2">1.</div>   
                                                        <Form.Control
                                                        type="category"
                                                        placeholder=""
                                                        className="inputTyp2 cate2"   
                                                        id="outlined-pwd"
                                                        label="category"
                                                        variant="outlined"
                                                        name="category"
                                                    />
                                                        <div className="text-right mt-3"> 
                                                            <Button className="btnTyp11 cbttyp2 fs20 pointer btn btn-primary">ADD</Button>  
                                                        </div>

                                                    </Form.Group> 
                                                    <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0"> 
                                                        <div className="fs20 fw600 col14 mb-2">2.</div>    
                                                        <Form.Control
                                                        type="category"
                                                        placeholder=""
                                                        className="inputTyp2 cate2"   
                                                        id="outlined-pwd"
                                                        label="category"
                                                        variant="outlined"
                                                        name="category"
                                                    />
                                                        <div className="text-right mt-3"> 
                                                            <Button className="btnTyp11 cbttyp2 fs20 pointer btn btn-primary">ADD</Button>  
                                                        </div>

                                                    </Form.Group>   

                                                    <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0"> 
                                                        <div className="fs20 fw600 col14 mb-2">3.</div>    
                                                        <Form.Control
                                                        type="category"
                                                        placeholder=""
                                                        className="inputTyp2 cate2"   
                                                        id="outlined-pwd"
                                                        label="category"
                                                        variant="outlined"
                                                        name="category"
                                                    />
                                                        <div className="text-right mt-3"> 
                                                            <Button className="btnTyp11 cbttyp2 fs20 pointer btn btn-primary">ADD</Button>  
                                                        </div>

                                                    </Form.Group> 
                                                        <div className="mt-3 mb-4">  
                                                            <Button className="btnTyp5 pointer btn btn-primary">NEXT</Button>  
                                                        </div>
                                                </div>
                                    </div>
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

export default Addquestionanswer; 
