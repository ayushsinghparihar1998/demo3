import React, { Component } from "react";
import {
  Container, Button, Col, Form
} from "react-bootstrap";
import CrossTwo from "../../assets/images/crosstwo.png";
import logopink from "../../assets/images/elplogopink.png";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import { Redirect } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import { getLocalStorage } from "../../common/helpers/Utils";

class GetAQuote extends Component {       
  render() { 
    return (
        <div className="page__wrapper innerpage">
            <div className="main_baner">
            <NavBar {...this.props} />
            </div>
            <div className="ngo_services passageLayout">   
            <Container>
                <Col md={8} className="m-auto">   
                    <div className="ngo_listing mt-4 mb-4">
                    <div className="fs22 fw600 col3 w-100 mb-2 mt-4 text-uppercase"> 
                        let’s get you a quote
                    </div> 
                    <div className="fs16 fw400 mb-5">   
                         Please fill out the below form. Our team will be in touch shortly with a quote. 
                    </div>
                    <Form>  
                         <Form.Group>
                            <Form.Label className="fs20 fw600 col14">
                                Name <sup>*</sup> 
                            </Form.Label> 
                            
                            <Form.Control 
                                type="text"
                                className="inputTyp2" 
                                name="as_total_marks"
                            /> 
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="fs20 fw600 col14">
                                Work Email <sup>*</sup> 
                            </Form.Label> 
                            
                            <Form.Control 
                                type="email"
                                className="inputTyp2" 
                                name="email" 
                            /> 
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="fs20 fw600 col14">
                                Phone Number <sup>*</sup> 
                            </Form.Label> 
                            
                            <Form.Control 
                                type="text"
                                className="inputTyp2" 
                                name="phone"
                            /> 
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="fs20 fw600 col14">
                                Company Name <sup>*</sup> 
                            </Form.Label> 
                            
                            <Form.Control 
                                type="text"
                                className="inputTyp2" 
                                name="companyname"
                            /> 
                        </Form.Group> 

                        <Form.Group>
                            <Form.Label className="fs20 fw600 col14">
                                Company Name <sup>*</sup> 
                            </Form.Label> 
                            
                            <Form.Control className="selectTyp1" as="select"> 
                                <option>select country</option> 
                                <option>India</option>
                                <option>Usa</option>
                            </Form.Control>
                        </Form.Group> 

                        <div className="fs16 fw400 mt-4">      
                            Your information will be used to consider and fulfill your request, and will be
                            handled pursuant to our Privacy Policy.
                        </div>

                        <div className="mt-5 mb-5">
                        <Button type="button" className="btnTyp5">SUBMIT</Button>  
                    </div> 
                  </Form>
                    
                    
                  
                    </div>
                </Col>
            </Container>
            </div>
            <Footer />
        </div> 
        );
     } 
}
export default GetAQuote; 

