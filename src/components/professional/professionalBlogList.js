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
import BlogProcessSeven from "../../assets/images/blog6.png";     
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
       <div className="profile_layout pt-4">
          <Container>
             <div className="processBlog pb-5 w-100"> 
                   <div className="text-center fs28 fw500 col64 mb-2">Blog</div>   
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
                                              <div className="fs20 fw600 col64 mb-4 pb-3">LATEST</div>  
                                              <div className="mb-4 pb-2">     
                                                 <Row>
                                                    <Col md={9}>
                                                        <div className=""> 
                                                            <div className="col64 fs17 fw500">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                            </div>  
                                                            <div className="col14 fs16 fw300 mt-3">Wednesday, Dec 16</div>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Image src={BlogProcessSeven} className="w-100" /> 
                                                    </Col>    
                                                </Row>
                                              </div> 
                                              <div className="mb-4 pb-2">  
                                                 <Row>
                                                    <Col md={9}>
                                                        <div className=""> 
                                                            <div className="col64 fs17 fw500">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                            </div>  
                                                            <div className="col14 fs16 fw300 mt-3">Wednesday, Dec 16</div>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Image src={BlogProcessSeven} className="w-100" /> 
                                                    </Col>    
                                                </Row>
                                              </div> 

                                              <div className="mb-4 pb-2">  
                                                 <Row>
                                                    <Col md={9}>
                                                        <div className=""> 
                                                            <div className="col64 fs17 fw500">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                            </div>  
                                                            <div className="col14 fs16 fw300 mt-3">Wednesday, Dec 16</div>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Image src={BlogProcessSeven} className="w-100" /> 
                                                    </Col>    
                                                </Row>
                                              </div> 

                                              <div className="mb-4 pb-2">  
                                                 <Row>
                                                    <Col md={9}>
                                                        <div className=""> 
                                                            <div className="col64 fs17 fw500">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                            </div>  
                                                            <div className="col14 fs16 fw300 mt-3">Wednesday, Dec 16</div>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Image src={BlogProcessSeven} className="w-100" /> 
                                                    </Col>    
                                                </Row>
                                              </div> 
                                              
                                                
                                         </Col>
                                    </Row>
                                    {/* <div className="mt-4 mb-4 border_blog"></div> */}    

                                    <div className="subscribe_here2 eatBlog mt-5 mb-5">       
                                        <Container>
                                            <Row>
                                                <Col md={5} lg={5}>
                                                    <div className="subscribe_left"> 
                                                        <div>                
                                                            <div className="fs36 col64 fw600 w-100">Subscribe Here</div> 
                                                            <div className="col14 fs20 fw300 w-100">  
                                                                Get updates about Eat Luv N Pray
                                                            </div> 
                                                        </div>
                                                    </div> 
                                                </Col>
                                                <Col md={5} lg={5}>         
                                                    <div className="subscribe_form">
                                                        <Form>
                                                            <Form.Group className="fgroups" controlId="formBasicEmail">    
                                                                <Form.Control
                                                                    type="email"
                                                                    placeholder="Email address" 
                                                                    className="inputTyp1 fs20"
                                                                    name="email"
                                                                />
                                                            </Form.Group> 
                                                            
                                                        </Form>
                                                    </div>
                                                </Col>
                                                <Col md={2} lg={2}> 
                                                    <div className="mt-2"> 
                                                        <Button variant="primary"
                                                            type="submit" className="btnTyp2">   
                                                            SUBSCRIBE 
                                                        </Button> 
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
               
            </div>
                              </div>
                        </Tab>
                        <Tab eventKey="EAT" title="EAT">  
                        <div className="featuredTab"> 
                                    <Row>
                                         <Col md={7}>
                                             <Row>
                                                 <Col md={6} className="mb-4">   
                                                    <div className="fw600 fs20 col64 mb-3">     
                                                        Lorem Ipsum is simply.
                                                    </div>
                                                    <Image src={BlogProcessFive} className="w-100" /> 
                                                    <div className="blogClocks mb-3 mt-3">   
                                                        <Image src={BlogProcessSix} className="wSet-50 mr-3" /> 
                                                        <div>  
                                                            <span className="fs14 fw400 col14">Written by <span className="col8">Salena Gomez</span> </span> <br />  
                                                            <span>   
                                                                <Image src={blogclock} className="wSet-20 mr-2" />      
                                                                11 Minute read
                                                            </span> 
                                                        </div>
                                                    </div> 
                                                    <div className="col64 fs16 fw400">          
                                                        Lorem Ipsum is simply dummy text of the printing... 
                                                    </div> 
                                                </Col>
                                                <Col md={6} className="mb-4">   
                                                    <div className="fw600 fs20 col64 mb-3">    
                                                        Lorem Ipsum is simply.
                                                    </div>
                                                    <Image src={BlogProcessFive} className="w-100" /> 
                                                    <div className="blogClocks mb-3 mt-3">   
                                                        <Image src={BlogProcessSix} className="wSet-50 mr-3" /> 
                                                        <div>  
                                                            <span className="fs14 fw400 col14">Written by <span className="col8">Salena Gomez</span> </span> <br />   
                                                            <span>    
                                                                <Image src={blogclock} className="wSet-20 mr-2" />      
                                                                11 Minute read
                                                            </span> 
                                                        </div>
                                                    </div> 
                                                    <div className="col64 fs16 fw400">          
                                                        Lorem Ipsum is simply dummy text of the printing... 
                                                    </div>
                                                </Col> 
                                                <Col md={6} className="mb-4">   
                                                    <div className="fw600 fs20 col64 mb-3">    
                                                        Lorem Ipsum is simply.
                                                    </div>
                                                    <Image src={BlogProcessFive} className="w-100" /> 
                                                    <div className="blogClocks mb-3 mt-3">   
                                                        <Image src={BlogProcessSix} className="wSet-50 mr-3" /> 
                                                        <div>  
                                                            <span className="fs14 fw400 col14">Written by <span className="col8">Salena Gomez</span> </span> <br />   
                                                            <span>    
                                                                <Image src={blogclock} className="wSet-20 mr-2" />      
                                                                11 Minute read
                                                            </span> 
                                                        </div>
                                                    </div> 
                                                    <div className="col64 fs16 fw400">          
                                                        Lorem Ipsum is simply dummy text of the printing... 
                                                    </div>
                                                </Col>
                                                <Col md={6} className="mb-4">   
                                                    <div className="fw600 fs20 col64 mb-3">    
                                                        Lorem Ipsum is simply.
                                                    </div>
                                                    <Image src={BlogProcessFive} className="w-100" /> 
                                                    <div className="blogClocks mb-3 mt-3">   
                                                        <Image src={BlogProcessSix} className="wSet-50 mr-3" /> 
                                                        <div>  
                                                            <span className="fs14 fw400 col14">Written by <span className="col8">Salena Gomez</span> </span> <br />   
                                                            <span>    
                                                                <Image src={blogclock} className="wSet-20 mr-2" />      
                                                                11 Minute read
                                                            </span> 
                                                        </div>
                                                    </div> 
                                                    <div className="col64 fs16 fw400">          
                                                        Lorem Ipsum is simply dummy text of the printing... 
                                                    </div>
                                                </Col>  
                                              </Row> 
                                         </Col>
                                         <Col md={5}>   
                                              <div className="fs20 fw600 col64 mb-4 pb-3">LATEST</div>  
                                              <div className="mb-4 pb-2">     
                                                 <Row>
                                                    <Col md={9}>
                                                        <div className=""> 
                                                            <div className="col64 fs17 fw500">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                            </div>  
                                                            <div className="col14 fs16 fw300 mt-3">Wednesday, Dec 16</div>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Image src={BlogProcessSeven} className="w-100" /> 
                                                    </Col>    
                                                </Row>
                                              </div> 
                                              <div className="mb-4 pb-2">  
                                                 <Row>
                                                    <Col md={9}>
                                                        <div className=""> 
                                                            <div className="col64 fs17 fw500">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                            </div>  
                                                            <div className="col14 fs16 fw300 mt-3">Wednesday, Dec 16</div>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Image src={BlogProcessSeven} className="w-100" /> 
                                                    </Col>    
                                                </Row>
                                              </div> 

                                              <div className="mb-4 pb-2">  
                                                 <Row>
                                                    <Col md={9}>
                                                        <div className=""> 
                                                            <div className="col64 fs17 fw500">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                            </div>  
                                                            <div className="col14 fs16 fw300 mt-3">Wednesday, Dec 16</div>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Image src={BlogProcessSeven} className="w-100" /> 
                                                    </Col>    
                                                </Row>
                                              </div> 

                                              <div className="mb-4 pb-2">  
                                                 <Row>
                                                    <Col md={9}>
                                                        <div className=""> 
                                                            <div className="col64 fs17 fw500">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                            </div>  
                                                            <div className="col14 fs16 fw300 mt-3">Wednesday, Dec 16</div>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Image src={BlogProcessSeven} className="w-100" /> 
                                                    </Col>    
                                                </Row>
                                              </div> 
                                              
                                              <div className="mb-4 pb-2">  
                                                 <Row>
                                                    <Col md={9}>
                                                        <div className=""> 
                                                            <div className="col64 fs17 fw500">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                                            </div>  
                                                            <div className="col14 fs16 fw300 mt-3">Wednesday, Dec 16</div>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Image src={BlogProcessSeven} className="w-100" /> 
                                                    </Col>    
                                                </Row>
                                              </div> 
                                                
                                         </Col>
                                    </Row>
                                    {/* <div className="mt-4 mb-4 border_blog"></div> */}    

                                    <div className="subscribe_here2 eatBlog mt-5 mb-5">       
                                        <Container>
                                            <Row>
                                                <Col md={5} lg={5}>
                                                    <div className="subscribe_left"> 
                                                        <div>                
                                                            <div className="fs36 col64 fw600 w-100">Subscribe Here</div> 
                                                            <div className="col14 fs20 fw300 w-100">  
                                                                Get updates about Eat Luv N Pray
                                                            </div> 
                                                        </div>
                                                    </div> 
                                                </Col>
                                                <Col md={5} lg={5}>         
                                                    <div className="subscribe_form">
                                                        <Form>
                                                            <Form.Group className="fgroups" controlId="formBasicEmail">    
                                                                <Form.Control
                                                                    type="email"
                                                                    placeholder="Email address" 
                                                                    className="inputTyp1 fs20"
                                                                    name="email"
                                                                />
                                                            </Form.Group> 
                                                            
                                                        </Form>
                                                    </div>
                                                </Col>
                                                <Col md={2} lg={2}> 
                                                    <div className="mt-2"> 
                                                        <Button variant="primary"
                                                            type="submit" className="btnTyp2">   
                                                            SUBSCRIBE 
                                                        </Button> 
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
               
            </div>
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

