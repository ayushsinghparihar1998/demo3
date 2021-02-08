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
import Editicon from "../../assets/images/edit_icon.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";
import blogclock from "../../assets/images/blogclock.png";
import Requestuser from "../../assets/images/pro_img.svg"; 

class KitsListing extends Component {  
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
                
              <Col md={8} lg={9} className="pl-1 kitListing"> 
                  <div className="professor_search">    
                    <Row className="mb">
                      <Col md={8}>
                        <div className="fs22 fw600 col10">Kits</div> 
                        <div className="fw300 fs16 col14">
                          {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-right pro_cbtn">
                          <Button
                            type="button"
                            className="btnTyp5"
                           
                          >
                            ADD KIT  
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <Form className="p_form mb-4">
                      <div className="checkCategory">
                        <Form.Group
                          controlId="formBasicCheckbox1"
                          className="row"
                        >
                         
                        </Form.Group>
                      </div>
                    </Form>
                  </div>
     
                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="mr-2 pt-1">
                              <Image
                                src={Requestuser} 
                                alt=""
                              /> 
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div className="col1 fw600 fs18 pb-1">
                                        Emotional Welness Kit 
                                    </div>
                                    <div className="d-flex ml-auto">
                                      <span className="mr-3">
                                        <Image
                                          src={Editicon}
                                          alt="" 
                                        />
                                      </span>
                                      <span>
                                        <Image
                                          src={Deleteicon} 
                                          alt="" 
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="fs16 fw400 col14 pb-1 e_detai">
                                    <strong className="fw600 fs17"> 
                                      Biography:
                                    </strong> <span>lorem dummy content Lorem Ipsum is simply dummy text
of the printing and typesetting industry.  <a>Read more...</a></span> 

                                  </div>

                                  <div className="fs16 fw400 col14 pb-1"> 
                                      <span className="fw400 col14">1) Shelter </span>
                                      <strong className="fw500 col29 ml-3">Rs.550 </strong>
                                      <span className="fw400 col14 ml-3">2) Funding home </span>
                                      <strong className="fw500 col29 ml-3">Rs. 520 </strong>
                                      <span className="fw400 col14 ml-3">3) Orphanhood </span>
                                      <strong className="fw500 col29 ml-3">Rs. 560 </strong>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 

                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="mr-2 pt-1">
                              <Image
                                src={Requestuser} 
                                alt=""
                              /> 
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div className="col1 fw600 fs18 pb-1">
                                        Emotional Welness Kit 
                                    </div>
                                    <div className="d-flex ml-auto">
                                      <span className="mr-3">
                                        <Image
                                          src={Editicon}
                                          alt="" 
                                        />
                                      </span>
                                      <span>
                                        <Image
                                          src={Deleteicon} 
                                          alt="" 
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="fs16 fw400 col14 pb-1 e_detai">
                                    <strong className="fw600 fs17"> 
                                      Biography:
                                    </strong> <span>lorem dummy content Lorem Ipsum is simply dummy text
of the printing and typesetting industry.  <a>Read more...</a></span> 

                                  </div>

                                  <div className="fs16 fw400 col14 pb-1"> 
                                      <span className="fw400 col14">1) Shelter </span>
                                      <strong className="fw500 col29 ml-3">Rs.550 </strong>
                                      <span className="fw400 col14 ml-3">2) Funding home </span>
                                      <strong className="fw500 col29 ml-3">Rs. 520 </strong>
                                      <span className="fw400 col14 ml-3">3) Orphanhood </span>
                                      <strong className="fw500 col29 ml-3">Rs. 560 </strong>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="mr-2 pt-1">
                              <Image
                                src={Requestuser} 
                                alt=""
                              /> 
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div className="col1 fw600 fs18 pb-1">
                                        Emotional Welness Kit 
                                    </div>
                                    <div className="d-flex ml-auto">
                                      <span className="mr-3">
                                        <Image
                                          src={Editicon}
                                          alt="" 
                                        />
                                      </span>
                                      <span>
                                        <Image
                                          src={Deleteicon} 
                                          alt="" 
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="fs16 fw400 col14 pb-1 e_detai">
                                    <strong className="fw600 fs17"> 
                                      Biography:
                                    </strong> <span>lorem dummy content Lorem Ipsum is simply dummy text
of the printing and typesetting industry.  <a>Read more...</a></span> 

                                  </div>

                                  <div className="fs16 fw400 col14 pb-1"> 
                                      <span className="fw400 col14">1) Shelter </span>
                                      <strong className="fw500 col29 ml-3">Rs.550 </strong>
                                      <span className="fw400 col14 ml-3">2) Funding home </span>
                                      <strong className="fw500 col29 ml-3">Rs. 520 </strong>
                                      <span className="fw400 col14 ml-3">3) Orphanhood </span>
                                      <strong className="fw500 col29 ml-3">Rs. 560 </strong>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
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

export default KitsListing;  