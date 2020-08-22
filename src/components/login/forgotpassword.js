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

class Forgotpassword extends Component {       
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} /> 
        </div>
        <div className="Loginlayout">
          <Container> 
            <div className="col10 fs40 fw600 pt-4 mb-2">
                Forgot Password
            </div>
            <div className="col14 fs25 fw300 mb-4 pb-2">Enter Your email address</div>

            <div className="layout_box forgots mb-4">
                <Form.Group className="mb-4 pb-2">
                    <Form.Control
                    type="email"
                    placeholder="Email Id"    
                    className="inputTyp2"
                    name="email"
                    /> 
                </Form.Group>

                <Button className="btnTyp4 text-uppercase"> 
                  Submit
                </Button>   
            </div>

          </Container>
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default Forgotpassword; 

