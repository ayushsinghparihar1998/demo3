import React, { Component } from "react";
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
import Subscribes from "../../assets/images/subscribes.svg";
import BlogProcessOne from "../../assets/images/p_blogs.svg";
import BlogProcessTwo from "../../assets/images/p_blogs2.svg";
import BlogProcessThree from "../../assets/images/p_blogs3.svg";
import BlogProcessFour from "../../assets/images/p_blogs4.svg";
import BlogProcessFive from "../../assets/images/blog4.png";
import BlogProcessSix from "../../assets/images/blog5.svg";
import BlogProcessSeven from "../../assets/images/blog6.png";
import BlogProcessNine from "../../assets/images/blogs9.png";
import VideoIcon from "../../assets/images/videoIcon.png";

import blogclock from "../../assets/images/blogclock.png";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { Popover } from "antd";
import ELPRxApiService from "../../common/services/apiService";
import moment from "moment";

class AssessmentTestListTwo extends Component {
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4">
          <Container>
            <div className="processBlog assessBlog pb-5 w-100">
              <div className="text-center fs28 fw500 col64 mb-2">ASSESSMENT TESTS</div>
              <div className="blogMain ListsUI"> 
                <Tabs
                  defaultActiveKey='EAT'
                  id="uncontrolled-tab-example"
                >
                  <Tab value="EAT" eventKey="EAT" title="EAT">
                    <div className="featuredTab">
                      <Row>
                        
                            <Col md={4} sm={6}>  
                                 <div className="blogOneMain bg-Color1">
                                     <Button type="submit" className="blogBtns btnColor1"> 
                                         FREE
                                     </Button>
                                     <div className="fs20 fw500 col64 text-uppercase mt-2">Mental health</div>
                                     <div className="fw400 fs16 mb-2">120 Questions</div>
                                     <div className="fs16 col64 mb-2"><small>RS.</small>520/-</div> 
                                     <Button type="submit" className="PlanBtns PlanColor1">  
                                        start now
                                     </Button>
                                 </div>
                            </Col> 
                        
                            <Col md={4} sm={6}>  
                                 <div className="blogOneMain bg-Color2">
                                     <Button type="submit" className="blogBtns btnColor2"> 
                                         PAID
                                     </Button>
                                     <div className="fs20 fw500 col64 text-uppercase mt-2">EMOTIONAL PROBLEM</div>
                                     <div className="fw400 fs16 mb-2">120 Questions</div>
                                     <div className="fs16 col64 mb-2"><small>RS.</small>520/-</div> 
                                     <Button type="submit" className="PlanBtns PlanColor2">  
                                        start now
                                     </Button>
                                 </div>
                            </Col> 

                            <Col md={4} sm={6}>  
                                 <div className="blogOneMain bg-Color3">
                                     <Button type="submit" className="blogBtns btnColor3"> 
                                         FREE
                                     </Button>
                                     <div className="fs20 fw500 col64 text-uppercase mt-2">Mental health</div>
                                     <div className="fw400 fs16 mb-2">120 Questions</div>
                                     <div className="fs16 col64 mb-2"><small>RS.</small>520/-</div> 
                                     <Button type="submit" className="PlanBtns PlanColor3">  
                                        start now
                                     </Button>
                                 </div>
                            </Col> 

                            <Col md={4} sm={6}>  
                                 <div className="blogOneMain bg-Color1">
                                     <Button type="submit" className="blogBtns btnColor1"> 
                                         FREE
                                     </Button>
                                     <div className="fs20 fw500 col64 text-uppercase mt-2">Mental health</div>
                                     <div className="fw400 fs16 mb-2">120 Questions</div>
                                     <div className="fs16 col64 mb-2"><small>RS.</small>520/-</div> 
                                     <Button type="submit" className="PlanBtns PlanColor1">  
                                        start now
                                     </Button>
                                 </div>
                            </Col> 
                        
                            <Col md={4} sm={6}>  
                                 <div className="blogOneMain bg-Color2">
                                     <Button type="submit" className="blogBtns btnColor2"> 
                                         PAID
                                     </Button>
                                     <div className="fs20 fw500 col64 text-uppercase mt-2">EMOTIONAL PROBLEM</div>
                                     <div className="fw400 fs16 mb-2">120 Questions</div>
                                     <div className="fs16 col64 mb-2"><small>RS.</small>520/-</div> 
                                     <Button type="submit" className="PlanBtns PlanColor2">  
                                        start now
                                     </Button>
                                 </div>
                            </Col> 

                            <Col md={4} sm={6}>  
                                 <div className="blogOneMain bg-Color3">
                                     <Button type="submit" className="blogBtns btnColor3"> 
                                         FREE
                                     </Button>
                                     <div className="fs20 fw500 col64 text-uppercase mt-2">Mental health</div>
                                     <div className="fw400 fs16 mb-2">120 Questions</div>
                                     <div className="fs16 col64 mb-2"><small>RS.</small>520/-</div> 
                                     <Button type="submit" className="PlanBtns PlanColor3">  
                                        start now
                                     </Button>
                                 </div>
                            </Col>
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="LUV" title="LUV"> 
                    <div className="featuredTab">
                        LUV
                    </div>
                  </Tab>

                  <Tab eventKey="PRAY" title="PRAY"> 
                    <div className="featuredTab">
                        PRAY
                    </div>
                  </Tab>

                  <Tab eventKey="HOLISTIC" title="HOLISTIC">  
                    <div className="featuredTab">
                        HOLISTIC
                    </div>
                  </Tab>

                </Tabs>

              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default AssessmentTestListTwo;
