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

class SubscriptionDocument extends Component {
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
                       Upload ELP Document
                  </div>
                  <Form>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                          Upload Press Image 
                      </Form.Label>

                      <Form.Group> 
                        <Form.File id="exampleFormControlFile1" label="Example file input" className="inputTyp2" />
                        <div className="fs12 fw300 col27 mt-1">You can upload multiple files </div>
                      </Form.Group> 
                      <div className="col27 fs14 fw400 mt-2 error">
                        {/* {errors.cd_domain_name} */}
                      </div>
                    </Form.Group> 

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button">  
                      UPLOAD 
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

export default SubscriptionDocument;  
