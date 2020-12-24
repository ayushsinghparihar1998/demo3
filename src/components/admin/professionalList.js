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

class ProfessionalList extends Component {          
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
                                     <div className="fs16 col1 mb-4">Search Professional</div> 
                                        <Form className="p_form">   
                                           <Row> 
                                                <Col md="5">  
                                                    <Form.Group controlId="formBasicTexts">
                                                        <Form.Control type="text" placeholder="Search name" className="inputTyp2 inputpProcess" />       
                                                    </Form.Group>
                                                </Col>
                                                <Col md="5">  
                                                    <Form.Group controlId="formBasickeyword"> 
                                                        <Form.Control type="text" placeholder="Search keyword" className="inputTyp2 inputpProcess" />      
                                                    </Form.Group> 
                                                </Col>
                                                <Col md="2"> 
                                                    <Button variant="primary process_btn" type="submit">
                                                        search
                                                    </Button>
                                                </Col>
                                            </Row>
                                        
                                            <div className="checkCategory">  
                                                <Form.Group controlId="formBasicCheckbox1" className="row">
                                                    <Form.Check type="checkbox" className="checkone" label="Eat" />  
                                                    <Form.Check type="checkbox" className="checktwo" label="Luv" />
                                                    <Form.Check type="checkbox" className="checkthree active" label="Pray" />           
                                                </Form.Group> 
                                            </div>
                                        </Form>
                                </div>    

                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={Requestuser} alt="" className="r50" />
                                        </div>
                                        <div className="pl-2 w-100">
                                            <div className="d-flex justify-content-between"> 
                                                <div className="w-100">     
                                                    <div className="d-flex">  
                                                        <div className="col1 fw600 fs18 pb-1">Andrew D’souza</div> 
                                                        <div className="d-flex ml-auto">  
                                                            <span className="pr-3 fs14 col47 fw400">Active</span> 
                                                            <span className="pr-3 disabled">
                                                                <Form.Check
                                                                    type="switch"
                                                                    id="custom-switch5"
                                                                    label=""
                                                                    checked="" 
                                                                />
                                                            </span>  
                                                            <span><Image src={Deleteicon} alt="" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="fs14 fw400 col14 pb-1">  
                                                        <strong>Age:</strong> 32 years</div>

                                                    <div className="fs14 fw400 col14 pb-1">  
                                                        <strong>Work Experince:</strong> 10 years
                                                    </div>   

                                                    <div className="fs14 fw400 col14 pb-1">  
                                                        <strong>Languages:</strong>  Hindi, English and Marathi 
                                                    </div>

                                                    <div className="fs14 fw400 col14 pb-1 e_detai">  
                                                        <strong className="m_w25">Education: </strong> 
                                                         <span>
                                                             Master of Arts in Counselling psuchology,Columbia University
                                                             Postgraduate diploma in Counselling psuchology,Columbia University
                                                         </span> 
                                                    </div> 

                                                    <div className="fs14 fw400 col14 pb-1 e_detai">     
                                                        <strong>Biogropy: </strong>  
                                                        <span>I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life. 
                                                        <a className="col10">Read more...</a></span> 
                                                    </div>
                                                    
                                                    <div className="eat_category"> 
                                                        <span className="eatcat">Eat</span>
                                                        <span className="luvcat">Luv</span>
                                                        <span className="praycat">Pray</span>         
                                                    </div>

                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div> 

                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={Requestuser} alt="" className="r50" />
                                        </div>
                                        <div className="pl-2 w-100">
                                            <div className="d-flex justify-content-between"> 
                                                <div className="w-100">     
                                                    <div className="d-flex">  
                                                        <div className="col1 fw600 fs18 pb-1">Andrew D’souza</div> 
                                                        <div className="d-flex ml-auto">  
                                                            <span className="pr-3 fs14 col47 fw400">Active</span> 
                                                            <span className="pr-3 disabled">
                                                                <Form.Check
                                                                    type="switch"
                                                                    id="custom-switch5"
                                                                    label=""
                                                                    checked="" 
                                                                />
                                                            </span>  
                                                            <span><Image src={Deleteicon} alt="" /></span>
                                                        </div>
                                                    </div>

                                                    <div className="fs14 fw400 col14 pb-1">  
                                                        <strong>Age:</strong> 32 years</div>

                                                    <div className="fs14 fw400 col14 pb-1">  
                                                        <strong>Work Experince:</strong> 10 years
                                                    </div>

                                                    <div className="fs14 fw400 col14 pb-1">  
                                                        <strong>Languages:</strong>  Hindi, English and Marathi 
                                                    </div>

                                                    <div className="fs14 fw400 col14 pb-1 e_detai">  
                                                        <strong className="m_w25">Education: </strong> 
                                                         <span>
                                                             Master of Arts in Counselling psuchology,Columbia University
                                                             Postgraduate diploma in Counselling psuchology,Columbia University
                                                         </span> 
                                                    </div> 

                                                    <div className="fs14 fw400 col14 pb-1 e_detai">     
                                                        <strong>Biogropy: </strong>   
                                                        <span>I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life. 
                                                        <a className="col10">Read more...</a></span> 
                                                    </div>
                                                    
                                                    <div className="eat_category"> 
                                                        <span className="eatcat">Eat</span>
                                                        <span className="luvcat">Luv</span>
                                                        <span className="praycat">Pray</span>         
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

export default ProfessionalList; 