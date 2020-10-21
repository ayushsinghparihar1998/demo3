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

class Ratingrequest extends Component {
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
                <div className="myprofile reviewrequest">
                  <div className="text-center user_tab">
                    <Tabs defaultActiveKey="request">
                      <Tab eventKey="request" title="Requested">
                        <div className="requests">
                          <div className="d-flex pt-4 pb-4 text-left border-grays">
                            <div className="mr-4">
                              <Image src={Requestuser} alt="" className="r50" />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <div className="col1 fw500 fs18 pb-1">
                                    John Wade-Hampton
                                  </div>
                                  <div className="fs14 fw400 col54 pb-1">
                                    Thu Apr 30, 2020 1.12 pm
                                  </div>
                                </div>
                                <div className="col81 fs15 fs400 pr-3">
                                  Review for - Mic Hegrid
                                </div>
                              </div>

                              <div className="mb-4">
                                <span className="mr-4">
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image src={Yellowstar} alt="" />
                                </span>
                                <span className="col82 fs18 fw600">
                                  Good! <Image src={Checkgreen} alt="" />
                                </span>
                              </div>

                              <div className="mt-3">
                                <Button className="btnTyp9 approve mr-4">
                                  APPROVE
                                </Button>
                                <Button className="btnTyp9 reject">
                                  REJECT
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="completed" title="COMPLETED">
                        <div className="requests">
                          <div className="d-flex pt-4 pb-4 text-left border-grays">
                            <div className="mr-4">
                              <Image src={Requestuser} alt="" className="r50" />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <div className="col1 fw500 fs18 pb-1">
                                    John Wade-Hampton
                                  </div>
                                  <div className="fs14 fw400 col54 pb-1">
                                    Thu Apr 30, 2020 1.12 pm
                                  </div>
                                </div>
                                <div className="col81 fs15 fs400 pr-3">
                                  Review for - Mic Hegrid
                                </div>
                              </div>

                              <div>
                                <span className="mr-4">
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image src={Yellowstar} alt="" />
                                </span>
                                <span className="col82 fs18 fw600">
                                  Good! <Image src={Checkgreen} alt="" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>

                      <Tab eventKey="reject" title="REJECTED">
                        <div className="requests">
                          <div className="d-flex pt-4 pb-4 text-left border-grays">
                            <div className="mr-4">
                              <Image src={Requestuser} alt="" className="r50" />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <div className="col1 fw500 fs18 pb-1">
                                    John Wade-Hampton
                                  </div>
                                  <div className="fs14 fw400 col54 pb-1">
                                    Thu Apr 30, 2020 1.12 pm
                                  </div>
                                </div>
                                <div className="col81 fs15 fs400 pr-3">
                                  Review for - Mic Hegrid
                                </div>
                              </div>

                              <div>
                                <span className="mr-4">
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image
                                    src={Yellowstar}
                                    alt=""
                                    className="mr-1"
                                  />
                                  <Image src={Yellowstar} alt="" />
                                </span>
                                <span className="col82 fs18 fw600">
                                  Good! <Image src={Checkgreen} alt="" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
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
export default Ratingrequest;
