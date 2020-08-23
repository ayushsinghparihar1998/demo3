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
import NavBar from "../../core/nav";
import Footer from "../../core/footer"; 

class Adminlogin extends Component {   
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="Loginlayout">
        <Container>  
            <div className="col10 fs40 fw600 pt-4 mb-4">
                Admin Login
            </div>
            
            <div className="layout_box mb-4">
              <Form.Group className="mb-4 pb-2">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="inputTyp2"
                  name="email"
                />
              </Form.Group>

              <Form.Group className="mb-4 pb-2">      
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="inputTyp2"
                />
              </Form.Group>

                <Button className="btnTyp4 mb-4">
                  LOGIN
                </Button>

              <div className="pt-2 fs18 fw300 col14">
                Forgot your password?
                  <span className="fw500 pointer pl-1">Reset it Here</span>
              </div>
            </div>

          </Container>
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default Adminlogin;  

