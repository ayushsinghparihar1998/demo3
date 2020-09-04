import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg"; 
import Requestusertwo from "../../assets/images/pro_img2.svg"; 
import Requestuserthree from "../../assets/images/pro_img3.svg"; 
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg"; 

class Professionalchatsearch extends Component {    
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout userdashboards chatsearches pt-4 pb-5">  
                    <Container>
                        <Row>
                        <Col md={3}>
                                <div className="left_sidebar">  
                                    <div className="inner_side">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Refine Your Search</div>
                                        <div className="location">  
                                             <div className="col1 fs16 fw500 mb-2">Location</div> 
                                             <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select"
                                                className="selectTyp1 select3"
                                                name="date"> 
                                                <option>Within 25 Miles of</option>
                                                
                                              </Form.Control> 
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="City, State, Zip or Country"  
                                                    className="inputTyp2 input3"
                                                    id="outlined-email"
                                                    variant="outlined"
                                                    name="screenName"
                                                />
                                             </Form.Group> 

                                             <div className="col1 fs16 fw500 mb-2">Name</div> 
                                             <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Name"  
                                                    className="inputTyp2 input3"
                                                    id="outlined-email"
                                                    variant="outlined"
                                                    name="screenName"
                                                />
                                             </Form.Group> 
                                             <div className="col1 fs16 fw500 mb-2">Issues</div> 
                                             <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />  
                                            </Form.Group>
                                            <Form.Group controlId="formBasicCheckboxtwo">
                                                <Form.Check type="checkbox" label="Addiction" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" /> 
                                            </Form.Group> 
                                            <Form.Group controlId="formBasicCheckboxthree">
                                                <Form.Check type="checkbox" label="ADHD" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />  
                                            </Form.Group> 
                                            <Form.Group controlId="formBasicCheckboxfour"> 
                                                <Form.Check type="checkbox" label="Alcohol Abuse" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" /> 
                                            </Form.Group>  
                                            <hr className="hrx" />  
                                            <div className="col1 fs16 fw500 mb-2">Options</div>
                                            <Form.Group controlId="formBasicCheckboxfive">  
                                                <Form.Check type="checkbox" label="Provides Online Therapy" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" /> 
                                            </Form.Group> 
                                            <Button
                                               className="btnTyp12 btnT12" 
                                               onClick={this.handleSubmit}
                                             >
                                               show more
                                             </Button> 
                                        </div> 
                                    </div>
                                </div>
                            </Col>
                                <Col md={9}> 
                                <div className="text-center">     
                                       <div className="bg-white pl-4 pr-4">        
                                                <div className="d-flex pt-5 pb-5 ml-1 mr-1 text-left border-grays">    
                                                    <div className="mr-4"> 
                                                        <Image src={Requestuser} alt="" className="r50" /> 
                                                    </div>
                                                    <div className="pl-2">           
                                                        <div className="d-flex justify-content-between">      
                                                            <div>
                                                                <div className="col1 fw500 fs18 pb-1">Veronica Wade-Hampton</div> 
                                                                <div className="col40 fs15 fw400 pb-1">Category: Depression, Work Stress,  Bullying
                                                                </div>
                                                                <div className="fs14 fw400 col54 pb-1">Licensed Professional Counselor, LPC</div>
                                                            </div>
                                                            <div className="">  
                                                                <span className="col28 fs14 fs400 pr-3"> 
                                                                    Victoria
                                                                </span>
                                                                <Image src={Aflag} alt="" />  
                                                                <div className="col40 fs14 fs400 pt-1">901-647-8522</div> 
                                                            </div>  
                                                        </div>

                                                        <div className="col28 fs15 fw400 pt-1">I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life.  <span className="col40 fw500">Read more...</span>
                                                        </div>    
                                                    </div>
                                                </div> 

                                                <div className="d-flex pt-5 pb-5 ml-1 mr-1 text-left border-grays">    
                                                    <div className="mr-4"> 
                                                        <Image src={Requestusertwo} alt="" className="r50" /> 
                                                    </div>
                                                    <div className="pl-2">        
                                                        <div className="d-flex justify-content-between">      
                                                            <div>
                                                                <div className="col1 fw500 fs18 pb-1">Hope Hadding
                                                                </div> 
                                                                <div className="col40 fs15 fw400 pb-1">Category: Alcohol/Drug Use, Family Stress, Financial Stress
                                                                </div>
                                                                <div className="fs14 fw400 col54 pb-1">Licensed Professional Counselor, LPC</div>
                                                            </div>
                                                            <div className="">  
                                                                <span className="col28 fs14 fs400 pr-3"> 
                                                                    Mumbai
                                                                </span>
                                                                <Image src={Iflag} alt="" />  
                                                                <div className="col40 fs14 fs400 pt-1">91 9826098260
                                                                </div>  
                                                            </div>  
                                                        </div>

                                                        <div className="col28 fs15 fw400 pt-1">I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life.  <span className="col40 fw500">Read more...</span>
                                                        </div>    
                                                    </div>
                                                </div> 

                                                <div className="d-flex pt-5 pb-5 ml-1 mr-1 text-left">       
                                                    <div className="mr-4">
                                                        <Image src={Requestuserthree} alt="" className="r50" /> 
                                                    </div>
                                                    <div className="pl-2">        
                                                        <div className="d-flex justify-content-between">      
                                                            <div>
                                                                <div className="col1 fw500 fs18 pb-1">Evelyn Coker
                                                                </div> 
                                                                <div className="col40 fs15 fw400 pb-1">Category: Alcohol/Drug Use, Family Stress, Financial Stress
                                                                </div>
                                                                <div className="fs14 fw400 col54 pb-1">Licensed Professional Counselor, LPC</div>
                                                            </div>
                                                            <div className="">  
                                                                <span className="col28 fs14 fs400 pr-3"> 
                                                                    Mumbai  
                                                                </span>
                                                                <Image src={Iflag} alt="" />  
                                                                <div className="col40 fs14 fs400 pt-1">91 9826098260</div> 
                                                            </div>  
                                                        </div>

                                                        <div className="col28 fs15 fw400 pt-1">I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life.  <span className="col40 fw500">Read more...</span>
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
export default Professionalchatsearch; 



