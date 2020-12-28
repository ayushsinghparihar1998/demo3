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
import blogclock from "../../assets/images/blogclock.png";
import BlogProcessFive from "../../assets/images/blog4.png";
import Editicon from "../../assets/images/edit_icon.svg"; 

class AdminBlogListing extends Component {                         
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
                                <div className="professor_search">
                                    <Row className="mb-4"> 
                                        <Col md={8}> 
                                            <div className="fs22 fw600 col10">
                                                Blogs Listing
                                            </div>
                                            <div className="fw300 fs16 col14">Lorem Ipsum is simply dummy and typesetting industry.</div> 
                                        </Col>
                                        <Col md={4}>
                                            <div className="text-right pro_cbtn">
                                            <Button
                                                type="button"
                                                className="btnTyp5" 
                                            >
                                                create blog 
                                            </Button>
                                            </div>
                                        </Col>
                                    </Row> 
                                        <Form className="p_form mb-4">                 
                                            <div className="checkCategory">  
                                                <Form.Group controlId="formBasicCheckbox1" className="row">
                                                    <Form.Check type="checkbox" className="checkone checkSet"  label="EAT" />  
                                                    <Form.Check type="checkbox" className="checktwo" label="LUV" />
                                                    <Form.Check type="checkbox" className="checkthree active" label="PRAY" />            
                                                </Form.Group> 
                                            </div>
                                        </Form>
                                </div>          

                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={BlogProcessFive} alt="" />
                                        </div>
                                        <div className="pl-2 w-100">  
                                            <div className="d-flex justify-content-between"> 
                                                <div className="w-100">     
                                                    <div className="d-flex">  
                                                        <div className="col1 fw600 fs18 pb-1">
                                                            Veronica Wade-Hampton 
                                                        </div> 
                                                        <div className="d-flex ml-auto">  
                                                            <span className="mr-3"><Image src={Editicon} alt="" /></span>
                                                            <span><Image src={Deleteicon} alt="" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="mb-1">    
                                                      <span className="fs16 fw400 col14">Written by <span className="col8">Salena Gomez</span> </span>  
                                                      <span className="ml-3">  
                                                          <Image src={blogclock} className="wSet-20 mr-2" />      
                                                           11 Minute read
                                                      </span> 
                                                  </div>

                                                    <div className="fs16 fw400 col14 pb-1 e_detai">      
                                                        <strong className="fw600">Biogropy: </strong>  
                                                        <span className="fs14">I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life. 
                                                        <a className="col10">Read more...</a></span> 
                                                    </div>
                                                    
                                                    <div className="eat_category"> 
                                                        <span className="eatcat">EAT</span>  
                                                        <span className="luvcat">LUV</span>     
                                                    </div> 

                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                
                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={BlogProcessFive} alt="" />
                                        </div>
                                        <div className="pl-2 w-100">  
                                            <div className="d-flex justify-content-between"> 
                                                <div className="w-100">     
                                                    <div className="d-flex">  
                                                        <div className="col1 fw600 fs18 pb-1">
                                                            Veronica Wade-Hampton 
                                                        </div> 
                                                        <div className="d-flex ml-auto">  
                                                            <span className="mr-3"><Image src={Editicon} alt="" /></span>
                                                            <span><Image src={Deleteicon} alt="" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="mb-1">    
                                                      <span className="fs16 fw400 col14">Written by <span className="col8">Salena Gomez</span> </span>  
                                                      <span className="ml-3">  
                                                          <Image src={blogclock} className="wSet-20 mr-2" />      
                                                           11 Minute read
                                                      </span> 
                                                  </div>

                                                    <div className="fs16 fw400 col14 pb-1 e_detai">      
                                                        <strong className="fw600">Biogropy: </strong>  
                                                        <span className="fs14">I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life. 
                                                        <a className="col10">Read more...</a></span> 
                                                    </div>
                                                    
                                                    <div className="eat_category"> 
                                                        <span className="eatcat">EAT</span>  
                                                        <span className="luvcat">LUV</span>     
                                                    </div> 

                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={BlogProcessFive} alt="" />
                                        </div>
                                        <div className="pl-2 w-100">  
                                            <div className="d-flex justify-content-between"> 
                                                <div className="w-100">     
                                                    <div className="d-flex">  
                                                        <div className="col1 fw600 fs18 pb-1">
                                                            Veronica Wade-Hampton 
                                                        </div> 
                                                        <div className="d-flex ml-auto">  
                                                            <span className="mr-3"><Image src={Editicon} alt="" /></span>
                                                            <span><Image src={Deleteicon} alt="" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="mb-1">    
                                                      <span className="fs16 fw400 col14">Written by <span className="col8">Salena Gomez</span> </span>  
                                                      <span className="ml-3">  
                                                          <Image src={blogclock} className="wSet-20 mr-2" />      
                                                           11 Minute read
                                                      </span> 
                                                  </div>

                                                    <div className="fs16 fw400 col14 pb-1 e_detai">      
                                                        <strong className="fw600">Biogropy: </strong>  
                                                        <span className="fs14">I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life. 
                                                        <a className="col10">Read more...</a></span> 
                                                    </div>
                                                    
                                                    <div className="eat_category"> 
                                                        <span className="eatcat">EAT</span>  
                                                        <span className="luvcat">LUV</span>     
                                                    </div> 

                                                </div>
                                                
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

export default AdminBlogListing; 

