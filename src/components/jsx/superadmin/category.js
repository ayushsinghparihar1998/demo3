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

class Admincategory extends Component {
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
                                <div className="adminlistener categorys p-3 mb-3">
                                    <Col md={12}>
                                        <Form.Group>
                                            <div className="d-flex">
                                                <div className="w-100">
                                                    <Form.Label className="fs20 fw600 col14">
                                                        Add Category
                                                </Form.Label> 
                                                    <Form.Control
                                                        type="category"
                                                        placeholder=""
                                                        className="inputTyp2 categoryInput"
                                                        id="outlined-pwd"
                                                        label="category"
                                                        variant="outlined"
                                                        name="category"
                                                    />
                                                </div>
                                                <div className="mt-4 pt-2">
                                                    <Button className="btnTyp11 cbttyp2 ml-3 pointer">Add</Button>
                                                </div>
                                            </div>
                                        </Form.Group>

                                        <ul className="category_listing">
                                            <li>
                                                <div className="col23 fs16 fw400">Breakups</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Alcohol/Drug Use</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Family Stress</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Financial Stress</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Weight Management</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Alcohol/Drug Use</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Alcohol/Drug Use</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Alcohol/Drug Use</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Alcohol/Drug Use</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Alcohol/Drug Use</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Alcohol/Drug Use</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col23 fs16 fw400">Alcohol/Drug Use</div>
                                                <div className="c_img">
                                                    <Image src={Requestdetails} alt="" className="mr-2" />
                                                    <Image src={Deleteicon} alt="" />
                                                </div>
                                            </li>
                                        </ul>

                                    </Col>
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

export default Admincategory;
