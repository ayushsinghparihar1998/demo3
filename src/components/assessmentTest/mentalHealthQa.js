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
  Modal, 
} from "react-bootstrap"; 
import NavBar from "../core/nav";
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
import Infos from "../../assets/images/infos.png"; 
import BlogProcessFive from "../../assets/images/blog4.png"; 
import VideoIcon from "../../assets/images/videoIcon.png";
import Alerts from "../../assets/images/alerts.png"; 
import CrossTwo from "../../assets/images/crosstwo.png";
import Slider from "react-rangeslider";

import constant from "../../constant"; 
class MentalhealthQa extends Component { 
    constructor() {
        super();
        this.state = {
          setShow: false,
          show: false,
          show3: false,
          
        };
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
      }
      
      handleShow = () => {
        this.setState({ show: true });
      };
    
      handleClose = () => { 
        this.setState({ show: false });
      };
  render() {
    return (
      <div className="page__wrapper innerpage">  
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5">     
          <Container>
            <Row>
              <Col md={12}>          
                <div className="professor_search mentalHealths ViewQa">        
                      <div className="fs22 fw600 col8 mb-4 text-center text-uppercase">     
                            mental health
                      </div> 
                    <div className="QaListings">
                        <div className="QaHeader justify-content-center"> 
                               <div className="fs18 col14 fw500 text-center">    
                                    Maximum Marks: 30   
                               </div>
                        </div>
                            <div className="QaBody">   
                                <div className="CreateAssessment">
                                <Form.Group className="mb-4"> 
                            <div className="slider">
                              <div className="value mb-3">
                                Question 30/<small>1</small> 
                              </div>
                              <Slider
                                
                                min="10"
                                max="100"  
                              />
                            </div>
                           
                          </Form.Group>
                                </div> 

                                <div className="QuestionList">   
                                <div className="col8 fw500 qaList fs18 pb-1">
                                    <strong>Q 1.</strong> Is It a long established fact that a reader will be distracted by the readable content of a page when looking at its layout? 
                                </div>
                                <div className="answerDetail">
                                    <ul>  
                                        <li>
                                            <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check
                                                label=""
                                                className="checkboxTyp1"
                                                name="Featured"
                                                type="checkbox" 
                                               />
                                            </Form.Group>   
                                            </span> 
                                            <span>Is It a long established fact that a reader will be distracted by the readable.</span></li> 
                                            <li>
                                            <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckboxtwo">
                                                <Form.Check
                                                label=""
                                                className="checkboxTyp1"
                                                name="Featured"
                                                type="checkbox" 
                                               />
                                            </Form.Group>   
                                            </span> 
                                            <span>Is It a long established fact that a reader will be distracted by the readable.</span></li> 
                                            <li>
                                            <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckboxthree"> 
                                                <Form.Check
                                                label=""
                                                className="checkboxTyp1"
                                                name="Featured"
                                                type="checkbox" 
                                               />
                                            </Form.Group>   
                                            </span> 
                                            <span>Is It a long established fact that a reader will be distracted by the readable.</span></li> 
                                    </ul>  
                                </div>
                                </div>

                                <div className="QuestionList">   
                                <div className="col8 fw500 qaList fs18 pb-1">
                                    <strong>Q 1.</strong> Is It a long established fact that a reader will be distracted by the readable content of a page when looking at its layout? 
                                </div>
                                <div className="answerDetail">
                                    <ul>  
                                        <li>
                                            <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check
                                                label=""
                                                className="checkboxTyp1"
                                                name="Featured"
                                                type="checkbox" 
                                               />
                                            </Form.Group>   
                                            </span> 
                                            <span>Is It a long established fact that a reader will be distracted by the readable.</span></li> 
                                            <li>
                                            <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckboxtwo">
                                                <Form.Check
                                                label=""
                                                className="checkboxTyp1"
                                                name="Featured"
                                                type="checkbox" 
                                               />
                                            </Form.Group>   
                                            </span> 
                                            <span>Is It a long established fact that a reader will be distracted by the readable.</span></li> 
                                            <li>
                                            <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckboxthree"> 
                                                <Form.Check
                                                label=""
                                                className="checkboxTyp1"
                                                name="Featured"
                                                type="checkbox" 
                                               />
                                            </Form.Group>   
                                            </span> 
                                            <span>Is It a long established fact that a reader will be distracted by the readable.</span></li> 
                                    </ul>  
                                </div>
                                </div>

                                <div className="QuestionList">   
                                <div className="col8 fw500 qaList fs18 pb-1">
                                    <strong>Q 1.</strong> Is It a long established fact that a reader will be distracted by the readable content of a page when looking at its layout? 
                                </div>
                                <div className="answerDetail">
                                    <ul>  
                                        <li>
                                            <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check
                                                label=""
                                                className="checkboxTyp1"
                                                name="Featured"
                                                type="checkbox" 
                                               />
                                            </Form.Group>   
                                            </span> 
                                            <span>Is It a long established fact that a reader will be distracted by the readable.</span></li> 
                                            <li>
                                            <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckboxtwo">
                                                <Form.Check
                                                label=""
                                                className="checkboxTyp1"
                                                name="Featured"
                                                type="checkbox" 
                                               />
                                            </Form.Group>   
                                            </span> 
                                            <span>Is It a long established fact that a reader will be distracted by the readable.</span></li> 
                                            <li>
                                            <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckboxthree"> 
                                                <Form.Check
                                                label=""
                                                className="checkboxTyp1"
                                                name="Featured"
                                                type="checkbox" 
                                               />
                                            </Form.Group>   
                                            </span> 
                                            <span>Is It a long established fact that a reader will be distracted by the readable.</span></li> 
                                    </ul>  
                                </div>
                                </div>

                            </div>

                            
                            
                    </div>

                    <div className="mt-4 text-right">   
                        <Button type="button" className="btnTyp5 talkBtntwo" onClick={this.handleShow}>
                            SAVE & NEXT
                        </Button>
                    </div>

                </div>
                
              </Col>
            

            </Row>
          </Container>
        </div>
        <Footer />

        {/* modal start */}
      {/* <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button> */} 

      <Modal show={this.state.show} onHide={this.handleClose} className="CreateAccount alertShow">                  
        <Modal.Header>   
            <Button type="button" onClick={this.handleClose} class="close">   
                <Image src={CrossTwo} alt="alert" className="alertCross" />     
            </Button> 
        </Modal.Header> 
        <Modal.Body> 
            <div className="mb-4"> 
                <Image src={Alerts} alt="alert" className="" />
            </div>
            <div className="fw600 fs28 mb-3">Alert!</div>
            <div className="col14 fs20 fw500 mb-4">Your entries are final and if you submit the test,
 your report will be generated and you can’t 
change them.</div>
            <Button type="button" className="btnTyp5">OKAY</Button>  
         </Modal.Body> 
      </Modal>
      {/* modal end */}

      </div>
    );
  }
}

export default MentalhealthQa; 




