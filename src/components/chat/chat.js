import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from '../core/nav';
import Footer from '../core/footer';
import UserChat from "../../assets/images/user_chat.svg";
import UserChat2 from "../../assets/images/user_chat2.svg";
import UserChat3 from "../../assets/images/user_chat3.svg";
import UserChat4 from "../../assets/images/user_chat4.svg";
import UserChat5 from "../../assets/images/user_chat5.svg";
import ChatCross from "../../assets/images/chat_cross.svg";
import Warningnotification from "../../assets/images/notification_warning.svg";
import Fullscreen from "../../assets/images/full_screen.svg";
import Sounds from "../../assets/images/sound.svg";
import Dangers from "../../assets/images/danger.svg";
import Deletes from "../../assets/images/delete.svg";
import Questions from "../../assets/images/question.svg";
import Calls from "../../assets/images/calls.svg";
import Videos from "../../assets/images/videos.svg";
import Errors from "../../assets/images/errors.svg";
import Chatcross2 from "../../assets/images/chat_cross2.svg";
import Chatplus from "../../assets/images/user_plus.svg";

class Chat extends Component {
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="userdashboards pt-4 pb-5">
                    <Container>
                        <Row> 
                            <Col md={3}>
                                <div className="left_sidebar">
                                    <div className="inner_side">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Chat</div>
                                        <div className="d-flex m-3 border-bottom">
                                            <div className="position-relative">
                                                <Image src={UserChat} alt="" className="r50 pt-1" />
                                                <span className="online"></span>
                                            </div>
                                            <div className="position-relative pl-3">
                                                <div className="fs15 col23 fw500 pr-2">Melinda</div>
                                                <div className="col27 fs13 fw500">Apr 30 - Type your name below exactly as you'd me...</div>
                                                <Image src={ChatCross} alt="" className="pointer cross_btn" />
                                            </div>
                                        </div>

                                        <div className="d-flex m-3 border-bottom">
                                            <div className="position-relative">
                                                <Image src={UserChat2} alt="" className="r50 pt-1" />
                                                <span className="online"></span>
                                            </div>
                                            <div className="position-relative pl-3">
                                                <div className="fs15 col23 fw500 pr-2">John</div>
                                                <div className="col27 fs13 fw500">Apr 30 - Type your name below</div>
                                                <Image src={ChatCross} alt="" className="cross_btn pointer" />
                                            </div>
                                        </div>

                                        <div className="d-flex m-3 border-bottom">
                                            <div className="position-relative">
                                                <Image src={UserChat3} alt="" className="r50 pt-1" />
                                                <span className="offline"></span>
                                            </div>
                                            <div className="position-relative pl-3">
                                                <div className="fs15 col23 fw500 pr-2">Melinda</div>
                                                <div className="col27 fs13 fw500">Apr 30 - Type your name below exactly as you'd me...</div>
                                                <Image src={ChatCross} alt="" className="cross_btn pointer" />
                                            </div>
                                        </div>

                                        <div className="d-flex m-3 border-bottom">
                                            <div className="position-relative">
                                                <Image src={UserChat4} alt="" className="r50 pt-1" />
                                                <span className="online"></span>
                                            </div>
                                            <div className="position-relative pl-3">
                                                <div className="fs15 col23 fw500 pr-2">Stiv</div>
                                                <div className="col27 fs13 fw500">Apr 30 - Type your name below</div>
                                                <Image src={ChatCross} alt="" className="cross_btn pointer" />
                                            </div>
                                        </div>

