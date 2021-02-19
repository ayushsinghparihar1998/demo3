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
            <div className="processBlog pb-5 w-100">
              <div className="text-center fs28 fw500 col64 mb-2">Blog</div>
              <div className="mxw-50 text-center col14 fs16 fw300 m-auto pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>

              <div className="blogMain ListsUI"> 
                <Tabs
                  defaultActiveKey='EAT'
                  id="uncontrolled-tab-example"
                >
                  <Tab value="EAT" eventKey="EAT" title="EAT">
                    <div className="featuredTab">
                      <Row>
                        <Col md={7}>
                          <Row>
                            <Col md={12}>  
                                EAT
                            </Col>
                          </Row>

                        </Col>

                        <Col md={5}>
                         
                          
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
