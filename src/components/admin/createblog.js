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
import Profileban from "../../assets/images/profile_ban.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/usa_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import Camera from "../../assets/images/camera.svg";
import Cameratwo from "../../assets/images/camera-white.svg";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Checkgreen from "../../assets/images/checkgreen.svg";
import Yellowstar from "../../assets/images/stars.png";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";

class Createblogs extends Component {
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <Row>
              <Col md={4} lg={3} className="pr-1">
                <div className="adminsidebar">
                  <div className="inner_area">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Links
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500 text-uppercase">
                          {" "}
                          USER LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500 text-uppercase">
                          {" "}
                          PROFESSIONAL LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col23 fw500 text-uppercase">
                          {" "}
                          LISTENER LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500 text-uppercase">
                          {" "}
                          LISTENER Q&A
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500 text-uppercase">
                          {" "}
                          CATEGORY
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative active">
                        <div className="fs14 col28 fw500 text-uppercase">
                          {" "}
                          Review Request
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={8} lg={9} className="pl-1">
                <div className="createblog">
                    <div className="d-flex mb-4">  
                        <div className="col23 fs28 fw600">Create Blog</div>
                        <Button className="btnTyp9 approve">EDIT BLOG</Button>
                    </div>
                    
                    <div className="blog_form">  
                        <Form>
                            <Form.Group>
                                <Form.Label className="col14 fw600 fs18">Upload blog image</Form.Label>
                                <Form.File id="exampleFormControlFile1" className="fileType2" />
                                <div className="fs16 fw400 col14 tesxtfills"><strong className="col23">Add file</strong> or drop files here</div> 
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail"> 
                                <Form.Label className="col14 fw600 fs18">Title of the blog</Form.Label>
                                <Form.Control type="text" className="inputTyp2" />
                               
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="col14 fw600 fs18">Description</Form.Label>
                                <Form.Control as="textarea" className="inputTyp2 cate2" rows="3" />
                            </Form.Group> 
                            <Form.Group controlId="formBasicEmail"> 
                                <Form.Label className="col14 fw600 fs18">Link to be shared</Form.Label>
                                <Form.Control type="text" placeholder="htttp://socialwelfare.com" className="inputTyp2" />
                               
                            </Form.Group>
                            
                            <Button className="btnTyp4 mt-4">
                                SUBMIT
                            </Button>
                        </Form>
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
export default Createblogs;
