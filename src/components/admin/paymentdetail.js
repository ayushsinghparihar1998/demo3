import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Table } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";

import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Checkgreen from "../../assets/images/checkgreen.svg";
import Yellowstar from "../../assets/images/stars.png";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";

class Paymentdetail extends Component {
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
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Links</div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500 text-uppercase"> USER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500 text-uppercase"> PROFESSIONAL LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col23 fw500 text-uppercase"> LISTENER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500 text-uppercase"> LISTENER Q&A</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500 text-uppercase"> CATEGORY</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative active">
                                                <div className="fs14 col28 fw500 text-uppercase"> Review Request</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col md={8} lg={9} className="pl-1"> 
                                <div className="table_paymentlayout">  
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Amount</th>
                                                <th>Status</th> 
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>John Wade</td>
                                                <td>50/-</td>
                                                <td><Button className="btnTyp9 reject color1">Transfered</Button></td>
                                            </tr>
                                            <tr>
                                                <td>Rechard D’souza</td>
                                                <td>1000/-</td>
                                                <td><Button className="btnTyp9 reject color2">Inprocess</Button></td>
                                            </tr>
                                            <tr>
                                                <td>Florence Smith</td>
                                                <td>2000/-</td>
                                                <td><Button className="btnTyp9 reject color3">Pending</Button></td>
                                            </tr>
                                            <tr>
                                                <td>Daniel Taylor</td>
                                                <td>10000/-</td>
                                                <td><Button className="btnTyp9 reject color4">Failed</Button></td>
                                            </tr>
                                            <tr>
                                                <td>Stephen Thomas</td>
                                                <td>20000/-</td>
                                                <td><Button className="btnTyp9 reject color1">Transfered</Button></td>
                                            </tr>
                                            <tr>
                                                <td>Harriet Evans</td>
                                                <td>30000/-</td>
                                                <td><Button className="btnTyp9 reject color2">Inprocess</Button></td> 
                                            </tr>
                                            <tr>
                                                <td>Michael Davies</td> 
                                                <td>40000/-</td> 
                                                <td><Button className="btnTyp9 reject color1">Transfered</Button></td> 
                                            </tr> 

                                        </tbody>
                                    </Table>
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
export default Paymentdetail; 
