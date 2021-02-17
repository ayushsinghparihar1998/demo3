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
import EditNew from "../../assets/images/editViews.png";

import constant from "../../constant"; 
class MentalViewDetails extends Component {    
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

              
              <Col md={8} lg={9} className="pl-1"> 
                <div className="professor_search mentalViewDetail">  
                  <Row className="mb-1">
                    <Col md={8}>
                      <div className="fs22 fw600 col10"> 
                          MentalViewDetails
                      </div>
                      <div className="fw300 fs16 col14">
                        {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                      </div>
                    </Col>
                    <Col md={4}> 
                      <div className="text-right pro_cbtn">
                        <Button
                          type="button"
                          className="btnType22" 
                        >
                          <Image src={EditNew} className="mr-2" /> Edit Details  
                        </Button> 
                      </div>
                    </Col>
                  </Row> 

                  <div className="mentalLayout">  
                      <Row>
                          <Col md={3}> 
                              <div className="mentalList"> 
                                  <div className="col11 fw400 fs15 mb-2">Plan Type</div>  
                                  <div className="col11 fw500 fs16">FREE</div>  
                              </div> 
                          </Col>
                          <Col md={3}> 
                              <div className="mentalList"> 
                                  <div className="col11 fw400 fs15 mb-2">Category</div>  
                                  <div className="col11 fw500 fs16">EAT, LUV</div>  
                              </div> 
                          </Col>
                          <Col md={3}> 
                              <div className="mentalList"> 
                                  <div className="col11 fw400 fs15 mb-2">No. of Questions</div>  
                                  <div className="col11 fw500 fs16">120</div>  
                              </div> 
                          </Col>
                          <Col md={3}> 
                              <div className="mentalList"> 
                                  <div className="col11 fw400 fs15 mb-2">Total Marks</div>  
                                  <div className="col11 fw500 fs16">30</div>  
                              </div> 
                          </Col>
                      </Row> 
                  </div>

                  <div className="position-relative"> 
                         <div className="mentalListingTwo">
                            <div className="col11 fs15 fw400 mb-1">Suggestion <span className="col29">(Range: 0-10)</span></div>
                            <div className="col14 fw500 fs17">lorem dummy content Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                         </div>   
                         <div className="mentalListingTwo">
                            <div className="col11 fs15 fw400 mb-1">Suggestion <span className="col29">(Range: 0-10)</span></div>
                            <div className="col14 fw500 fs17">lorem dummy content Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                         </div> 
                         <div className="mentalListingTwo">
                            <div className="col11 fs15 fw400 mb-1">Suggestion <span className="col29">(Range: 0-10)</span></div>
                            <div className="col14 fw500 fs17">lorem dummy content Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                         </div> 
                         <div className="mentalListingTwo">
                            <div className="col11 fs15 fw400 mb-1">Suggestion <span className="col29">(Range: 0-10)</span></div>
                            <div className="col14 fw500 fs17">lorem dummy content Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                         </div>  
                        <div className="text-center mt-5">    
                            <Button type="submit" className="btnTyp7 br40">View Question & Answers</Button> 
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

export default MentalViewDetails; 




