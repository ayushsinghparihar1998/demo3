import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form,
  Tabs,
  Tab,
} from "react-bootstrap"; 
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import { Link } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import validateInput from "../../common/validations/validationAddDomain";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";

import constant from "../../constant";
class AddKits extends Component { 
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal addKits pt-4 pb-5">    
          <Container>
            <Row>
              <Col md={3} className="pr-1">
                <div className="adminsidebar">
                  <div className="inner_area">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Quick Links
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div>
                        <div className="fs14 col28 fw500">
                          <Link to={{ pathname: `/admin` }}>Back</Link> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={9} className="pl-1">   
                <div className="corporateMember subscriptionplan">
                  <div className="fs28 col10 mb-4">Kits</div>
                  <Form>
                    <Form.Group className="mb-4">     
                      <Form.Label className="fs20 fw600 col14">
                          Upload
                      </Form.Label>

                      <Form.Group>  
                        <Form.File
                          id="exampleFormControlFile1"
                          className="inputTyp2"
                        /> 
                      </Form.Group> 
                      
                    </Form.Group>  

                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Kit Name</Form.Label>
                        <Form.Control type="email" className="inputTyp2" />
                    </Form.Group>

                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Kit Description</Form.Label> 
                        <Form.Control as="textarea" className="inputTyp2" /> 
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mt-1 mb-4"> 
                            <Form.Label className="fs20 fw600 col14">Service Name</Form.Label>
                            <Form.Control type="email" className="inputTyp2" />
                            </Form.Group> 
                        </Col>
                        <Col md={3}>
                            <Form.Group className="mt-1 mb-4"> 
                            <Form.Label className="fs20 fw600 col14">Price</Form.Label>  
                            <Form.Control type="email" className="inputTyp2" />
                            </Form.Group> 
                        </Col>
                        <Col md={3}> 
                            <Form.Group className="mt-1 mb-4"> 
                            <Form.Label className="fs20 fw600 col14">Discounted Price</Form.Label>  
                            <Form.Control type="email" className="inputTyp2" />
                            </Form.Group> 
                        </Col>
                    </Row>
 
                    <div className="position-relative mb-2"> 
                        <Button
                            variant="btnTypAdd"  
                            type="button"  
                            >
                            <span><i className="fa fa-plus"></i></span> Add Services 
                         </Button>
                    </div>

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button" 
                    >
                      SUBMIT 
                    </Button>
                  </Form>
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

export default AddKits; 



