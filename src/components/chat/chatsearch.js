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

class Chatsearch extends Component {         
    render() {
        return (
            <div className="page__wrapper innerpage"> 
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                            <div className="chatsearch w-100">
                                 <div className="search-box">       
                                 <Row>
                                     <Col md={3}> 
                                         <div className="col1 fw500 fs18 mt-2">Need to talk to someone?</div>
                                     </Col>
                                     <Col md={3}>
                                        <Form.Group> 
                                            <Form.Control
                                                type="text"
                                                placeholder="Find Keywords" 
                                                className="inputTyp2 input3"
                                                id="outlined-email"
                                                variant="outlined"
                                                name="screenName"
                                            />
                                        </Form.Group> 
                                     </Col>
                                     <Col md={3}>
                                          <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select"
                                                className="selectTyp1 select3"
                                                name="date"> 
                                                <option>Sort By</option>
                                                
                                            </Form.Control> 
                                        </Form.Group>
                                     </Col>
                                     <Col md={3}>
                                     <Button onClick={this.handleSubmit} className="btnTyp5 bTyp5">
                                        Search
                                    </Button>
                                         <Image src={Searches} alt="" className="ml-3 pointer" />  
                                     </Col>  
                                 </Row>
                                 </div>

                                 <div className="search-listing">   
                                     <Row>
                                         <Col md={4}>     
                                              <div className="subscribes active"> 
                                                   <div className="subleft">
                                                        <Image src={Subscribes} alt="" />    
                                                        <span>Subscribe</span>   
                                                  </div>  
                                                   <div className="text-right mt-4 mr-3">
                                                        <Image src={Messagefour} alt="" />
                                                        <span className="fs13 col14 fw400 ml-1">340</span> 
                                                    </div>
                                                    <div className="text-center position-relative"> 
                                                        <Image src={Requestuser} className="r50" />  
                                                        <Image src={Aflag} alt="" className="flagset" />
                                                    </div>
                                                    <div className="col1 fs18 fw600 mt-4">Melisa R. Wright</div>
                                                    <div className="fs14 col14 fw400">Master 10</div>
                                                    <div className="fs14 col14 fw400">Listens to Over 18 in last week
                                                    </div>  
                                                    <div className="starrating">
                                                        <Image src={Starfill} alt="" /> 
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starblank} alt="" />
                                                    </div>
                                                    <hr className="shr" /> 
                                                    <div className="fs14 col29 fw300">  
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                    </div>
                                                    <div className="mt-3 mb-3 col10 fs14 fw600 pointer">Read More</div> 
                                              </div>
                                         </Col> 
                                         <Col md={4}> 
                                         <div className="subscribes">  
                                                   <div className="text-right mt-4 mr-3">
                                                        <Image src={Messagefour} alt="" />
                                                        <span className="fs13 col14 fw400 ml-1">340</span> 
                                                    </div>
                                                    <div className="text-center position-relative"> 
                                                        <Image src={Requestusertwo} className="r50" />  
                                                        <Image src={Aflag} alt="" className="flagset" />
                                                    </div>
                                                    <div className="col1 fs18 fw600 mt-4">HopePeaceHappiness</div>
                                                    <div className="fs14 col14 fw400">Master 10</div>
                                                    <div className="fs14 col14 fw400">Listens to Over 18 in last week
                                                    </div>  
                                                    <div className="starrating">
                                                        <Image src={Starfill} alt="" /> 
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starblank} alt="" />
                                                    </div>
                                                    <hr className="shr" /> 
                                                    <div className="fs14 col29 fw300">  
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                    </div>
                                                    <div className="mt-3 mb-3 col10 fs14 fw600 pointer">Read More</div> 
                                              </div>
                                         </Col>
                                         <Col md={4}> 
                                         <div className="subscribes"> 
                                                   <div className="text-right mt-4 mr-3">
                                                        <Image src={Messagefour} alt="" />
                                                        <span className="fs13 col14 fw400 ml-1">340</span> 
                                                    </div>
                                                    <div className="text-center position-relative"> 
                                                        <Image src={Requestuserthree} className="r50" />  
                                                        <Image src={Aflag} alt="" className="flagset" />
                                                    </div>
                                                    <div className="col1 fs18 fw600 mt-4">Aurelia T. Poe</div>
                                                    <div className="fs14 col14 fw400">Master 10</div>
                                                    <div className="fs14 col14 fw400">Listens to Over 18 in last week
                                                    </div>  
                                                    <div className="starrating">
                                                        <Image src={Starfill} alt="" /> 
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starblank} alt="" />
                                                    </div>
                                                    <hr className="shr" /> 
                                                    <div className="fs14 col29 fw300">  
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                    </div>
                                                    <div className="mt-3 mb-3 col10 fs14 fw600 pointer">Read More</div> 
                                              </div>
                                         </Col>
                                         <Col md={4}> 
                                         <div className="subscribes"> 
                                                   <div className="text-right mt-4 mr-3">
                                                        <Image src={Messagefour} alt="" />
                                                        <span className="fs13 col14 fw400 ml-1">340</span> 
                                                    </div>
                                                    <div className="text-center position-relative"> 
                                                        <Image src={Requestusertwo} className="r50" />  
                                                        <Image src={Aflag} alt="" className="flagset" />
                                                    </div>
                                                    <div className="col1 fs18 fw600 mt-4">Cathy R. Kern</div>
                                                    <div className="fs14 col14 fw400">Master 10</div>
                                                    <div className="fs14 col14 fw400">Listens to Over 18 in last week
                                                    </div>  
                                                    <div className="starrating">
                                                        <Image src={Starfill} alt="" /> 
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starblank} alt="" />
                                                    </div>
                                                    <hr className="shr" /> 
                                                    <div className="fs14 col29 fw300">  
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                    </div>
                                                    <div className="mt-3 mb-3 col10 fs14 fw600 pointer">Read More</div> 
                                              </div>
                                         </Col>
                                         <Col md={4}> 
                                         <div className="subscribes"> 
                                                   <div className="text-right mt-4 mr-3">
                                                        <Image src={Messagefour} alt="" />
                                                        <span className="fs13 col14 fw400 ml-1">340</span> 
                                                    </div>
                                                    <div className="text-center position-relative"> 
                                                        <Image src={Requestusertwo} className="r50" />  
                                                        <Image src={Aflag} alt="" className="flagset" />
                                                    </div>
                                                    <div className="col1 fs18 fw600 mt-4">BalletMomm</div>
                                                    <div className="fs14 col14 fw400">Master 10</div>
                                                    <div className="fs14 col14 fw400">Listens to Over 18 in last week
                                                    </div>  
                                                    <div className="starrating">
                                                        <Image src={Starfill} alt="" /> 
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starblank} alt="" />
                                                    </div>
                                                    <hr className="shr" /> 
                                                    <div className="fs14 col29 fw300">  
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                    </div>
                                                    <div className="mt-3 mb-3 col10 fs14 fw600 pointer">Read More</div> 
                                              </div>
                                         </Col>
                                         <Col md={4}> 
                                         <div className="subscribes active"> 
                                                  <div className="subleft">
                                                        <Image src={Subscribes} alt="" />    
                                                        <span>Subscribe</span>   
                                                  </div>  
                                                   <div className="text-right mt-4 mr-3">
                                                        <Image src={Messagefour} alt="" />
                                                        <span className="fs13 col14 fw400 ml-1">340</span> 
                                                    </div>
                                                    <div className="text-center position-relative"> 
                                                        <Image src={Requestusertwo} className="r50" />  
                                                        <Image src={Aflag} alt="" className="flagset" />
                                                    </div>
                                                    <div className="col1 fs18 fw600 mt-4">Rose G. Smith</div>
                                                    <div className="fs14 col14 fw400">Master 10</div>
                                                    <div className="fs14 col14 fw400">Listens to Over 18 in last week
                                                    </div>  
                                                    <div className="starrating">
                                                        <Image src={Starfill} alt="" /> 
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starfill} alt="" />
                                                        <Image src={Starblank} alt="" />
                                                    </div>
                                                    <hr className="shr" /> 
                                                    <div className="fs14 col29 fw300">  
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                    </div>
                                                    <div className="mt-3 mb-3 col10 fs14 fw600 pointer">Read More</div> 
                                              </div>
                                         </Col>
                                         <div className="text-center w-100">  
                                             <Button
                                               className="btnTyp12" 
                                               onClick={this.handleSubmit}
                                             >
                                               show more
                                             </Button> 
                                         </div>
                                     </Row>
                                 </div>
                            </div> 
                    </Container>
                </div>
                <Footer /> 
            </div> 
        );
    }
}
export default Chatsearch; 
