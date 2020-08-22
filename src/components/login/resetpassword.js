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

class Resetpassword extends Component {
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="Loginlayout">
          <Container> 
            <div className="col10 fs40 fw600 pt-4 mb-2">
                Reset Password
            </div>
            <div className="col14 fs25 fw300 mb-4 pb-2">Want to Reset Your Password?</div>

            <div className="layout_box forgots mb-4">  
              <Form.Group className="mb-4 pb-2">
                <Form.Control
                  name="newpassword"
                  type="password"
                  placeholder="New Password"
                  className="inputTyp2"
                />
              </Form.Group>

              <Form.Group className="mb-4 pb-2">
                <Form.Control
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="inputTyp2"
                />
              </Form.Group>

                <Button className="btnTyp4 text-uppercase">
                  Save
                </Button>   
            </div>

          </Container>
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default Resetpassword;  

