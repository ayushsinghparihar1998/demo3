import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Profileban from "../../assets/images/profile_ban.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/india_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import { connect } from 'react-redux';
import { actionGetProfile } from '../../common/redux/actions';
import * as moment from 'moment';
import { getLocalStorage } from "../../common/helpers/Utils";
import CONSTANTS from "../../common/helpers/Constants";
import NavBarAdmin from "../core/navAdmin";

class Myprofile extends Component { 
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <Row>
                            <div className="myprofile profileban2">
                                <Image src={Profileban} alt="" className="w-100" />
                                <div className="text-center profile_top">
                                    <Image src={Profileimg} alt="" className="r50 border_profile" />
                                    <Image src={Usaflag} alt="" width="50px" className="r50 flags" />
                                    <Button className="btnTyp9 fs15 fw500 btn_set">edit profile</Button>
                                </div>
                                <div className="user_tab mt-5">
                                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="home" title="Home">
                                            <div className="text-center mt-5">
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="layout">
                                                            <div className="d-flex m-auto border2">
                                                                <div className="fs16 col23 fw400 text-left w60">Email:</div>
                                                                <div className="fs16 col14 fw400 text-left w40">info@gmail.com</div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="layout">
                                                            <div className="d-flex m-auto border2">
                                                                <div className="fs16 col23 fw400 text-left w60">Mobile Number:</div>
                                                                <div className="fs16 col14 fw400 text-left w40">1800-500-300</div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="layout">
                                                            <div className="d-flex m-auto border2">
                                                                <div className="fs16 col23 fw400 text-left w60">Country:</div>
                                                                <div className="fs16 col14 fw400 text-left w40">India</div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="layout">
                                                            <div className="d-flex m-auto border2">
                                                                <div className="fs16 col23 fw400 text-left w60">Date of Birth:</div>
                                                                <div className="fs16 col14 fw400 text-left w40">16/09/2020</div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="layout">
                                                            <div className="d-flex m-auto border2">
                                                                <div className="fs16 col23 fw400 text-left w60">BIO:</div>
                                                                <div className="fs16 col14 fw400 text-left w40">28</div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="layout">
                                                            <div className="d-flex m-auto border2">
                                                                <div className="fs16 col23 fw400 text-left w60">Last Active:</div>
                                                                <div className="fs16 col14 fw400 text-left w40">16/09/2020</div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="layout">
                                                            <div className="d-flex m-auto border2">
                                                                <div className="fs16 col23 fw400 text-left w60">Gender:</div>
                                                                <div className="fs16 col14 fw400 text-left w40">Male</div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="layout">
                                                            <div className="d-flex m-auto border2">
                                                                <div className="fs16 col23 fw400 text-left w60">Chats:</div>
                                                                <div className="fs16 col14 fw400 text-left w40">30</div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab>

                                        <Tab eventKey="videos" title="videos">
                                            videos 23
                                        </Tab>
                                        <Tab eventKey="badgesawards" title="Badges & Awards">
                                            Badges & Awards
                                        </Tab>
                                        <Tab eventKey="Categories" title="Categories">
                                            Categoriesasd
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Myprofile; 

