import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Backicon from "../../assets/images/backicon.svg";  
import Videouser from "../../assets/images/pro_img2.svg"; 
import Videousertwo from "../../assets/images/videousers.svg"; 
import Soundstwo from "../../assets/images/sounds.svg"; 
import Videomute from "../../assets/images/mute.svg";
import Videothree from "../../assets/images/video.svg";
import Videochat from "../../assets/images/chat.svg";
import Videodisconnect from "../../assets/images/dissconect.svg"; 
import UserChat4 from "../../assets/images/user_chat4.svg";  
import ChatCross from "../../assets/images/cross2s.svg"; 

class Videocall extends Component {      
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="videochat"> 
                    <Container>
                        <div className="userdetail pt-5">      
                            <span><Image src={Backicon} alt="" className="pointer" /></span>    
                            <span><Image src={Videouser} alt="" className="r50 uone" />
                                <span className="online"></span> 
                            </span>
                            
                            <span className="fs20 fw600 col60">William Smith</span>
                        </div> 
                        <div className="w-100 videocontrol">     
                            <div className="text-right mb-5"> 
                                <Image src={Videousertwo} alt="" className="mw-250" />  
                            </div>
                            <div className="videocontrolicon text-center">             
                                <Image src={Soundstwo} className="mr-3 pointer" />
                                <Image src={Videomute} className="mr-3 pointer" />
                                <Image src={Videothree} className="mr-3 pointer" />
                                <Image src={Videochat} className="mr-3 pointer" />
                                <Image src={Videodisconnect} className="pointer" /> 
                            </div>
                        </div>

                    </Container> 

                    <div className="chat_dashboard">
                                    <div className="chat_top">
                                        <Row>
                                            <Col xs={6}> 
                                                <div className="mt-auto mb-auto">
                                                    <span className="fs17 fw600 col18">William Smith</span> 
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="mt-auto mb-auto text-right">
                                                    <Image src={ChatCross} alt="" className="pointer cross_btn" /> 
                                                </div>
                                            </Col>
                                        </Row>
                                        <div></div>
                                    </div>

                                    <div className="chat_middle">
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
                                            <Form.Group className="mb-0"> 
                                                <div className="d-flex">
                                                    <Form.Control type="text" placeholder="Type your message here..." className="inputTyp3" />
                                                    <Button className="btnTyp7">Send</Button>
                                                </div>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                </div>

            </div>
        );
    }
}
export default Videocall; 
