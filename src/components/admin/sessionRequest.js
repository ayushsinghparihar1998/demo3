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
import Checkgreen from "../../assets/images/checkgreen.svg";
import Yellowstar from "../../assets/images/stars.png";
import Sarikas from "../../assets/images/sarikas.png"; 

class SessionRequest extends Component {  
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
                                <div className="position-relative"> 
                                  <div className="col1 fw500 fs18 pb-1">
                                    John Wade-Hampton
                                  </div>
                                  <div className="col14 fs14 fw400 mb-2 mb-2">Requested to book a session</div> 
                                  <div className="fs14 fw400 col54 pb-1"> 
                                    Thu Apr 30, 2020 1.12 pm
                                  </div>
                                </div>
                                <div className="position-relative text-right">   
                                    <div className="col81 fs15 fs400">Session with</div>
                                    <div className="d-flex align-items-center"> 
                                        <Image src={Sarikas} alt="icon" className="r50 mr-3" /> 
                                        <div className="fs16 col1 fw500">Sarika Aggrawal</div>          
                                    </div>
                                </div>
                              </div>

                              {/* <div className="mb-4">
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
                              </div> */}

                              <div className="mt-3">
                                <Button className="btnTyp9 approve mr-4">
                                  CONFIRM
                                </Button>
                                <Button className="btnTyp9 reject">
                                  CANCEL
                                </Button>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="requests">
                          <div className="d-flex pt-4 pb-4 text-left border-grays">
                            <div className="mr-4">
                              <Image src={Requestuser} alt="" className="r50" />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="position-relative"> 
                                  <div className="col1 fw500 fs18 pb-1">
                                    John Wade-Hampton
                                  </div>
                                  <div className="col14 fs14 fw400 mb-2 mb-2">Requested to book a session</div> 
                                  <div className="fs14 fw400 col54 pb-1"> 
                                    Thu Apr 30, 2020 1.12 pm
                                  </div>
                                </div>
                                <div className="position-relative text-right">   
                                    <div className="col81 fs15 fs400">Session with</div>
                                    <div className="d-flex align-items-center"> 
                                        <Image src={Sarikas} alt="icon" className="r50 mr-3" /> 
                                        <div className="fs16 col1 fw500">Sarika Aggrawal</div>          
                                    </div>
                                </div>
                              </div>

                              <div className="mt-3">
                                <Button className="btnTyp9 approve mr-4">
                                  CONFIRM
                                </Button>
                                <Button className="btnTyp9 reject">
                                  CANCEL
                                </Button>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="requests">
                          <div className="d-flex pt-4 pb-4 text-left border-grays">
                            <div className="mr-4">
                              <Image src={Requestuser} alt="" className="r50" />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="position-relative"> 
                                  <div className="col1 fw500 fs18 pb-1">
                                    John Wade-Hampton
                                  </div>
                                  <div className="col14 fs14 fw400 mb-2 mb-2">Requested to book a session</div> 
                                  <div className="fs14 fw400 col54 pb-1"> 
                                    Thu Apr 30, 2020 1.12 pm
                                  </div>
                                </div>
                                <div className="position-relative text-right">   
                                    <div className="col81 fs15 fs400">Session with</div>
                                    <div className="d-flex align-items-center"> 
                                        <Image src={Sarikas} alt="icon" className="r50 mr-3" /> 
                                        <div className="fs16 col1 fw500">Sarika Aggrawal</div>          
                                    </div>
                                </div>
                              </div>

                              <div className="mt-3">
                                <Button className="btnTyp9 approve mr-4">
                                  CONFIRM
                                </Button>
                                <Button className="btnTyp9 reject">
                                  CANCEL
                                </Button>
                              </div>

                            </div>
                          </div>
                        </div>
                        
                        <div className="ShowMores mt-5 mb-3 text-center w-100">   
                            <Button className="btnTyp9 reject">Show More</Button> 
                        </div>

                      </Tab>
                      <Tab eventKey="Confirmed" title="CONFIRMED"> 
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

                        <div className="requests">
                          <div className="d-flex pt-4 pb-4 text-left border-grays">
                            <div className="mr-4">
                              <Image src={Requestuser} alt="" className="r50" />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="position-relative"> 
                                  <div className="col1 fw500 fs18 pb-1">
                                    John Wade-Hampton
                                  </div>
                                  <div className="col14 fs14 fw400 mb-2 mb-2">Requested to book a session</div> 
                                  <div className="fs14 fw400 col54 pb-1"> 
                                    Thu Apr 30, 2020 1.12 pm
                                  </div>
                                </div>
                                <div className="position-relative text-right">   
                                    <div className="col81 fs15 fs400">Session with</div>
                                    <div className="d-flex align-items-center"> 
                                        <Image src={Sarikas} alt="icon" className="r50 mr-3" /> 
                                        <div className="fs16 col1 fw500">Sarika Aggrawal</div>          
                                    </div>
                                </div>
                              </div> 

                              <div className="mt-3">
                                <Button className="btnTyp9 approve mr-4">
                                  CONFIRM
                                </Button>
                                <Button className="btnTyp9 reject">
                                  CANCEL
                                </Button>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="ShowMores mt-5 mb-3 text-center w-100">   
                            <Button className="btnTyp9 reject">Show More</Button> 
                        </div>
                        
                      </Tab>

                      <Tab eventKey="cancelled" title="CANCELLED"> 
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

                        <div className="requests">
                          <div className="d-flex pt-4 pb-4 text-left border-grays">
                            <div className="mr-4">
                              <Image src={Requestuser} alt="" className="r50" />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="position-relative"> 
                                  <div className="col1 fw500 fs18 pb-1">
                                    John Wade-Hampton
                                  </div>
                                  <div className="col14 fs14 fw400 mb-2 mb-2">Requested to book a session</div> 
                                  <div className="fs14 fw400 col54 pb-1"> 
                                    Thu Apr 30, 2020 1.12 pm
                                  </div>
                                </div>
                                <div className="position-relative text-right">   
                                    <div className="col81 fs15 fs400">Session with</div>
                                    <div className="d-flex align-items-center"> 
                                        <Image src={Sarikas} alt="icon" className="r50 mr-3" /> 
                                        <div className="fs16 col1 fw500">Sarika Aggrawal</div>          
                                    </div>
                                </div>
                              </div>

                              <div className="mt-3">
                                <Button className="btnTyp9 approve mr-4">
                                  CONFIRM
                                </Button>
                                <Button className="btnTyp9 reject">
                                  CANCEL 
                                </Button>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="ShowMores mt-5 mb-3 text-center w-100">   
                            <Button className="btnTyp9 reject">Show More</Button> 
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
export default SessionRequest; 

