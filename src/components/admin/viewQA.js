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
import Editicon from "../../assets/images/edit_icon.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";
import blogclock from "../../assets/images/blogclock.png"; 
import UserChats from "../../assets/images/user_chat5.svg"; 


import constant from "../../constant"; 
class ViewQA extends Component { 
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
                <div className="professor_search ViewQa"> 
                      <div className="fs22 fw600 col10"> 
                           Question Answer 
                      </div>
                    <div className="QaListings">
                        <div className="d-flex">
                            <div className="position-relative">    
                                <div className="col29 fw500 fs17 pb-1">
                                    <strong>Question 1.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </div>
                                <div className="col10 fs17 fw500 mt-2 mb-3">Answer:</div>  
                                <div className="answerDetail">
                                    <ul>  
                                        <li><strong>1.</strong> iste natus error sit voluptatem accusantium.</li>
                                        <li><strong>2.</strong> Excepteur sint occaecat cupidatat non proident.</li>
                                        <li><strong>3.</strong> Duis aute irure dolor in reprehenderit</li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex ml-auto minw-90"> 
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
                    </div>

                    <div className="QaListings">
                        <div className="d-flex">
                            <div className="position-relative">    
                                <div className="col29 fw500 fs17 pb-1">
                                    <strong>Question 2.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </div>
                                <div className="col10 fs17 fw500 mt-2 mb-3">Answer:</div>  
                                <div className="answerDetail">
                                    <ul>  
                                        <li><strong>1.</strong> iste natus error sit voluptatem accusantium.</li>
                                        <li><strong>2.</strong> Excepteur sint occaecat cupidatat non proident.</li>
                                        <li><strong>3.</strong> Duis aute irure dolor in reprehenderit</li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex ml-auto minw-90"> 
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
                    </div>

                    <div className="QaListings">
                        <div className="d-flex">
                            <div className="position-relative">    
                                <div className="col29 fw500 fs17 pb-1">
                                    <strong>Question 3.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </div>
                                <div className="col10 fs17 fw500 mt-2 mb-3">Answer:</div>  
                                <div className="answerDetail">
                                    <ul>  
                                        <li><strong>1.</strong> iste natus error sit voluptatem accusantium.</li>
                                        <li><strong>2.</strong> Excepteur sint occaecat cupidatat non proident.</li>
                                        <li><strong>3.</strong> Duis aute irure dolor in reprehenderit</li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex ml-auto minw-90"> 
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
                    </div>

                    <div className="QaListings">
                        <div className="d-flex">
                            <div className="position-relative">    
                                <div className="col29 fw500 fs17 pb-1">
                                    <strong>Question 4.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </div>
                                <div className="col10 fs17 fw500 mt-2 mb-3">Answer:</div>  
                                <div className="answerDetail">
                                    <ul>  
                                        <li><strong>1.</strong> iste natus error sit voluptatem accusantium.</li>
                                        <li><strong>2.</strong> Excepteur sint occaecat cupidatat non proident.</li>
                                        <li><strong>3.</strong> Duis aute irure dolor in reprehenderit</li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex ml-auto minw-90"> 
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

export default ViewQA; 



