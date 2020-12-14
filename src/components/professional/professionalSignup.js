import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, Modal } from 'react-bootstrap';
import NavBar from '../core/nav';
import Footer from '../core/footer';
import { connect } from 'react-redux';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import moment from 'moment'; 

import { Link } from 'react-router-dom';
class ProfessionalSignup extends Component {
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="RegistrationLayout pro_signup">   
          <Container>
            <div className="layout_box mt-5 mb-4">
              <div className="col3 fs40 fw600 mb-4">Professional Signup</div> 
              <Form> 
                  <Row>

                  <Col md={12}>   
                      <Form.Group>   
                        <Form.Label className="fs20 fw600 col14">
                         upload Picture
                        </Form.Label> 
                        <Form.File id="exampleFormControlFile1" className="inputTyp2" />  
                      </Form.Group>
                    </Col>

                    <Col md={6}> 
                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          className="inputTyp2"
                          id="outlined-email"
                          variant="outlined"
                          name="name"
                         
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}> 
                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          Email Address 
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email"
                          className="inputTyp2"
                          id="outlined-email"
                          variant="outlined"
                          name="email"
                         
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          Phone
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Phone"
                          className="inputTyp2"
                          id="outlined-email"
                          variant="outlined"
                          name="phone"
                         
                        />
                      </Form.Group>
                    </Col> 
                    <Col md={6}>
                      <Form.Group>  
                        <Form.Label className="fs20 fw600 col14">
                         Work Experience 
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Work Experience "
                          className="inputTyp2"
                          id="outlined-email"
                          variant="outlined"
                          name="name" 
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}> 
                      <Form.Group>  
                        <Form.Label className="fs20 fw600 col14">
                         Age 
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Age"
                          className="inputTyp2"
                          id="outlined-email"
                          variant="outlined"
                          name="age" 
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          Language
                        </Form.Label>
                        <Form.Control as="select" className="selectTyp1">  
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Marathi</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={6}>   
                      <Form.Group>   
                        <Form.Label className="fs20 fw600 col14">
                         Qualification  
                        </Form.Label> 
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Qualification"
                          className="inputTyp2"
                          id="outlined-email"
                          variant="outlined"
                          name="qualification" 
                        />
                      </Form.Group>
                    </Col> 

                    <Col md={6}>   
                      <Form.Group>   
                        <Form.Label className="fs20 fw600 col14">
                        Keyword       
                        </Form.Label> 
                        <Form.Control
                          type="text"
                          placeholder="Keyword"
                          className="inputTyp2"
                          id="outlined-email"
                          variant="outlined"
                          name="booksession" 
                        />
                      </Form.Group> 
                    </Col>
                    
                    <Col md={12}> 
                      <Form.Group>  
                        <Form.Label className="fs20 fw600 col14">
                         Select Category    
                        </Form.Label>
                        <Row>
                        <Col md={4}>
                            <Form.Group controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="EAT" className="checkboxTyp1" /> 
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formBasicCheckboxtwo">
                              <Form.Check type="checkbox" label="LUV" className="checkboxTyp1" /> 
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formBasicCheckboxthree">  
                              <Form.Check type="checkbox" label="PRAY" className="checkboxTyp1" /> 
                            </Form.Group>
                        </Col>
                        </Row>
                      </Form.Group> 
                    </Col>

                    <Col md={12}>  
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="fs20 fw600 col14">Biography</Form.Label>  
                        <Form.Control as="textarea" rows={3} className="inputTyp2 text_bio"/> 
                      </Form.Group> 
                    </Col>
                     
                    <Col md={12}>
                      <Button
                        className="btnTyp5 mt-3">Signup</Button> 
                    </Col>
                    
                  </Row>

         
              </Form>

             
            </div>
          </Container>
        </div>
      

        <Footer />
      </div>
    );
  }
}
export default ProfessionalSignup;
