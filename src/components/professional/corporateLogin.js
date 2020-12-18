import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator/dist/simple-react-validator";

import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form,
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";

class CorporateLogin extends Component {
  render() { 
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="Loginlayout">
          <Container>
            <div className="col10 fs40 fw600 pt-4 mb-2">User Login</div> 
            <div className="col14 fs25 fw300 mb-4 pb-2">
              Don’t have an account?
              <strong className="fw500">Become a Member</strong>
            </div>
            <div className="layout_box mb-4"> 
              <Form>
                <Form.Group className="mb-4 pb-2">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
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

                <Form.Group controlId="formBasicCheckbox4" className="mb-4">  
                    <Form.Check type="checkbox" className="fw300 fs17 col28 mt-1 checkboxTyp1 text-left" label="Corporate Member" />   
                </Form.Group>

                <Button className="btnTyp4 mb-4">  
                  LOGIN
                </Button>

                <div className="pt-2 fs18 fw300 col14">  
                  Forgot your password?
                  <span className="fw500 pointer pl-1">Reset it Here</span>
                </div>

              </Form>
               
            </div>

            <div className="fs18 fw300 pb-5 col14"> 
              Interested in becoming a Listener?
              <span className="fw600 pointer pl-1 col3">Learn More / Signup</span>   
            </div>
          </Container> 
        </div>

        <Footer />
      </div>
    );
  }
}

export default CorporateLogin; 


