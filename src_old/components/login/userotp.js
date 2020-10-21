import React, { Component } from "react"; 

import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form, Modal
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";

class Otp extends Component {         
  render() {
    return (
      <div className="page__wrapper innerpage">   
        <div className="main_baner">
          <NavBar {...this.props} /> 
        </div>
        <div className="Loginlayout">
          <Container> 
            <div className="col10 fs40 fw600 pt-4 mb-2">
                Enter OTP 
            </div>
            <div className="col14 fs25 fw300 mb-4 pb-2">Enter OTP sent to your Registered Email Id</div> 

            <div className="layout_box forgots mb-4">
                <Form.Group className="mb-4 pb-2">
                    <div className="otpuser d-flex"> 
                      <Form.Control
                      type="text"
                      placeholder=""    
                      className="inputTyp2 mr-3"
                      name="email"
                      /> 
                      <Form.Control
                      type="text"
                      placeholder=""    
                      className="inputTyp2 mr-3"
                      name="email"
                      />
                      <Form.Control
                      type="text"
                      placeholder=""    
                      className="inputTyp2 mr-3" 
                      name="email"
                      />
                      <Form.Control
                      type="text"
                      placeholder=""    
                      className="inputTyp2"
                      name="email"
                      />
                    </div>
                </Form.Group>

                <div className="col14 fs18 fw300 mb-4 pb-2 text-under">Resend <span className="fw500">OTP</span></div> 

                <Button className="btnTyp4 text-uppercase"> 
                    VERIFY 
                </Button>   
            </div>

          </Container>
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default Otp; 

