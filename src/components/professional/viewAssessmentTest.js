import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Modal } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";
import Messagefour from "../../assets/images/msg4.svg";
import Melida from "../../assets/images/melida.svg";
import Searches from "../../assets/images/searches.svg";
import Starblank from "../../assets/images/starempty.svg";
import Starfill from "../../assets/images/starfill.svg";
import Scores from "../../assets/images/scores.png"; 
import Subscribes from "../../assets/images/subscribes.svg";
import Searchbtn from "../../assets/images/search_btn.png";
import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { Popover } from 'antd';
import ELPRxApiService from "../../common/services/apiService";
import Crossbtn from "../../assets/images/blue_cross.svg";


class ViewAssessmentTest extends Component {    
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <div className="chatsearch w-100">
                            
                            <div className="search-listing">
                                <Row> 
                                     <Col lg={9} md={10} className="m-auto">     
                                         <div className="scoreDetails">
                                              <div className="scoreImg">
                                                   <Image src={Scores} alt="" /> 
                                              </div>
                                              <div className="fs22 fw400 col14">Scores</div> 
                                              <div className="fw400 col14 fs28 mt-3">PSYCHOLOGICAL PROBLEM</div>
                                              <div className="fw400 col14 fs28 mt-3 disorders">MENTAL DISORDER</div>
                                              <div className="scoreBorders">
                                                  <div>
                                                       <div className="fs16 fw400 col14 mb-3">No. of Questions</div> 
                                                       <div className="fs18 fw500 col14">30</div>  
                                                  </div>
                                                  <div>
                                                       <div className="fs16 fw400 col14 mb-3">Answered</div> 
                                                       <div className="fs18 fw500 col14">15</div>  
                                                  </div>
                                                  <div>
                                                       <div className="fs16 fw400 col14 mb-3">Not Answered</div> 
                                                       <div className="fs18 fw500 col14">15</div>  
                                                  </div>
                                              </div>
                                              <div className="scoreSuggetion">  
                                                    <div className="fs18 col8 fw500 mb-2">SUGGESTION</div>
                                                    <div className="col8 fs15 fw300">
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                                    </div> 
                                              </div> 
                                         </div> 

                                         <div className="createPdf mt-5">
                                             <Button className="btnTyp5">generate pdf</Button>
                                         </div>
                                     </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div> 

                <Footer />
            </div>
        );
    }
}

export default ViewAssessmentTest; 
