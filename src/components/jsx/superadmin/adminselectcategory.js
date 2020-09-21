import React, { Component } from "react";
import { connect } from "react-redux";
import {
    actionGetListnerListing,
    actionGetUserListing,
    actionGetProfessionalListing
} from "../../../common/redux/actions";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Modal } from "react-bootstrap";

import NavBar from "../../core/nav"; 
import Footer from "../../core/footer";
import Requestdetails from "../../../assets/images/register2.svg";
import Deleteicon from "../../../assets/images/delete_icon.svg";
import Crossbtn from '../../../assets/images/blue_cross.svg';

class Adminselectcategory extends Component {
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <Row>
                            <Col md={3} className="pr-1">
                                <div className="adminsidebar">
                                    <div className="inner_area">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Links</div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="">
                                                <div className="fs14 col28 fw500"> USER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom" onCl>
                                            <div className="">
                                                <div className="fs14 col28 fw500"> PROFESSIONAL LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="">
                                                <div className="fs14 col23 fw500"> LISTENER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> LISTENER Q&A</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> CATEGORY</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={9} className="pl-1">
                                <div className="adminlistener categorys addQa p-3 mb-3">
                                    <div className="col10 fw600 fs28 mb-4 pb-2">Question Answer</div>
                                    <Row className="mb-5"> 
                                        <Col lg={10} md={9}>
                                            <div className="col29 fs18 fw400"><strong>Question 1.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit?</div>
                                            <div className="col23 fs18 fw500 mt-3">Answer:</div>

                                            <div className="col28 fs15 fw400 mt-3"><strong>1.</strong> iste natus error sit voluptatem accusantium.</div>
                                            <div className="col28 fs15 fw400 mt-3"><strong>2.</strong> Excepteur sint occaecat cupidatat non proident.</div>
                                            <div className="col28 fs15 fw400 mt-3"><strong>3.</strong> Duis aute irure dolor in reprehenderit</div> 
                                        </Col>
                                        <Col lg={2} md={3}>
                                                <div className="text-right">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                        </Col>
                                    </Row>

                                    <Row className="mb-5"> 
                                        <Col lg={10} md={9}>
                                            <div className="col29 fs18 fw400"><strong>Question 2.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit?</div>
                                            <div className="col23 fs18 fw500 mt-3">Answer:</div>

                                            <div className="col28 fs15 fw400 mt-3"><strong>1.</strong> iste natus error sit voluptatem accusantium.</div>
                                            <div className="col28 fs15 fw400 mt-3"><strong>2.</strong> Excepteur sint occaecat cupidatat non proident.</div>
                                            <div className="col28 fs15 fw400 mt-3"><strong>3.</strong> Duis aute irure dolor in reprehenderit</div> 
                                        </Col>
                                        <Col lg={2} md={3}>
                                                <div className="text-right">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                        </Col>
                                    </Row>

                                    <Row className="mb-5"> 
                                        <Col lg={10} md={9}>
                                            <div className="col29 fs18 fw400"><strong>Question 3.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit?</div>
                                            <div className="col23 fs18 fw500 mt-3">Answer:</div>

                                            <div className="col28 fs15 fw400 mt-3"><strong>1.</strong> iste natus error sit voluptatem accusantium.</div>
                                            <div className="col28 fs15 fw400 mt-3"><strong>2.</strong> Excepteur sint occaecat cupidatat non proident.</div>
                                            <div className="col28 fs15 fw400 mt-3"><strong>3.</strong> Duis aute irure dolor in reprehenderit</div> 
                                        </Col>
                                        <Col lg={2} md={3}>
                                                <div className="text-right">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                        </Col>
                                    </Row> 

                                    <div className="text-left mb-4"> 
                                        <Button className="btnTyp5 mr-3 pointer">BACK</Button>
                                        <Button className="btnTyp5 pointer">SAVE</Button>
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

export default Adminselectcategory;
