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

class addSubscriptions extends Component {
  render() {
    
    return (
      <div className="page__wrapper innerpage"> 
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal pt-4 pb-5">
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
                  <div className="fs28 col10 mb-4">
                        Subscription Plan
                  </div>
                  <Form>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                          Plan Name
                      </Form.Label>

                      <Form.Control 
                        type="email"
                        placeholder=""
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="cd_domain_name"
                        
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {/* {errors.cd_domain_name} */}
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                         Plan Amount
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        placeholder=""
                        id="outlined-email"
                        variant="outlined" 
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {/* {errors.cd_audio_min} */}
                      </div>
                    </Form.Group> 

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14"> 
                           Plan Description
                      </Form.Label>
                      <Form.Control as="textarea" rows={3} className="inputTyp2 cate2" /> 
                      <div className="col27 fs14 fw400 mt-2 error">  
                        {/* {errors.cd_audio_min} */}
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14"> 
                           Plan Offer(%)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        placeholder=""
                        id="outlined-email"
                        variant="outlined" 
                      />
                      <div className="col27 fs14 fw400 mt-2 error">  
                        {/* {errors.cd_audio_min} */}
                      </div>
                    </Form.Group> 
                     
                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this.handleSubmit()}
                    >
                      submit
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

export default addSubscriptions; 
