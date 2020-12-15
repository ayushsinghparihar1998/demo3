import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap"; 


class SubscribeHere extends Component {       
    render() { 
        return (
            <div className="subscribe_here2">     
                <Container>
                    <Row>
                        <Col md={6} lg={6}>
                            <div className="subscribe_left"> 
                                <div>                
                                    <div className="fs36 col64 fw600 w-100">Subscribe Here</div> 
                                    <div className="col14 fs20 fw300 w-100">  
                                        Get updates about Eat Luv N Pray
                                    </div> 
                                </div>
                            </div> 
                        </Col>
                        <Col md={6} lg={6}>        
                            <div className="subscribe_form">
                                <Form>
                                    <Form.Group className="fgroups" controlId="formBasicEmail">    
                                        <Form.Control
                                            type="email"
                                            placeholder="Email address" 
                                            className="inputTyp1 fs20"
                                            name="email"
                                        />
                                        <Button variant="primary"
                                            onClick={this.getSubscribe} 
                                            type="submit" className="btnTyp2 mt-1">   
                                            SUBSCRIBE
                                        </Button> 
                                    </Form.Group> 
                                    
                                </Form>
                            </div>
                        </Col> 
                    </Row>
                </Container>
               
            </div>
        )
    }
}
export default SubscribeHere; 