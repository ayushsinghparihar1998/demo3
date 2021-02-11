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
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'   

class CreateAssessmentTest extends Component { 
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 50 
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')  
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };   
  render() {
    const { value } = this.state 
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
                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Title of the Test</Form.Label> 
                        <Form.Control type="text" className="inputTyp2" /> 
                        <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">   
                        <Form.Label className="fs20 fw600 col14">Plans Select by</Form.Label> 
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="Free"
                                    className="checkboxTyp1"
                                    name="free" 
                                  />
                                </Form.Group>
                            </Col> 
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckboxTwo"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="Paid" 
                                    className="checkboxTyp1"
                                    name="paid" 
                                  />
                                </Form.Group>
                            </Col> 
                        </Row>
                     </Form.Group>

                     <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Test Price (If Paid)</Form.Label> 
                        <Form.Control type="text" className="inputTyp2" />
                        <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">   
                        <Form.Label className="fs20 fw600 col14">Select Category</Form.Label> 
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckboxThree"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="Eat"
                                    className="checkboxTyp1"
                                    name="luv" 
                                  />
                                </Form.Group>
                            </Col> 
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckboxFour"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="Luv"       
                                    className="checkboxTyp1"
                                    name="luv" 
                                  />
                                </Form.Group>
                            </Col> 
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckboxFive">  
                                  <Form.Check
                                    type="checkbox"
                                    label="Pray"       
                                    className="checkboxTyp1"
                                    name="pray" 
                                  />
                                </Form.Group>
                            </Col> 
                        </Row>
                     </Form.Group> 

                     <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Total Marks</Form.Label> 
                        <Form.Control type="text" className="inputTyp2" /> 
                        <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div>
                    </Form.Group> 

                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Select range</Form.Label>
                        {/* <Form.Control type="range" className="inputTyp2" />  */}
                          <div className='slider'> 
                            <div className='value'>{value}</div>
                            <Slider
                                min={0}
                                max={100}
                                value={value}
                                onChangeStart={this.handleChangeStart}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                             />  
                          </div>  
                          <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Suggestions</Form.Label> 
                        <CKEditor 
                        editor={ClassicEditor}
                        onReady={(editor) => { 
                          console.log("Editor is ready to use!", editor);
                        }}
                        className="inputTyp2"
                      />
                      
                        <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div> 
                    </Form.Group>

                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Select range</Form.Label>
                        <div className='slider'> 
                            <div className='value'>{value}</div>
                            <Slider
                                min={0}
                                max={100}
                                value={value}
                                onChangeStart={this.handleChangeStart}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                             />  
                          </div>  
                        <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Suggestions</Form.Label>  
                        <CKEditor 
                        editor={ClassicEditor}
                        onReady={(editor) => { 
                          console.log("Editor is ready to use!", editor);
                        }}
                        className="inputTyp2"
                      />   
                      <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div>
                    </Form.Group>
                    
                    <Form.Group className="mb-4">    
                        <Form.Label className="fs20 fw600 col14">Youtube Link</Form.Label>
                        <Form.Control type="email" className="inputTyp2" />  
                        <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div>
                    </Form.Group>

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
                      NEXT  
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

export default CreateAssessmentTest; 




