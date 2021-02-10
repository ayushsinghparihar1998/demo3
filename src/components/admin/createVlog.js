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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import constant from "../../constant"; 

class CreateVlog extends Component { 
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
                  <div className="fs28 col10 mb-4">Create Vlog</div> 
                  <Form>
                    <Form.Group className="mb-4"> 
                      <Form.Group>   
                        <Form.Label className="fs20 fw600 col14">Upload Thumbnail Image</Form.Label>
                        <Form.File
                          id="exampleFormControlFile1" 
                          className="inputTyp2"
                        />
                        <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div>      
                      </Form.Group> 
                      
                    </Form.Group>  

                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Title of the Blog</Form.Label>
                        <Form.Control type="email" className="inputTyp2" />
                        <div className="col27 fs14 fw400 mt-2 error">
                            {/* {errors.kt_name} */}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-4"> 
                        <Form.Label className="fs20 fw600 col14">Description</Form.Label> 
                        {/* <Form.Control as="textarea" className="inputTyp2" />  */}
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

                    <Form.Group controlId="formBasicCheckbox"> 
                        <Form.Label className="fs20 fw600 col14">Select Category</Form.Label>  
                        <Form.Check
                          type="checkbox"
                          label="Featured"
                          className="checkboxTyp1"
                          name="Featured" 
                        />
                        <div className="col27 fs14 fw400 mt-2 error">
                           {/* {errors.kt_name} */}   
                        </div>
                     </Form.Group> 

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button" 
                    >
                      CREATE  
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

export default CreateVlog; 



