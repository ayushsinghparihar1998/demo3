import React, { Component } from "react"; 
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import { getLocalStorage } from "../../common/helpers/Utils";
import { connect } from 'react-redux';
import validationSubscribe from '../../common/validations/validationSubscribe'; 
import { actionSubscribe } from '../../common/redux/actions'; 
import Slider from "react-slick";

class Plans extends Component {            
    render() {   
        const settingstwo = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3 
          };
        return ( 
            <div className="plans mt-4 mb-4">    
                <Container>  
                    <div className="fs40 col64 fw600 w-100 mb-2 text-center">Subscription Plans</div> 
                    <div className="text-center fw300 fs22 col14 mb-4 pb-4">What people say about us. Here are comments from individuals who have visited Counselor.
                    </div> 
                    {/* start end */}
                    
                    <div>
                        <Slider {...settingstwo}>
                        <div className="items">
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs24 fw600 col29 text-center">BASIC</div> 
                                </div>
                                <div className="plantwo text-center"> 
                                    <div className="d-flex justify-content-center mb-3">
                                        <Button className="btnSave">Save 4%</Button>  
                                    </div> 
                                    <div className="mt-4 pt-2">     
                                        <div className="col14 fs17 fw400"><del>Rs. 6,299</del></div>    
                                        <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                        <div className="col14 fs17 fw400">Per year</div> 
                                    </div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="w-100 justify-content-between"> 
                                         <div className="fs14 fw500 col29 mt-2 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div> 
                                         <ul>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                         </ul>
                                    </div>
                                    <Button className="btnType1 d-block w-100 mt-4">Buy Now</Button> 
                                    <div className="fs14 col29 fw400 text-center mt-2">COMING SOON</div> 
                                </div>
                            </div>
                        </div>

                        <div className="items">
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs24 fw600 col29 text-center">STANDARD</div>  
                                </div>
                                <div className="plantwo text-center"> 
                                    <div className="d-flex justify-content-center mb-3">
                                        <Button className="btnSave">Save 4%</Button>  
                                    </div> 
                                    <div className="mt-4 pt-2">     
                                        <div className="col14 fs17 fw400"><del>Rs. 6,299</del></div>    
                                        <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                        <div className="col14 fs17 fw400">Per year</div> 
                                    </div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="w-100 justify-content-between"> 
                                         <div className="fs14 fw500 col29 mt-2 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div> 
                                         <ul>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                         </ul>
                                    </div>
                                    <Button className="btnType1 d-block w-100 mt-4">Buy Now</Button> 
                                    <div className="fs14 col29 fw400 text-center mt-2">COMING SOON</div> 
                                </div>
                            </div>
                        </div>

                        <div className="items"> 
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs24 fw600 col29 text-center">PREMIUM</div> 
                                </div>
                                <div className="plantwo text-center"> 
                                    <div className="d-flex justify-content-center mb-3">
                                        <Button className="btnSave">Save 4%</Button>  
                                    </div> 
                                    <div className="mt-4 pt-2">     
                                        <div className="col14 fs17 fw400"><del>Rs. 6,299</del></div>    
                                        <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                        <div className="col14 fs17 fw400">Per year</div> 
                                    </div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="w-100 justify-content-between"> 
                                         <div className="fs14 fw500 col29 mt-2 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div> 
                                         <ul>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                         </ul>
                                    </div>
                                    <Button className="btnType1 d-block w-100 mt-4">Buy Now</Button> 
                                    <div className="fs14 col29 fw400 text-center mt-2">COMING SOON</div> 
                                </div>
                            </div>
                        </div>

                        <div className="items"> 
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs24 fw600 col29 text-center">BASIC</div> 
                                </div>
                                <div className="plantwo text-center"> 
                                    <div className="d-flex justify-content-center mb-3">
                                        <Button className="btnSave">Save 4%</Button>  
                                    </div> 
                                    <div className="mt-4 pt-2">     
                                        <div className="col14 fs17 fw400"><del>Rs. 6,299</del></div>    
                                        <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                        <div className="col14 fs17 fw400">Per year</div> 
                                    </div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="w-100 justify-content-between"> 
                                         <div className="fs14 fw500 col29 mt-2 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div> 
                                         <ul>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                         </ul>
                                    </div>
                                    <Button className="btnType1 d-block w-100 mt-4">Buy Now</Button> 
                                    <div className="fs14 col29 fw400 text-center mt-2">COMING SOON</div> 
                                </div>
                            </div>
                        </div>

                        <div className="items"> 
                            <div className="planList"> 
                                <div className="planone">
                                    <div className="fs24 fw600 col29 text-center">STANDARD</div>  
                                </div>
                                <div className="plantwo text-center"> 
                                    <div className="d-flex justify-content-center mb-3">
                                        <Button className="btnSave">Save 4%</Button>  
                                    </div> 
                                    <div className="mt-4 pt-2">     
                                        <div className="col14 fs17 fw400"><del>Rs. 6,299</del></div>    
                                        <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                        <div className="col14 fs17 fw400">Per year</div> 
                                    </div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="w-100 justify-content-between"> 
                                         <div className="fs14 fw500 col29 mt-2 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div> 
                                         <ul>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                         </ul>
                                    </div>
                                    <Button className="btnType1 d-block w-100 mt-4">Buy Now</Button> 
                                    <div className="fs14 col29 fw400 text-center mt-2">COMING SOON</div> 
                                </div>
                            </div>
                        </div>
                        
                        </Slider>
                    </div>

                    <Row className="d-none">  
                        <Col md={4} lg={4}>          
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs24 fw600 col29 text-center">BASIC</div> 
                                </div>
                                <div className="plantwo text-center"> 
                                    <div className="d-flex justify-content-center mb-3">
                                        <Button className="btnSave">Save 4%</Button>  
                                    </div> 
                                    <div className="mt-4 pt-2">     
                                        <div className="col14 fs17 fw400"><del>Rs. 6,299</del></div>    
                                        <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                        <div className="col14 fs17 fw400">Per year</div> 
                                    </div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="w-100 justify-content-between"> 
                                         <div className="fs14 fw500 col29 mt-2 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div> 
                                         <ul>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                         </ul>
                                    </div>
                                    <Button className="btnType1 d-block w-100 mt-4">Buy Now</Button> 
                                    <div className="fs14 col29 fw400 text-center mt-2">COMING SOON</div> 
                                </div>
                            </div>
                        </Col> 
                        <Col md={4} lg={4}>          
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs24 fw600 col29 text-center">STANDARD</div>  
                                </div>
                                <div className="plantwo text-center"> 
                                    <div className="d-flex justify-content-center mb-3">
                                        <Button className="btnSave">Save 4%</Button>  
                                    </div> 
                                    <div className="mt-4 pt-2">     
                                        <div className="col14 fs17 fw400"><del>Rs. 6,299</del></div>    
                                        <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                        <div className="col14 fs17 fw400">Per year</div> 
                                    </div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="w-100 justify-content-between"> 
                                         <div className="fs14 fw500 col29 mt-2 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div> 
                                         <ul>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                         </ul>
                                    </div>
                                    <Button className="btnType1 d-block w-100 mt-4">Buy Now</Button> 
                                    <div className="fs14 col29 fw400 text-center mt-2">COMING SOON</div> 
                                </div>
                            </div>
                        </Col> 
                        <Col md={4} lg={4}>          
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs24 fw600 col29 text-center">PREMIUM</div> 
                                </div>
                                <div className="plantwo text-center"> 
                                    <div className="d-flex justify-content-center mb-3">
                                        <Button className="btnSave">Save 4%</Button>  
                                    </div> 
                                    <div className="mt-4 pt-2">     
                                        <div className="col14 fs17 fw400"><del>Rs. 6,299</del></div>    
                                        <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                        <div className="col14 fs17 fw400">Per year</div> 
                                    </div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="w-100 justify-content-between"> 
                                         <div className="fs14 fw500 col29 mt-2 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div> 
                                         <ul>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                         </ul>
                                    </div>
                                    <Button className="btnType1 d-block w-100 mt-4">Buy Now</Button> 
                                    <div className="fs14 col29 fw400 text-center mt-2">COMING SOON</div> 
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
