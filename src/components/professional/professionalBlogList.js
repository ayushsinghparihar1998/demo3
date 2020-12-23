import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";
import Messagefour from "../../assets/images/msg4.svg";
import Melida from "../../assets/images/melida.svg";
import Searches from "../../assets/images/searches.svg";
import Starblank from "../../assets/images/starempty.svg";
import Starfill from "../../assets/images/starfill.svg";
import Subscribes from "../../assets/images/subscribes.svg";
import BlogProcessOne from "../../assets/images/p_blogs.svg";
import BlogProcessTwo from "../../assets/images/p_blogs2.svg";
import BlogProcessThree from "../../assets/images/p_blogs3.svg";
import BlogProcessFour from "../../assets/images/p_blogs4.svg";   
import BlogProcessFive from "../../assets/images/blog4.png";
import BlogProcessSix from "../../assets/images/blog5.svg";    
import blogclock from "../../assets/images/blogclock.png";
import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { Popover } from 'antd';

class ProfessionalBlogList extends Component {  
    render() { 
    return (
    <div className="page__wrapper innerpage">
       <div className="main_baner">
          <NavBar {...this.props} />
       </div>
       <div className="profile_layout pt-4 pb-5">
          <Container>
             <div className="processBlog w-100"> 
                   <div className="text-center fs28 fw500 col64 mb-2">Press</div>  
                   <div className="mxw-50 text-center col14 fs16 fw300 m-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>

                   <div className="blogMain ListsUI"> 
                   <Tabs defaultActiveKey="All" id="uncontrolled-tab-example">
                        <Tab eventKey="All" title="All"> 
                              <div className="featuredTab">
                                    <Row>
                                         <Col md={7}>   
                                              <div className="fw600 fs20 col64 mb-4">    
                                                    Lorem Ipsum is simply dummy text 2020 of the printing and typesetting industry. 
                                              </div>
                                              <Image src={BlogProcessFive} className="w-100" /> 
                                              <div className="blogClocks mb-3 mt-3">   
                                                  <Image src={BlogProcessSix} className="wSet-50 mr-3" /> 
                                                  <div>  
                                                      <span className="fs18 fw400 col14">Written by <span className="col8">Salena Gomez</span> </span>  
                                                      <span className="ml-3">  
                                                          <Image src={blogclock} className="wSet-20 mr-2" />      
                                                           11 Minute read
                                                      </span> 
                                                  </div>
                                              </div> 
                                              <div className="col14 fs18 fw400"> 
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                              </div>    
                                         </Col>
                                         <Col md={5}>   
                                              <div className="fs20 fw600 col64">LATEST</div>   
                                              <Row>
                                                  <Col md={9}>
                                                      <div className=""> 
                                                          <div className="col14 fs16 fw300">
                                                              Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                          </div>  
                                                          <div className=""></div>
                                                      </div>
                                                  </Col>
                                                  <Col md={3}>
                                                      <Image src={BlogProcessTwo} className="w-100" /> 
                                                  </Col>    
                                              </Row> 
                                              
                                                
                                         </Col>
                                    </Row>
                                    {/* <div className="mt-4 mb-4 border_blog"></div> */}    
                              </div>
                        </Tab>
                        <Tab eventKey="EAT" title="EAT">  
                            <div className="coverageTab">
                                Hello Tab2 
                            </div>
                        </Tab>
                        <Tab eventKey="LUV" title="LUV">
                             <div className="coverageTab">
                                 Hello Tab3
                            </div> 
                        </Tab>
                        <Tab eventKey="PRAY" title="PRAY">      
                             <div className="coverageTab">
                                 Hello Tab4
                            </div> 
                        </Tab>
                     </Tabs>
                       <div className="ml-auto w-100 pt-5 pb-5 mt-5 mb-5 d-flex justify-content-end">  
                           <div>
                              <div className="fs40 fw500">  
                                 Get in touch 
                              </div>
                              <div className="col14 fs16 fw300 mb-2">
                                 For all press inquiries, please email
                              </div>
                              <div className="col8 fs16 fw300">press@elphealth.com</div> 
                           </div>
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
    export default ProfessionalBlogList; 

