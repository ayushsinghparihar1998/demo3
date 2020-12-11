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
import Ritikaimg from "../../assets/images/Ritika.png"; 

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
                            <div className="myprofile profiledetails">  
                                <div className="detailone"> 
                                    <Row>
                                        <Col md={4}>
                                            <div className="leftprofile">
                                                <Image src={Ritikaimg} alt="" /> 
                                            </div>
                                        </Col>
                                        <Col md={8}>
                                            <div className="rightprofile"> 
                                                <div className="fs24 col3 fw600">Ritika Aggarwal</div> 
                                                <div className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                            </div>
                                        </Col>
                                    </Row>
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

