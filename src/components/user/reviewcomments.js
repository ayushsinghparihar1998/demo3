import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/usa_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import Yellowstar from "../../assets/images/stars.png";
import Chatuser from "../../assets/images/chat_user.svg";
import Checkgreen from "../../assets/images/checkgreen.svg";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";

class Reviewcomments extends Component {
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>

                <div className="profile_layout listenerprofile r_comments pt-4 pb-5">
                    <Container>
                        <div className="myprofile w-100">
                            <div className="d-flex position-relative mb-4 pb-2">
                                <div className="profile_top">
                                    <Image src={Profileimg} alt="" className="r50 border_profile" />
                                    <Image src={Usaflag} alt="" width="50px" className="r50 flags" />
                                </div>
                                <div className="mt-3 mb-4 pb-2 ml-4">
                                    <div className="fs18 fw600 col1 pb-1">Melisa R. Wright</div>
                                    <div className="col23 fs16 fw500 pb-1">
                                        Listener - Novice
                                        <Image src={warningS} alt="" className="ml-2" />
                                    </div>
                                    <div className="mt-1 col27 fw400">Finding myself....</div>
                                    <div>
                                        <Image src={Yellowstar} alt="" className="mr-1" />
                                        <Image src={Yellowstar} alt="" className="mr-1" />
                                        <Image src={Yellowstar} alt="" className="mr-1" />
                                        <Image src={Yellowstar} alt="" className="mr-1" />
                                        <Image src={Yellowstar} alt="" />
                                    </div>
                                </div>

                                <div className="ml-auto">
                                    <Button className="btnType21 fs15 fw500 greenone">
                                        <Image src={Chatuser} /> CHAT NOW
                                    </Button>
                                </div>
                            </div>
                            <hr />
                            <Col lg={9} md={12} className="pl-0">
                                <div className="col1 fs18 fw600 mt-3">About</div>
                                <div className="fw400 fs15 col28 mt-3">
                                    I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life.{" "}
                                    <strong className="fw500 col40">Read more...</strong>
                                </div>
                                {/* <div className="col1 fs18 fw600 mt-3 pt-2">My Schedule</div>  */}
                            </Col>

                            <div className="col1 fs18 fw600 mt-3 mb-1 pt-2">Reviews (2)</div>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="fs13 fw300 col27">Write your review here. It will be visible once the admin will approve it</Form.Label>
                                    <Form.Control as="textarea" rows="3" className="inputTyp2 cate2" />
                                </Form.Group>
                            </Form>

                            <div>
                                <Button className="btnTyp9 mr-4">Write review</Button>
                                <span className="mr-4 col27 fs18 fw400">Overall rating*</span>
                                <span className="mr-4">
                                    <Image src={Yellowstar} alt="" className="mr-1" />
                                    <Image src={Yellowstar} alt="" className="mr-1" />
                                    <Image src={Yellowstar} alt="" className="mr-1" />
                                    <Image src={Yellowstar} alt="" className="mr-1" />
                                    <Image src={Yellowstar} alt="" />
                                </span>
                                <span className="col82 fs18 fw600">
                                    Good! <Image src={Checkgreen} alt="" />
                                </span>
                            </div>

                            <div className="reviewcomment mt-4 mb-4">  
                                <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                        <Image src={Requestuser} alt="" className="r50" /> 
                                    </div>
                                    <div className="pl-2">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <div className="col1 fw500 fs18 pb-1">John Wade-Hampton</div>
                                                <div className="col23 fs15 fw400"> 
                                                    Listener - Novice
                                                </div>                                          
                                            </div>
                                            <div className="fs14 fw400 col54 pb-1">Thu Apr 30, 2020 1.12 pm</div>
                                        </div>

                                        <div className="col28 fs14 fw400 pt-1">
                                            I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life.{" "}
                                            <span className="col40 fw500 pointer">Read more...</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                        <Image src={Requestusertwo} alt="" className="r50" />
                                    </div>
                                    <div className="pl-2">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <div className="col1 fw500 fs18 pb-1">John Wade-Hampton</div>
                                                <div className="col23 fs15 fw400"> 
                                                    Listener - Novice
                                                </div>                                          
                                            </div>
                                            <div className="fs14 fw400 col54 pb-1">Thu Apr 30, 2020 1.12 pm</div>
                                        </div>

                                        <div className="col28 fs14 fw400 pt-1">
                                            I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life.{" "}
                                            <span className="col40 fw500 pointer">Read more...</span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Reviewcomments;
