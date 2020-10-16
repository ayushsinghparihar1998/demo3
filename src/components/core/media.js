import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Sharebtnblue from "../../assets/images/sharebtnblue.svg";
import Ngoone from "../../assets/images/ngo1.svg";
import Ngotwo from "../../assets/images/ngo2.svg";
import Ngothree from "../../assets/images/ngo3.svg";    

class Media extends Component { 
    render() {
        return (
            <div className="page__wrapper innerpage">        
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div> 
                <div className="ngo_services media_details"> 
                    <Container>
                        <div className="ngo_listing  mt-4 mb-4"> 
                            <Row className="mt-4">        
                                <Col lg={4} md={4} sm={12}>   
                                    <div className="ngo_social">     
                                        <Image src={Ngoone} alt="" className="w-100" />  
                                        <div className="p-3">  
                                            <div className="media_list mb-3"> 
                                                <div className="col14 fs14 fw400 pt-1">Posted on April 15, 2020 </div>
                                                <div className="col14 fs14 fw400 pt-1">220 views</div> 
                                            </div>
                                            <div className="col1 fs18 fw600 mb-3">Child and Social Welfare Society</div>
                                            
                                            <div className="fs14 col29 fw300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> 
                                            <hr className="social_hr" />
                                            <div className="media_list">
                                                <div className="col10 fs14 fw600 pointer">http:socialwelfare.com</div>
                                                <div className="position-relative">
                                                    <Image src={Sharebtnblue} alt="Sharebtnblues" className="pointer" />  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col> 
                                <Col lg={4} md={4} sm={12}>   
                                    <div className="ngo_social">   
                                        <Image src={Ngotwo} alt="" className="w-100" />  
                                        <div className="p-3">  
                                            <div className="media_list mb-3"> 
                                                <div className="col14 fs14 fw400 pt-1">Posted on April 15, 2020 </div>
                                                <div className="col14 fs14 fw400 pt-1">220 views</div> 
                                            </div>
                                            <div className="col1 fs18 fw600 mb-3">Child and Social Welfare Society</div>
                                            
                                            <div className="fs14 col29 fw300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> 
                                            <hr className="social_hr" />
                                            <div className="media_list">
                                                <div className="col10 fs14 fw600 pointer">http:socialwelfare.com</div>
                                                <div className="position-relative">
                                                    <Image src={Sharebtnblue} alt="Sharebtnblues" className="pointer" />  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>   
                                    <div className="ngo_social">   
                                        <Image src={Ngothree} alt="" className="w-100" />  
                                        <div className="p-3">  
                                            <div className="media_list mb-3"> 
                                                <div className="col14 fs14 fw400 pt-1">Posted on April 15, 2020 </div>
                                                <div className="col14 fs14 fw400 pt-1">220 views</div> 
                                            </div>
                                            <div className="col1 fs18 fw600 mb-3">Child and Social Welfare Society</div>
                                            
                                            <div className="fs14 col29 fw300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> 
                                            <hr className="social_hr" />
                                            <div className="media_list">
                                                <div className="col10 fs14 fw600 pointer">http:socialwelfare.com</div>
                                                <div className="position-relative">
                                                    <Image src={Sharebtnblue} alt="Sharebtnblues" className="pointer" />  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>   
                                    <div className="ngo_social">   
                                        <Image src={Ngoone} alt="" className="w-100" />  
                                        <div className="p-3">  
                                            <div className="media_list mb-3"> 
                                                <div className="col14 fs14 fw400 pt-1">Posted on April 15, 2020 </div>
                                                <div className="col14 fs14 fw400 pt-1">220 views</div> 
                                            </div>
                                            <div className="col1 fs18 fw600 mb-3">Child and Social Welfare Society</div>
                                            
                                            <div className="fs14 col29 fw300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> 
                                            <hr className="social_hr" />
                                            <div className="media_list">
                                                <div className="col10 fs14 fw600 pointer">http:socialwelfare.com</div>
                                                <div className="position-relative">
                                                    <Image src={Sharebtnblue} alt="Sharebtnblues" className="pointer" />  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>   
                                    <div className="ngo_social">   
                                        <Image src={Ngotwo} alt="" className="w-100" />  
                                        <div className="p-3">  
                                            <div className="media_list mb-3"> 
                                                <div className="col14 fs14 fw400 pt-1">Posted on April 15, 2020 </div>
                                                <div className="col14 fs14 fw400 pt-1">220 views</div> 
                                            </div>
                                            <div className="col1 fs18 fw600 mb-3">Child and Social Welfare Society</div>
                                            
                                            <div className="fs14 col29 fw300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> 
                                            <hr className="social_hr" />
                                            <div className="media_list">
                                                <div className="col10 fs14 fw600 pointer">http:socialwelfare.com</div>
                                                <div className="position-relative">
                                                    <Image src={Sharebtnblue} alt="Sharebtnblues" className="pointer" />  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>     
                                    <div className="ngo_social">   
                                        <Image src={Ngothree} alt="" className="w-100" />  
                                        <div className="p-3">  
                                            <div className="media_list mb-3"> 
                                                <div className="col14 fs14 fw400 pt-1">Posted on April 15, 2020 </div>
                                                <div className="col14 fs14 fw400 pt-1">220 views</div> 
                                            </div>
                                            <div className="col1 fs18 fw600 mb-3">Child and Social Welfare Society</div>
                                            
                                            <div className="fs14 col29 fw300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> 
                                            <hr className="social_hr" />
                                            <div className="media_list">
                                                <div className="col10 fs14 fw600 pointer">http:socialwelfare.com</div>
                                                <div className="position-relative">
                                                    <Image src={Sharebtnblue} alt="Sharebtnblues" className="pointer" />  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <div className="text-center w-100 mt-3">  
                                    <Button className="btnTyp12">show more</Button>
                                </div>
                            </Row>
                        </div> 
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Media; 
