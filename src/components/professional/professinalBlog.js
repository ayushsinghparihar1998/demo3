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
import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component"; 
import { Popover } from 'antd';

class ProfessinalBlog extends Component { 
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

                   <div className="blogMain">
                   <Tabs defaultActiveKey="Featured" id="uncontrolled-tab-example">
                        <Tab eventKey="Featured" title="Featured">
                              <div className="featuredTab">
                                    <Row>
                                         <Col md={7}> 
                                              <Image src={BlogProcessOne} className="w-100" /> 
                                              <div className="fs18 col64 fw600 mt-3 mb-2">American cliffhanger states remain up grabs slow count</div>
                                              <div className="col14 fs16 fw300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>   
                                         </Col>
                                         <Col md={5}>   
                                              <Image src={BlogProcessTwo} className="w-100" /> 
                                              <div className="fs18 col64 fw600 mt-3 mb-2">Child and Social Welfar Society</div>
                                              <div className="col14 fs16 fw300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. </div>   
                                         </Col>
                                    </Row>
                                    <div className="mt-4 mb-4 border_blog"></div>
                                    <Row>
                                         <Col md={6}>
                                              <div className="socialWelfar">
                                                   <Row>
                                                        <Col md={6}>
                                                            <Image src={BlogProcessThree} className="w-100" /> 
                                                            <div className="col14 fw300 fs16 mt-2 mb-2">Feather Hashmi</div>
                                                            <div className="col14 fw400 fs16">Lorem dummy content</div> 
                                                         </Col> 
                                                        <Col md={6}>
                                                             <div className="col64 fw600 fs18">
                                                                Child and Social Welfar Society lorem dummy content
                                                             </div>
                                                        </Col>
                                                   </Row>
                                              </div> 
                                         </Col>
                                         <Col md={6}>
                                         <div className="socialWelfar">
                                                   <Row>
                                                        <Col md={6}>
                                                            <Image src={BlogProcessFour} className="w-100" /> 
                                                         </Col> 
                                                        <Col md={6}>
                                                             <div className="col64 fw600 fs18">
                                                                Child and Social Welfar Society lorem dummy content
                                                             </div>
                                                        </Col>
                                                        <Col md={12}>
                                                              <div className="col14 fs16 fw300 mt-3">
                                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. 
                                                              </div>
                                                        </Col>
                                                   </Row>
                                              </div> 
                                         </Col>
                                    </Row>
                              </div>
                        </Tab>
                        <Tab eventKey="Coverage" title="Coverage">
                            <div className="coverageTab">
                                <div className="coverageList">
                                    <Row>
                                         <Col md={6}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">Health Affairs</div>  
                                         </Col>
                                    </Row>
                                </div>
                                <div className="coverageList">
                                    <Row>
                                         <Col md={6}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">Health Affairs</div>  
                                         </Col>
                                    </Row>
                                </div>
                                <div className="coverageList">
                                    <Row>
                                         <Col md={6}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">Health Affairs</div>  
                                         </Col>
                                    </Row>
                                </div><div className="coverageList">
                                    <Row>
                                         <Col md={6}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">Health Affairs</div>  
                                         </Col>
                                    </Row>
                                </div>
                                <div className="coverageList">
                                    <Row>
                                         <Col md={6}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">Health Affairs</div>  
                                         </Col>
                                    </Row>
                                </div>
                                <div className="coverageList">
                                    <Row>
                                         <Col md={6}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                         <Col md={3}>
                                              <div className="fw400 fs15 col14">Health Affairs</div>  
                                         </Col>
                                    </Row>
                                </div>
                            </div>

                            <div className="text-center mt-5 mb-5">
                              <Button 
                                 className="btnTyp12"
                                 >
                                    show more
                              </Button> 
                            </div>
                        </Tab>
                        <Tab eventKey="PressReleases" title="Press Releases">
                        <div className="coverageTab">
                                <div className="coverageList">
                                    <Row>
                                         <Col md={8}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={4}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                    </Row>
                                </div>
                                <div className="coverageList">
                                    <Row>
                                         <Col md={8}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={4}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                    </Row>
                                </div>
                                <div className="coverageList">
                                    <Row>
                                         <Col md={8}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={4}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                    </Row>
                                </div><div className="coverageList">
                                    <Row>
                                         <Col md={8}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={4}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                    </Row>
                                </div>
                                <div className="coverageList">
                                    <Row>
                                         <Col md={8}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={4}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                    </Row>
                                </div>
                                <div className="coverageList">        
                                    <Row>
                                         <Col md={8}>
                                              <div className="fw600 fs16 col64"> 
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             </div> 
                                         </Col>
                                         <Col md={4}>
                                              <div className="fw400 fs15 col14">December 14, 2020</div>
                                         </Col> 
                                    </Row>
                                </div>
                            </div>

                            <div className="text-center mt-5 mb-5">
                              <Button 
                                 className="btnTyp12"
                                 >
                                    show more
                              </Button> 
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
    export default ProfessinalBlog; 

