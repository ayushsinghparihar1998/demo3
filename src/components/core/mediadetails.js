import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Mediadetailone from "../../assets/images/mediadetail.svg"; 
import Sharebtn from "../../assets/images/sharebtn.png";  


class Mediadetails extends Component {     
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div> 
                <div className="ngo_services media_details"> 
                    <Container>
                        <div className="ngo_listing mt-4 mb-4">   
                            <div className="col1 fw600 fs22 text-center w-100 mt-4 pt-3">
                                Child and Social Welfare Society
                            </div>
                            <hr className="ngohr" />  
                            <Row className="mt-4">          
                                <Col lg={12}>   
                                    <div className="ngo_details mt-2">        
                                        <Image src={Mediadetailone} alt="" className="w-100" />    
                                        <div className="pt-3 pb-3">   
                                            <div className="col1 fs18 fw600 mt-2">Child and Social Welfare Society
                                            </div>
                                            <div className="col14 fs14 fw400 pt-1">
                                                Posted on April 15, 2020     220 views 
                                            </div>  
                                            <div className="fs14 col28 fw300 pt-3 line_txt">We know taking your first chats can be challenging and often you have questions. Our community leaders are here to support you as you become the best listener possible! Here you will find a full list of our incredible Mentors, Mentor Leaders & Ambassadors! <br />
all new listeners are required to connect with a quality mentor in their first week. To get started, just message a mentor from the list below! Or, you can <strong className="col23 fw600">sign up to be paired with a mentor.</strong> For immediate mentor support with an ongoing chat please visit the Listener <strong className="col23 fw600">Support Room</strong> any time. We know taking your first chats can be challenging and often you have questions. Our community leaders are here to support you as you become the best listener possible! Here you will find a full list of our incredible Mentors,</div>

                                            <div className="mdetalinput">   
                                                <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    className="inputTyp2 mdetail" 
                                                    id="outlined-pwd"
                                                    label="Password"
                                                    variant="outlined"
                                                    name="password"
                                                />
                                                <Button className=""><Image src={Sharebtn} alt="Sharebtn" /></Button>
                                                </Form.Group>
                                            </div> 
                                            
                                        </div>
                                    </div>
                                </Col> 
                                
                            </Row>
                        </div> 
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Mediadetails; 