                                        <div className="d-flex m-3 border-bottom">
                                            <div className="position-relative">
                                                <Image src={UserChat5} alt="" className="r50 pt-1" />
                                                <span className="offline"></span>
                                            </div>
                                            <div className="position-relative pl-3">
                                                <div className="fs15 col23 fw500 pr-2">Jinny</div>
                                                <div className="col27 fs13 fw500">Apr 30 - Type your name below exactly as you'd me...</div>
                                                <Image src={ChatCross} alt="" className="cross_btn pointer" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inner_side">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Currently Active Listeners</div>
                                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                                            <Tab eventKey="home" title="Listener">
                                                <div className="chat-border"></div>
                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@Jinni_1254</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">3</div>
                                                </div>

                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat2} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@RedPanda101</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">5</div>
                                                </div>

                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat3} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@Duane Johnson</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">1</div>
                                                </div>

                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat4} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@Mark</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">3</div>
                                                </div>

                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat5} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@Melinda Jems</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">5</div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="profile" title="Chats">
                                                <div className="chat-border"></div>
                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat3} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@Duane Johnson</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">1</div>
                                                </div>
                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat2} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@RedPanda101</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">5</div>
                                                </div>
                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@Jinni_1254</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">3</div>
                                                </div>

                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat4} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@Mark</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">3</div>
                                                </div>

                                                <div className="d-flex m-3 border-bottom">
                                                    <div className="position-relative">
                                                        <Image src={UserChat5} alt="" className="r50 pt-1" />
                                                    </div>
                                                    <div className="position-relative pl-3 mt-auto mb-auto">
                                                        <div className="fs14 col14 fw500">@Melinda Jems</div>
                                                    </div>
                                                    <div className="ml-auto mt-auto mb-auto col48 num-bg">5</div>
                                                </div>
                                            </Tab>
                                        </Tabs>

                                        <div className="fs15 fw600 col23 p-3 pointer show-more">Show More</div>
                                    </div>
                                </div>
                            </Col>

                            <Col md={9}>
                                <div className="chat_dashboard">
                                    <div className="chat_top">
                                        <Row>
                                            <Col xs={3}>
                                                <div className="mt-auto mb-auto">
                                                    <Image src={UserChat3} alt="" className="r50 pointer" />
                                                    <span className="fs17 fw600 col18 pl-3">Melisa</span>
                                                </div>
                                            </Col>
                                            <Col xs={9}>
                                                <div className="mt-auto mb-auto text-right">
                                                    <Image src={Warningnotification} alt="" className="pointer mr-2" />
                                                    <Image src={Fullscreen} alt="" className="pointer mr-2" />
                                                    <Image src={Sounds} alt="" className="pointer mr-2" />
                                                    <Image src={Dangers} alt="" className="pointer mr-2" />
                                                    <Image src={Deletes} alt="" className="pointer mr-2" />
                                                    <Image src={Questions} alt="" className="pointer mr-2" />
                                                    <Image src={Calls} alt="" className="pointer mr-2" />
                                                    <Image src={Videos} alt="" className="pointer mr-2" />
                                                    <Button className="btnTyp6 text-uppercase">end chat</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div></div>
                                    </div>

                                    <div className="chat_middle">
                                        <div className="p-3">
                                            <div className="bg_gray mt-auto mb-auto d-flex align-items-center">
                                                <Image src={Errors} alt="" className="mr-3" />
                                                <span className="fs14 fw300 col1 pr-1">For your own safety, do not share your personal details, contact infoor social media handles.</span>
                                                <Image src={Chatcross2} alt="" className="ml-auto pointer" />
                                            </div>

                                            <div className="bg_gray mt-auto mb-auto d-flex align-items-center">
                                                <span className="cirles">
                                                    <Image src={Chatplus} alt="" className="pointer" />
                                                </span>
                                                <span className="fs14 fw300 col1 ml-3 pr-1">Click here to advice and crisis referral information.</span>
                                                <Image src={Chatcross2} alt="" className="ml-auto pointer" />
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="pl-3 pr-3 pb-3">
                                                <div className="d-flex">
                                                    <div className="mt-auto mb-auto">
                                                        <Image src={UserChat4} alt="" className="r50 mr-3" />
                                                    </div>
                                                    <div className="mt-auto mb-auto">
                                                        <div className="p-2 bg_blue d-inline-block fs15 fw500 col29">Hi</div>
                                                        <div className="fs10 fw300 col47">Thu Apr 30, 2020 1.12 pm</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-3 pr-3 pb-3">
                                                <div className="text-right">
                                                    <div className="p-2 bg_gray d-inline-block fs15 fw500 col29">Hi, how are you?</div>
                                                    <div className="fs10 fw300 col47">Thu Apr 30, 2020 1.12 pm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat_bottom">
                                        <Form>
                                            <Form.Group>
                                                <div className="d-flex">
                                                    <Form.Control type="text" placeholder="Type your message here..." className="inputTyp3" />
                                                    <Button className="btnTyp7">Send</Button>
                                                </div>
                                            </Form.Group>
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
export default Chat;
