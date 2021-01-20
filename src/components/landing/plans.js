import React, { Component } from "react"; 
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import { getLocalStorage } from "../../common/helpers/Utils";
import { connect } from 'react-redux';
import validationSubscribe from '../../common/validations/validationSubscribe'; 
import { actionSubscribe } from '../../common/redux/actions'; 

class Plans extends Component {    
    render() {   
        return (
            <div className="plans mt-4 mb-4">   
                <Container>
                    <div className="fs40 col14 fw600 w-100 mb-4 text-center">Plan</div>     
                    <Row>
                        <Col md={4} lg={4}>          
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs20 fw600 col29">Introduction to Coding</div>
                                    <div className="mt-5 pt-4 d-flex justify-content-between">  
                                        <div className="col14 fs15 fw400">8 Classes</div>
                                        <Button className="btnSave">Save 4%</Button>   
                                    </div>
                                </div>
                                <div className="plantwo">
                                    <div className="fw600 fs16 col29">Curriculum Includes</div>
                                    <div className="fs14 fw500 col14 mt-2">Sequence, Fundamentals Coding Blocks, Loops</div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="d-flex w-100 justify-content-between">           
                                         <div>
                                             <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                             <div className="col10 fs15 fw400">Price Per Class Rs. 750</div>
                                         </div>
                                         <div><del>Rs. 6,299</del></div> 
                                    </div>
                                    <Button className="btnTyp5 d-block w-100 mt-4">Buy Now</Button> 
                                </div>
                            </div>
                        </Col> 
                        <Col md={4} lg={4}>          
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs20 fw600 col29">Introduction to Coding</div>
                                    <div className="mt-5 pt-4 d-flex justify-content-between">  
                                        <div className="col14 fs15 fw400">8 Classes</div>
                                        <Button className="btnSave">Save 4%</Button>   
                                    </div>
                                </div>
                                <div className="plantwo">
                                    <div className="fw600 fs16 col29">Curriculum Includes</div>
                                    <div className="fs14 fw500 col14 mt-2">Sequence, Fundamentals Coding Blocks, Loops</div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="d-flex w-100 justify-content-between">           
                                         <div>
                                             <div className="col29 fs32 fw600">Rs. 25,999</div> 
                                             <div className="col10 fs15 fw400">Price Per Class Rs. 750</div>
                                         </div>
                                         <div><del>Rs. 10,299</del></div> 
                                    </div>
                                    <Button className="btnTyp5 d-block w-100 mt-4">Buy Now</Button> 
                                </div>
                            </div>
                        </Col> 
                        <Col md={4} lg={4}>          
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs20 fw600 col29">Introduction to Coding</div>
                                    <div className="mt-5 pt-4 d-flex justify-content-between">  
                                        <div className="col14 fs15 fw400">8 Classes</div>
                                        <Button className="btnSave">Save 4%</Button>   
                                    </div>
                                </div>
                                <div className="plantwo"> 
                                    <div className="fw600 fs16 col29">Curriculum Includes</div>
                                    <div className="fs14 fw500 col14 mt-2">Sequence, Fundamentals Coding Blocks, Loops</div>
                                </div>
                                <div className="planpricing">  
                                    <div className="d-flex w-100 justify-content-between">           
                                         <div>
                                             <div className="col29 fs32 fw600">Rs. 55,999</div> 
                                             <div className="col10 fs15 fw400">Price Per Class Rs. 750</div>
                                         </div>
                                         <div><del>Rs. 16,299</del></div> 
                                    </div>
                                    <Button className="btnTyp5 d-block w-100 mt-4">Buy Now</Button> 
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </Container>  
            </div>
        )
    }
}
export default Plans; 
