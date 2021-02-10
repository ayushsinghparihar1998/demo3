import React, { Component, } from "react";
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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"; 

// import React, { useState } from 'react'; 
// import RangeSlider from 'react-bootstrap-range-slider';    

class EditQa extends Component {          
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
                <div className="corporateMember CreateAssessment">  
                  <div className="fs28 col10 mb-4">Assessment Test</div> 
                  <Form method="post"> 
                    <div className="QuestionListings"> 
                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Question.1</Form.Label> 
                        {/* <Form.Control as="textarea" rows={3} className="inputTyp2" />    */}
                        <CKEditor 
                        editor={ClassicEditor}
                        onReady={(editor) => { 
                          console.log("Editor is ready to use!", editor);
                        }}
                        className="inputTyp2"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">   
                        <Form.Label className="fs20 fw600 col14">Question Type</Form.Label> 
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="Relevant"
                                    className="checkboxTyp1"
                                    name="relevant" 
                                  />
                                </Form.Group>
                            </Col> 
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckboxTwo"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="Irrelevant" 
                                    className="checkboxTyp1"
                                    name="irrelevant" 
                                  />
                                </Form.Group> 
                            </Col> 
                        </Row>
                     </Form.Group>

                     <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Answer</Form.Label> 
                        {/* <Form.Control as="textarea" rows={3} className="inputTyp2" />    */}
                        <CKEditor 
                        editor={ClassicEditor}
                        onReady={(editor) => { 
                          console.log("Editor is ready to use!", editor);
                        }}
                        className="inputTyp2"
                        />
                    </Form.Group>

                     <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Weightage</Form.Label> 
                        <Form.Control type="text" className="inputTyp2" />
                    </Form.Group>

                    <Form.Group className="mb-4"> 
                        <div className="position-relative">  
                            <Button
                                variant="btnTypAdd"  
                                type="button"  
                                >
                                <span><i className="fa fa-plus"></i></span> Add Services 
                            </Button>
                        </div>
                    </Form.Group> 
                    </div>

                    <div className="QuestionListings"> 
                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Question.2</Form.Label> 
                        {/* <Form.Control as="textarea" rows={3} className="inputTyp2" />    */}
                        <CKEditor 
                        editor={ClassicEditor}
                        onReady={(editor) => { 
                          console.log("Editor is ready to use!", editor);
                        }}
                        className="inputTyp2"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">   
                        <Form.Label className="fs20 fw600 col14">Question Type</Form.Label> 
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="Relevant"
                                    className="checkboxTyp1"
                                    name="relevant" 
                                  />
                                </Form.Group>
                            </Col> 
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckboxTwo"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="Irrelevant" 
                                    className="checkboxTyp1"
                                    name="irrelevant" 
                                  />
                                </Form.Group> 
                            </Col> 
                        </Row>
                     </Form.Group>

                     <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Answer</Form.Label> 
                        {/* <Form.Control as="textarea" rows={3} className="inputTyp2" />    */}
                        <CKEditor 
                        editor={ClassicEditor}
                        onReady={(editor) => { 
                          console.log("Editor is ready to use!", editor);
                        }}
                        className="inputTyp2"
                        />
                    </Form.Group>

                     <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Weightage</Form.Label> 
                        <Form.Control type="text" className="inputTyp2" />
                    </Form.Group>

                    <Form.Group className="mb-4"> 
                        <div className="position-relative">  
                            <Button
                                variant="btnTypAdd"  
                                type="button"  
                                >
                                <span><i className="fa fa-plus"></i></span> Add Services 
                            </Button>
                        </div>
                    </Form.Group> 
                    </div>
                          
                    <div className="position-relative mb-2">       
                        <Button
                            variant="btnTypAdd"  
                            type="button"  
                            className="inputTyp2 form-control" 
                            >
                            <span className="col40"><i className="fa fa-plus"></i></span> 
                            <b className="col40 fw500">Add Services</b>  
                         </Button> 
                    </div>

                    <Button 
                      variant="primary btnTyp5 mt-4"
                      type="button" 
                    >
                      create   
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

export default EditQa; 


