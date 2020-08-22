import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import { connect } from 'react-redux';
import { actionGetProfile } from '../../common/redux/actions';
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Menuicon from "../../assets/images/menu_icon.svg";
import Menuiconblue from "../../assets/images/menu_icon_blue.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";

class Adminlistener extends Component {
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
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"><Image src={Menuicon} alt="" className="mr-1" /> USER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"><Image src={Menuicon} alt="" className="mr-1" /> PROFESSIONAL LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative active">
                                                <div className="fs14 col23 fw500"><Image src={Menuiconblue} alt="" className="mr-1" /> LISTENER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"><Image src={Menuicon} alt="" className="mr-1" /> LISTENER Q&A</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={9} className="pl-1">
                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={Requestuser} alt="" className="r50" />
                                        </div>
                                        <div className="pl-2 w-100">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="col1 fw500 fs18 pb-1">Veronica Wade-Hampton</div>
                                                    <div className="col40 fs15 fw400 pb-1">Category: Depression, Work Stress,  Bullying</div>
                                                    <div className="fs14 fw400 col54 pb-1">veronica_wh@gmail.com</div>
                                                </div>
                                                <div className="mt-auto mb-auto d-flex">
                                                    <span className="pr-3 fs14 col47 fw400">Active</span>
                                                    <span className="pr-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label=""
                                                            checked
                                                        />
                                                    </span>
                                                    <span><Image src={Deleteicon} alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={Requestusertwo} alt="" className="r50" />
                                        </div>
                                        <div className="pl-2 w-100">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="col1 fw500 fs18 pb-1">Hope Hadding</div>
                                                    <div className="col40 fs15 fw400 pb-1">Category: Depression, Work Stress,  Bullying</div>
                                                    <div className="fs14 fw400 col54 pb-1">veronica_wh@gmail.com</div>
                                                </div>
                                                <div className="mt-auto mb-auto d-flex">
                                                    <span className="pr-3 fs14 col47 fw400">Active</span>
                                                    <span className="pr-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch2"
                                                            label=""
                                                            checked
                                                        />
                                                    </span>
                                                    <span><Image src={Deleteicon} alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={Requestuserthree} alt="" className="r50" />
                                        </div>
                                        <div className="pl-2 w-100">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="col1 fw500 fs18 pb-1">Evelyn Coker</div>
                                                    <div className="col40 fs15 fw400 pb-1">Category: Depression, Work Stress,  Bullying</div>
                                                    <div className="fs14 fw400 col54 pb-1">veronica_wh@gmail.com</div>
                                                </div>
                                                <div className="mt-auto mb-auto d-flex">
                                                    <span className="pr-3 fs14 col47 fw400">Inactive</span>
                                                    <span className="pr-3 disabled">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch3"
                                                            label=""
                                                        />
                                                    </span>
                                                    <span><Image src={Deleteicon} alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={Requestuser} alt="" className="r50" />
                                        </div>
                                        <div className="pl-2 w-100">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="col1 fw500 fs18 pb-1">Veronica Wade-Hampton</div>
                                                    <div className="col40 fs15 fw400 pb-1">Category: Depression, Work Stress,  Bullying</div>
                                                    <div className="fs14 fw400 col54 pb-1">veronica_wh@gmail.com</div>
                                                </div>
                                                <div className="mt-auto mb-auto d-flex">
                                                    <span className="pr-3 fs14 col47 fw400">Active</span>
                                                    <span className="pr-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch4"
                                                            label=""
                                                            checked
                                                        />
                                                    </span>
                                                    <span><Image src={Deleteicon} alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="adminlistener p-4 mb-3">
                                    <div className="d-flex text-left">
                                        <div className="mr-2 pt-1">
                                            <Image src={Requestuser} alt="" className="r50" />
                                        </div>
                                        <div className="pl-2 w-100">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="col1 fw500 fs18 pb-1">Veronica Wade-Hampton</div>
                                                    <div className="col40 fs15 fw400 pb-1">Category: Depression, Work Stress,  Bullying</div>
                                                    <div className="fs14 fw400 col54 pb-1">veronica_wh@gmail.com</div>
                                                </div>
                                                <div className="mt-auto mb-auto d-flex">
                                                    <span className="pr-3 fs14 col47 fw400">Inactive</span>
                                                    <span className="pr-3 disabled">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch5"
                                                            label=""
                                                        />
                                                    </span>
                                                    <span><Image src={Deleteicon} alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
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
export default Adminlistener;
